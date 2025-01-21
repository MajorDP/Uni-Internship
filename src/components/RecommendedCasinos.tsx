function RecommendedCasinos() {
  const paypalCasinos = [
    {
      name: "Coral",
      minDeposit: 10,
      maxDeposit: "Unlimited",
    },
    {
      name: "Coral",
      minDeposit: 10,
      maxDeposit: "Unlimited",
    },
    {
      name: "Coral",
      minDeposit: 10,
      maxDeposit: "Unlimited",
    },
  ];
  return (
    <div className="w-full xl:w-[85%] m-auto mt-24 flex flex-col lg:flex-row">
      <div className="xl:w-[50%] w-full mr-5">
        <h1 className="xl:text-start text-center text-[24px] sm:text-[34px] mb-10 font-bold text-[#0A0F4F]">
          Recommended PayPal Casinos
        </h1>
        <p className="text-[14px] xl:text-[16px] text-center xl:text-start w-full">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This
        </p>
      </div>
      <div className="xl:w-[50%] shadow-xl h-full mt-10 xl:mt-0 w-full text-[12px] sm:text-[14px] xl:text-[16px]">
        <ul className="flex flex-row w-full justify-between px-4 py-2 h-full">
          <li className="text-center lg:text-start w-full">PayPal Casino</li>
          <li className="text-center lg:text-start w-full">Min. Deposit</li>
          <li className="text-center lg:text-start w-full">Max. Deposit</li>
        </ul>
        <ul className="w-full justify-between p-5 h-full">
          {paypalCasinos.map((el) => (
            <li className="flex flex-row justify-between py-5">
              <p className="text-center lg:text-start w-full underline">
                {el.name}
              </p>
              <p className="text-center lg:text-start w-full">
                £ {el.minDeposit}
              </p>
              <p className="text-center lg:text-start w-full">
                {el.maxDeposit}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecommendedCasinos;
