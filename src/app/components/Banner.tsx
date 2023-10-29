import { ReactElement } from "react";

const Banner = (): ReactElement => {
  return (
    <div
      className="banner flex flex-col md:flex-row md:items-center md:h-10 w-full py-4 md:py-8 px-6 max-h-[200px] leading-5 box-border gap-x-6"
      style={{
        background:
          "radial-gradient(54.97% 252.54% at 7.36% -134.72%, rgba(108, 148, 255, 0.92) 0px, rgba(0, 0, 0, 0.92) 100%)",
      }}
    >
      <div className="text-sm md:text-lg grow font-normal leading-[18px]">
        $7,500 Federal Tax Credit for Certain Tesla Models
      </div>

      <div className="text-sm md:text-md font-normal leading-[18px]">
        Reductions likely for certain vehicles in 2024. Take delivery by 12/31
        for full $7,500.{" "}
        <a
          href="#"
          className="shadow-[0_1px_0_0_#fff] hover:shadow-[0_2px_0_0_#fff]"
        >
          Eligibility Details
        </a>
      </div>
    </div>
  );
};

export default Banner;
