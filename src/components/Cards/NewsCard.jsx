import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ data1 }) => {
  return (
    <Link to={data1.url} target="blank">
      {" "}
      <div className="w-[270px] h-[300px] bg-white p-1 rounded-lg hover:transform hover:scale-105 transition-transform duration-300 ease-in-out ">
        <div className="mb-4">
          <img src={data1.thumbnail} alt="thubmnail" className="rounded-lg" />
        </div>
        <p className="font-medium  text-[15px] p-1 text-balance  ">
          {data1.title}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
