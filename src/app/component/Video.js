'use client'
import { Pause, Play } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  const navigationOptions = [
    { 
      label: "Complete Body", 
      videoSrc: "/Passenger Alpha - Trim.mp4" // Your main video
    },
    { 
      label: "Front", 
      videoSrc: "/front-view.mp4" // Add your front view video
    },
    { 
      label: "Cabin", 
      videoSrc: "/cabin-view.mp4" // Add your cabin view video
    },
    { 
      label: "Trunk", 
      videoSrc: "/trunk-view.mp4" // Add your trunk view video
    },
    { 
      label: "Exterior", 
      videoSrc: "/exterior-view.mp4" // Add your exterior view video
    },
  ];

  // Auto-load video when component mounts or video changes
  useEffect(() => {
    if (videoRef.current) {
      setIsLoading(true);
      videoRef.current.load(); // This will trigger the video to load
    }
  }, [activeVideoIndex]);

  // Handle video loaded event
  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  // Handle video error
  const handleVideoError = () => {
    setIsLoading(false);
    console.error(`Failed to load video: ${navigationOptions[activeVideoIndex].videoSrc}`);
  };

  const togglePlayPause = () => {
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

  const handleVideoSelect = (index) => {
    if (index === activeVideoIndex) return;
    
    // Pause current video if playing
    if (isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    
    setActiveVideoIndex(index);
  };

  // Handle video play/pause events
  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Top Heading */}
      <div className="absolute w-full max-w-7xl mx-auto top-12 md:top-16 lg:top-18 left-1/2 -translate-x-1/2 px-4 md:px-8">
        <h1 className="font-['Manrope',Helvetica] text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center tracking-tight">
          <span className="font-light text-white">Evolving the drive with </span>
          <span className="font-semibold text-white">360-degree</span>
          <span className="font-light text-white"> nonwoven solutions</span>
        </h1>
      </div>

      {/* Main Grid */}
      <div className="absolute inset-0 top-32 md:top-40 lg:top-48 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full max-w-7xl mx-auto">
          
          {/* Left - Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="hidden lg:block absolute left-8 xl:left-16 top-0 bottom-0 w-px">
              <div className="h-20 bg-transparent"></div>
              <div className="h-80 bg-white/20 w-px"></div>
              <div className="flex-1 bg-white w-px"></div>
            </div>

            <div className="bg-transparent border-none lg:ml-16 xl:ml-24">
              <div className="flex flex-col gap-4 p-0">
                <h2 className="font-['Manrope',Helvetica] font-bold text-white text-xl md:text-2xl lg:text-3xl tracking-tight">
                  Passenger vehicles
                </h2>
                <p className="font-['Manrope',Helvetica] font-normal text-white/90 text-base md:text-lg lg:text-xl tracking-tight max-w-md leading-relaxed">
                  Advancing Nonwoven engineering for passenger comfort and safety.
                </p>
                
                {/* Current Video Label */}
                <div className="mt-4">
                  <span className="font-['Manrope',Helvetica] font-medium text-white/70 text-sm uppercase tracking-wider">
                    Current View: {navigationOptions[activeVideoIndex].label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Video Container */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-full max-w-2xl aspect-video bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
              
              {/* Loading Spinner */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
              )}

              {/* Video Element */}
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
              >
                <source src={navigationOptions[activeVideoIndex].videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Center Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={togglePlayPause}
                  disabled={isLoading}
                  className="w-16 h-16 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : isPlaying ? (
                    <Pause className="h-8 w-8 text-white" />
                  ) : (
                    <Play className="h-8 w-8 text-white ml-1" />
                  )}
                </button>
              </div>

              {/* Video Label */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-['Inter',Helvetica] font-normal text-white/60 text-sm text-center">
                  Interactive 360° Vehicle Experience - {navigationOptions[activeVideoIndex].label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dot Navigation */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-6">
          {navigationOptions.map((option, index) => (
            <div key={index} className="relative group cursor-pointer">
              <button
                onClick={() => handleVideoSelect(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === activeVideoIndex 
                    ? 'bg-white shadow-lg shadow-white/50 scale-110' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
              
              {/* Hover Label */}
              <div className={`absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                index === activeVideoIndex 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
              }`}>
                <div className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20">
                  <span className="font-['Manrope',Helvetica] font-medium text-white text-xs md:text-sm">
                    {option.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Floating Play Button */}
      <button
        onClick={togglePlayPause}
        disabled={isLoading}
        className="absolute w-12 h-12 md:w-14 md:h-14 bottom-8 right-4 md:right-8 lg:right-16 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        ) : isPlaying ? (
          <Pause className="h-5 w-5 md:h-6 md:w-6 text-white" />
        ) : (
          <Play className="h-5 w-5 md:h-6 md:w-6 text-white ml-0.5" />
        )}
      </button>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>
    </div>
  );
};