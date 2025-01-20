function WireFrame() {
  return (
    <div className="flex flex-col md:flex-row mt-24 w-[90%] m-auto justify-between p-5">
      <div className="flex flex-col justify-between md:h-fit w-full md:w-[60%] lg:w-[45%]">
        <p className="text-xs text-blue-400 underline cursor-pointer">
          Sed porttitor
        </p>
        <h1 className="text-3xl md:text-4xl mt-4 md:mt-5">
          It's easy to create pages Using Our
          <span className="bg-gradient-to-t from-yellow-400 to-transparent">
            {" "}
            WireFrame
          </span>
        </h1>
        <button className="mt-6 md:mt-10 px-4 py-2 text-white cursor-pointer bg-[#40B6FF] w-fit rounded-full hover:scale-105 duration-300 ease-in-out">
          Start creating
        </button>
      </div>

      <div className="w-full md:w-[40%] lg:w-[50%] flex flex-col justify-between h-fit text-sm xl:text-base mt-5 md:mt-0">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="mt-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
    </div>
  );
}

export default WireFrame;
