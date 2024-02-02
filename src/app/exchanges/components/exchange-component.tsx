/* This component has been copy pasted from the Docasaurus version of the project */
"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

import classes from "./exchange-component.module.css";
import config from "@/config";
import TokenPrice from "./dex-component";

interface ExchangeData {
  name: string;
  logo: string;
  price: string;
  volume: string;
  volume7d: string;
  link: string;
  chartLink?: string;
}

const ExchangeRow = ({ exchange, index }: { exchange: any; index: number }) => (
  <tr className="h-14">
    <td className="px-4 md:px-6 py-4 text-center text-sm font-medium text-gray-900">{index + 1}</td>

    <td className="px-4 md:px-6 py-4 text-center text-md text-gray-500">
      <div className="flex items-center justify-center space-x-2">
        <img className="h-8 w-8" src={exchange.logo} alt={`${exchange.name} Logo`} />
        <span className="text-lg">{exchange.name}</span>
      </div>
    </td>
    <td className="px-4 md:px-6 py-4 text-center text-md text-gray-500">{exchange.price}</td>
    <td className="px-4 md:px-6 py-4 text-center text-md text-gray-500">{exchange.volume}</td>
    <td className="px-4 md:px-6 py-4 text-center text-md text-gray-500">{exchange.volume7d}</td>
    <td className="px-4 md:px-6 py-4 text-center text-md font-medium" style={{ minWidth: "180px" }}>
      <a href={exchange.link} className="text-blue-700 hover:text-blue-800">
        <div className="inline-block bg-blue-700 rounded-lg shadow-lg hover:shadow-2xl text-center hover:bg-blue-600 duration-200 text-white font-sans font-semibold px-4 py-2 mr-2">Trade</div>
      </a>
      {exchange.chartLink && (
        <a href={exchange.chartLink} className="text-blue-700 hover:text-blue-800">
          <div className="inline-block bg-blue-700 rounded-lg shadow-lg hover:shadow-2xl text-center hover:bg-blue-600 duration-200 text-white font-sans font-semibold px-4 py-2">Chart</div>
        </a>
      )}
    </td>
  </tr>
);

const ExchangeComponent = () => {
  const [exchanges, setExchanges] = useState<ExchangeData[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const comswapResponse = await fetch(config.exchangeApiUrl);
        if (!comswapResponse.ok) {
          throw new Error("Network response was not ok " + comswapResponse.statusText);
        }
        const comswapData = await comswapResponse.json();

        const dexScreenerURL = `https://api.dexscreener.com/latest/dex/search?q=0xc78B628b060258300218740B1A7a5b3c82b3bd9f`;
        const uniswapResponse = await fetch(dexScreenerURL);
        const uniswapData = await uniswapResponse.json();
        const uniswapPair = uniswapData.pairs[0];

        setExchanges([
          {
            name: "Comswap (Mainnet)",
            logo: "https://comswap.io/static/media/logo.0eafc56c200101eecb87.png",
            price: `$${parseFloat(comswapData.price).toFixed(2)}`,
            volume: `$${Math.floor(comswapData.volume1d).toLocaleString()}`,
            volume7d: `$${Math.floor(comswapData.volume7d).toLocaleString()}`,
            link: "https://comswap.io",
          },
          {
            name: "Uniswap (Erc20)",
            logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
            price: `$${parseFloat(uniswapPair.priceUsd).toFixed(2)}`,
            volume: `$${Math.floor(uniswapPair.volume.h24).toLocaleString()}`,
            volume7d: "N/A",
            link: "https://app.uniswap.org/swap?outputCurrency=0xc78B628b060258300218740B1A7a5b3c82b3bd9f&chain=ethereum",
            chartLink: uniswapPair.url,
          },
        ]);
      } catch (error) {
        console.error("Error fetching exchange data:", error);
        setError(error instanceof Error ? error.message : String(error));
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classNames(classes.exchangeComponent, "z-40 bg-blue-50 rounded-lg border-2 border-blue-400 shadow-md p-3 max-w-5xl mx-auto")}>
      {error && <div className="mb-4 text-lg font-semibold text-red-500">Error: {error}</div>}
      <div className="overflow-x-auto">
        <table className={classNames(classes.table, "rounded-md")} style={{ minWidth: "100%" }}>
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500">#</th>
              <th className="px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500">EXCHANGE</th>
              <th className="px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500">LAST PRICE</th>
              <th className="px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500">24H VOLUME</th>
              <th className="px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500">7D VOLUME</th>
              <th className="px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500">Trade</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {exchanges.map((exchange, idx) => (
              <ExchangeRow key={idx} exchange={exchange} index={idx} />
            ))}
            <tr className="h-12 bg-gray-100">
              <td colSpan={6} className="px-3 md:px-6 py-4 text-center text-md text-gray-500">
                To Bridge $COMAI between Commune and Ethereum use the {""}
                <a href="https://bridge.comwallet.io/" className="text-blue-700 hover:text-blue-800">
                  ComBridge
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangeComponent;
