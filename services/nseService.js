const axios = require("axios");
const http = require("http");
const https = require("https");

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

    // axios instance with keepAlive
    this.client = axios.create({
      headers: this.headers,
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      timeout: 15000, // give NSE enough time
    });
  }

  async refreshCookies() {
    try {
      const response = await this.client.get(
        "https://www.nseindia.com/option-chain"
      );
      const setCookies = response.headers["set-cookie"];
      if (setCookies) {
        this.cookieString = setCookies.map((c) => c.split(";")[0]).join("; ");
      }
      return true;
    } catch (error) {
      console.error("Cookie refresh failed:", error.message);
      return false;
    }
  }

  async getOptionChain(symbol, retries = 3) {
    await this.refreshCookies();

    const url = `https://www.nseindia.com/api/option-chain-indices?symbol=${symbol}`;

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await this.client.get(url, {
          headers: { ...this.headers, Cookie: this.cookieString },
        });
        return response.data;
      } catch (error) {
        if (error.response?.status === 401 || error.response?.status === 403) {
          console.log("Auth error, refreshing cookies...");
          await this.refreshCookies();
        } else if (error.code === "ECONNABORTED") {
          console.warn(`Timeout on attempt ${attempt}, retrying...`);
        } else {
          console.error("Option chain fetch failed:", error.message);
          throw error;
        }

        // small delay before retry
        await new Promise((res) => setTimeout(res, 2000 * attempt));
      }
    }

    throw new Error("Max retries reached while fetching option chain");
  }
}

module.exports = NSEService;
