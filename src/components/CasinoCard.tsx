import { useState } from "react";
import { ICasino } from "../interfaces/Casino";
import CasinoInfo from "./CasinoInfo";

interface ICasinoCardProps {
  casino: ICasino;
}
function CasinoCard({ casino }: ICasinoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li className="flex flex-col lg:flex-row w-full h-auto m-auto rounded-xl shadow-xl text-sm md:text-base lg:text-lg justify-center">
        <div className="p-4 md:w-full lg:w-[16rem]">
          <img
            src={casino.img}
            className="w-full h-[10rem] rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-between p-6 w-full items-center lg:w-[30%]">
          <div className="flex flex-col xl:flex-row justify-between items-center w-full mb-4">
            <p className="font-semibold text-xs xl:text-xl">{casino.name}</p>
            <p
              className={`text-sm font-semibold ${
                casino.rating <= 25
                  ? "text-red-500"
                  : casino.rating <= 50
                  ? "text-[#FFBF00]"
                  : casino.rating <= 75
                  ? "text-[#00BE6F]"
                  : "text-green-600 animate-pulse"
              }`}
            >
              {casino.rating <= 25
                ? "Very Bad"
                : casino.rating <= 50
                ? "Average"
                : casino.rating <= 75
                ? "Very Good"
                : "Excellent"}
            </p>
          </div>
          <div className="w-full max-w-xs bg-gray-200 rounded-lg overflow-hidden mb-4">
            <div
              className={`${
                casino.rating <= 25
                  ? "bg-red-500"
                  : casino.rating <= 50
                  ? "bg-[#FFBF00]"
                  : casino.rating <= 75
                  ? "bg-[#00BE6F]"
                  : "bg-green-600 animate-pulse"
              } h-3 rounded-lg transition-all w-[${casino.rating}%]`}
            ></div>
          </div>
          <div className="text-sm md:text-base lg:text-lg">list here...</div>
        </div>
        <div className="w-px h-[10rem] my-6 bg-gray-200"></div>
        <div className="flex flex-col lg:flex-row lg:w-[40%] justify-between items-center mt-4 md:mt-0">
          <div className="flex flex-col p-6 w-full md:w-[90%] h-[70%] lg:h-[60%] xl:h-[50%] justify-between xl:mb-4">
            <p className="text-center lg:text-start text-xs xl:text-sm">
              Welcome bonus
            </p>
            <p className="font-bold text-sm xl:text-xl text-center lg:text-start">
              {casino.welcomeBonus}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <button className="bg-[#00BE6F] text-white py-2 px-2 rounded-full w-[40%] lg:w-[80%] mb-2 text-sm md:text-base lg:text-lg">
              Play Now
            </button>
            <div className="flex flex-row sm:flex-col lg:flex-row items-center justify-start">
              <button
                className="mr-2 text-blue-500 text-sm lg:text-lg cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? "More info" : " Less info"}
              </button>
              <span
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M5 15l7-7 7 7"></path>
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>
      </li>
      {isOpen && <CasinoInfo casino={casino} />}
    </>
  );
}

export default CasinoCard;
