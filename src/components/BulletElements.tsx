import casSm1 from "../../public/casSm1.jpeg";
function BulletElements() {
  return (
    <div className="w-full xl:w-[75%] m-auto mt-24 h-full flex flex-col md:flex-row">
      <div className=" w-full md:w-[50%]">
        <div className=" w-full md:w-[80%] h-[20rem]">
          <img
            src={casSm1}
            className="object-cover w-full h-full rounded-xl shadow-bottom-left-blue"
          />
        </div>
      </div>
      <div className="w-full md:w-[50%] ">
        <h2 className="text-lg lg:text-3xl font-bold mb-5 text-center md:text-start">
          Elements with bullets
        </h2>
        <p className="mb-10 text-xs lg:text-sm text-center md:text-start">
          Cras ultricies ligula sed magna dictum porta. Quisque velit nisi,
          pretium ut lacinia in, elementum id enim.
        </p>
        <div className="flex flex-col md:flex-row justify-between w-full md:text-[13px] lg:text-[14px] xl:text-base lg:w-full items-center md:items-baseline">
          <ul className="flex flex-col justify-between h-32 mb-2 md:mb-0">
            <li>
              <span className="text-blue-400">☑</span> 60+ Hero Sections
            </li>
            <li>
              <span className="text-blue-400">☑</span> Carefully Crafted Grid
            </li>
            <li>
              <span className="text-blue-400">☑</span> Pixel Perfect Grid Base
            </li>
            <li>
              <span className="text-blue-400">☑</span> Modern & User Friendly
            </li>
          </ul>
          <ul className="flex flex-col justify-between h-32">
            <li>
              <span className="text-blue-400">☑</span> Design Kit that has it
              all
            </li>
            <li>
              <span className="text-blue-400">☑</span> Exclusively on Figma
            </li>
            <li>
              <span className="text-blue-400">☑</span> Stackable Blocks
            </li>
            <li>
              <span className="text-blue-400">☑</span> Modern & User Friendly
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BulletElements;
