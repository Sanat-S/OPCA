const express = require("express");
const {
  getOptionData,
  storeOptionData,
  getStoredPcrData,
} = require("../controller/serviceController");

const router = express.Router();

router.post("/option-data", getOptionData);
router.put("/option-store", storeOptionData);
router.post("/store/pcr", getStoredPcrData);

module.exports = router;
