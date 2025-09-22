const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const NSEService = require("../services/nseService");
const { filterData, filterStoredPcrData } = require("../utils/filterData");
const OptionData = require("../models/optionDataSchema");

const nseService = new NSEService();

exports.getOptionData = catchAsyncErrors(async (req, res, next) => {
  const { symbol } = req.body;

  if (!symbol) {
    return next(new ErrorHandler("Please select the option index!", 400));
  }

  const data = await nseService.getOptionChain(symbol.toUpperCase());
  const filterMerketData = filterData(data);

  res.json(filterMerketData);
});

exports.storeOptionData = catchAsyncErrors(async (req, res, next) => {
  const { symbol, options, totalPutOI, totalCallOI, pcr, date } = req.body;

  if (!symbol || !options || !totalPutOI || !totalCallOI || !pcr || !date) {
    return next(new ErrorHandler("Please put every details", 400));
  }

  const upperSymbol = symbol.toUpperCase();

  const todayOptionData = await OptionData.findOne({
    createdAt: { $gte: date.startOfDay, $lte: date.endOfDay },
    symbol: upperSymbol,
  });

  if (!todayOptionData) {
    console.log("created new dt");
    const optionData = await OptionData.create({
      symbol: upperSymbol,
      data: [
        {
          options,
          totalPutOI,
          totalCallOI,
          pcr,
        },
      ],
    });

    return res.status(201).json({ success: true, message: "New data created" });
  }

  todayOptionData.data.push({
    options,
    totalPutOI,
    totalCallOI,
    pcr,
  });

  await todayOptionData.save();

  return res.status(200).json({ success: true, message: "Data stored" });
});

exports.getStoredPcrData = catchAsyncErrors(async (req, res, next) => {
  const { symbol, date } = req.body;

  if (!symbol) {
    return next(
      new ErrorHandler("symbol is missing! please enter the symbol index", 400)
    );
  }

  if (!date) {
    return next(
      new ErrorHandler("date is missing! please enter the date", 400)
    );
  }

  const upperSymbol = symbol.toUpperCase();

  const data = await OptionData.findOne({
    createdAt: { $gte: date.startOfDay, $lte: date.endOfDay },
    symbol: upperSymbol,
  });

  const storedPcrData = filterStoredPcrData(data);

  res.json(storedPcrData);
});
