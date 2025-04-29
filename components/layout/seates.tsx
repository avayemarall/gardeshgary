"use client";
import React, { useState } from "react";
import SeatIcon from "../ui/seatIcon";

type Cell = number | "break" | null | "line-break";

const seatMap: Cell[][] = [
  [1, 2, null, 3, 4],
  [5, 6, null, 7, 8],
  [9, 10, null, 11, 12],
  [13, 14, null, 15, 16],
  ["line-break", "line-break", null, 17, 18],
  [null, null, null, 19, 20],
  ["line-break", "line-break", null, 21, 22],
  [23, 24, null, 25, 26],
  [27, 28, null, 29, 30],
  [31, 32, null, 33, 34],
  [35, 36, null, 37, 38],
  [39, 40, null, 41, 42],
];
interface SeatsType {
  selectedSeats:number[]
  setSelectedSeats:React.Dispatch<React.SetStateAction<number[]>>
}
const Seates: React.FC<SeatsType> = ({selectedSeats,setSelectedSeats}) => {

  const toggleSeat = (seatNumber: number) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((num) => num !== seatNumber)
        : [...prev, seatNumber]
    );
  };
  return (
    <div className="flex flex-col gap-10 w-full lg:w-fit items-center">
      <span className="font-bold text-deep-blue border-b-1 border-deep-blue pb-2">{selectedSeats.length} صندلی رزرو شده</span>
    <div
      className="
        grid 
        grid-cols-[repeat(2,auto)_1fr_repeat(2,auto)] 
        lg:gap-6 
        justify-between
        items-baseline
        gap-2
        bg-cloud-white
        p-8
        border-[.3px]
        border-deep-blue/50
        rounded-2xl
        w-[90%]
        lg:w-fit
      "
    >
      {seatMap.map((row, rowIdx) =>
        row.map((cell, colIdx) => {
          const key = `${rowIdx}-${colIdx}`;
          if (cell === "line-break") {
            return <div key={key} className="lg:w-20 h-4 bg-black rounded" />;
          }
          if (cell === "break") {
            return <div key={key} className="lg:w-20 h-4 rounded" />;
          }
          if (typeof cell === "number") {
            return (
              <button onClick={() => toggleSeat(cell)} key={key} className="flex flex-col">
                <SeatIcon
                  number={cell}
                  className={`
                    w-15 h-15
                    lg:w-20 lg:h-20 ${
                    cell == 2 || cell == 1
                      ? "fill-seat-unavailable !cursor-not-allowed hover:opacity-100"
                      : cell == 15 || cell == 22
                      ? "fill-seat-reserved !cursor-not-allowed hover:opacity-100"
                      : selectedSeats.includes(cell)
                      ? "fill-seat-selected "
                      : "fill-seat-available"
                  }`}
                />
                <div className="text-seat-reserved">{cell == 15 ? 'آقا' : cell == 22 ? 'خانم' : ''}</div>
              </button>
            );
          }
          return <div key={key} />;
        })
      )}
    </div>
    </div>
  );
};

export default Seates;
