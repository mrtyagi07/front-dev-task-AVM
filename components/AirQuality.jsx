import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const AirQuality = () => {
  return (
    <div>
      <div className="p-4 ">
        <div className="relative -mr-10 h-full w-[300px] overflow-hidden rounded-lg bg-card bg-opacity-75 px-6 pt-4 pb-4 pr-0 text-center ">
          <h2 className=" mb-1 flex text-xl font-bold text-gray">
            Air Quality
          </h2>
          <div className="flex h-24 w-24 items-center gap-8 rounded-full bg-secondary font-bold text-[#f8fafc]">
            <span className="flex items-center justify-center p-[15px] text-6xl font-bold">
              72
            </span>
            <div className="text-4xl font-bold text-shade">
              <p className="flex items-center border-b border-shade">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-secondary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                  />
                </svg>
                93
              </p>
              <p className="mt-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-[#fbbf24]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                  />
                </svg>
                61
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
