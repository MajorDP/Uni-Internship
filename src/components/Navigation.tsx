import { useState } from "react";
interface ILanguage {
  name: string;
  flag: string;
}

function Navigation() {
  // State to toggle the mobile menu
  const [isOpenHam, setIsOpenHam] = useState(false);
  const [selected, setSelected] = useState(0);
  const [isOpenLang, setIsOpenLang] = useState(false);

  const toggleMenu = () => setIsOpenHam(!isOpenHam);

  const [language, setLanguage] = useState<ILanguage>({
    name: "en",
    flag: "https://flagcdn.com/w320/gb.png",
  }); // Default language
  const handleLanguageChange = (lang: ILanguage) => {
    setLanguage(lang);
    console.log("Selected language: ", lang);
  };
  return (
    <header
      className={`bg-gray-50 p-4 ${
        !isOpenHam && "rounded-full"
      } font-medium sm:text-sm`}
    >
      <div className="flex justify-between rounded-full items-center">
        <div>
          <img src="./public/logo.png" className="w-48" />
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/*Navigation menu for larger screens */}
        <ul className="hidden lg:flex space-x-4  text-center">
          <li
            className={`cursor-pointer px-4 py-2 m-auto ${
              selected === 0 ? "bg-[#1BA7FF] text-white rounded-full" : ""
            }`}
            onClick={() => setSelected(0)}
          >
            Offshore Casinos
          </li>
          <li
            className={`cursor-pointer px-4 py-2 m-auto ${
              selected === 1 ? "bg-[#1BA7FF] text-white rounded-full" : ""
            }`}
            onClick={() => setSelected(1)}
          >
            Payment Methods
          </li>
          <li
            className={`cursor-pointer px-4 py-2 m-auto  ${
              selected === 2 ? "bg-[#1BA7FF] text-white rounded-full" : ""
            }`}
            onClick={() => setSelected(2)}
          >
            News
          </li>
          {/* language selector dropwdown for larger screens */}
          <li
            className="hidden lg:block relative font-normal "
            onClick={() => setIsOpenLang(!isOpenLang)}
          >
            <button className="p-2 cursor-pointer hover:bg-gray-200 rounded-full flex flex-row items-center bg-gray-200 w-24 justify-between">
              <img src={language.flag} className="w-8 h-6 rounded-full" />
              <span>{language.name.toUpperCase()}</span>
              <span>
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
              </span>
            </button>
            <div
              className={`absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-32 ${
                !isOpenLang && "hidden"
              }`}
            >
              <ul>
                <li
                  onClick={() =>
                    handleLanguageChange({
                      name: "en",
                      flag: "https://flagcdn.com/w320/gb.png",
                    })
                  }
                  className="p-2 cursor-pointer hover:bg-gray-200 flex flex-row items-center"
                >
                  <img
                    src="https://flagcdn.com/w320/gb.png"
                    alt="English Flag"
                    className="w-6 h-4 rounded-full"
                  />
                  English
                </li>
                <li
                  onClick={() =>
                    handleLanguageChange({
                      name: "bg",
                      flag: "https://flagcdn.com/w320/bg.png",
                    })
                  }
                  className="p-2 cursor-pointer hover:bg-gray-200 flex flex-row items-center"
                >
                  <img
                    src="https://flagcdn.com/w320/bg.png"
                    alt="Bulgarian Flag"
                    className="w-6 h-4 rounded-full"
                  />
                  Bulgarian
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/*Hamburger menu for smaller screens */}
      <div
        className={`lg:hidden ${isOpenHam ? "block" : "hidden"} mt-4 space-y-2`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li
            className={`cursor-pointer px-4 py-2 ${
              selected === 0 ? "bg-[#1BA7FF] text-white rounded-full" : ""
            }`}
            onClick={() => setSelected(0)}
          >
            Offshore Casinos
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selected === 1 ? "bg-[#1BA7FF] text-white rounded-full" : ""
            }`}
            onClick={() => setSelected(1)}
          >
            Payment Methods
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selected === 2 ? "bg-[#1BA7FF] text-white rounded-full" : ""
            }`}
            onClick={() => setSelected(2)}
          >
            News
          </li>

          {/* Language selector dropdown for smaller screens */}

          <li
            className="relative font-normal"
            onClick={() => setIsOpenLang(!isOpenLang)}
          >
            <button className="p-2 cursor-pointer hover:bg-gray-200 rounded-full flex flex-row items-center bg-gray-200 w-24 justify-between">
              <img src={language.flag} className="w-8 h-6 rounded-full" />
              <span>{language.name.toUpperCase()}</span>
              <span>
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
              </span>
            </button>
            <div
              className={`absolute right-1/2 translate-x-1/2 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-32 ${
                !isOpenLang && "hidden"
              }`}
            >
              <ul>
                <li
                  onClick={() =>
                    handleLanguageChange({
                      name: "en",
                      flag: "https://flagcdn.com/w320/gb.png",
                    })
                  }
                  className="p-2 cursor-pointer hover:bg-gray-200 flex flex-row items-center"
                >
                  <img
                    src="https://flagcdn.com/w320/gb.png"
                    alt="English Flag"
                    className="w-6 h-4 rounded-full"
                  />
                  English
                </li>
                <li
                  onClick={() =>
                    handleLanguageChange({
                      name: "bg",
                      flag: "https://flagcdn.com/w320/bg.png",
                    })
                  }
                  className="p-2 cursor-pointer hover:bg-gray-200 flex flex-row items-center"
                >
                  <img
                    src="https://flagcdn.com/w320/bg.png"
                    alt="Bulgarian Flag"
                    className="w-6 h-4 rounded-full"
                  />
                  Bulgarian
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navigation;
