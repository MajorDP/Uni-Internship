function CasinoProsAndCons() {
  const prosAndCons = {
    pros: [
      "Instant deposits",
      "Free casino deposit",
      "Simple and straightforward",
      "Instant deposits",
    ],
    cons: [
      "Instant deposits",
      "Free casino deposit",
      "Simple and straightforward",
      "Instant deposits",
    ],
  };

  return (
    <div className="w-full xl:w-[85%] m-auto mt-24">
      <h1 className=" text-center text-[24px] sm:text-[34px] font-bold text-[#0A0F4F]">
        <span className="ml-2 bg-gradient-to-t from-yellow-400 to-transparent">
          Pros & Cons
        </span>{" "}
        of playing at offshore casinos
      </h1>
      <div className="w-full lg:w-[80%] xl:w-[60%] p-6 flex flex-col sm:flex-row justify-between items-center m-auto">
        <div className=" flex flex-col mb-5 xl:mb-0">
          <h3 className="text-[#00BE6F] font-bold mb-4 text-center sm:text-start">
            Pros
          </h3>
          {prosAndCons.pros.map((pro) => (
            <p className="mb-5 text-[14px]">
              <span className="bg-[#00BE6F] px-[0.4rem] py-1 text-white rounded-full">
                ✔
              </span>{" "}
              {pro}
            </p>
          ))}
        </div>
        <div className=" flex flex-col mb-5 xl:mb-0">
          <h3 className="text-[#1BA7FF] font-bold mb-4 text-center sm:text-start">
            Cons
          </h3>
          {prosAndCons.cons.map((con) => (
            <p className="mb-5 text-[14px]">
              <span className="bg-[#1BA7FF] px-[0.4rem] py-1 text-white rounded-full">
                ✖
              </span>{" "}
              {con}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CasinoProsAndCons;
