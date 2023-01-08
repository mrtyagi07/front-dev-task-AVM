import React from "react";

const Displays = () => {
  return (
    <div>
      <div className="p-4 lg:px-[130px]">
        <div className="relative -mr-10 h-full w-[300px] overflow-hidden rounded-lg bg-card bg-opacity-75 px-6 pt-4 pb-4 pr-0 text-center ">
          <h2 className=" mb-1 flex text-xl font-bold text-gray">Displays</h2>
          <div className="mt-8 flex font-bold text-primary">
            <span className="flex text-6xl font-bold">10</span>
            <span className="flex items-end gap-0 text-xl font-bold">/16</span>

            <div className="mt-4 ml-2 border-l border-shade text-xs text-shade">
              <p className="ml-2 flex items-center font-medium ">On Time</p>
              <p className=" ml-2 flex items-center text-xl font-black text-[#6b7280]">
                00:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Displays;
