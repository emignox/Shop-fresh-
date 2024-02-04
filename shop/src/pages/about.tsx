import BigNav from "../components/bigNav";
import Footer from "../components/footer";
import MobileMenu from "../components/mobileMenu";
import AboutUs from "../components/aboutUs";
import Slide from "../components/sliderProduct";

function About() {
  return (
    <>
      <div className="hidden lg:block">
        <BigNav />
        <AboutUs />
        <Slide />
        <Footer />
      </div>
      <div className="lg:hidden xl:hidden">
        <MobileMenu />
        <AboutUs />
        <Slide />
        <Footer />
      </div>
    </>
  );
}

export default About;
