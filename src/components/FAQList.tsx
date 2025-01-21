import { useState } from "react";

interface IHeadline {
  headline: string;
}

function FAQList({ headline }: IHeadline) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <li
      className="cursor-pointer font-medium w-full"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between rounded-md mt-5 items-center p-2 w-full">
        <p
          className={`p-2 ${
            !isOpen ? "text-blue-500" : ""
          } transition-all duration-300`}
        >
          {headline}
        </p>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`cursor-pointer ${!isOpen ? "text-blue-500" : ""}`}
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`cursor-pointer ${!isOpen ? "text-blue-500" : ""}`}
          >
            <path d="M6 15l6-6 6 6"></path>
          </svg>
        )}
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-0" : "max-h-[500px]"
        }`}
      >
        <p className="rounded-b-md mt-1 p-4 font-normal text-[16px]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature.
        </p>
      </div>
    </li>
  );
}

export default FAQList;
