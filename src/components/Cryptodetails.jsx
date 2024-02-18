import React from "react";

import { useGetCryptoDetailsQuery } from "../services/cryptoApi";

import millify from "millify";

import HTMLReactParser from "html-react-parser";

import { AiFillDollarCircle } from "react-icons/ai";
import { FaRankingStar } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { RiFundsBoxFill } from "react-icons/ri";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaExclamation } from "react-icons/fa6";

import Loader from "./Loader";
import { useParams } from "react-router-dom";

const Cryptodetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  console.log(data);

  if (isFetching) {
    return <Loader />;
  }

  const cryptoDetails = data?.data?.coin;

  const stats = [
    {
      title: "Price to USD:",
      value: `$${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <AiFillDollarCircle />,
    },
    { title: "Rank:", value: cryptoDetails?.rank, icon: <FaRankingStar /> },

    {
      title: "Market Cap:",
      value: `$${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <AiFillDollarCircle />,
    },
    {
      title: "All-time-high(daily avg.):",
      value: `$${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <FaTrophy />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets:",
      value: cryptoDetails?.numberOfMarkets,
      icon: <RiFundsBoxFill />,
    },
    {
      title: "Number Of Exchanges:",
      value: cryptoDetails?.numberOfExchanges,
      icon: <BsCurrencyExchange />,
    },
    {
      title: "Aprroved Supply:",
      value: cryptoDetails?.supply?.confirmed ? <FaCheck /> : <ImCross />,
      icon: <FaExclamation />,
    },
    {
      title: "Total Supply:",
      value: `$${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <FaExclamation />,
    },
    {
      title: "Circulating Supply:",
      value: `$${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <FaExclamation />,
    },
  ];

  return (
    <div className="flex flex-col px-8 py-4 h-[100%] justify- overflow-y-scroll items-center gap-4 w-full ">
      <div className="bg-white">
        <h1 className="text-[40px] font-medium ">
          {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price{" "}
        </h1>
        <p>
          {cryptoDetails.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </div>
      <div className=" flex flex-col gap-2">
        <h1 className="text-[30px] font-medium gap-4">
          {cryptoDetails.name} Value Statistics
        </h1>
        <p className="text-[20px] font-medium ">
          An overview showing the statistics of {cryptoDetails.name}, such as
          the base and quote currency, the rank, and trading volume.
        </p>
        <div className="flex flex-col gap-2">
          {stats.map(({ icon, title, value }) => (
            <div className="flex">
              <div className="flex gap-2 justify-center items-center  ">
                <p>{icon}</p>
                <h1>{title}</h1>
                <h1 className="stats">{value}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[20px] font-medium ">
            An overview showing the statistics of {cryptoDetails.name}, such as
            the base and quote currency, the rank, and trading volume.
          </p>
          <div className="flex flex-col gap-2">
            {genericStats.map(({ icon, title, value }) => (
              <div className="flex">
                <div className="flex gap-2 justify-center items-center">
                  <p> {icon}</p>
                  <h1> {title}</h1>

                  <p className="stats"> {value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-[20px] font-medium ">
              What is {cryptoDetails.name}?
            </h1>
            {HTMLReactParser(cryptoDetails.description)}
          </div>
          <div className="flex flex-col flex-wrap gap-2 ">
            <h1>{cryptoDetails.name} Links</h1>
            {cryptoDetails.links?.map((link) => (
              <div className="flex flex-row gap-2 " key={link.name}>
                <h1 className="text-[18px] font-medium ">
                  {link.type[0].toUpperCase() +
                    link.type.slice(1).toLowerCase()}
                </h1>
                <a
                  href={link.url}
                  className="hover:underline hover:text-[blue] hover:transform hover:scale-105 transition-all duration-200 text-green-500 ease-in-out "
                  target="_blank"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cryptodetails;
