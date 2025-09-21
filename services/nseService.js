const axios = require("axios");

class NSEService {
  constructor() {
    this.cookieString = "";
    this.headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      Referer: "https://www.nseindia.com/option-chain",
      Origin: "https://www.nseindia.com",
      Connection: "keep-alive",
    };
  }

  async refreshCookies() {
    try {
      const response = await axios.get("https://www.nseindia.com/option-chain", {
        headers: this.headers,
      });

      const setCookies = response.headers["set-cookie"];
      if (setCookies) {
        // Convert cookie array -> single string
        this.cookieString = setCookies.map(c => c.split(";")[0]).join("; ");
      }

      return true;
    } catch (error) {
      console.error("Cookie refresh failed:", error.message);
      return false;
    }
  }

  async getOptionChain(symbol) {
    // Refresh cookies first
    await this.refreshCookies();

    try {
      const response = await axios.get(
        `https://www.nseindia.com/api/option-chain-indices?symbol=${symbol}`,
        {
          headers: {
            ...this.headers,
            Cookie: this.cookieString,
          },
          timeout: 10000,
        }
      );

      return response.data;
    } catch (error) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        console.log("Retrying with fresh cookies...");
        await this.refreshCookies();

        const retryResponse = await axios.get(
          `https://www.nseindia.com/api/option-chain-indices?symbol=${symbol}`,
          {
            headers: {
              ...this.headers,
              Cookie: this.cookieString,
            },
          }
        );
        return retryResponse.data;
      }
      console.error("Option chain fetch failed:", error.message);
      throw error;
    }
  }
}

module.exports = NSEService;
