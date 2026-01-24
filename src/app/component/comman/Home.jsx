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
    <div className="hidden md:block" ><SoloSlider /></div> 
    <div className="block md:hidden"><Support/></div>
    <div ><Key/></div>
    <div ><How /></div>
    <div > <Histroy/></div> 
    <div><Choose/></div>
    <div><Chooserespon/></div>   
    {/* <div ><App /></div> */}
    {/* <div><Testimonial/></div>     */}
      
    </>
  );
}
