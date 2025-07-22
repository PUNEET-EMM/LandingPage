import React, { useState, useRef, useEffect } from "react";
import Image from 'next/image'


const mainSlides = [
  {
    id: 1,
    type: "text",
    title: "Evolving the drive with 360-degree nonwoven solutions",
    subtitle: "",
    description: ""
  },
  {
    id: 2,
    type: "video",
    title: "Passenger vehicles",
    subtitle: "Advancing Nonwoven engineering for passenger comfort and safety",
    navigationOptions: [
      {
        label: "Complete Body",
        videoSrc: "/Passenger Alpha - Trim.mp4",
        image: "/front.svg"
      },
      {
        label: "Front",
        videoSrc: "/Front.mp4",
        image: "/front.svg"

      },
      {
        label: "Cabin",
        videoSrc: "/Cabin.mp4",
        image: "/front.svg"

      },
      {
        label: "Trunk",
        videoSrc: "/Trunk.mp4",
        image: "/front.svg"

      }
    ]
  },
  {
    id: 3,
    type: "video",
    title: "Commercial vehicles",
    subtitle: "Advancing Nonwoven engineering for heavy-duty vehicles.",
    navigationOptions: [
      {
        label: "Complete Body",
        videoSrc: "/Commercial Alpha.mp4",
        image: "/front.svg"

      },
      {
        label: "Front",
        videoSrc: "/Front.mp4",
        image: "/front.svg"

      },
      {
        label: "Cabin",
        videoSrc: "/Cabin.mp4",
        image: "/front.svg"

      },
      {
        label: "Trunk",
        videoSrc: "/Trunk.mp4",
        image: "/front.svg"

      }
    ]
  }
];

