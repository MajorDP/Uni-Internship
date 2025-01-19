interface IFiltersState {
  selectedOption: number;
  setSelectedOption: React.Dispatch<React.SetStateAction<number>>;
}

function Filters({ selectedOption, setSelectedOption }: IFiltersState) {
  return (
    <div className="bg-white rounded-xl xl:rounded-full w-full xl:w-fit mx-auto flex flex-wrap xl:flex-row py-3 px-4 justify-center xl:justify-between shadow-lg mt-10">
      <p
        className={`${
          selectedOption === 0 && "bg-[#1BA7FF] text-white"
        }  rounded-xl xl:rounded-full px-4 py-2 cursor-pointer text-sm sm:text-base`}
        onClick={() => setSelectedOption(0)}
      >
        Same day payouts
      </p>

      <p
        className={`${
          selectedOption === 1 && "bg-[#1BA7FF] text-white"
        }  rounded-xl xl:rounded-full px-4 py-2 cursor-pointer text-sm sm:text-base`}
        onClick={() => setSelectedOption(1)}
      >
        Within 48 hours
      </p>

      <p
        className={`${
          selectedOption === 2 && "bg-[#1BA7FF] text-white"
        }  rounded-xl xl:rounded-full px-4 py-2 cursor-pointer text-sm sm:text-base`}
        onClick={() => setSelectedOption(2)}
      >
        Within 7 days
      </p>
    </div>
  );
}

export default Filters;
