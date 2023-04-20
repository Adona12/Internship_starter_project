import React from "react";

function StatCard({ year, percent, avg }: StatProp) {
  return (
    <div className="flex flex-col  justify-around items-center mx-4  my-4 py-6 bg-white shadow-lg rounded-lg ">
      <div className="font-semibold text-center mb-4">{year}</div>
      <div className="text-center mt-6">
        <div className="font-bold text-lg"> {percent}</div>

        <div> {avg}</div>
      </div>
    </div>
  );
}

export default StatCard;
