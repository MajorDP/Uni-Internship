import { useState } from "react";
import { ICasino } from "../interfaces/Casino";
import CasinoInfo from "./CasinoInfo";

interface ICasinoCardProps {
  casino: ICasino;
}
function CasinoCard({ casino }: ICasinoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li className="flex flex-col lg:flex-row w-full h-auto m-auto rounded-xl shadow-xl text-sm md:text-base lg:text-lg justify-center">
        <div className="p-4 md:w-full lg:w-[16rem]">
          <img
            src={casino.img}
            className="w-full h-[10rem] rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-around p-6 w-full items-center lg:w-[30%]">
          <div className="flex flex-col xl:flex-row justify-between items-center w-full mb-4">
            <p className="font-semibold text-xs xl:text-xl">{casino.name}</p>
            <p
              className={`text-sm font-semibold ${
                casino.rating <= 25
                  ? "text-red-500"
                  : casino.rating <= 50
                  ? "text-[#FFBF00]"
                  : casino.rating <= 75
                  ? "text-[#00BE6F]"
                  : "text-green-600 animate-pulse"
              }`}
            >
              {casino.rating <= 25
                ? "Very Bad"
                : casino.rating <= 50
                ? "Average"
                : casino.rating <= 75
                ? "Very Good"
                : "Excellent"}
            </p>
          </div>
          <div className="w-full max-w-xs bg-gray-200 rounded-lg overflow-hidden">
            <div
              className={`${
                casino.rating <= 25
                  ? "bg-red-500"
                  : casino.rating <= 50
                  ? "bg-[#FFBF00]"
                  : casino.rating <= 75
                  ? "bg-[#00BE6F]"
                  : "bg-green-600 animate-pulse"
              } h-3 rounded-lg transition-all w-[${casino.rating}%]`}
            ></div>
          </div>
          <div className="text-sm flex flex-col  justify-center items-center w-[100%] pl-6 md:flex-row md:text-base lg:text-lg">
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mr-2"
            >
              <rect
                y="0.0636597"
                width="29.0446"
                height="19.8727"
                rx="4.24582"
                fill="#CDD4E4"
              />
              <path
                d="M10.8646 7.45813C10.2192 7.45813 9.84269 7.732 9.84269 8.19758C9.84269 8.49883 9.97716 8.71793 10.2999 8.80009L10.9184 8.9918C10.9991 9.01919 11.0798 9.07396 11.0798 9.15612C11.0798 9.26567 10.9991 9.34783 10.8646 9.34783C10.784 9.34783 10.7302 9.32044 10.7033 9.26567C10.6764 9.21089 10.6495 9.15612 10.6495 9.10135H9.78891C9.78891 9.70386 10.2999 9.86818 10.8377 9.86818C11.4832 9.86818 11.9135 9.6217 11.9135 9.07396C11.9135 8.80009 11.779 8.58099 11.5101 8.47145C11.2949 8.3619 10.9722 8.30713 10.8108 8.25235C10.7302 8.22496 10.6764 8.19758 10.6764 8.11542C10.6764 8.03326 10.7302 7.97848 10.8915 7.97848C10.9991 7.97848 11.0798 8.03326 11.0798 8.17019H11.8866C11.8328 7.62245 11.4294 7.45813 10.8646 7.45813ZM23.1279 7.45813V12.5247H23.3969V7.45813H23.1279ZM3.63037 7.5129L4.11445 9.81341H5.0826L5.29774 8.33451L5.51289 9.81341H6.48104L6.96513 7.5129H6.15833L5.97007 8.93702L5.75493 7.5129H4.84056L4.62541 8.93702L4.41027 7.5129H3.63037ZM7.47609 7.5129V9.81341H9.19726V9.21089H8.30979V8.96441H9.08969V8.3619H8.30979V8.11542H9.17036V7.5129H7.47609ZM12.4244 7.5129V8.11542H12.9892V9.78602H13.8767V8.11542H14.4414V7.5129H12.4244ZM15.0062 7.5129V9.81341H16.7542V9.21089H15.8668V8.96441H16.6467V8.3619H15.8668V8.11542H16.7274V7.5129H15.0062ZM17.3997 7.5129V9.81341H18.2603V8.9918H18.3678C18.5023 8.9918 18.5561 9.04657 18.583 9.15612C18.6099 9.34783 18.6368 9.64909 18.6906 9.81341H19.5511C19.4436 9.45738 19.4705 9.15612 19.4167 8.93702C19.3629 8.7727 19.2553 8.66316 19.0402 8.63577C19.3629 8.55361 19.4974 8.3619 19.4974 8.08803C19.4974 7.64984 19.2015 7.5129 18.7443 7.5129H17.3997ZM20.1966 7.5129V9.81341H20.9227V8.41667L21.4068 9.81341H22.4825V7.5129H21.7564V8.88225L21.2723 7.5129H20.1966ZM25.1449 7.5129V12.5247H25.4139V7.5129H25.1449ZM18.2872 8.03326H18.3678C18.5292 8.03326 18.6637 8.06064 18.6637 8.22496C18.6637 8.38929 18.5292 8.47145 18.3678 8.47145H18.2872V8.03326ZM18.3678 10.1968C17.5879 10.1968 17.2114 10.6898 17.2114 11.4018C17.2114 12.1139 17.5879 12.6069 18.3678 12.6069C19.1477 12.6069 19.5242 12.1139 19.5242 11.4018C19.5242 10.6898 19.1477 10.1968 18.3678 10.1968ZM9.76202 10.2516V11.7853C9.76202 12.333 10.1385 12.6069 10.8377 12.6069C11.5101 12.6069 11.9135 12.333 11.9135 11.7853V10.2516H11.026V11.7305C11.026 11.9222 10.9453 11.977 10.8377 11.977C10.7302 11.977 10.6495 11.8948 10.6495 11.7305V10.2516H9.76202ZM12.6396 10.2516V12.5521H13.3657V11.1554L13.8498 12.5521H14.9255V10.2516H14.1994V11.6483L13.7153 10.2516H12.6396ZM15.6516 10.2516V12.5521H16.5391V10.2516H15.6516ZM20.1966 10.2516V12.5521H20.9227V11.1554L21.4068 12.5521H22.4825V10.2516H21.7564V11.6483L21.2723 10.2516H20.1966ZM18.3678 10.7993C18.5023 10.7993 18.6099 10.8815 18.6099 11.4018C18.6099 11.9222 18.5023 12.0044 18.3678 12.0044C18.2334 12.0044 18.1258 11.9222 18.1258 11.4018C18.1258 10.8815 18.2334 10.7993 18.3678 10.7993Z"
                fill="white"
              />
            </svg>
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mr-2"
            >
              <rect
                x="0.474609"
                y="0.0636597"
                width="29.0446"
                height="19.8727"
                rx="4.24582"
                fill="#CDD4E4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.8586 7.20856C18.8586 6.70843 19.2591 6.30273 19.7522 6.30273C20.2461 6.30273 20.6463 6.70843 20.6463 7.20856C20.6463 7.70898 20.2461 8.11379 19.7522 8.11379C19.2591 8.11379 18.8586 7.70898 18.8586 7.20856ZM21.4278 7.04345L23.2401 6.71484V13.7646H21.4278V7.04345ZM24.0752 7.04345V13.7646H25.8887V6.71484L24.0752 7.04345ZM18.8462 8.60834V13.7647H20.6594V8.60834H18.8462ZM15.2969 10.864C15.2969 9.34946 16.1481 8.5875 17.8234 8.53278C17.8234 8.53278 18.126 8.52101 18.3046 8.55955V10.0667C17.2426 10.1038 17.1253 10.4924 17.1253 11.3988V13.7647H15.2969V10.864ZM12.904 8.60238L12.8948 8.62667C12.8298 8.79933 12.5344 9.58508 11.8713 10.3976V6.71484L10 7.08994V13.7646H11.8713V11.7011C12.4132 12.5249 12.6809 13.7646 12.6809 13.7646H14.9219C14.7004 12.8308 13.7307 11.1095 13.7307 11.1095C14.6013 9.99098 14.9832 8.79979 15.0442 8.60238H12.904ZM6.10204 8.80361C6.10204 9.28756 6.63289 9.32257 6.86201 9.33757C8.54254 9.45172 9.54412 10.2852 9.54412 11.5676C9.54412 12.699 8.64854 13.8402 6.6506 13.8402C5.72424 13.8402 4.93377 13.7478 4.23276 13.561V11.9141C4.70088 12.1092 5.47217 12.3139 6.2667 12.3139C6.99182 12.3139 7.42306 12.0709 7.42306 11.6579C7.42306 11.1596 6.90008 11.1271 6.69953 11.1146L6.69736 11.1145C4.35705 10.953 4.10498 9.55028 4.10498 8.95483C4.10498 7.92074 4.82923 6.71484 6.87334 6.71484C8.05903 6.71484 8.69819 6.90224 9.24879 7.09729L9.27637 7.10582V8.70535L9.25576 8.69947C9.03476 8.60474 8.77515 8.51177 8.77515 8.51177C8.30877 8.37027 7.65654 8.21964 7.15241 8.21964C6.86579 8.21964 6.10204 8.21964 6.10204 8.80361Z"
                fill="white"
              />
            </svg>
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mr-2"
            >
              <rect
                x="0.949707"
                y="0.0636597"
                width="29.0446"
                height="19.8727"
                rx="4.24582"
                fill="white"
              />
              <path
                d="M20.9527 10.3336C21.5382 10.3465 22.127 10.3072 22.7102 10.354C23.3007 10.4662 23.4431 11.3766 22.9184 11.6748C22.5604 11.8712 22.1352 11.748 21.7471 11.7826H20.9527V10.3336ZM23.0487 8.69347C23.1788 9.16103 22.7362 9.58084 22.294 9.51645H20.9527C20.9622 9.07552 20.9344 8.59693 20.9664 8.17921C21.5037 8.19462 22.0459 8.14778 22.5801 8.2037C22.8096 8.26243 23.0017 8.45458 23.0487 8.69347ZM26.2765 1.75955C26.3015 2.65249 26.2802 3.59263 26.2873 4.50368C26.2857 8.20768 26.2908 11.9116 26.2845 15.6158C26.2609 17.004 25.0529 18.2102 23.6991 18.2379C22.3441 18.2435 20.9889 18.2387 19.6337 18.2403V12.6406C21.1103 12.6328 22.5876 12.6564 24.0635 12.6289C24.7482 12.5851 25.4982 12.125 25.5301 11.3577C25.6107 10.5871 24.8972 10.054 24.2199 9.96984C23.9595 9.96295 23.9671 9.89254 24.2199 9.86182C24.8659 9.71962 25.3733 9.03868 25.1832 8.35672C25.0212 7.63945 24.2427 7.36184 23.5952 7.36322C22.2749 7.35408 20.9543 7.36194 19.634 7.35929C19.6425 6.31389 19.6162 5.26738 19.6482 4.22275C19.7528 2.85964 20.9913 1.73552 22.3259 1.75991C23.643 1.75971 24.9598 1.75971 26.2765 1.75966V1.75955Z"
                fill="#CDD4E4"
              />
              <path
                d="M4.71383 4.36376C4.74755 2.97779 5.96077 1.78147 7.31273 1.76122C8.66274 1.75698 10.0129 1.76061 11.363 1.75938C11.3592 6.39653 11.3703 11.0342 11.3574 15.6711C11.3054 17.0402 10.1054 18.2137 8.76816 18.238C7.41559 18.243 6.06288 18.2387 4.71027 18.2401V12.4516C6.0241 12.7677 7.40187 12.9022 8.7422 12.6926C9.54339 12.5613 10.42 12.1606 10.6912 11.3141C10.8908 10.5901 10.7785 9.82808 10.8082 9.08494V7.35912H8.48858C8.47816 8.50053 8.50993 9.64394 8.4718 10.784C8.40927 11.4847 7.72783 11.9299 7.07886 11.9062C6.27401 11.9148 4.67911 11.3122 4.67911 11.3122C4.6751 9.17362 4.70246 6.49541 4.71383 4.36396V4.36376Z"
                fill="#CDD4E4"
              />
              <path
                d="M12.2285 8.05543C12.1064 8.0818 12.2039 7.63189 12.1727 7.46122C12.181 6.3821 12.1553 5.30181 12.1869 4.22346C12.2912 2.85458 13.5392 1.72766 14.8793 1.7597H18.8257C18.822 6.39685 18.833 11.0345 18.8201 15.6714C18.7681 17.0405 17.568 18.214 16.2307 18.2383C14.8781 18.2435 13.5254 18.2391 12.1727 18.2404V11.8984C13.0965 12.6703 14.3521 12.7904 15.503 12.7925C16.3707 12.7922 17.2333 12.656 18.0759 12.4522V11.2903C17.1263 11.7723 16.0101 12.0784 14.9574 11.8015C14.2231 11.6154 13.6901 10.8927 13.702 10.121C13.6169 9.31848 14.0788 8.47121 14.8533 8.23263C15.8148 7.92609 16.8627 8.16053 17.764 8.55907C17.9571 8.66203 18.1531 8.78974 18.0759 8.46105V7.54781C16.5685 7.18259 14.9643 7.0482 13.45 7.44551C13.0116 7.57143 12.5845 7.76241 12.2285 8.05553V8.05543Z"
                fill="#CDD4E4"
              />
            </svg>
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mr-2"
            >
              <rect
                x="0.424316"
                y="0.0636597"
                width="29.0446"
                height="19.8727"
                rx="4.24582"
                fill="#CDD4E4"
              />
              <path
                d="M19.1739 10.8143C18.8407 12.5109 17.3746 13.97 15.5753 14.1736C14.8422 14.2415 14.1758 14.1397 13.5427 13.8682C13.4428 13.97 12.2099 15.2255 12.0767 15.3612C13.1429 16.0059 14.4424 16.3452 15.7752 16.2095C18.041 15.972 19.9069 14.445 20.7732 12.4431L19.1739 10.8143Z"
                fill="white"
              />
              <path
                d="M19.1739 10.8143C18.8407 12.5109 17.3746 13.97 15.5753 14.1736C14.8422 14.2415 14.1758 14.1397 13.5427 13.8682C13.4428 13.97 12.2099 15.2255 12.0767 15.3612C13.1429 16.0059 14.4424 16.3452 15.7752 16.2095C18.041 15.972 19.9069 14.445 20.7732 12.4431L19.1739 10.8143Z"
                fill="white"
              />
              <path
                d="M10.8433 14.4112C11.0765 14.6487 11.3097 14.8523 11.5763 15.0559L20.1063 6.36931C19.9063 6.09785 19.7064 5.86033 19.4732 5.6228L10.8433 14.4112Z"
                fill="white"
              />
              <path
                d="M19.1068 5.28342C18.8069 5.0459 18.5736 4.84231 18.3071 4.67265C17.2075 3.99401 15.908 3.65469 14.5419 3.79042C11.1766 4.12974 8.7442 7.18361 9.0774 10.6107C9.17736 11.6626 9.51056 12.5448 10.0104 13.3592C10.1436 13.5967 10.5102 14.0379 10.5102 14.0379L19.1068 5.28342ZM14.9084 5.7924C15.6081 5.72454 16.3079 5.82633 16.9076 6.09779L11.5098 11.5948C11.3432 11.2215 11.2432 10.8143 11.2099 10.4071C11.01 8.09977 12.6427 6.02992 14.9084 5.7924Z"
                fill="white"
              />
            </svg>
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mr-2"
            >
              <rect
                x="0.899414"
                y="0.0636597"
                width="29.0446"
                height="19.8727"
                rx="4.24582"
                fill="#CDD4E4"
              />
              <path
                d="M8.3877 10C8.3877 6.04858 11.5418 2.83661 15.4219 2.83661C19.3021 2.83661 22.4562 6.04858 22.4562 10C22.4562 13.9514 19.3021 17.1634 15.4219 17.1634C11.5418 17.1634 8.3877 13.9514 8.3877 10ZM15.4219 16.655C19.0298 16.655 21.957 13.6741 21.957 10C21.957 6.32588 19.0298 3.34498 15.4219 3.34498C11.8141 3.34498 8.8869 6.32588 8.8869 10C8.8869 13.6741 11.8141 16.655 15.4219 16.655Z"
                fill="white"
              />
              <path
                d="M14.2874 16.5626C11.2241 16.008 8.8869 13.2813 8.8869 10C8.8869 6.32588 11.8141 3.34498 15.4219 3.34498C15.9212 3.34498 16.3977 3.4143 16.8742 3.50673L16.9649 3.02147C16.4657 2.90593 15.9438 2.83661 15.4219 2.83661C11.5418 2.83661 8.3877 6.04858 8.3877 10C8.3877 13.5355 10.8837 16.4702 14.1966 17.0479L14.2874 16.5626Z"
                fill="white"
              />
              <path
                d="M17.3282 8.63669C18.4401 10.3929 17.9636 12.7268 16.239 13.859C14.5145 14.9913 12.2227 14.5061 11.1108 12.7499L12.1773 12.0104C12.9034 13.1427 14.4011 13.4662 15.5129 12.7268C16.6248 11.9873 16.9425 10.4622 16.2163 9.32993L17.3282 8.63669Z"
                fill="white"
              />
              <path
                d="M16.239 13.859C14.5145 14.9913 12.2227 14.5061 11.1108 12.7499L12.1773 12.0104C12.9034 13.1427 14.4011 13.4662 15.5129 12.7268C16.6248 11.9873 16.9425 10.4622 16.2163 9.32993L17.3282 8.61359"
                fill="white"
              />
            </svg>
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mr-2"
            >
              <rect
                x="0.374023"
                y="0.0636597"
                width="29.0446"
                height="19.8727"
                rx="4.24582"
                fill="#CDD4E4"
              />
              <path
                d="M11.2387 7.45813C10.5932 7.45813 10.2167 7.732 10.2167 8.19758C10.2167 8.49883 10.3512 8.71793 10.6739 8.80009L11.2924 8.9918C11.3731 9.01919 11.4538 9.07396 11.4538 9.15612C11.4538 9.26567 11.3731 9.34783 11.2387 9.34783C11.158 9.34783 11.1042 9.32044 11.0773 9.26567C11.0504 9.21089 11.0235 9.15612 11.0235 9.10135H10.1629C10.1629 9.70386 10.6739 9.86818 11.2118 9.86818C11.8572 9.86818 12.2875 9.6217 12.2875 9.07396C12.2875 8.80009 12.153 8.58099 11.8841 8.47145C11.669 8.3619 11.3462 8.30713 11.1849 8.25235C11.1042 8.22496 11.0504 8.19758 11.0504 8.11542C11.0504 8.03326 11.1042 7.97848 11.2656 7.97848C11.3731 7.97848 11.4538 8.03326 11.4538 8.17019H12.2606C12.2068 7.62245 11.8034 7.45813 11.2387 7.45813ZM23.502 7.45813V12.5247H23.7709V7.45813H23.502ZM4.00439 7.5129L4.48847 9.81341H5.45663L5.67177 8.33451L5.88692 9.81341H6.85507L7.33915 7.5129H6.53235L6.3441 8.93702L6.12896 7.5129H5.21459L4.99944 8.93702L4.7843 7.5129H4.00439ZM7.85012 7.5129V9.81341H9.57128V9.21089H8.68381V8.96441H9.46371V8.3619H8.68381V8.11542H9.54439V7.5129H7.85012ZM12.7985 7.5129V8.11542H13.3632V9.78602H14.2507V8.11542H14.8155V7.5129H12.7985ZM15.3802 7.5129V9.81341H17.1283V9.21089H16.2408V8.96441H17.0207V8.3619H16.2408V8.11542H17.1014V7.5129H15.3802ZM17.7737 7.5129V9.81341H18.6343V8.9918H18.7419C18.8763 8.9918 18.9301 9.04657 18.957 9.15612C18.9839 9.34783 19.0108 9.64909 19.0646 9.81341H19.9252C19.8176 9.45738 19.8445 9.15612 19.7907 8.93702C19.7369 8.7727 19.6293 8.66316 19.4142 8.63577C19.7369 8.55361 19.8714 8.3619 19.8714 8.08803C19.8714 7.64984 19.5756 7.5129 19.1184 7.5129H17.7737ZM20.5706 7.5129V9.81341H21.2967V8.41667L21.7808 9.81341H22.8565V7.5129H22.1304V8.88225L21.6463 7.5129H20.5706ZM25.519 7.5129V12.5247H25.7879V7.5129H25.519ZM18.6612 8.03326H18.7419C18.9032 8.03326 19.0377 8.06064 19.0377 8.22496C19.0377 8.38929 18.9032 8.47145 18.7419 8.47145H18.6612V8.03326ZM18.7419 10.1968C17.962 10.1968 17.5855 10.6898 17.5855 11.4018C17.5855 12.1139 17.962 12.6069 18.7419 12.6069C19.5218 12.6069 19.8983 12.1139 19.8983 11.4018C19.8983 10.6898 19.5218 10.1968 18.7419 10.1968ZM10.136 10.2516V11.7853C10.136 12.333 10.5125 12.6069 11.2118 12.6069C11.8841 12.6069 12.2875 12.333 12.2875 11.7853V10.2516H11.4V11.7305C11.4 11.9222 11.3193 11.977 11.2118 11.977C11.1042 11.977 11.0235 11.8948 11.0235 11.7305V10.2516H10.136ZM13.0136 10.2516V12.5521H13.7397V11.1554L14.2238 12.5521H15.2995V10.2516H14.5734V11.6483L14.0893 10.2516H13.0136ZM16.0256 10.2516V12.5521H16.9131V10.2516H16.0256ZM20.5706 10.2516V12.5521H21.2967V11.1554L21.7808 12.5521H22.8565V10.2516H22.1304V11.6483L21.6463 10.2516H20.5706ZM18.7419 10.7993C18.8763 10.7993 18.9839 10.8815 18.9839 11.4018C18.9839 11.9222 18.8763 12.0044 18.7419 12.0044C18.6074 12.0044 18.4998 11.9222 18.4998 11.4018C18.4998 10.8815 18.6074 10.7993 18.7419 10.7993Z"
                fill="white"
              />
            </svg>
            <p className="text-[#4C0202] font-medium bg-[#E5E9F3] w-8 md:w-16 md:h-12 h-8 flex items-center justify-center py-0 my-0 text-[15px] text-center rounded-md">
              <span>20+</span>
            </p>
          </div>
        </div>
        <div className="w-px h-[10rem] my-6 bg-gray-200"></div>
        <div className="flex flex-col lg:flex-row lg:w-[40%] justify-between items-center mt-4 md:mt-0">
          <div className="flex flex-col p-6 w-full md:w-[90%] h-[70%] lg:h-[60%] xl:h-[50%] justify-between xl:mb-4">
            <p className="text-center lg:text-start text-xs xl:text-sm">
              Welcome bonus
            </p>
            <p className="font-bold text-sm xl:text-xl text-center lg:text-start">
              {casino.welcomeBonus}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <button className="bg-[#00BE6F] text-white py-2 px-2 rounded-full w-[40%] lg:w-[80%] mb-2 text-sm md:text-base lg:text-lg">
              Play Now
            </button>
            <div className="flex flex-row sm:flex-col lg:flex-row items-center justify-start">
              <button
                className="mr-2 text-blue-500 text-sm lg:text-lg cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? "More info" : " Less info"}
              </button>
              <span
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              >
                {!isOpen ? (
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
                ) : (
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
                    <path d="M5 15l7-7 7 7"></path>
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>
      </li>
      {isOpen && <CasinoInfo casino={casino} />}
    </>
  );
}

export default CasinoCard;
