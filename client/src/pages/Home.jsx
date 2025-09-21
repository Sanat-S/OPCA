import React, { useState } from "react";
import Header from "../components/common/Header.jsx";
import Navbar from "../components/common/Navbar.jsx";
import { useEffect } from "react";

const Home = () => {
  const [symbol, setSymbol] = useState("NIFTY");
  const [optionData, setOptionData] = useState(null);
  const [underlying, setUnderlying] = useState(null);
  const [options, setOptions] = useState(null);
  const [atm, setAtm] = useState(null);
  const [pcr, setPcr] = useState(0.0);
  const [changeOiPcr, setChangeOiPcr] = useState(0.0);

  const renge = 90

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

  useEffect(() => {
    const runAll = async () => {
      const data = await fetchOptionData();
      if (data?.options && data?.underlying) {
        getAtm(data.options, data.underlying);
      }
    };

    runAll(); // run once
    const interval = setInterval(runAll, 30000);

    return () => clearInterval(interval);
  }, [symbol]);

  const handleRengeChange = (e) => {
    const value = Number(e.target.value); // ensure it's a number
    setRenge(value);
  };

  const handleCalculatePcr = () => {
    const runAll = async () => {
      await fetchOptionData();
      if (options && underlying) {
        getAtm(options, underlying);
      }
    };

    runAll(); // run once

    if (!options || !options.length) {
      return;
    }

    // Find the ATM strike
    const atm = options.reduce((prev, curr) => {
      return Math.abs(curr.strikePrice - underlying) <
        Math.abs(prev.strikePrice - underlying)
        ? curr
        : prev;
    });

    // Find index of ATM
    const index = options.indexOf(atm);

    // Slice strikes using renge
    const strickPrice = options.slice(
      Math.max(0, index - (renge - 1)),
      index + renge
    );

    // Calculate OI
    const putOi = strickPrice.reduce((sum, obj) => sum + obj.putOI, 0);
    const callOi = strickPrice.reduce((sum, obj) => sum + obj.callOI, 0);

    const putChangeOI = strickPrice.reduce(
      (sum, obj) => sum + obj.putChangeOI,
      0
    );
    const callChangeOI = strickPrice.reduce(
      (sum, obj) => sum + obj.callChangeOI,
      0
    );

    // Avoid divide-by-zero
    let pcr = 0;
    if (callOi !== 0) {
      pcr = (putOi / callOi).toFixed(5);
    } else {
      pcr = "N/A";
    }

    let changeOiPcr = 0;
    if (callChangeOI !== 0) {
      changeOiPcr = (putChangeOI / callChangeOI).toFixed(5);
    } else {
      changeOiPcr = "N/A";
    }

    setPcr(pcr);
    setChangeOiPcr(changeOiPcr);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Main section */}
        <div className="w-full lg:w-3/4 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-300">
          {/* Top content */}
          <div className="flex-1 p-4 overflow-y-auto">
            {/* You can put charts, tables, or other content here */}
            <h1 className="text-xl font-bold mb-4">Dashboard</h1>
            <p className="text-gray-700">Main market content will go here...</p>
          </div>

          {/* Bottom control panel */}
          <div className="h-auto lg:h-1/5 p-4 bg-gray-100 border-t border-gray-300 flex flex-col justify-center">
            <div className="w-full flex flex-wrap justify-evenly items-center gap-4">

              {/* ATM */}
              <div className="flex items-center gap-2">
                <input
                  id="currAtm"
                  disabled
                  value={atm}
                  className="w-24 h-8 text-lg font-semibold border border-gray-400 rounded-md px-2 bg-gray-200"
                />
              </div>

              {/* Button */}
              <button
                onClick={handleCalculatePcr}
                className="px-3 h-8 text-sm font-semibold border border-gray-400 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
              >
                Calculate PCR
              </button>

              {/* PCR result */}
              <div className="flex items-center gap-2">
                <label
                  htmlFor="result"
                  className="text-sm font-semibold whitespace-nowrap"
                >
                  OI PCR:
                </label>
                <input
                  id="result"
                  disabled
                  value={pcr}
                  className="w-24 h-8 text-lg font-semibold border border-gray-400 rounded-md px-2 bg-gray-200"
                />
              </div>

              {/* Change Oi Pcr */}
              <div className="flex items-center gap-2">
                <label
                  htmlFor="result"
                  className="text-sm font-semibold whitespace-nowrap"
                >
                  Change OI PCR:
                </label>
                <input
                  id="result"
                  disabled
                  value={changeOiPcr}
                  className="w-24 h-8 text-lg font-semibold border border-gray-400 rounded-md px-2 bg-gray-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right section (placeholder for extra widgets / sidebar content) */}
        <div className="w-full lg:w-1/4 lg:h-screen p-4">
          <h2 className="text-lg font-semibold mb-2">Extra Panel</h2>
          <p className="text-gray-600">
            You can use this section for ads, market summary, or quick stats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
