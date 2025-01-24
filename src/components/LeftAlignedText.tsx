import casLarge from "../../public/casLarge.jpeg";
function LeftAlignedText() {
  return (
    <div className="w-full lg:w-[80%] m-auto mt-24 p-5">
      <h2 className="text-[34px] mb-5 font-bold text-[#0A0F4F] text-center xl:text-start">
        H2 styling left aligned
      </h2>
      <div className="flex flex-col-reverse xl:flex-row text-xs xl:text-base">
        <div className="flex flex-col w-full xl:w-[60%]">
          <p className="text-justify xl:w-[90%] mb-5">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin{" "}
          </p>
          <ul className="list-disc list-inside mb-5 w-[90%]">
            <li>
              Etiam tempus arcu non tortor facilisis, id euismod libero
              fringilla
            </li>
            <li>Vivamus quis dolor sed nisi vulputate semper.</li>
            <li>
              Quisque vehicula massa ut odio malesuada, eu maximus nibh
              eleifend.
            </li>
            <li>
              Suspendisse id sem id ligula lobortis rutrum eget nec lectus.
            </li>
          </ul>
          <p className="text-justify w-full xl:w-[90%] mb-5">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
        <div className="w-[100%] m-auto xl:m-0 xl:w-[40%] mb-5 xl:mb-0">
          <img src={casLarge} alt="aaa" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default LeftAlignedText;
