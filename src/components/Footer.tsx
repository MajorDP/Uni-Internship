import logo from "../../public/logo.png";
function Footer() {
  return (
    <div className="xl:w-[85%] m-auto mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 shadow-xl p-6 text-center sm:text-start">
      <div className="flex flex-col">
        <img src={logo} alt="aa" />
        <h3 className="text-[18px] font-semibold py-2">Our Stores</h3>
        <p className="text-[16px] pb-3">
          STORE - worldwide fashion store since 1978. We sell over 1000+ branded
          products on our web-site.
        </p>
        <p className="text-[18px] pb-3">
          📧 <span>studio@creatt.in</span>
        </p>
        <p className="text-[18px]">
          📞 <span>+1 888-123-4567</span>
        </p>
      </div>

      <div className="text-[16px] flex flex-col">
        <p className="font-semibold text-[18px] pb-3">Company</p>
        <p className="py-1">About Us</p>
        <p className="py-1">Company Information</p>
        <p className="py-1">Our Team</p>
        <p className="py-1">Our Vision</p>
        <p className="py-1">Company Policy</p>
      </div>

      <div className="text-[16px] flex flex-col">
        <p className="font-semibold text-[18px] pb-3">Legal</p>
        <p className="py-1">Privacy Policy</p>
        <p className="py-1">Terms & Conditions</p>
        <p className="py-1">Cookie Policy</p>
        <p className="py-1">Refunds & Returns</p>
        <p className="py-1">DCMA</p>
      </div>

      <div className="text-[16px] flex flex-col">
        <p className="font-semibold text-[18px] pb-3">Information</p>
        <p className="py-1">My Account</p>
        <p className="py-1">F.A.Q</p>
        <p className="py-1">Support Desk</p>
        <p className="py-1">Contact us</p>
        <p className="py-1">Press Information</p>
      </div>

      <div className="text-[16px] flex flex-col">
        <p className="font-semibold text-[18px] pb-3">Social</p>
        <p className="py-1 flex items-center gap-2">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_26_5518)">
              <path
                d="M12.5 0.980469C6.13758 0.980469 0.97998 6.13807 0.97998 12.5005C0.97998 18.8629 6.13758 24.0205 12.5 24.0205C18.8624 24.0205 24.02 18.8629 24.02 12.5005C24.02 6.13807 18.8624 0.980469 12.5 0.980469ZM15.2288 8.94127H13.4972C13.292 8.94127 13.064 9.21127 13.064 9.57007V10.8205H15.23L14.9024 12.6037H13.064V17.9569H11.0204V12.6037H9.16638V10.8205H11.0204V9.77167C11.0204 8.26687 12.0644 7.04407 13.4972 7.04407H15.2288V8.94127Z"
                fill="#0090E9"
              />
            </g>
            <defs>
              <clipPath id="clip0_26_5518">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Facebook</span>
        </p>
        <p className="py-1 flex items-center gap-2">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 0C4.70156 0 0 4.70156 0 10.5C0 16.2984 4.70156 21 10.5 21C16.2984 21 21 16.2984 21 10.5C21 4.70156 16.2984 0 10.5 0ZM15.5461 7.91484C15.5531 8.025 15.5531 8.13984 15.5531 8.25234C15.5531 11.693 12.9328 15.6562 8.14453 15.6562C6.66797 15.6562 5.29922 15.2273 4.14609 14.4891C4.35703 14.5125 4.55859 14.5219 4.77422 14.5219C5.99297 14.5219 7.11328 14.1094 8.00625 13.4109C6.8625 13.3875 5.90156 12.6375 5.57344 11.6063C5.97422 11.6648 6.33516 11.6648 6.74766 11.5594C6.15873 11.4397 5.62939 11.1199 5.24957 10.6542C4.86974 10.1885 4.66286 9.60564 4.66406 9.00469V8.97187C5.00859 9.16641 5.41406 9.28594 5.83828 9.30234C5.48166 9.06467 5.1892 8.74268 4.98682 8.36491C4.78445 7.98715 4.67841 7.56528 4.67813 7.13672C4.67813 6.65156 4.80469 6.20859 5.03203 5.82422C5.68571 6.62891 6.5014 7.28705 7.42609 7.75586C8.35078 8.22466 9.36377 8.49364 10.3992 8.54531C10.0312 6.77578 11.3531 5.34375 12.9422 5.34375C13.6922 5.34375 14.3672 5.65781 14.843 6.16406C15.4312 6.05391 15.9937 5.83359 16.4953 5.53828C16.3008 6.14062 15.893 6.64922 15.3516 6.97031C15.8766 6.91406 16.3828 6.76875 16.8516 6.56484C16.4977 7.08516 16.0547 7.54688 15.5461 7.91484Z"
              fill="#0090E9"
            />
          </svg>
          <span>Twitter</span>
        </p>
        <p className="py-1 flex items-center gap-2">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 0.980469C6.13758 0.980469 0.97998 6.13807 0.97998 12.5005C0.97998 18.8629 6.13758 24.0205 12.5 24.0205C18.8624 24.0205 24.02 18.8629 24.02 12.5005C24.02 6.13807 18.8624 0.980469 12.5 0.980469ZM9.67998 17.2753H7.34718V9.76807H9.67998V17.2753ZM8.49918 8.84647C7.76238 8.84647 7.28598 8.32447 7.28598 7.67887C7.28598 7.02007 7.77678 6.51367 8.52918 6.51367C9.28158 6.51367 9.74238 7.02007 9.75678 7.67887C9.75678 8.32447 9.28158 8.84647 8.49918 8.84647ZM18.2 17.2753H15.8672V13.1149C15.8672 12.1465 15.5288 11.4889 14.6852 11.4889C14.0408 11.4889 13.658 11.9341 13.4888 12.3625C13.4264 12.5149 13.4108 12.7309 13.4108 12.9457V17.2741H11.0768V12.1621C11.0768 11.2249 11.0468 10.4413 11.0156 9.76687H13.0424L13.1492 10.8097H13.196C13.5032 10.3201 14.2556 9.59767 15.5144 9.59767C17.0492 9.59767 18.2 10.6261 18.2 12.8365V17.2753Z"
              fill="#0090E9"
            />
          </svg>
          <span>LinkedIn</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
