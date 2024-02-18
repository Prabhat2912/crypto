import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Card from "./Cards/Card";
import Loader from "./Loader";

const Cryptocurrencies = ({ count }) => {
  const [btnclc, setbtnclc] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isFetching } = useGetCryptosQuery();
  const coins = data?.data?.coins || [];

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayCoins = btnclc
    ? filteredCoins
    : filteredCoins.slice(0, count || 50);

  if (isFetching) {
    return <Loader />;
  }

  console.log(data);

  return (
    <div className="flex flex-col h-full overflow-auto p-2 ">
      <div className="flex justify-between mb-4 gap-2 flex-wrap ">
        {" "}
        <div className=" w-1/2 flex justify-center">
          <input
            type="text"
            placeholder="Search Cryptocurrency"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full placeholder:overflow-hidden px-4 py-2 rounded-2xl outline-none bg-gray-50 border-2"
          />
        </div>
        <div className="flex justify-end items-center">
          {count ? (
            <button
              className="text-blue-600 max-md:mr-6 font-medium"
              onClick={() => setbtnclc(!btnclc)}
            >
              {btnclc ? "Show less" : "Show more"}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex gap-7 flex-wrap max-md:justify-evenly ">
        {displayCoins.map((coin) => (
          <Card key={coin.rank} data={coin} />
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
