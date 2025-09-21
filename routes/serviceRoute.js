const express = require("express");
const { getOptionData, storeOptionData } = require("../controller/serviceController");

const router = express.Router();

router.post("/option-data", getOptionData);
router.put("/option-store", storeOptionData);

module.exports = router;
