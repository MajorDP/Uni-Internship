import img1 from "../../public/img1.png";
import casinoGods from "../../public/casinoGods.png";

function CasinoReview() {
  return (
    <div className="w-full xl:w-[85%] m-auto mt-24">
      <div className="bg-[#40B6FF] text-white flex flex-col sm:flex-row justify-between p-5 rounded-t-xl ">
        <p className=" text-[14px] sm:text-[22px] font-bold text-center sm:text-base">
          Casino Gods Review
        </p>
        <div className="flex flex-row justify-between text-[12px] sm:text-base">
          <p>
            Reviewed by: <span className="font-semibold">Gery</span>
          </p>
          <div className="hidden sm:block p-[0.5px] m-1 mr-2 ml-2 bg-white"></div>
          <p>
            Updated: <span className="font-semibold">13-05-2022</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="bg-gray-100 p-3 flex flex-col">
          <div className="sm:w-[16rem] sm:h-[12rem]">
            <img
              src={img1}
              alt="img"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className=" flex flex-col justify-between h-[20rem]">
            <div className="flex flex-row justify-between bg-white p-2 mt-3 rounded-xl text-[15px]">
              <p>Online since</p>
              <p className="font-bold">2019</p>
            </div>
            <div className="flex flex-row justify-between bg-white p-2 rounded-xl text-[15px]">
              <p>License</p>
              <p className="font-bold">MGA</p>
            </div>
            <div className="flex flex-row justify-between bg-white p-2 rounded-xl text-[15px]">
              <p>Website</p>
              <p className="font-bold">octacasino.com</p>
            </div>

            <div className="flex flex-col text-[14px] my-3">
              <p className=" mt-2 flex flex-row">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_58_3125)">
                    <path
                      d="M22.0936 5.57949C21.5161 3.45383 19.3054 1.24266 17.1793 0.665156C15.8756 0.340312 14.1294 0.00558594 11.7588 0C9.3882 0.00558594 7.64195 0.340312 6.33828 0.665156C4.21262 1.24266 2.00145 3.4534 1.42395 5.57949C1.0991 6.88316 0.764375 8.62941 0.758789 11C0.764375 13.3706 1.0991 15.1168 1.42395 16.4205C2.00145 18.5466 4.21262 20.7573 6.33828 21.3348C7.64195 21.6597 9.38906 21.9944 11.7588 22C14.1289 21.9944 15.8756 21.6597 17.1793 21.3348C19.3054 20.7573 21.5161 18.5466 22.0936 16.4205C22.4185 15.1168 22.7532 13.3697 22.7588 11C22.7532 8.62941 22.4185 6.88316 22.0936 5.57949Z"
                      fill="#0090E9"
                      fill-opacity="0.08"
                    />
                  </g>
                  <g filter="url(#filter1_ii_58_3125)">
                    <path
                      d="M11.7588 3.69531C10.3141 3.69531 8.90177 4.12373 7.70052 4.92637C6.49928 5.72902 5.56302 6.86986 5.01014 8.20462C4.45727 9.53937 4.31261 11.0081 4.59446 12.4251C4.87632 13.842 5.57202 15.1436 6.5936 16.1652C7.61518 17.1868 8.91675 17.8825 10.3337 18.1643C11.7507 18.4462 13.2194 18.3015 14.5542 17.7486C15.8889 17.1958 17.0298 16.2595 17.8324 15.0583C18.6351 13.857 19.0635 12.4447 19.0635 11C19.0635 9.06268 18.2939 7.2047 16.924 5.83481C15.5541 4.46491 13.6961 3.69531 11.7588 3.69531Z"
                      fill="#1BA7FF"
                    />
                  </g>
                  <path
                    d="M15.9265 9.79094L11.5338 14.4023C11.4142 14.528 11.2705 14.6281 11.1112 14.6969C10.9519 14.7656 10.7805 14.8015 10.607 14.8024H10.6014C10.429 14.8024 10.2583 14.7678 10.0994 14.7006C9.94061 14.6334 9.79687 14.5351 9.67673 14.4114L7.34653 12.0107C7.21981 11.8913 7.11858 11.7475 7.04896 11.5879C6.97934 11.4283 6.94276 11.2563 6.94144 11.0822C6.94012 10.9081 6.97408 10.7356 7.04127 10.5749C7.10847 10.4143 7.2075 10.269 7.3324 10.1477C7.45729 10.0264 7.60546 9.93167 7.76798 9.8692C7.93049 9.80674 8.10397 9.77784 8.27795 9.78425C8.45194 9.79067 8.62282 9.83226 8.78029 9.90652C8.93776 9.98078 9.07856 10.0862 9.19419 10.2163L10.5907 11.6554L14.0578 8.01418C14.1745 7.89148 14.3142 7.79296 14.4689 7.72424C14.6236 7.65553 14.7904 7.61796 14.9597 7.61369C15.1289 7.60942 15.2974 7.63853 15.4554 7.69936C15.6134 7.76019 15.7579 7.85154 15.8806 7.9682C16.0033 8.08487 16.1018 8.22456 16.1705 8.37929C16.2392 8.53403 16.2768 8.70079 16.281 8.87005C16.2853 9.0393 16.2562 9.20774 16.1954 9.36575C16.1345 9.52376 16.0432 9.66824 15.9265 9.79094Z"
                    fill="#F8FAFE"
                  />
                  <defs>
                    <filter
                      id="filter0_i_58_3125"
                      x="0.758789"
                      y="0"
                      width="22"
                      height="22.557"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.556962" />
                      <feGaussianBlur stdDeviation="0.556962" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.00674429 0 0 0 0 0.376232 0 0 0 0 0.605914 0 0 0 0.09 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_58_3125"
                      />
                    </filter>
                    <filter
                      id="filter1_ii_58_3125"
                      x="4.4541"
                      y="3.55607"
                      width="14.6094"
                      height="15.3056"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.556962" />
                      <feGaussianBlur stdDeviation="0.348101" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.29 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_58_3125"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-0.139241" />
                      <feGaussianBlur stdDeviation="0.208861" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow_58_3125"
                        result="effect2_innerShadow_58_3125"
                      />
                    </filter>
                  </defs>
                </svg>
                <span className="ml-2">MGA license</span>
              </p>
              <p className=" mt-2 flex flex-row">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_58_3125)">
                    <path
                      d="M22.0936 5.57949C21.5161 3.45383 19.3054 1.24266 17.1793 0.665156C15.8756 0.340312 14.1294 0.00558594 11.7588 0C9.3882 0.00558594 7.64195 0.340312 6.33828 0.665156C4.21262 1.24266 2.00145 3.4534 1.42395 5.57949C1.0991 6.88316 0.764375 8.62941 0.758789 11C0.764375 13.3706 1.0991 15.1168 1.42395 16.4205C2.00145 18.5466 4.21262 20.7573 6.33828 21.3348C7.64195 21.6597 9.38906 21.9944 11.7588 22C14.1289 21.9944 15.8756 21.6597 17.1793 21.3348C19.3054 20.7573 21.5161 18.5466 22.0936 16.4205C22.4185 15.1168 22.7532 13.3697 22.7588 11C22.7532 8.62941 22.4185 6.88316 22.0936 5.57949Z"
                      fill="#0090E9"
                      fill-opacity="0.08"
                    />
                  </g>
                  <g filter="url(#filter1_ii_58_3125)">
                    <path
                      d="M11.7588 3.69531C10.3141 3.69531 8.90177 4.12373 7.70052 4.92637C6.49928 5.72902 5.56302 6.86986 5.01014 8.20462C4.45727 9.53937 4.31261 11.0081 4.59446 12.4251C4.87632 13.842 5.57202 15.1436 6.5936 16.1652C7.61518 17.1868 8.91675 17.8825 10.3337 18.1643C11.7507 18.4462 13.2194 18.3015 14.5542 17.7486C15.8889 17.1958 17.0298 16.2595 17.8324 15.0583C18.6351 13.857 19.0635 12.4447 19.0635 11C19.0635 9.06268 18.2939 7.2047 16.924 5.83481C15.5541 4.46491 13.6961 3.69531 11.7588 3.69531Z"
                      fill="#1BA7FF"
                    />
                  </g>
                  <path
                    d="M15.9265 9.79094L11.5338 14.4023C11.4142 14.528 11.2705 14.6281 11.1112 14.6969C10.9519 14.7656 10.7805 14.8015 10.607 14.8024H10.6014C10.429 14.8024 10.2583 14.7678 10.0994 14.7006C9.94061 14.6334 9.79687 14.5351 9.67673 14.4114L7.34653 12.0107C7.21981 11.8913 7.11858 11.7475 7.04896 11.5879C6.97934 11.4283 6.94276 11.2563 6.94144 11.0822C6.94012 10.9081 6.97408 10.7356 7.04127 10.5749C7.10847 10.4143 7.2075 10.269 7.3324 10.1477C7.45729 10.0264 7.60546 9.93167 7.76798 9.8692C7.93049 9.80674 8.10397 9.77784 8.27795 9.78425C8.45194 9.79067 8.62282 9.83226 8.78029 9.90652C8.93776 9.98078 9.07856 10.0862 9.19419 10.2163L10.5907 11.6554L14.0578 8.01418C14.1745 7.89148 14.3142 7.79296 14.4689 7.72424C14.6236 7.65553 14.7904 7.61796 14.9597 7.61369C15.1289 7.60942 15.2974 7.63853 15.4554 7.69936C15.6134 7.76019 15.7579 7.85154 15.8806 7.9682C16.0033 8.08487 16.1018 8.22456 16.1705 8.37929C16.2392 8.53403 16.2768 8.70079 16.281 8.87005C16.2853 9.0393 16.2562 9.20774 16.1954 9.36575C16.1345 9.52376 16.0432 9.66824 15.9265 9.79094Z"
                    fill="#F8FAFE"
                  />
                  <defs>
                    <filter
                      id="filter0_i_58_3125"
                      x="0.758789"
                      y="0"
                      width="22"
                      height="22.557"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.556962" />
                      <feGaussianBlur stdDeviation="0.556962" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.00674429 0 0 0 0 0.376232 0 0 0 0 0.605914 0 0 0 0.09 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_58_3125"
                      />
                    </filter>
                    <filter
                      id="filter1_ii_58_3125"
                      x="4.4541"
                      y="3.55607"
                      width="14.6094"
                      height="15.3056"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.556962" />
                      <feGaussianBlur stdDeviation="0.348101" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.29 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_58_3125"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-0.139241" />
                      <feGaussianBlur stdDeviation="0.208861" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow_58_3125"
                        result="effect2_innerShadow_58_3125"
                      />
                    </filter>
                  </defs>
                </svg>
                <span className="ml-2">Fantastic game variety</span>
              </p>
              <p className=" mt-2 flex flex-row">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_58_3125)">
                    <path
                      d="M22.0936 5.57949C21.5161 3.45383 19.3054 1.24266 17.1793 0.665156C15.8756 0.340312 14.1294 0.00558594 11.7588 0C9.3882 0.00558594 7.64195 0.340312 6.33828 0.665156C4.21262 1.24266 2.00145 3.4534 1.42395 5.57949C1.0991 6.88316 0.764375 8.62941 0.758789 11C0.764375 13.3706 1.0991 15.1168 1.42395 16.4205C2.00145 18.5466 4.21262 20.7573 6.33828 21.3348C7.64195 21.6597 9.38906 21.9944 11.7588 22C14.1289 21.9944 15.8756 21.6597 17.1793 21.3348C19.3054 20.7573 21.5161 18.5466 22.0936 16.4205C22.4185 15.1168 22.7532 13.3697 22.7588 11C22.7532 8.62941 22.4185 6.88316 22.0936 5.57949Z"
                      fill="#0090E9"
                      fill-opacity="0.08"
                    />
                  </g>
                  <g filter="url(#filter1_ii_58_3125)">
                    <path
                      d="M11.7588 3.69531C10.3141 3.69531 8.90177 4.12373 7.70052 4.92637C6.49928 5.72902 5.56302 6.86986 5.01014 8.20462C4.45727 9.53937 4.31261 11.0081 4.59446 12.4251C4.87632 13.842 5.57202 15.1436 6.5936 16.1652C7.61518 17.1868 8.91675 17.8825 10.3337 18.1643C11.7507 18.4462 13.2194 18.3015 14.5542 17.7486C15.8889 17.1958 17.0298 16.2595 17.8324 15.0583C18.6351 13.857 19.0635 12.4447 19.0635 11C19.0635 9.06268 18.2939 7.2047 16.924 5.83481C15.5541 4.46491 13.6961 3.69531 11.7588 3.69531Z"
                      fill="#1BA7FF"
                    />
                  </g>
                  <path
                    d="M15.9265 9.79094L11.5338 14.4023C11.4142 14.528 11.2705 14.6281 11.1112 14.6969C10.9519 14.7656 10.7805 14.8015 10.607 14.8024H10.6014C10.429 14.8024 10.2583 14.7678 10.0994 14.7006C9.94061 14.6334 9.79687 14.5351 9.67673 14.4114L7.34653 12.0107C7.21981 11.8913 7.11858 11.7475 7.04896 11.5879C6.97934 11.4283 6.94276 11.2563 6.94144 11.0822C6.94012 10.9081 6.97408 10.7356 7.04127 10.5749C7.10847 10.4143 7.2075 10.269 7.3324 10.1477C7.45729 10.0264 7.60546 9.93167 7.76798 9.8692C7.93049 9.80674 8.10397 9.77784 8.27795 9.78425C8.45194 9.79067 8.62282 9.83226 8.78029 9.90652C8.93776 9.98078 9.07856 10.0862 9.19419 10.2163L10.5907 11.6554L14.0578 8.01418C14.1745 7.89148 14.3142 7.79296 14.4689 7.72424C14.6236 7.65553 14.7904 7.61796 14.9597 7.61369C15.1289 7.60942 15.2974 7.63853 15.4554 7.69936C15.6134 7.76019 15.7579 7.85154 15.8806 7.9682C16.0033 8.08487 16.1018 8.22456 16.1705 8.37929C16.2392 8.53403 16.2768 8.70079 16.281 8.87005C16.2853 9.0393 16.2562 9.20774 16.1954 9.36575C16.1345 9.52376 16.0432 9.66824 15.9265 9.79094Z"
                    fill="#F8FAFE"
                  />
                  <defs>
                    <filter
                      id="filter0_i_58_3125"
                      x="0.758789"
                      y="0"
                      width="22"
                      height="22.557"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.556962" />
                      <feGaussianBlur stdDeviation="0.556962" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.00674429 0 0 0 0 0.376232 0 0 0 0 0.605914 0 0 0 0.09 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_58_3125"
                      />
                    </filter>
                    <filter
                      id="filter1_ii_58_3125"
                      x="4.4541"
                      y="3.55607"
                      width="14.6094"
                      height="15.3056"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.556962" />
                      <feGaussianBlur stdDeviation="0.348101" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.29 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_58_3125"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-0.139241" />
                      <feGaussianBlur stdDeviation="0.208861" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow_58_3125"
                        result="effect2_innerShadow_58_3125"
                      />
                    </filter>
                  </defs>
                </svg>
                <span className="ml-2">Brand new casino</span>
              </p>
            </div>

            <button className="bg-[#00BE6F] px-5 py-2 text-white rounded-xl">
              Play Now
            </button>
            <p className="text-[12px] mt-2 m-auto text-center flex flex-row">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.714844 5.33334H15.8032C14.7048 2.22628 11.7422 0 8.259 0C4.77584 0 1.81316 2.22628 0.714844 5.33334Z"
                  fill="#F0F0F0"
                />
                <path
                  d="M0.258789 7.99966C0.258789 8.93479 0.419789 9.8322 0.714633 10.6663H15.8029C16.0978 9.8322 16.2588 8.93479 16.2588 7.99966C16.2588 7.06454 16.0978 6.16713 15.8029 5.33301H0.714633C0.419789 6.16713 0.258789 7.06454 0.258789 7.99966Z"
                  fill="#00966E"
                />
                <path
                  d="M15.8032 10.667H0.714844C1.81316 13.7741 4.77584 16.0003 8.259 16.0003C11.7422 16.0003 14.7048 13.7741 15.8032 10.667Z"
                  fill="#D62612"
                />
              </svg>
              <span className=" ml-2">
                Bulgarian players{" "}
                <span className="text-[#EA0101] font-bold text-[14px]">
                  not accepted.
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="p-10">
          <p className="text-[18px] text-justify sm:text-base">
            The Casino Gods has an ancient Greek theme, with many promotions for
            new and existing customers. Its gaming catalog has more than 1000
            online casino games, which are available on instant play.
          </p>
          <img src={casinoGods} className="rounded-xl my-6" />
          <p className="text-[18px] text-justify sm:text-base">
            Casino Gods has very generous offers when it comes to their
            promotions. A good deal is an essential part of every good casino
            and it is also the best way for these venues to attract new
            customers and keep them around and interested. Usually, the casino’s
            most generous offers come in the form of a welcoming bonus to
            attract a new user. All you need to fo to get Casino Gods’ welcome
            bonus is to register and then make your first deposit. But of
            course, since Casino Gods care about keeping their loyal customer
            entertained and rewarded you will also be getting a lot of recurring
            bonuses. You can also claim your Fortuna deposit bonus where you can
            select your bonus from the dropdown and make a deposit of $20 or
            more and get 25% back and you can claim this bonus any month.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CasinoReview;
