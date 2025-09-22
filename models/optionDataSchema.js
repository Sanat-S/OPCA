const mongoose = require("mongoose");

const optionDataSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: [true, "Please give the symbol"],
    },
    data: [
      {
        options: {
          type: Object,
          required: true,
        },
        totalPutOI: { type: Number, required: true },
        totalCallOI: { type: Number, required: true },
        pcr: { type: Number, required: true },
        created_at: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

// Optional: create indexes for faster queries
optionDataSchema.index({ symbol: 1, created_at: -1 });

module.exports = mongoose.model("OptionData", optionDataSchema);
