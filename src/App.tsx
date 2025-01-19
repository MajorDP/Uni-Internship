import { useState } from "react";
import Navigation from "./components/Navigation";

function App() {
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div className="py-3 px-5">
      <Navigation />
      <div className="bg-gradient-to-r from-[#BAE4FF]  to-[#D5FFB3] rounded-xl p-10">
        <div className="flex flex-col sm:flex-row items-center justify-between text-center text-xs p-4 md:w-[80%] lg:w-[50%] m-auto">
          <p className="sm:text-left text-center mb-2 sm:mb-0">
            <span className="opacity-80">Home /</span> Online Casino Reviews
          </p>
          <p className="sm:text-left text-center mb-2 sm:mb-0">
            👤 Author: <span className="font-semibold">John Doe</span>
          </p>
          <p className="sm:text-left text-center">
            📆 Last update: <span className="font-semibold">24.05.24</span>
          </p>
        </div>

        <h1 className="text-center mt-10 text-4xl font-bold">
          Best Offshore Casinos
        </h1>
        <p className="w-1/2 text-center m-auto mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam." Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          <span className="text-blue-600 underline cursor-pointer">
            Read more
          </span>
        </p>
        <div className="bg-white rounded-full w-fit m-auto flex flex-row p-3 justify-between gap-4 shadow-lg mt-10">
          <p
            className={`${
              selectedOption === 0 && "bg-[#1BA7FF] text-white"
            } rounded-full px-4 py-2 cursor-pointer`}
            onClick={() => setSelectedOption(0)}
          >
            Same day payouts
          </p>

          <p
            className={`${
              selectedOption === 1 && "bg-[#1BA7FF] text-white"
            } rounded-full px-4 py-2 cursor-pointer`}
            onClick={() => setSelectedOption(1)}
          >
            Within 48 hours
          </p>

          <p
            className={`${
              selectedOption === 2 && "bg-[#1BA7FF] text-white"
            } rounded-full px-4 py-2 cursor-pointer`}
            onClick={() => setSelectedOption(2)}
          >
            Within 7 days
          </p>
        </div>
      </div>

      <div className="w-[95%] m-auto">
        <ul>
          <li className="flex flex-row w-full h-fit m-auto rounded-xl shadow-xl text-sm">
            <div className="p-4">
              <img
                src="./public/img1.png"
                className="w-[14rem] h-[10rem] rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-between p-10 w-[25%]">
              <div className="flex flex-row justify-between w-full">
                <p className="font-semibold">Caddabrus Casino</p>
                <p>Very Good</p>
              </div>
              <div className="w-full max-w-xs bg-gray-200 rounded-lg overflow-hidden">
                <div className="bg-green-500 h-3 rounded-lg transition-all w-[75%]"></div>
              </div>

              <div>list</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
