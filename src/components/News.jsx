import React from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Card from "./Cards/Card";
import NewsCard from "./Cards/NewsCard";
import Loader from "./Loader";

const News = ({ count }) => {
  const { data, isLoading } = useGetCryptoNewsQuery();

  if (isLoading) {
    return <Loader />;
  }
  const datac = data?.data;
  const datad = datac ? datac.slice(0, count || 50) : [];
  console.log(data);

  return (
    <div className="flex p-3 flex-col bg-gray-100 gap-2 h-full overflow-auto ">
      {" "}
      <h1 className="text-4xl w-full font-semibold mb-4 ">
        Top Crypto News In The World
      </h1>
      <div className="flex flex-wrap gap-7  ">
        {datad.map((d) => (
          <NewsCard data1={d} />
        ))}
      </div>
    </div>
  );
};

export default News;
