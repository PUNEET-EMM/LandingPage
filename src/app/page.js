"use client";
import Image from "next/image";
import { ContactUs } from "./component/ContactUs";
import { Footer } from "./component/Footer";
import { Landing } from "./component/Landing";
import Slider from "./component/Slider";
import { Video } from "./component/Video";

export default function Home() {
  return (
    <>
    <Landing/>
  <Slider/>
      {/* <Video/> */}
  
    <ContactUs />
    <Footer />
    </>
  );
}
