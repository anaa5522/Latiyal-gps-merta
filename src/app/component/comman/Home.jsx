
import How from "../How";
import Key from "../Key";
import Choose from "../Choose";
import Chooserespon from "../Chooserespon";
import Histroy from "../Histroy";
import Testimonial from "../Testimonial";
import FeatureSlider from "../FeatureSlider";
import SimpleSlider from "../SimpleSlider";
import Product from "../Product";
import Service from "../Service";




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
