import { useState } from "react";
import Navigation from "./components/Navigation";
import CasinoCard from "./components/CasinoCard";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.jpeg";
import { ICasino } from "./interfaces/Casino";
import Filters from "./components/Filters";
import CashoutSteps from "./components/CashoutSteps";
import PayoutsTested from "./components/PayoutsTested";
import CasinoImages from "./components/CasinoImages";
import Payments from "./components/Payments";
import WireFrame from "./components/WireFrame";
import BulletElements from "./components/BulletElements";
import WPComponent from "./components/WPComponent";
import LeftAlignedText from "./components/LeftAlignedText";
import FAQ from "./components/FAQ";
import HowToChoose from "./components/HowToChoose";
import CasinoProsAndCons from "./components/CasinoProsAndCons";
import StickyTableOfContents from "./components/StickyTableOfContents";
import RecommendedCasinos from "./components/RecommendedCasinos";
import Footer from "./components/Footer";
import CasinoReview from "./components/CasinoReview";
import Text from "./components/Text";

function App() {
  const [selectedOption, setSelectedOption] = useState(0);

  const casinosList: ICasino[] = [
    {
      img: img1,
      name: "Cadabrus Casino",
      rating: 75,
      sponsors: [],
      welcomeBonus: "$200 + 200 Free Spins",
      casinodetails: {
        onlineSince: 2019,
        foundedDate: 2022,
        license: "MGA",
        website: "octocasino.com",
      },
      payments: {
        minDeposit: 20,
        minWithdrawal: 50,
        maxWithdrawal: 50000,
        wager: 50,
      },
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
    },
    {
      img: img2,
      name: "Bet365",
      rating: 50,
      sponsors: [],
      welcomeBonus: "$200 + 200 Free Spins",
      casinodetails: {
        onlineSince: 2019,
        foundedDate: 2022,
        license: "MGA",
        website: "octocasino.com",
      },
      payments: {
        minDeposit: 20,
        minWithdrawal: 20,
        maxWithdrawal: 20,
        wager: 20,
      },
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
    },
    {
      img: img3,
      name: "LeoVegas",
      rating: 40,
      sponsors: [],
      welcomeBonus: "$200 + 200 Free Spins",
      casinodetails: {
        onlineSince: 2019,
        foundedDate: 2022,
        license: "MGA",
        website: "octocasino.com",
      },
      payments: {
        minDeposit: 20,
        minWithdrawal: 20,
        maxWithdrawal: 20,
        wager: 20,
      },
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
    },
  ];
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
        <p className="w-full xl:w-1/2 text-xs xl:text-base text-center m-auto mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam." Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          <span className="text-blue-600 underline cursor-pointer">
            Read more
          </span>
        </p>
        <Filters
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <div className="w-full xl:w-[95%] m-auto">
        <ul className="flex flex-col">
          {casinosList.map((casino) => (
            <CasinoCard casino={casino} />
          ))}
        </ul>
      </div>
      <PayoutsTested />
      <CashoutSteps />
      <CasinoImages />
      <Payments />
      <WireFrame />
      <BulletElements />
      <WireFrame />
      <WPComponent />
      <LeftAlignedText />

      <div className="w-full xl:w-[95%] m-auto mt-5">
        <ul className="flex flex-col">
          <CasinoCard casino={casinosList[0]} />
        </ul>
      </div>
      <Text />
      <FAQ />
      <HowToChoose />
      <CasinoReview />
      <CasinoReview />
      <CasinoProsAndCons />
      <StickyTableOfContents />
      <RecommendedCasinos />
      <Footer />
    </div>
  );
}

export default App;
