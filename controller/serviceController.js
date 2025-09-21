const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const NSEService = require("../services/nseService");
const filterData = require("../utils/filterData");
const OptionData = require("../models/optionDataSchema");

const nseService = new NSEService();

exports.getOptionData = catchAsyncErrors(async (req, res, next) => {
  console.log("Api Called!");
  const { symbol } = req.body;

  if (!symbol) {
    return next(new ErrorHandler("Please select the option index!", 400));
  }

  const data = await nseService.getOptionChain(symbol.toUpperCase());
  const filterMerketData = filterData(data);

  res.json(filterMerketData);
});

exports.storeOptionData = catchAsyncErrors(async (req, res, next) => {
  const now = new Date();
  const startOfDay = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0)
  );
  const endOfDay = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      23,
      59,
      59,
      999
    )
  );
  const todayOptionData = await OptionData.find({
    createdAt: { $gte: startOfDay, $lte: endOfDay },
  });

  const {symbol, option, totalPutOI, totalCallOI, pcr} = req.body;
  
  if(!symbol || !option || !totalPutOI || !totalCallOI || !pcr) {
    return next(new ErrorHandler("Please put every details", 400))
  }

  
  if (todayOptionData.length == 0) {
    console.log("Date search is working! --found", todayOptionData);
  }
});
