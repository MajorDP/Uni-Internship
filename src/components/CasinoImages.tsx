import { useState } from "react";
import casLarge from "../../public/casLarge.jpeg";
import casSm1 from "../../public/casSm1.jpeg";
import casSm2 from "../../public/casSm2.jpeg";
function CasinoImages() {
  const [current, setCurrent] = useState(0);

  const images = [casLarge, casSm1, casSm2, casSm1];
  return (
    <>
      <h1 className="mt-28 mb-10 text-center text-xl md:text-4xl">
        From the Blog
      </h1>
      <div className="w-full md:w-[95%] m-auto flex text-[#0A0F4F] flex-row items-center">
        <button
          className="md:hidden text-white bg-gray-500 p-1 rounded-md"
          onClick={() => current > 0 && setCurrent(current - 1)}
        >
          {"<"}
        </button>
        <div className="bg-white w-full md:w-[50%] shadow-lg md:mr-5 rounded-xl p-2">
          <div className="md:p-5">
            <img
              src={images[current]}
              alt="img"
              className="object-fill rounded-xl w-full md:h-auto h-44"
            />
          </div>
          <h1 className="xl:text-4xl md:text-xl text-sm font-bold ml-5 overflow-hidden text-ellipsis whitespace-nowrap">
            How to Create a Figma Card
          </h1>
          <p className="flex flex-row text-xs ml-5">
            <span>👍561</span>
            <span className="ml-2"> 📩 20</span>
          </p>
        </div>
        <button
          className="md:hidden text-white bg-gray-500 p-1 rounded-md"
          onClick={() => current < images.length - 1 && setCurrent(current + 1)}
        >
          {">"}
        </button>
        <div className="hidden w-[50%] md:grid md:grid-rows-2 md:grid-cols-2 gap-5">
          <div className="w-full bg-white shadow-xl lg:p-5 flex flex-col items-center rounded-xl">
            <div className="w-full h-full">
              <img
                src={casSm1}
                alt="aa"
                className="w-full h-full object-fill rounded-xl"
              />
            </div>
            <h1 className="font-bold text-xs xl:text-sm text-start w-full mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
              How to Create a Figma Card
            </h1>
          </div>
          <div className="w-full bg-white shadow-xl lg:p-5 flex flex-col items-center rounded-xl">
            <div className="w-full h-full">
              <img
                src={casSm2}
                alt="aa"
                className="w-full h-full object-fill rounded-xl"
              />
            </div>
            <h1 className="font-bold text-xs xl:text-sm text-start w-full mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
              How to Create a Figma Card
            </h1>
          </div>
          <div className="w-full bg-white shadow-xl lg:p-5 flex flex-col items-center rounded-xl">
            <div className="w-full h-full">
              <img
                src={casSm2}
                alt="aa"
                className="w-full h-full object-fill rounded-xl"
              />
            </div>
            <h1 className="font-bold text-xs xl:text-sm text-start w-full mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
              How to Create a Figma Card
            </h1>
          </div>
          <div className="w-full bg-white shadow-xl lg:p-5 flex flex-col items-center rounded-xl">
            <div className="w-full h-full">
              <img
                src={casSm1}
                alt="aa"
                className="w-full h-full object-fill rounded-xl"
              />
            </div>
            <h1 className="font-bold text-xs xl:text-sm text-start w-full mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
              How to Create a Figma Card
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default CasinoImages;
