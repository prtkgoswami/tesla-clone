import { ReactElement } from "react";

type StickyInfoProps = {
  index: number;
  showOverlay: boolean;
};

const data = [
  {
    details: (
      <>
        <div
          className="text-[40px] text-white font-medium text-center"
          style={{ marginTop: "calc(18vh + 24px - 72px" }}
        >
          Model Y
        </div>
        <div className="text-xl text-white font-normal text-center pt-[6px] px-6 pb-[14px] box-border">
          Lease starting at $399/mo*
        </div>
      </>
    ),
    actions: (
      <>
        <div className="flex w-full md:inline-flex flex-col md:flex-row gap-y-4 md:gap-x-6 justify-self-center justify-center px-6 py-4 mb-4">
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-white/80 text-black rounded-[4px] cursor-pointer font-medium">
            Order Now
          </div>
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-[#222222]/[.65] text-white rounded-[4px] cursor-pointer font-medium">
            Demo Drive
          </div>
        </div>
      </>
    ),
    disclaimer: (
      <>
        <div className="text-xs font-normal text-white text-center w-full pb-4 px-6">
          *Excludes taxes and fees with price subject to change. Available in
          select states.{" "}
          <a href="#" className="underline hover:shadow-[0 2px 0 0 #fff]">
            See Details
          </a>
        </div>
      </>
    ),
  },
  {
    details: (
      <>
        <div
          className="text-[40px] text-white font-medium text-center"
          style={{ marginTop: "calc(18vh + 24px - 72px" }}
        >
          Model 3
        </div>
        <div className="text-xl text-white font-normal text-center pt-[6px] px-6 pb-[14px] box-border">
          Lease starting at $329/mo*
        </div>
      </>
    ),
    actions: (
      <>
        <div className="flex w-full md:inline-flex flex-col md:flex-row gap-y-4 md:gap-x-6 justify-self-center justify-center px-6 py-4 mb-4">
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-white/80 text-black rounded-[4px] cursor-pointer font-medium">
            Order Now
          </div>
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-[#222222]/[.65] text-white rounded-[4px] cursor-pointer font-medium">
            Demo Drive
          </div>
        </div>
      </>
    ),
    disclaimer: (
      <>
        <div className="text-xs font-normal text-white text-center w-full pb-4 px-6">
          *Excludes taxes and fees with price subject to change. Available in
          select states.{" "}
          <a href="#" className="underline hover:shadow-[0 2px 0 0 #fff]">
            See Details
          </a>
        </div>
      </>
    ),
  },
  {
    details: (
      <>
        <div
          className="text-[40px] text-black font-medium text-center"
          style={{ marginTop: "calc(18vh + 24px - 72px" }}
        >
          Model X
        </div>
        <div className="text-xl text-black font-normal text-center pt-[6px] px-6 pb-[14px] box-border">
          <strong className="font-medium">From $68,590*</strong>
          <br />
          <sub className="text-xs">
            After Federal Tax Credit & Est. Gas Savings
          </sub>
        </div>
      </>
    ),
    actions: (
      <>
        <div className="flex w-full md:inline-flex flex-col md:flex-row gap-y-4 md:gap-x-6 justify-self-center justify-center px-6 py-4 mb-4">
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-white/80 text-black rounded-[4px] cursor-pointer font-medium">
            Order Now
          </div>
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-[#222222]/[.65] text-white rounded-[4px] cursor-pointer font-medium">
            Demo Drive
          </div>
        </div>
      </>
    ),
    disclaimer: (
      <>
        <div className="text-xs font-normal text-white text-center w-full pb-4 px-6">
          *Price before incentives and savings is $79,990, excluding taxes and
          fees. Subject to change. <br />
          <a href="#" className="underline hover:shadow-[0 2px 0 0 #fff]">
            Learn about est. gas savings.
          </a>
        </div>
      </>
    ),
  },
  {
    details: (
      <>
        <div
          className="text-[40px] text-black font-medium text-center"
          style={{ marginTop: "calc(18vh + 24px - 72px" }}
        >
          Model S
        </div>
        <div className="text-xl text-black font-normal text-center pt-[6px] px-6 pb-[14px] box-border">
          <strong className="font-medium">From $71,090*</strong>
          <br />
          <sub className="text-xs">After Est. Gas Savings</sub>
        </div>
      </>
    ),
    actions: (
      <>
        <div className="flex w-full md:inline-flex flex-col md:flex-row gap-y-4 md:gap-x-6 justify-self-center justify-center px-6 py-4 mb-4">
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-white/80 text-black rounded-[4px] cursor-pointer font-medium">
            Order Now
          </div>
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-[#222222]/[.65] text-white rounded-[4px] cursor-pointer font-medium">
            Demo Drive
          </div>
        </div>
      </>
    ),
    disclaimer: (
      <>
        <div className="text-xs font-normal text-black text-center w-full pb-4 px-6">
          *Price before savings is $74,990, excluding taxes and fees. Subject to
          change. <br />
          <a href="#" className="underline hover:shadow-[0 2px 0 0 #fff]">
            Learn about est. gas savings.
          </a>
        </div>
      </>
    ),
  },
  {
    details: (
      <>
        <div
          className="text-[40px] text-white font-medium text-center"
          style={{ marginTop: "calc(18vh + 24px - 72px" }}
        >
          Experience Tesla
        </div>
        <div className="text-sm text-white font-normal text-center pt-[6px] px-6 pb-[14px] box-border">
          Schedule a Demo Drive Today
        </div>
      </>
    ),
    actions: (
      <>
        <div className="inline-flex gap-x-6 justify-self-center px-6 py-4 mb-4">
          <div className="flex justify-center items-center w-[264px] py-2 px-6 border-[3px] border-solid bg-transparent border-white text-white rounded-[4px] cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 ease-in-out delay-1000 font-medium">
            Demo Drive
          </div>
        </div>
      </>
    ),
    disclaimer: (
      <>
        <div className="text-xs font-normal text-white text-center w-full pb-4 px-6 mb-6"></div>
      </>
    ),
  },
  {
    details: (
      <>
        <div
          className="text-[40px] text-black font-medium text-center"
          style={{ marginTop: "calc(18vh + 24px - 72px" }}
        >
          Solar Panels
        </div>
        <div className="text-sm text-black font-normal text-center pt-[6px] px-6 pb-[14px] box-border">
          <a
            href="#"
            className="shadow-[0_1px_0_0_rgb(23,26,32)] hover:shadow-[0_2px_0_0_rgb(23,26,32)]"
          >
            Schedule a Virtual Consultation
          </a>
        </div>
      </>
    ),
    actions: (
      <>
        <div className="flex w-full md:inline-flex flex-col md:flex-row gap-y-4 md:gap-x-6 justify-self-center justify-center px-6 py-4 mb-4">
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-white/80 text-black rounded-[4px] cursor-pointer font-medium">
            Order Now
          </div>
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-[#222222]/[.65] text-white rounded-[4px] cursor-pointer font-medium">
            Learn More
          </div>
        </div>
      </>
    ),
    disclaimer: (
      <>
        <div className="text-xs font-normal text-white text-center w-full pb-4 px-6 mb-6"></div>
      </>
    ),
  },
  {
    details: (
      <>
        <div
          className="text-[40px] text-black font-medium text-center"
          style={{ marginTop: "calc(18vh + 24px - 72px" }}
        >
          Solar Roof
        </div>
        <div className="text-sm text-black font-normal text-center pt-[6px] px-6 pb-[14px] box-border">
          Produce Clean Energy From Your Roof Schedule a Virtual Consultation
        </div>
      </>
    ),
    actions: (
      <>
        <div className="flex w-full md:inline-flex flex-col md:flex-row gap-y-4 md:gap-x-6 justify-self-center justify-center px-6 py-4 mb-4">
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-white/80 text-black rounded-[4px] cursor-pointer font-medium">
            Order Now
          </div>
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-[#222222]/[.65] text-white rounded-[4px] cursor-pointer font-medium">
            Learn More
          </div>
        </div>
      </>
    ),
    disclaimer: (
      <>
        <div className="text-xs font-normal text-white text-center w-full pb-4 px-6 mb-6"></div>
      </>
    ),
  },
  {
    details: (
      <>
        <div
          className="text-[40px] text-black font-medium text-center"
          style={{ marginTop: "calc(18vh + 24px - 72px" }}
        >
          Powerwall
        </div>
      </>
    ),
    actions: (
      <>
        <div className="flex w-full md:inline-flex flex-col md:flex-row gap-y-4 md:gap-x-6 justify-self-center justify-center px-6 py-4 mb-4">
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-white/80 text-black rounded-[4px] cursor-pointer font-medium">
            Order Now
          </div>
          <div className="flex justify-center items-center w-full md:w-[264px] py-2 px-6 bg-[#222222]/[.65] text-white rounded-[4px] cursor-pointer font-medium">
            Learn More
          </div>
        </div>
      </>
    ),
    disclaimer: (
      <>
        <div className="text-xs font-normal text-white text-center w-full pb-4 px-6 mb-6"></div>
      </>
    ),
  },
  {
    details: (
      <>
        <div
          className="text-[40px] text-black font-medium text-center"
          style={{ marginTop: "calc(18vh + 24px - 72px" }}
        >
          Accessories
        </div>
      </>
    ),
    actions: (
      <>
        <div className="inline-flex gap-x-6 justify-self-center px-6 py-4 mb-4">
          <div className="flex justify-center items-center w-[264px] py-2 px-6 bg-white/80 text-black rounded-[4px] cursor-pointer">
            Shop Now
          </div>
        </div>
      </>
    ),
    disclaimer: (
      <>
        <div className="hidden md:flex text-xs font-medium text-gray-300 text-center w-full pb-4 px-6 gap-x-[14px] justify-center">
          <a href="http://prtkgoswami.github.io/" target="_blank">
            Cloned by Pratik Goswami
          </a>
          <a href="#">Privacy & Legal</a>
          <a href="#">Vehicle Recalls</a>
          <a href="#">Contact</a>
          <a href="#">News</a>
          <a href="#">Get Updates</a>
          <a href="#">Locations</a>
        </div>
      </>
    ),
  },
];

const StickyInfo = ({
  index,
  showOverlay = false,
}: StickyInfoProps): ReactElement => {
  return (
    <div className="sticky top-0 left-0 w-full grid z-30 h-[calc(100vh-5rem)] md:h-[calc(100vh-4rem)]">
      <div
        className={`absolute top-0 left-0 z-50 backdrop-blur-sm h-screen w-screen origin-top ${
          showOverlay ? "scale-y-1" : "scale-y-0"
        } transition-transform duration-500 ease-in-out`}
      ></div>
      <div className="flex flex-col row-start-1 row-end-auto col-start-[-1] col-end-auto">
        {data[index].details}
        <div className="flex flex-col items-center justify-end grow shrink">
          {data[index].actions}
          {data[index].disclaimer}
        </div>
      </div>
    </div>
  );
};

export default StickyInfo;
