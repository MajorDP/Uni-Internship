import { useState } from "react";

function CashoutSteps() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section className="w-full xl:w-[75%] m-auto mt-24 flex flex-col xl:flex-row items-center justify-center">
      <div
        className={`w-full xl:w-[40%] p-5 xl:p-10 ${
          isOpen ? "translate-x-0" : "xl:translate-x-1/4"
        } transition-all duration-300 `}
      >
        <h1 className="font-bold text-[28px] sm:text-[34px] text-center xl:text-start">
          How to cashout{" "}
          <span className="bg-gradient-to-t from-yellow-400 to-transparent">
            faster?
          </span>
        </h1>
        <p className="mt-5 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam."
        </p>
        <div className="flex flex-col sm:flex-row mt-8 gap-5 sm:gap-10">
          <button className="bg-[#3AB3FF] px-4 py-2 rounded-full text-white font-medium">
            Get started
          </button>
          <button
            className="flex flex-row justify-between bg-[#F2F7FF] px-4 py-2 rounded-full font-medium"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? "View more " : "View less"}
            {!isOpen ? (
              <span className="m-auto w-[10%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 5l7 7-7 7"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </span>
            ) : (
              <span className="m-auto w-[10%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 5l-7 7 7 7"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>
      <div
        className={`transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-x-5"
            : "overflow-hidden opacity-0 translate-x-0"
        } flex flex-col xl:w-[50%] mt-10 xl:mt-0`}
      >
        <div className="flex flex-row justify-between h-fit mb-5">
          <div className="w-[15%] xl:w-[10%] m-auto">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_ii_58_2492)">
                <circle cx="24.4048" cy="24.5" r="24.4048" fill="#FFBF00" />
              </g>
              <path
                d="M27.7027 15.7815V32.5815H23.8147V18.9015H20.4547V15.7815H27.7027Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col ml-5">
            <h2 className="font-semibold mb-5">Signup</h2>
            <p className="w-[90%] text-sm sm:text-base">
              Cras ultricies ligula sed magna dictum porta. Donec rutrum congue
              leo eget malesuada.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between h-fit mt-5">
          <div className="w-[15%] xl:w-[10%] m-auto">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_ii_58_2500)">
                <circle cx="24.4048" cy="24.5" r="24.4048" fill="#40B6FF" />
              </g>
              <path
                d="M31.3958 29.4135V32.5815H18.6998V30.0615L25.1798 23.9415C25.8678 23.2855 26.3318 22.7255 26.5718 22.2615C26.8118 21.7815 26.9318 21.3095 26.9318 20.8455C26.9318 20.1735 26.6998 19.6615 26.2358 19.3095C25.7878 18.9415 25.1238 18.7575 24.2438 18.7575C23.5078 18.7575 22.8438 18.9015 22.2518 19.1895C21.6598 19.4615 21.1638 19.8775 20.7638 20.4375L17.9318 18.6135C18.5878 17.6375 19.4918 16.8775 20.6438 16.3335C21.7958 15.7735 23.1158 15.4935 24.6038 15.4935C25.8518 15.4935 26.9398 15.7015 27.8678 16.1175C28.8118 16.5175 29.5398 17.0935 30.0518 17.8455C30.5798 18.5815 30.8438 19.4535 30.8438 20.4615C30.8438 21.3735 30.6518 22.2295 30.2678 23.0295C29.8838 23.8295 29.1398 24.7415 28.0358 25.7655L24.1718 29.4135H31.3958Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col ml-5">
            <h2 className="font-semibold mb-5">Verify your Account</h2>
            <p className="text-sm sm:text-base">
              Cras ultricies ligula sed magna dictum porta. Donec rutrum congue
              leo eget malesuada.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between h-fit mt-5">
          <div className="w-[15%] xl:w-[10%] m-auto">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_ii_58_2509)">
                <circle cx="24.4048" cy="24.5" r="24.4048" fill="#00BE6F" />
              </g>
              <text
                x="24.4048"
                y="32"
                font-size="20"
                text-anchor="middle"
                fill="white"
                font-family="Arial, sans-serif"
                font-weight="bold"
              >
                3
              </text>
            </svg>
          </div>
          <div className="flex flex-col ml-5">
            <h2 className="font-semibold mb-5">Select Payment method</h2>
            <p className="text-sm sm:text-base">
              Cras ultricies ligula sed magna dictum porta. Donec rutrum congue
              leo eget malesuada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CashoutSteps;
