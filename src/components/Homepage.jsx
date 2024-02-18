import React from "react";
import Card from "./Cards/Card";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useState } from "react";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "./Loader";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const [btnclc, setbtnclc] = useState(false);
  const globalStats = data?.data?.stats;
  const coins = data?.data?.coins || [];
  const top10Coins = coins.slice(0, 10);
  console.log(top10Coins);
  const displayCoins = btnclc ? coins : top10Coins;
  console.log(data);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div className="  flex flex-col w-full h-[100%] overflow-auto bg-gray-50 ">
      <h1 className="text-4xl  font-semibold mb-4 px-4 py-2 ">
        Global Crypto Stats
      </h1>
      <div className="flex flex-row flex-wrap px-1 w-full justify-between ">
        <div className="w-1/2 min-w-[300px] px-3 ">
          <div className="mb-10">
            <h1 className="text-gray-500 font-medium ">
              Total CryptoCurrencies
            </h1>

            <h1 className="text-2xl font-semibold text-gray-70000 mt-2 ">
              {globalStats.total}
            </h1>
          </div>
          <div className="mb-10">
            <h1 className="text-gray-500 font-medium ">Total MarketCap</h1>

            <h1 className="text-2xl font-semibold text-gray-70000 mt-2 ">
              {globalStats.totalMarketCap > 1000000000
                ? `$${(globalStats.totalMarketCap / 1000000000000).toFixed(1)}T`
                : `$${(globalStats.totalMarketCap / 1000000000).toFixed(1)}B`}
            </h1>
          </div>
          <div className="mb-10">
            <h1 className="text-gray-500 font-medium ">
              Total CryptoCurrencies
            </h1>

            <h1 className="text-2xl font-semibold text-gray-70000 mt-2 ">
              12150
            </h1>
          </div>
        </div>
        <div className="w-1/2 min-w-[300px] px-3 ">
          <div className="mb-10">
            <h1 className="text-gray-500 font-medium ">Total Exchanges</h1>

            <h1 className="text-2xl font-semibold text-gray-70000 mt-2 ">
              {globalStats.totalExchanges}
            </h1>
          </div>
          <div className="mb-10">
            <h1 className="text-gray-500 font-medium ">Total 24h Volume</h1>

            <h1 className="text-2xl font-semibold text-gray-70000 mt-2 ">
              {globalStats.totalMarketCap > 1000000000
                ? `$${(globalStats.total24hVolume / 1000000000).toFixed(1)}B`
                : `$${(globalStats.total24hVolume / 1000000).toFixed(1)}M`}
            </h1>
          </div>
          <div className="mb-10">
            <h1 className="text-gray-500 font-medium ">Total Markets</h1>

            <h1 className="text-2xl font-semibold text-gray-70000 mt-2 ">
              {globalStats.totalMarkets > 1000
                ? `${(globalStats.totalMarkets / 1000).toFixed(1)}k`
                : globalStats.totalMarkets}
            </h1>
          </div>
        </div>

        <div className="flex flex-col w-full  ">
          <div className="flex justify-between px-3 ">
            <h1 className="text-4xl font-semibold mb-4 ">
              Top 10 Cryptos In The World
            </h1>
          </div>
          <div>
            <Cryptocurrencies count={10} />
          </div>
        </div>
        <div className="flex overflow-hidden flex-col w-full mt-4 ">
          <News count={5} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
