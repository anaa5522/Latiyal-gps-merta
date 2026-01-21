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
    <div className=" bg-[#F6F2EA]
"><Banner /></div>
      

      {/* Slider section */}
      <div className="px-4  bg-[#F6F2EA]
"><SoloSlider /></div>
      

<div className="px-4 py-6 bg-[#F6F2EA]
"><App /></div>
      
      <div className="px-4 py-6 bg-[#F6F2EA]
"><How /></div>
      
      <div className="px-4 py-6 bg-[#F6F2EA]
"><Key/></div>
      
      <div className="hidden md:block px-4 py-6 bg-[#F6F2EA]"><Choose/></div>      
      <div className="block md:hidden px-4 py-6 bg-[#F6F2EA]"><Chooserespon/></div>
      <div className="px-4 py-6 bg-[#F6F2EA]
"> <Histroy/></div>
     
      <div className="px-4 py-6 bg-[#F6F2EA]
"><Testimonial/></div>
      
      
      
      
    </>
  );
}
