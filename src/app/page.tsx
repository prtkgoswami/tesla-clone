"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import StickyInfo from "./components/StickyInfo";

export default function Home() {
  const containerRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [visibleDivIndex, setVisibleDivIndex] = useState(0);
  // const [showMobileMenu, setShowMobileMenu] = useState(false);

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

    // Cleanup: Disconnect the observer when the component unmounts
    return () => {
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
                poster="/Homepage-Model-Y-Desktop-Poster-NA.jpg"
                data-poster-desktop="/Homepage-Model-Y-Desktop-Poster-NA.jpg"
                data-poster-portrait="/Homepage-Model-Y-Desktop-Poster-NA.jpg"
                data-poster-mobile="/Homepage-Model-Y-Mobile-Poster-NA.jpg"
                data-src-desktop="/Homepage-Model-Y-Desktop-NA.mp4"
                data-src-portrait="/Homepage-Model-Y-Desktop-NA.mp4"
                data-src-mobile="/Homepage-Model-Y-Mobile-NA.mp4"
                data-src="/Homepage-Model-Y-Desktop-NA.mp4"
                data-object-fit="true"
                src="/Homepage-Model-Y-Desktop-NA.mp4"
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
              <Image
                className=""
                src="/Homepage-Model-3-Desktop-NA.jpg" // Default image for all sizes
                alt="Red Model 3 driving down a lakeside road"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                // srcSet="/Homepage-Model-3-Mobile-NA.jpg 599w, /Homepage-Model-3-Desktop-NA.jpg 600w"
                sizes="(max-width: 599px) 400px, (max-width: 959px) 800px, 1200px"
              />
            </div>
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={2}
          >
            <Image
              src="/Homepage-Model-X-Desktop-LHD.jpg" // Default image for all sizes
              alt="Pearl white Model X navigating a mountainous road"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              // srcSet="/Homepage-Model-X-Mobile-LHD.jpg 599w, /Homepage-Model-X-Desktop-LHD.jpg 600w"
              sizes="(max-width: 599px) 400px, (max-width: 959px) 800px, 1200px"
            />
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={3}
          >
            <Image
              src="/Homepage-Model-S-Desktop-LHD-6.22.jpg" // Default image for all sizes
              alt="Solid black Model S accelerating on an elevated highway"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              // srcSet="/Homepage-Model-S-Mobile-LHD-6.22.jpg 599w, /Homepage-Model-S-Desktop-LHD-6.22.jpg 600w"
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
              poster="/Homepage-Demo-Drive-Desktop-Poster-NA.jpg"
              data-poster-desktop="/Homepage-Demo-Drive-Desktop-Poster-NA.jpg"
              data-poster-portrait="/Homepage-Demo-Drive-Desktop-Poster-NA.jpg"
              data-poster-mobile="/Homepage-Demo-Drive-Mobile-Poster-NA.jpg"
              data-src-desktop="/Homepage-Demo-Drive-Desktop-NA.webm"
              data-src-portrait="/Homepage-Demo-Drive-Desktop-NA.webm"
              data-src-mobile="/Homepage-Demo-Drive-Mobile-NA.webm"
              data-src="/Homepage-Demo-Drive-Desktop-NA.webm"
              data-object-fit="true"
              src="/Homepage-Demo-Drive-Desktop-NA.webm"
              autoPlay={true}
              data-loaded="true"
            ></video>
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={5}
          >
            <Image
              src="/425_HP_SolarPanels_D.jpg" // Default image for all sizes
              alt="Ranch style home powered by Tesla solar panels and Powerwall"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              // srcSet="/Homepage-SolarPanels-Mobile.jpg 599w, /425_HP_SolarPanels_D.jpg 600w"
              sizes="(max-width: 599px) 400px, (max-width: 959px) 800px, 1200px"
            />
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={6}
          >
            <Image
              src="/Homepage-SolarRoof-Desktop-Global.jpg" // Default image for all sizes
              alt="Home outfitted with Tesla Solar Roof"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              // srcSet="/Homepage-SolarRoof-Mobile-Global.jpg 599w, /Homepage-SolarRoof-Desktop-Global.jpg 600w"
              sizes="(max-width: 599px) 400px, (max-width: 959px) 800px, 1200px"
            />
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={7}
          >
            <Image
              src="/Homepage-Powerwall-Desktop.jpg" // Default image for all sizes
              alt="Ranch style home powered by Tesla solar panels and Powerwall"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              // srcSet="/Homepage-Powerwall-Mobile.jpg 599w, /Homepage-Powerwall-Desktop.jpg 600w"
              sizes="(max-width: 599px) 400px, (max-width: 959px) 800px, 1200px"
            />
          </div>

          <div
            className="tesla-sections h-screen w-full flex justify-center items-center relative snap-start"
            data-index={8}
          >
            <Image
              src="/Homepage-Accessories-Desktop-NA-APAC.jpg" // Default image for all sizes
              alt="Gen 3 Wall Connector with tempered white glass faceplate mounted on a pedestal in front of a fence"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              // srcSet="/Homepage-Accessories-Mobile-NA-APAC.jpg 599w, /Homepage-Accessories-Desktop-NA-APAC.jpg 600w"
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
    </main>
  );
}
