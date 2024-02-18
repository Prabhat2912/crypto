import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`/crypto-details/${data.uuid}`}>
      <div className="flex flex-col px-4 py-3 border w-[270px] hover:transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg bg-white shadow-sm h-[250px] ">
        <div
          className="flex
           justify-between mb-4 py-1 shadow-sm "
        >
          <h2 className="text-xl font-semibold">
            {data.rank}.{}
            {data.name}
          </h2>
          <img src={`${data.iconUrl}`} alt="icon" width={30} height={30} />
        </div>
        <div className="flex flex-col mt-4 gap-2 ">
          <p className="text-gray-600 font-medium ">
            Price:{" "}
            {typeof data.price === "string"
              ? !isNaN(Number(data.price))
                ? Number(data.price) > 1000
                  ? `${(Number(data.price) / 1000).toFixed(1)}K`
                  : Number(data.price).toFixed(1)
                : "Invalid Price"
              : "Invalid Price"}
          </p>
          <p className="text-gray-600 font-medium ">
            Market Cap:{" "}
            {data.marketCap > 1000000000
              ? `$${(data.marketCap / 1000000000).toFixed(1)}`
              : data.marketCap}
          </p>
          <p className="text-gray-600 font-medium ">
            Daily Change: {data.change}%
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