export default function MultiVideoSlider() {
  const [currentMainSlide, setCurrentMainSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [activeVideoIndices, setActiveVideoIndices] = useState(
    mainSlides.reduce((acc, slide, index) => {
      if (slide.type === "video") {
        acc[index] = 0;
      }
      return acc;
    }, {})
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  const currentSlide = mainSlides[currentMainSlide];

  const handleMainSlideClick = () => {
    if (isTransitioning) return;

    if (currentSlide.type === "video" && isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentMainSlide((prev) => (prev + 1) % mainSlides.length);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    if (currentSlide.type === "video" && videoRef.current) {
      setIsLoading(true);
      videoRef.current.load();

      const playVideo = () => {
        if (videoRef.current && !isLoading) {
          videoRef.current.play().catch((error) => {
            console.error("Auto-play failed:", error);
          });
        }
      };

      setTimeout(playVideo, 800);
    }
  }, [currentMainSlide, activeVideoIndices[currentMainSlide]]);

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    const activeVideoIndex = activeVideoIndices[currentMainSlide] || 0;
    const videoSrc = currentSlide.navigationOptions[activeVideoIndex].videoSrc;
    console.error(`Failed to load video: ${videoSrc}`);
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();

    if (!videoRef.current || isLoading) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }

    setIsPlaying(!isPlaying);
  };

  const handleVideoSelect = (index, e) => {
    e.stopPropagation();

    const currentVideoIndex = activeVideoIndices[currentMainSlide] || 0;
    if (index === currentVideoIndex) return;

    if (isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }

    setActiveVideoIndices(prev => ({
      ...prev,
      [currentMainSlide]: index
    }));
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  const currentVideoIndex = activeVideoIndices[currentMainSlide] || 0;
  const currentVideo = currentSlide.type === "video" ?
    currentSlide.navigationOptions[currentVideoIndex] : null;

  return (
    <div
      className="relative w-full h-screen bg-black flex flex-col items-center justify-center cursor-pointer overflow-hidden"
      onClick={handleMainSlideClick}
    >
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 text-white/60 font-inter text-xs sm:text-sm z-50">
        {currentMainSlide + 1} / {mainSlides.length}
      </div>

      <div
        className={`transition-all duration-500 ease-in-out transform w-full h-full ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
      >
        {currentSlide.type === "text" ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight sm:tracking-[-0.12px] lg:tracking-[-0.24px] max-w-[90vw] sm:max-w-[80vw] lg:max-w-[778px] font-manrope mb-4 sm:mb-6 leading-tight">
              <span className="font-light text-white">Evolving the drive with </span>
              <span className="font-semibold text-white">360-degree</span>
              <span className="font-light text-white"> nonwoven solutions</span>
            </h1>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <div className="absolute w-full  mx-auto top-6 md:top-16 lg:top-20 left-1/2 -translate-x-1/2 px-4 md:px-8 z-40">
              <h1 className="font-manrope text-2xl md:text-4xl lg:text-5xl  text-center tracking-tight leading-tight text-white">
                <span className="font-light">Evolving the drive with </span>
                <span className="font-semibold">360-degree</span><br />
                <span className="font-light"> nonwoven solutions</span>
              </h1>
            </div>

            <div className="absolute inset-0 top-32 md:top-40 lg:top-52 px-4 md:px-8 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 xl:gap-32 mx-auto   items-start">

                <div className="lg:col-span-2">
                  <div className=" mt-20 flex flex-col gap-2 lg:ml-8 xl:ml-16">
                    <h2 className="font-manrope font-bold text-white text-2xl md:text-3xl  tracking-tight leading-tight">
                      {currentSlide.title}
                    </h2>
                    <p className="font-manrope font-normal text-white/90 text-lg md:text-xl max-w-lg leading-relaxed">
                      {currentSlide.subtitle}
                    </p>
                    <div className="mt-4">
                      <span className="font-manrope font-medium text-white/70 text-sm uppercase tracking-wider">
                        Current View: {currentVideo?.label}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 flex justify-center">
                  <div className="w-full max-w-4xl">
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden border  backdrop-blur-sm">

                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                          <div className="animate-spin h-16 w-16 rounded-full border-b-2 border-white"></div>
                        </div>
                      )}

                      <video
                        ref={videoRef}
                        muted
                        loop
                        playsInline
                        preload="auto"
                        onLoadedData={handleVideoLoaded}
                        onError={handleVideoError}
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                        className="w-full h-full object-cover"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <source src={currentVideo?.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-white/60 text-base text-center font-inter">
                          Interactive 360° Vehicle Experience - {currentVideo?.label}
                        </p>
                      </div>
                    </div>




                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
                      {currentSlide.navigationOptions?.map((option, index) => (
                        <div
                          key={index}
                          onClick={(e) => handleVideoSelect(index, e)}
                          className={`flex flex-col items-center justify-center transition-opacity duration-300 cursor-pointer ${index === currentVideoIndex ? 'opacity-100' : 'opacity-70'
                            }`}
                        >
                          <Image
                            src={option.image}
                            alt={option.label || `Thumbnail ${index + 1}`}
                            width={125} // Largest size
                            height={125}
                            className="w-[60px] h-[60px] md:w-[125px] md:h-[125px] brightness-110"
                          />

                        </div>
                      ))}
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>

        )}
      </div>

      <div className="absolute bottom-[6px]  sm:bottom-24 lg:bottom-[20px] text-center font-inter text-sm sm:text-base lg:text-[17.8px] text-white/50 tracking-tight lg:tracking-[-0.09px] px-4 z-40">
        <span className="block sm:inline">
          {currentSlide.type === "text"
            ? "Click anywhere for video experience"
            : "Click anywhere for next section"}
        </span>
        <span className="hidden sm:inline"> • </span>
        <span className="block sm:inline text-xs sm:text-sm opacity-60 mt-1 sm:mt-0">
          ({currentMainSlide + 1} of {mainSlides.length})
        </span>
      </div>

      <div className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-40">
        {mainSlides.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${index === currentMainSlide
              ? "bg-white"
              : index < currentMainSlide
                ? "bg-white/60"
                : "bg-white/20"
              }`}
          />
        ))}
      </div>

      {/* Transition overlay */}
      {isTransitioning && (
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 z-30" />
      )}

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>
    </div>
  );
}