import { useEffect, useState } from "react";
import { Globe, RightChevron, User, XMark } from "./Icons";

type MobileMenuProps = {
  onCloseMenuClick: () => void;
  shouldShowMenu: boolean;
};

const MobileMenu = ({
  onCloseMenuClick,
  shouldShowMenu,
}: MobileMenuProps): React.ReactElement => {
  const [shouldShow, setShouldShow] = useState(false);
  const onCloseClick = () => {
    setShouldShow(false);
    setTimeout(() => {
      onCloseMenuClick();
    }, 300);
  };
  //
  useEffect(() => {
    if (shouldShowMenu) setShouldShow(true);
  }, [shouldShowMenu]);

  if (!shouldShowMenu) return <></>;

  return (
    <div
      className={`absolute h-full w-full top-0 left-0 bg-white z-50 flex flex-col ${
        shouldShow ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <div
          className="flex p-2 cursor-pointer fill-black"
          onClick={onCloseClick}
        >
          <XMark classNames="fill-black w-6 h-6" />
        </div>
      </div>
      <div className="flex flex-col px-6 pt-8 gap-y-4">
        <div className="flex flex-row justify-between px-2 py-4">
          <div className="text-lg font-medium leading-5 grow text-black">
            Vehicles
          </div>
          <div className="flex justify-center items-center text-black">
            <RightChevron classNames="fill-black w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 py-4">
          <div className="text-lg font-medium leading-5 grow text-black">
            Energy
          </div>
          <div className="flex justify-center items-center text-black">
            <RightChevron classNames="fill-black w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 py-4">
          <div className="text-lg font-medium leading-5 grow text-black">
            Charging
          </div>
          <div className="flex justify-center items-center text-black">
            <RightChevron classNames="fill-black w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 py-4">
          <div className="text-lg font-medium leading-5 grow text-black">
            Discover
          </div>
          <div className="flex justify-center items-center text-black">
            <RightChevron classNames="fill-black w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 py-4 cursor-pointer">
          <div className="text-lg font-medium leading-5 grow text-black">
            Shop
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 py-4 cursor-pointer">
          <div className="text-lg font-medium leading-5 grow text-black">
            Support
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 py-4 cursor-pointer">
          <div className="flex grow">
            <Globe classNames="w-6 h-6 fill-black" />
            <div className="flex flex-col gap-y-1 px-2">
              <div className="text-lg font-medium leading-5 text-black">
                United States
              </div>
              <div className="text-sm font-normal leading-5 text-zinc-600">
                English
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center text-black ">
            <RightChevron classNames="fill-black w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 py-4 cursor-pointer">
          <div className="flex grow">
            <User classNames="w-6 h-6 fill-black" />
            <div className="text-lg font-medium leading-5 text-black px-2">
              Account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
