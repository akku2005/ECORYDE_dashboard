import React from "react";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

// WidgetItem component
const WidgetItem = ({ percent, amount, value, heading, image, trend }) => {
  const trendColor = trend === "up" ? "text-green-600" : "text-red-600";
  const TrendIcon = trend === "up" ? HiTrendingUp : HiTrendingDown;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between space-x-4">
      <div className="flex flex-col space-y-2">
        <h2 className="text-gray-700 text-lg font-bold">{heading}</h2>
        <p className="text-gray-900 text-3xl font-semibold">
          {amount ? `₹${value}` : value}
        </p>
        <div className={`flex items-center mt-2 ${trendColor}`}>
          <TrendIcon className="w-5 h-5" />
          <span className="ml-1 text-sm">
            {percent}% {trend === "up" ? "Up" : "Down"} from yesterday
          </span>
        </div>
      </div>
      <img
        src={image}
        alt={heading}
        className="w-16 h-16 rounded-lg object-cover"
      />
    </div>
  );
};

export default WidgetItem;
