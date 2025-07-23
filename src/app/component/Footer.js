import React from "react";
import Image from 'next/image'

export const Footer = () => {
  const footerNavigation = [
    {
      title: "APPLICATIONS",
      links: ["Apparel", "Automotive", "Filtration", "Customised Solutions"],
    },
    {
      title: "COMPANY",
      links: ["Innovation", "Global Competency", "About Us", "Contact Us"],
    },
    {
      title: "MORE",
      links: ["Careers", "Privacy Policy", "Terms and Conditions"],
    },
    {
      title: "FOLLOW US",
      links: ["Twitter", "LinkedIn", "Instagram", "Medium"],
    },
  ];

  return (
    <footer className="w-full max-w-[1920px] bg-white overflow-hidden mx-auto">
      <div className="relative">
        <div className="h-[69px] bg-white"></div>

        <div className="relative  min-h-[544px] px-8 py-12">
          <div className="absolute top-0 right-[-300px] w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[111px] right-0 w-[809px] h-[794px] opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-800 rounded-full transform rotate-12"></div>
              <div className="absolute top-[103px] left-[197px] w-[424px] h-[582px] bg-gradient-to-tl from-blue-300 to-blue-700 rounded-full transform -rotate-6"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="flex flex-col gap-20">
              <div className="flex lg:justify-start">
                <div className="w-[226px] h-[63px] bg-white rounded-lg flex">
                  <Image
                    src="/logo.svg"
                    alt="SUPREME Logo"
                    width={150}
                    height={40}
                    priority
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-20">
                {footerNavigation.map((section, index) => (
                  <div key={index} className="flex flex-col gap-3 sm:gap-5">
                    <h3 className="font-bold text-black text-sm sm:text-base tracking-wide">
                      {section.title}
                    </h3>
                    <div className="flex flex-col gap-2 sm:gap-3">
                      {section.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href="#"
                          className="font-medium text-black/70 text-xs sm:text-sm tracking-wide hover:text-black transition-colors duration-200 cursor-pointer"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pt-8 border-t border-black/20">
                <div className="font-medium text-black/70 text-sm">
                  ©2023. All Rights Reserved.
                </div>
                <div className="font-medium text-black/70 text-sm">
                  Supreme house: 110, 16th Road, Chembur, Mumbai – 400071.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};