import { ICasino } from "../interfaces/Casino";

interface ICasinoCardProps {
  casino: ICasino;
}
function CasinoInfo({ casino }: ICasinoCardProps) {
  return (
    <div className="flex flex-col md:grid lg:flex lg:flex-row bg-white shadow-xl mt-2 px-1 py-2 rounded-xl text-[16px]">
      <div className="lg:w-[30%] p-2">
        <h3 className="text-lg mb-4">ℹ Casino Details</h3>
        <p className="bg-gray-50 flex justify-between p-2 rounded-xl">
          <span>Online Since</span>{" "}
          <span>{casino.casinodetails.onlineSince}</span>
        </p>
        <p className="bg-gray-50 flex justify-between p-2 rounded-xl my-1">
          <span>License</span> <span>{casino.casinodetails.license}</span>
        </p>
        <p className="bg-gray-50 flex justify-between p-2 rounded-xl my-1">
          <span>Founded</span> <span>{casino.casinodetails.foundedDate}</span>
        </p>
        <p className="bg-gray-50 flex justify-between p-2 rounded-xl">
          <span>Website</span> <span>{casino.casinodetails.website}</span>
        </p>
      </div>
      <div className="lg:w-[30%] p-2">
        <h3 className="text-lg mb-4">💸 Payments</h3>
        <p className="bg-gray-50 flex justify-between p-2 rounded-xl">
          <span>Min Deposit</span> <span>${casino.payments.minDeposit}</span>
        </p>
        <p className="bg-gray-50 flex justify-between p-2 rounded-xl my-1">
          <span>Min Withdrawal</span>{" "}
          <span>${casino.payments.minWithdrawal}</span>
        </p>
        <p className="bg-gray-50 flex justify-between p-2 rounded-xl my-1">
          <span>Max Withdrawal</span>{" "}
          <span>${casino.payments.maxWithdrawal}</span>
        </p>
        <p className="bg-gray-50 flex justify-between p-2 rounded-xl">
          <span>Wagering</span> <span>x{casino.payments.wager}</span>
        </p>
      </div>
      <div className="w-full lg:w-[40%] p-2 flex flex-col sm:flex-row justify-between m-auto">
        <div className=" flex flex-col mb-5 xl:mb-0">
          <h3 className="text-[#00BE6F] font-bold mb-2">Pros</h3>
          {casino.pros.map((pro) => (
            <p className="mb-3 text-[14px]">
              <span className="bg-[#00BE6F] px-[0.4rem] py-1 text-white rounded-full">
                ✔
              </span>{" "}
              {pro}
            </p>
          ))}
        </div>
        <div className=" flex flex-col">
          <h3 className="text-[#1BA7FF] font-bold mb-2">Cons</h3>
          {casino.cons.map((con) => (
            <p className="mb-3  text-[14px]">
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

export default CasinoInfo;
