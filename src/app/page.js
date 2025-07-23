import { ContactUs } from "./component/ContactUs";
import { Footer } from "./component/Footer";
import { Landing } from "./component/Landing";
import Slider from "./component/Slider";

export default function Home() {
  return (
    <>
      <Landing />
      <Slider />
      <ContactUs />
      <Footer />
    </>
  );
}
