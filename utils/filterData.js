function filterData(data) {
  const records = data.records?.data || [];
  const currentExpiry = data.records?.expiryDates?.[0];

  return {
    underlying: data.records?.underlyingValue,
    expiry: currentExpiry,
    options: records
      .filter((item) => item.expiryDate === currentExpiry)
      .map((item) => ({
        strikePrice: item.strikePrice,
        callOI: item.CE?.openInterest || 0,
        putOI: item.PE?.openInterest || 0,
        putChangeOI: item.PE?.changeinOpenInterest || 0,
        callChangeOI: item.CE?.changeinOpenInterest || 0,
        callLTP: item.CE?.lastPrice || 0,
        putLTP: item.PE?.lastPrice || 0,
        callVolume: item.CE?.totalTradedVolume || 0,
        putVolume: item.PE?.totalTradedVolume || 0,
      })),
  };
}

function filterStoredPcrData(storedData) {
  const data = storedData?.data;

  return {
    symbol: storedData?.symbol,
    pcrData: data.map((item) => ({
      totalPutOI: item.totalPutOI,
      totalCallOI: item.totalCallOI,
      pcr: item.pcr,
      created_at: item.created_at,
    })),
  };
}

module.exports = {filterData, filterStoredPcrData};
