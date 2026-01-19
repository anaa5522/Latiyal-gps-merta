import Banner from "../Banner";
import App from "../App";
import How from "../How";
import SoloSlider from "../Slider";
import Key from "../Key";
import Choose from "../Choose";
import Chooserespon from "../Chooserespon";
import Histroy from "../Histroy";
import Testimonial from "../Testimonial";


export default function Home() {
  return (
    <>
      <Banner />

      {/* Slider section */}
      <SoloSlider />

      <App />
      <How />
      <Key/>
      <div className="hidden md:block"><Choose/></div>      
      <div className="block md:hidden"><Chooserespon/></div>
      <Histroy/>
      <Testimonial/>
      
      
      
    </>
  );
}
