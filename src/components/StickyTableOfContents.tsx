import { useState } from "react";

function StickyTableOfContents() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="w-full xl:w-[85%] m-auto mt-24 flex flex-col lg:flex-row">
      <div className="w-[90%] lg:text-start text-justify m-auto lg:m-0 lg:w-[30%] ">
        <h3 className="font-semibold text-center lg:text-start text-[16px] xl:text-[18px]">
          Table of Contents
        </h3>
        <ul className="p-3 text-[13px] xl:text-[16px] text-center lg:text-start">
          <li
            className={`${
              selected === 0 && "font-semibold"
            } m-1 cursor-pointer`}
            onClick={() => setSelected(0)}
          >
            Intro
          </li>
          <li
            className={`${
              selected === 1 && "font-semibold"
            } m-1 cursor-pointer`}
            onClick={() => setSelected(1)}
          >
            How to payout faster
          </li>
          <li
            className={`${
              selected === 2 && "font-semibold"
            } m-1 cursor-pointer`}
            onClick={() => setSelected(2)}
          >
            Verification is the key
          </li>
          <li
            className={`${
              selected === 3 && "font-semibold"
            } m-1 cursor-pointer`}
            onClick={() => setSelected(3)}
          >
            Loreal lipsum
          </li>
          <li
            className={`${
              selected === 4 && "font-semibold"
            } m-1 cursor-pointer`}
            onClick={() => setSelected(4)}
          >
            Are crypto currencies worthy?
          </li>
          <li
            className={`${
              selected === 5 && "font-semibold"
            } m-1 cursor-pointer`}
            onClick={() => setSelected(5)}
          >
            5 Facts to consider before playing
          </li>
          <li
            className={`${
              selected === 6 && "font-semibold"
            } m-1 cursor-pointer`}
            onClick={() => setSelected(6)}
          >
            Curacao licensed casinos
          </li>
          <li
            className={`${
              selected === 7 && "font-semibold"
            } m-1 cursor-pointer`}
            onClick={() => setSelected(7)}
          >
            No-verification casinos
          </li>
          <li
            className={`${
              selected === 8 && "font-semibold"
            } m-1 cursor-pointer`}
            onClick={() => setSelected(8)}
          >
            The bottom line
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-[70%] mt-5 lg:mt-0">
        <h1 className="text-start text-[24px] md:text-[34px] mb-10 font-bold text-[#0A0F4F]">
          Sticky Table of
          <span className="ml-2 bg-gradient-to-t from-yellow-400 to-transparent">
            Contents
          </span>
        </h1>
        <p className="text-[16px]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>

        <h1 className=" text-start text-[20px] sm:text-[22px] mt-10 mb-5 font-bold text-[#0A0F4F]">
          What is child identity Theft?
        </h1>
        <p className="text-[16px]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </div>
    </div>
  );
}

export default StickyTableOfContents;
