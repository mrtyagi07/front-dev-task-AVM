import React from "react";

const Audio = () => {
  return (
    <div>
      <div className="p-4 ">
        <div className="relative -mr-10 h-full w-[300px] overflow-hidden rounded-lg bg-card bg-opacity-75 px-6 pt-4 pb-4 pr-0 text-center ">
          <h2 className=" mb-1 flex text-xl font-bold text-gray">Audio</h2>
          <div className="flex items-center font-bold text-primary">
            <span className="flex items-center justify-center p-[15px] text-6xl font-bold">
              2
            </span>
            <button
              type="button"
              className="mr-2 mb-8 inline-flex items-center rounded-lg bg-secondary px-5 py-1 text-center text-sm font-medium uppercase text-[#f8fafc] "
            >
              Playing
            </button>

            <div className="mt-4 text-xs text-shade">
              <p className="flex items-center ">Total</p>

              <p className=" flex items-center text-xl font-black text-[#6b7280] ">
                5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audio;
