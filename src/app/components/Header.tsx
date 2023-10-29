import { ReactElement, useState } from "react";

type HeaderProps = {
  showOverlay: boolean;
  setShowOverlay: (_: boolean) => void;
  isDark: boolean;
};

const Header = ({
  showOverlay,
  setShowOverlay,
  isDark,
}: HeaderProps): ReactElement => {
  // console.log("header", isDark);
  return (
    <div className="w-full flex flex-col fixed  z-50 transition-colors duration-300">
      <header
        className={`w-full flex pl-5 pr-2 md:px-8 py-4 justify-between ${
          showOverlay ? "bg-white" : "bg-transparent"
        } transition-colors duration-500 ease-in-out`}
      >
        <div className="logo w-32 cursor-pointer flex items-center">
          <svg
            className={showOverlay || isDark ? "fill-black" : "fill-white"}
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"></path>
          </svg>
        </div>

        <nav className="hidden md:flex">
          <div
            className={`header-btns text-md py-1 px-4 rounded-[4px] hover:bg-black/5 hover:backdrop-blur-lg cursor-pointer ${
              showOverlay || isDark ? "text-black" : "text-white"
            } hover:text-black transition-colors duration-500 ease-in-out`}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            Vehicles
          </div>
          <div
            className={`header-btns text-md py-1 px-4 rounded-[4px] hover:bg-black/5 hover:backdrop-blur-lg cursor-pointer ${
              showOverlay || isDark ? "text-black" : "text-white"
            } hover:text-black transition-colors duration-500 ease-in-out`}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            Energy
          </div>
          <div
            className={`header-btns text-md py-1 px-4 rounded-[4px] hover:bg-black/5 hover:backdrop-blur-lg cursor-pointer ${
              showOverlay || isDark ? "text-black" : "text-white"
            } hover:text-black transition-colors duration-500 ease-in-out`}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            Charging
          </div>
          <div
            className={`header-btns text-md py-1 px-4 rounded-[4px] hover:bg-black/5 hover:backdrop-blur-lg cursor-pointer ${
              showOverlay || isDark ? "text-black" : "text-white"
            } hover:text-black transition-colors duration-500 ease-in-out`}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            Discover
          </div>
          <div
            className={`header-btns text-md py-1 px-4 rounded-[4px] hover:bg-black/5 hover:backdrop-blur-lg cursor-pointer ${
              showOverlay || isDark ? "text-black" : "text-white"
            } hover:text-black transition-colors duration-500 ease-in-out`}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            Shop
          </div>
        </nav>

        <div className="hidden md:flex gap-x-1">
          <div
            className={`header-btns support py-1 px-1 rounded-[4px] hover:bg-black/5 hover:backdrop-blur-lg cursor-pointer ${
              showOverlay || isDark ? "text-black" : "text-white"
            } hover:text-black transition-colors duration-500 ease-in-out`}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            <svg
              className="fill-current w-6 h-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 20.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Zm0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm.053-3.533a7.8 7.8 0 0 1 .92-.767 6.97 6.97 0 0 0 .746-.61 2.31 2.31 0 0 0 .468-.635c.126-.253.188-.548.188-.883 0-.374-.082-.723-.246-1.048-.158-.324-.415-.588-.771-.792-.356-.203-.81-.305-1.362-.305-.575 0-1.045.116-1.411.347a1.991 1.991 0 0 0-.788.89c-.06.134-.11.272-.148.413-.111.414-.445.767-.874.767-.428 0-.784-.35-.71-.772.07-.407.2-.79.386-1.15.301-.583.758-1.048 1.37-1.394C10.435 6.176 11.185 6 12.07 6c.93 0 1.687.181 2.273.544.59.358 1.014.803 1.271 1.337.257.533.386 1.07.386 1.608 0 .545-.085 1.012-.254 1.403-.17.385-.375.698-.616.94-.235.242-.55.514-.943.817-.312.247-.561.46-.747.635-.18.176-.33.385-.451.627-.05.099-.087.2-.113.302-.108.424-.422.787-.86.787-.437 0-.806-.356-.76-.79a2.948 2.948 0 0 1 .797-1.743Z"></path>
            </svg>
          </div>
          <div
            className={`header-btns site-nav py-1 px-1 rounded-[4px] hover:bg-black/5 hover:backdrop-blur-lg cursor-pointer ${
              showOverlay || isDark ? "text-black" : "text-white"
            } hover:text-black transition-colors duration-500 ease-in-out`}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            <svg
              className="fill-current w-6 h-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z"></path>
            </svg>
          </div>
          <div
            className={`header-btns user py-1 px-1 rounded-[4px] hover:bg-black/5 hover:backdrop-blur-lg cursor-pointer ${
              showOverlay || isDark ? "text-black" : "text-white"
            } hover:text-black transition-colors duration-500 ease-in-out`}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            <svg
              className="fill-current w-6 h-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM6.858 18.752c.605-1.868 2.722-3.24 5.142-3.24 2.42 0 4.537 1.372 5.142 3.24C15.712 19.844 13.933 20.5 12 20.5s-3.712-.656-5.142-1.748zm11.469-1.095c-1.02-2.165-3.483-3.645-6.327-3.645s-5.307 1.48-6.327 3.645A8.456 8.456 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5 4.687 0 8.5 3.813 8.5 8.5a8.456 8.456 0 0 1-2.173 5.657zM12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
              ></path>
            </svg>
          </div>
        </div>

        <div
          className={`header-btns md:hidden text-md py-1 px-4 rounded-[4px] bg-black/5 backdrop-blur-lg cursor-pointer 
          ${
            showOverlay || isDark ? "text-black" : "text-white"
          } text-sm font-normal`}
          onMouseEnter={() => setShowOverlay(true)}
          onMouseLeave={() => setShowOverlay(false)}
        >
          Menu
        </div>
      </header>
    </div>
  );
};

export default Header;
