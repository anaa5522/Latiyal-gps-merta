
import How from "../How";
import Key from "../Feature";
import Choose from "../Choose";
import Chooserespon from "../Technology";
import Histroy from "../Histroy";
import Testimonial from "../Testimonial";
import FeatureSlider from "../FeatureSlider";

import Product from "../Product";
import Service from "../Service";
import BannerSection from "../BannerSection";
import Technology from "../Technology";
import Feature from "../Feature";




export default function Home() {
  return (
    <>
    <div><BannerSection/></div>
    <div><Service/></div>
    <div ><How /></div>
    <div><Technology/></div>
    <div><FeatureSlider/></div>
    <div ><Feature/></div>
    <div><Choose/></div>
    <div > <Histroy/></div>
    <div><Product/></div>
    <div><Testimonial/></div>
    </>
  );
}
