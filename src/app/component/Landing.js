"use client";
import { useState } from "react";

import Image from 'next/image'

export const Landing = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full min-h-screen">
            <div className="absolute w-full h-[calc(100vh-80px)] top-20 left-0 overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/automotive.224e7418884105595114.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                    

                    <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-[30px] text-center max-w-4xl">
                        <p className="font-normal text-white text-lg sm:text-xl lg:text-[22px] tracking-[0] leading-normal font-['Manrope',sans-serif]">
                            Performance in motion
                        </p>

                        <h1 className="font-['Manrope',sans-serif] text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl tracking-[-0.24px] leading-tight sm:leading-[1.2] lg:leading-[58px] max-w-[761px]">
                            <span className="font-semibold tracking-[-0.12px]">
                                Soft Trims and NVH Solutions
                                <br />
                            </span>
                            <span className="font-light tracking-[-0.12px]">
                                for seamless rides
                            </span>
                        </h1>
                    </div>
                </div>
            </div>

            <header className="absolute w-full h-20 top-0 left-0 bg-[#f9fbff]/95 backdrop-blur-[47px] backdrop-brightness-[100%] z-20">
                <div className="flex items-center justify-between h-full px-4 sm:px-8 lg:px-[134px]">

                    <Image
                        src="/logo.svg"
                        alt="SUPREME Logo"
                        width={120}
                        height={34}
                        priority
                    />


                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        <button className="flex h-[50px] items-center justify-center gap-2.5 px-6 lg:px-[30px] py-2.5 bg-[#5cd6ff] rounded-[100px] border border-solid border-[#00bfff] hover:bg-[#4ac5ee] active:bg-[#3bb5d9] focus:outline-none focus:ring-2 focus:ring-[#00bfff] focus:ring-offset-2 text-black font-medium text-base transition-all duration-200 cursor-pointer">
                            Contact Us
                        </button>
                        <div className="flex items-center gap-3 lg:gap-[20px]">
                            <div className="relative w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity">
                                <Image
                                    src="/linkedin.svg"
                                    alt="LinkedIn Icon"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <div className="relative w-11 h-11  cursor-pointer hover:opacity-70 transition-opacity">
                                <Image
                                    src="/eng.svg"
                                    alt="Language Icon"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>


                    </div>

                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                <div className={`md:hidden absolute top-full left-0 w-full bg-[#f9fbff]/98 backdrop-blur-[47px] border-t border-gray-200 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="flex flex-col items-center py-6 space-y-4">
                        <button className="flex h-[44px] items-center justify-center gap-2.5 px-6 py-2.5 bg-[#5cd6ff] rounded-[100px] border border-solid border-[#00bfff] hover:bg-[#4ac5ee] active:bg-[#3bb5d9] focus:outline-none focus:ring-2 focus:ring-[#00bfff] focus:ring-offset-2 text-black font-medium text-sm transition-all duration-200 cursor-pointer">
                            Contact Us
                        </button>

                    </div>
                </div>
            </header>
        </div>
    );
};
