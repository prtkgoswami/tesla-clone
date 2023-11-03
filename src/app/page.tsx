"use client";
import { useEffect, useRef, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import StickyInfo from "./components/StickyInfo";

export default function Home() {
  const containerRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [visibleDivIndex, setVisibleDivIndex] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileImages, setShowMobileImage] = useState(false);

  // Create a function to update the screen width
  const updateScreenWidth = () => {
    const isMobile = window.innerWidth <= 599;
    console.log(isMobile);
    setShowMobileImage(isMobile);
  };

  useEffect(() => {
    // Callback function to handle visibility changes
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = (entry.target as HTMLElement).dataset.index;
          // The observed element is in view
          setVisibleDivIndex(Number(index));
        }
      });
    };

    // Options for the Intersection Observer
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // 50% of the target element must be visible
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, options);

    // Select the elements you want to observe

    let elements;
    if (containerRef.current) {
      elements = (containerRef.current as HTMLElement).querySelectorAll(
        ".tesla-sections"
      );
    }

    // Start observing each element
    elements?.forEach((element) => {
      observer.observe(element);
    });

    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();

    // Clean up the event listener when the component unmounts
    // Cleanup: Disconnect the observer when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount
  // @ts-ignore
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Banner />

      <div className="snap-y snap-mandatory overflow-y-scroll relative h-[calc(100vh-5.2rem)] md:h-[calc(100vh-4rem)]">
        <Header
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
          isDark={![0, 1, 4].includes(visibleDivIndex)}
          onMenuClick={() => setShowMobileMenu(true)}
        />

        <div ref={containerRef} className="flex flex-col ">
          <StickyInfo index={visibleDivIndex} showOverlay={showOverlay} />
          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={0}
          >
            <div className="w-full h-full">
              <video
                className="w-full h-full object-cover object-center"
                preload="auto"
                playsInline={false}
                data-autoplay-desktop="true"
                data-autoplay-portrait="true"
                data-autoplay-mobile="true"
                data-play-on-hover="false"
                muted={true}
                loop={true}
                poster={
                  showMobileImages
                    ? "Homepage-Model-Y-Mobile-Poster-NA.jpg"
                    : "/Homepage-Model-Y-Desktop-Poster-NA.jpg"
                }
                data-poster-desktop="/Homepage-Model-Y-Desktop-Poster-NA.jpg"
                data-poster-portrait="/Homepage-Model-Y-Desktop-Poster-NA.jpg"
                data-poster-mobile="/Homepage-Model-Y-Mobile-Poster-NA.jpg"
                data-src-desktop="/Homepage-Model-Y-Desktop-NA.mp4"
                data-src-portrait="/Homepage-Model-Y-Desktop-NA.mp4"
                data-src-mobile="/Homepage-Model-Y-Mobile-NA.mp4"
                data-src="/Homepage-Model-Y-Desktop-NA.mp4"
                data-object-fit="true"
                src={
                  showMobileImages
                    ? "Homepage-Model-Y-Mobile-NA.mp4"
                    : "/Homepage-Model-Y-Desktop-NA.mp4"
                }
                data-loaded="true"
                autoPlay={true}
              ></video>
            </div>
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={1}
          >
            <div className="bg-red-500 h-full w-full block">
              <img
                className="object-cover h-full w-full"
                src={
                  showMobileImages
                    ? "/Homepage-Model-3-Mobile-NA.jpg"
                    : "/Homepage-Model-3-Desktop-NA.jpg"
                } // Default image for all sizes
                alt="Red Model 3 driving down a lakeside road"
                sizes="(max-width: 599px) 400px, (max-width: 959px) 800px, 1200px"
              />
            </div>
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={2}
          >
            <img
              className="object-cover h-full w-full"
              src={
                showMobileImages
                  ? "/Homepage-Model-X-Mobile-LHD_001.jpg"
                  : "/Homepage-Model-X-Desktop-LHD.jpg"
              } // Default image for all sizes
              alt="Pearl white Model X navigating a mountainous road"
              sizes="(max-width: 599px) 400px, (max-width: 959px) 800px, 1200px"
            />
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={3}
          >
            <img
              className="object-cover h-full w-full"
              src={
                showMobileImages
                  ? "/Homepage-Model-S-Mobile-LHD-6.22.jpg"
                  : "/Homepage-Model-S-Desktop-LHD-6.22.jpg"
              } // Default image for all sizes
              alt="Solid black Model S accelerating on an elevated highway"
              sizes="(max-width: 599px) 400px, (max-width: 959px) 800px, 1200px"
            />
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={4}
          >
            <video
              className="w-full h-full object-cover object-center"
              preload="auto"
              playsInline={false}
              data-autoplay-desktop="true"
              data-autoplay-portrait="true"
              data-autoplay-mobile="true"
              data-play-on-hover="false"
              muted={true}
              loop={true}
              poster={
                showMobileImages
                  ? "Homepage-Demo-Drive-Mobile-Poster-NA.jpg"
                  : "/Homepage-Demo-Drive-Desktop-Poster-NA.jpg"
              }
              data-poster-desktop="/Homepage-Demo-Drive-Desktop-Poster-NA.jpg"
              data-poster-portrait="/Homepage-Demo-Drive-Desktop-Poster-NA.jpg"
              data-poster-mobile="/Homepage-Demo-Drive-Mobile-Poster-NA.jpg"
              data-src-desktop="/Homepage-Demo-Drive-Desktop-NA.webm"
              data-src-portrait="/Homepage-Demo-Drive-Desktop-NA.webm"
              data-src-mobile="/Homepage-Demo-Drive-Mobile-NA.webm"
              data-src="/Homepage-Demo-Drive-Desktop-NA.webm"
              data-object-fit="true"
              src={
                showMobileImages
                  ? "/Homepage-Demo-Drive-Mobile-NA.webm"
                  : "/Homepage-Demo-Drive-Desktop-NA.webm"
              }
              autoPlay={true}
              data-loaded="true"
            ></video>
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={5}
          >
            <img
              className="object-cover h-full w-full"
              src={
                showMobileImages
                  ? "/Homepage-SolarPanels-Mobile.jpg"
                  : "/425_HP_SolarPanels_D.jpg"
              } // Default image for all sizes
              alt="Ranch style home powered by Tesla solar panels and Powerwall"
              sizes="(max-width: 599px) 400px, (max-width: 959px) 800px, 1200px"
            />
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={6}
          >
            <img
              className="object-cover h-full w-full"
              src={
                showMobileImages
                  ? "/Homepage-SolarRoof-Mobile.jpg"
                  : "/Homepage-SolarRoof-Desktop-Global.jpg"
              } // Default image for all sizes
              alt="Home outfitted with Tesla Solar Roof"
              sizes="(max-width: 599px) 400px, (max-width: 959px) 800px, 1200px"
            />
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={7}
          >
            <img
              className="object-cover h-full w-full"
              src={
                showMobileImages
                  ? "/Homepage-Powerwall-Mobile.jpg"
                  : "/Homepage-Powerwall-Desktop.jpg"
              } // Default image for all sizes
              alt="Ranch style home powered by Tesla solar panels and Powerwall"
              sizes="(max-width: 599px) 400px, (max-width: 959px) 800px, 1200px"
            />
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={8}
          >
            <img
              className="object-cover h-full w-full"
              src={
                showMobileImages
                  ? "/Homepage-Accessories-Mobile-NA-APAC.jpg"
                  : "/Homepage-Accessories-Desktop-NA-APAC.jpg"
              } // Default image for all sizes
              alt="Gen 3 Wall Connector with tempered white glass faceplate mounted on a pedestal in front of a fence"
              sizes="(max-width: 599px) 400px, (max-width: 959px) 800px, 1200px"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center bg-black snap-start md:hidden text-sm font-medium text-gray-300 py-8 px-6 leading-5 gap-y-2">
          <a href="http://prtkgoswami.github.io/" target="_blank">
            Cloned by Pratik Goswami
          </a>
          <a href="#">Privacy & Legal</a>
          <a href="#">Vehicle Recalls</a>
          <a href="#">News</a>
        </div>
      </div>

      {showMobileImages && (
        <MobileMenu
          shouldShowMenu={showMobileMenu}
          onCloseMenuClick={() => setShowMobileMenu(false)}
        />
      )}
    </main>
  );
}
