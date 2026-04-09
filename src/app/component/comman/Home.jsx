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
import Feature from "../Feature";
import Pro from "../Pro";
import FeatureSlider from "../FeatureSlider";
import Add from "../Add";
import SimpleSlider from "../SimpleSlider";
import Service from "../Service";
import Product from "../Product";


export default function Home() {
  return (
    <>
    <div className=""><SimpleSlider/></div>
    <div><FeatureSlider/></div>
    <div ><Key/></div>
    <div ><How /></div> 
    <div><Service/></div>
    
    <div><Chooserespon/></div>
    
    <div><Choose/></div>
      
     <div > <Histroy/></div>
     <div><Product/></div>
    <Testimonial/>
      
    </>
  );
}
