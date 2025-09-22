import React, { useState } from "react";
import Header from "../components/common/Header.jsx";
import Navbar from "../components/common/Navbar.jsx";
import { useEffect } from "react";

// let data = [
//   {
//     putOI: "100000",
//     callOI: "200000",
//     pcr: "0.5",
//     time: "2025-09-21T16:02:07.954Z",
//   },
//   {
//     putOI: "100060",
//     callOI: "200300",
//     pcr: "0.6",
//     time: "2025-09-21T16:05:07.954Z",
//   },
//   {
//     putOI: "100060",
//     callOI: "200300",
//     pcr: "0.6",
//     time: "2025-09-21T16:05:07.954Z",
//   },
//   {
//     putOI: "100030",
//     callOI: "200400",
//     pcr: "0.5",
//     time: "2025-09-21T16:05:07.954Z",
//   },
// ];

const Home = () => {
  const [symbol, setSymbol] = useState("nifty");
  const [optionData, setOptionData] = useState(null);
  const [underlying, setUnderlying] = useState(null);
  const [options, setOptions] = useState(null);
  const [atm, setAtm] = useState(null);
  const [pcr, setPcr] = useState(0.0);
  const [putOI, setPutOI] = useState(0);
  const [callOI, setCallOI] = useState(0);
  const [storedPcrData, setStoredPcrData] = useState(null);
  const [date, setDate] = useState(null);

  const fetchOptionData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/option-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symbol: symbol }), // send selected symbol
      });
      const data = await res.json();
      setOptionData(data); // store full option chain
      setUnderlying(data.underlying); // store underlying value
      setOptions(data.options);
      return data;
    } catch (error) {
      console.error("Error fetching option data:", error);
    }
  };

  const fetchOptionStore = async (payload) => {
    try {
      const res = await fetch("http://localhost:3000/api/option-store", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP Error! status: ${res.status}`);
      }

      const response = await res.json();
      console.log(response?.message);
    } catch (err) {
      console.error("Error updating option:", err.message);
    }
  };

  const fetchStoredPcr = async (payload) => {
    try {
      const res = await fetch("http://localhost:3000/api/store/pcr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP Error! status: ${res.status}`);
      }

      const response = await res.json();
      setStoredPcrData(response?.pcrData);
    } catch (err) {
      console.error("Error fetching option data:", err);
    }
  };

  // get current date

  const getDate = () => {
    const now = new Date();
    const startOfDay = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        0,
        0,
        0
      )
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

    const date = { startOfDay, endOfDay };
    setDate(date);
  };

  // get atm
  const getAtm = (options, underlying) => {
    if (!options || !options.length) {
      return;
    }

    const atm = options.reduce((prev, curr) => {
      return Math.abs(curr.strikePrice - underlying) <
        Math.abs(prev.strikePrice - underlying)
        ? curr
        : prev;
    });

    setAtm(atm.strikePrice);
  };

  // get OI and Pcr
  const getOiAndPcr = (options) => {
    if (!options || !options.length) {
      return;
    }

    const putOI = options.reduce((sum, oi) => sum + oi.putOI, 0);
    const callOI = options.reduce((sum, oi) => sum + oi.callOI, 0);

    setPutOI(putOI);
    setCallOI(callOI);

    let pcr = 0;
    if (callOI !== 0) {
      pcr = (putOI / callOI).toFixed(2);
    }
    setPcr(pcr);
    console.log("2", putOI, callOI, pcr);
  };

  const formatTime = (timeStr) => {
    const date = new Date(timeStr);
    return date.toLocaleTimeString("en-GB", { hour12: false }); // 24-hour format
  };

  // compare current vs previous and set color
  const getClass = (curr, prev) => {
    if (curr > prev) return "text-green-500 font-bold";
    if (curr < prev) return "text-red-500 font-bold";
    return "text-gray-800 dark:text-neutral-200";
  };

  useEffect(() => {
    const runAll = async () => {
      const data = await fetchOptionData();
      if (!data?.options || !data?.underlying) return;

      // compute directly
      const atm = getAtm(data.options, data.underlying);
      const { putOI, callOI, pcr } = getOiAndPcr(data.options);

      if (putOI && callOI && pcr && date && symbol) {
        await fetchOptionStore({
          symbol,
          options: data.options,
          totalPutOI: putOI,
          totalCallOI: callOI,
          pcr,
          date,
        });
      }

      if (symbol && date) {
        await fetchStoredPcr({ symbol, date: currentDate });
      }
    };

    getDate();
    runAll(); // run once
    const interval = setInterval(runAll, 600000);

    return () => clearInterval(interval);
  }, [symbol, date]);

  const handleRefresh = async () => {
    getDate();
    const data = await fetchOptionData();
    if (data?.options && data?.underlying) {
      getAtm(data.options, data.underlying);
      getOiAndPcr(data?.options);
    }

    if (data?.options && data?.underlying && putOI && callOI && pcr && date) {
      await fetchOptionStore({
        symbol: "nifty",
        options: data.options,
        totalPutOI: putOI,
        totalCallOI: callOI,
        pcr,
        date,
      });
    }

    if (symbol && date) {
      await fetchStoredPcr({ symbol: symbol, date: date });
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row h-full">
        {/* Main section */}
        <div className="w-full lg:w-3/4 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-300">
          {/* Top content */}

          <div className="flex-1 p-4 overflow-x-auto">
            <table className="w-full table-fixed text-sm text-left border border-gray-200 dark:border-neutral-700 rounded-lg">
              <thead className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 text-xs uppercase">
                <tr>
                  <th className="px-3 py-2">Call OI</th>
                  <th className="px-3 py-2">CE Chg OI</th>
                  <th className="px-3 py-2">Call LTP</th>
                  <th className="px-3 py-2">Call Vol</th>
                  <th className="px-3 py-2">Strike</th>
                  <th className="px-3 py-2">Put Vol</th>
                  <th className="px-3 py-2">Put LTP</th>
                  <th className="px-3 py-2">PE Chg OI</th>
                  <th className="px-3 py-2">Put OI</th>
                </tr>
              </thead>
            </table>

            {/* Scrollable body */}
            <div className="max-h-[calc(100vh-66px)] overflow-y-auto">
              <table className="w-full table-fixed text-sm text-left border border-gray-200 dark:border-neutral-700">
                <tbody>
                  {options && options.length > 0 ? (
                    options.map((opt, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-gray-200 dark:border-neutral-700 transition-colors ${
                          atm === opt.strikePrice
                            ? "bg-blue-200 dark:bg-blue-900"
                            : idx % 2 === 0
                            ? "bg-white dark:bg-neutral-900"
                            : "bg-gray-50 dark:bg-neutral-800"
                        }`}
                      >
                        <td className="px-3 py-2 text-gray-800 dark:text-neutral-200">
                          {opt.callOI}
                        </td>
                        <td className="px-3 py-2 text-gray-800 dark:text-neutral-200">
                          {opt.callChangeOI}
                        </td>
                        <td className="px-3 py-2 text-gray-800 dark:text-neutral-200">
                          {opt.callLTP}
                        </td>
                        <td className="px-3 py-2 text-gray-800 dark:text-neutral-200">
                          {opt.callVolume}
                        </td>
                        <td className="px-3 py-2 font-semibold text-gray-900 dark:text-neutral-100">
                          {opt.strikePrice}
                        </td>
                        <td className="px-3 py-2 text-gray-800 dark:text-neutral-200">
                          {opt.putVolume}
                        </td>
                        <td className="px-3 py-2 text-gray-800 dark:text-neutral-200">
                          {opt.putLTP}
                        </td>
                        <td className="px-3 py-2 text-gray-800 dark:text-neutral-200">
                          {opt.putChangeOI}
                        </td>
                        <td className="px-3 py-2 text-gray-800 dark:text-neutral-200">
                          {opt.putOI}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="9"
                        className="text-center py-4 text-gray-500 dark:text-neutral-400"
                      >
                        Loading option chain...
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right section (placeholder for extra widgets / sidebar content) */}

        <div className="w-full lg:w-2/6 lg:h-full p-4">
          <table className="w-full table-fixed text-sm text-left border border-gray-200 dark:border-neutral-700 rounded-lg">
            <thead className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 text-xs uppercase">
              <tr>
                <th className="px-3 py-2">Time</th>
                <th className="px-3 py-2">Put OI</th>
                <th className="px-3 py-2">Call OI</th>
                <th className="px-3 py-2">PCR</th>
              </tr>
            </thead>
          </table>

          {/* Scrollable tbody */}
          <div className="max-h-[calc(100vh-66px)] overflow-y-auto">
            <table className="w-full table-fixed text-sm text-left border border-gray-200 dark:border-neutral-700">
              <tbody>
                {storedPcrData && storedPcrData.length > 0 ? (
                  storedPcrData.map((row, idx) => {
                    const prev = storedPcrData[idx - 1] || {};
                    return (
                      <tr
                        key={idx}
                        className={`border-b border-gray-200 dark:border-neutral-700 transition-colors ${
                          idx % 2 === 0
                            ? "bg-white dark:bg-neutral-900"
                            : "bg-gray-50 dark:bg-neutral-800"
                        }`}
                      >
                        <td className="px-3 py-2 text-gray-800 dark:text-neutral-200 text-xs font-semibold">
                          {formatTime(row.created_at)} :
                        </td>
                        <td
                          className={`px-3 py-2 ${
                            idx > 0
                              ? getClass(
                                  Number(row.totalPutOI),
                                  Number(prev.totalPutOI)
                                )
                              : "text-gray-800 dark:text-neutral-200"
                          }`}
                        >
                          {row.totalPutOI}
                        </td>
                        <td
                          className={`px-3 py-2 ${
                            idx > 0
                              ? getClass(
                                  Number(row.totalCallOI),
                                  Number(prev.totalCallOI)
                                )
                              : "text-gray-800 dark:text-neutral-200"
                          }`}
                        >
                          {row.totalCallOI}
                        </td>
                        <td
                          className={`px-3 py-2 ${
                            idx > 0
                              ? getClass(Number(row.pcr), Number(prev.pcr))
                              : "text-gray-800 dark:text-neutral-200"
                          }`}
                        >
                          {row.pcr}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center py-4 text-gray-500 dark:text-neutral-400"
                    >
                      No data available...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          className="px-4 py-2 bg-blue-600 text-white font-semibold text-md rounded-full shadow-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-600 transition"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Home;
