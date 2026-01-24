import Banner from "../Banner";
import App from "../App";
import How from "../How";
import SoloSlider from "../Slider";
import Key from "../Key";
import Choose from "../Choose";
import Chooserespon from "../Chooserespon";
import Histroy from "../Histroy";
import Testimonial from "../Testimonial";
import Support from "../Support";


export default function Home() {
  return (
    <>
    <div ><Banner /></div>
    {/* <div className="hidden md:block" ><SoloSlider /></div>  */}
    {/* <div className="block md:hidden"><Support/></div> */}
    <div ><Key/></div>
    <div ><How /></div>
    <div > <Histroy/></div> 
    <div><Choose/></div>
    <div><Chooserespon/></div>   
    {/* <div ><App /></div> */}
    <div className="bg-gradient-to-br from-[#062B63] to-[#041A3D] text-center pt-20 ">
          
          <h2 className="font-[var(--font-inter)] font-semibold text-[28px]  md:text-4xl py-4   text-white ">
            Our<span className="text-[#FCB13B]"> Happy</span> Coustmer
          </h2>
          <p className="font-montserrat font-light text-[13.3px] leading-[21.3px] mt-3 text-white max-w-2xl mx-auto">
            Everything you need to monitor, manage, and <br/>protect your vehicles efficiently.
          </p>
          <Testimonial/>
        </div>
       
      
    </>
  );
}
