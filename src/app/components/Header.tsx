import { ReactElement } from "react";
import { Globe, Support, TeslaLogo, User } from "./Icons";

type HeaderProps = {
  showOverlay: boolean;
  setShowOverlay: (_: boolean) => void;
  isDark: boolean;
  onMenuClick: () => void;
};

const Header = ({
  showOverlay,
  setShowOverlay,
  isDark,
  onMenuClick,
}: HeaderProps): ReactElement => {
  return (
    <div className="w-full flex flex-col fixed  z-50 transition-colors duration-300">
      <header
        className={`w-full flex pl-5 pr-2 md:px-8 py-4 justify-between ${
          showOverlay ? "bg-white" : "bg-transparent"
        } transition-colors duration-500 ease-in-out`}
      >
        <div className="logo w-32 cursor-pointer flex items-center">
          <TeslaLogo
            classNames={showOverlay || isDark ? "fill-black" : "fill-white"}
          />
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
            <Support classNames="fill-current w-6 h-6" />
          </div>
          <div
            className={`header-btns site-nav py-1 px-1 rounded-[4px] hover:bg-black/5 hover:backdrop-blur-lg cursor-pointer ${
              showOverlay || isDark ? "text-black" : "text-white"
            } hover:text-black transition-colors duration-500 ease-in-out`}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            <Globe classNames="fill-current w-6 h-6" />
          </div>
          <div
            className={`header-btns user py-1 px-1 rounded-[4px] hover:bg-black/5 hover:backdrop-blur-lg cursor-pointer ${
              showOverlay || isDark ? "text-black" : "text-white"
            } hover:text-black transition-colors duration-500 ease-in-out`}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            <User classNames="fill-current w-6 h-6" />
          </div>
        </div>

        <div
          className={`header-btns md:hidden text-md py-1 px-4 rounded-[4px] bg-black/5 backdrop-blur-lg cursor-pointer 
          ${
            showOverlay || isDark ? "text-black" : "text-white"
          } text-sm font-normal`}
          onMouseEnter={() => setShowOverlay(true)}
          onMouseLeave={() => setShowOverlay(false)}
          onClick={onMenuClick}
        >
          Menu
        </div>
      </header>
    </div>
  );
};

export default Header;
