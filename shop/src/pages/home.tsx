import { useState, useEffect } from "react";
import BigNav from "../components/bigNav";
import MobileMenu from "../components/mobileMenu";
import Jumbo from "../components/jumbotron";
import PresentationsCard from "../components/presentationsCards";
import Pub from "../components/pub";
import { FiArrowDown } from "react-icons/fi";
import Footer from "../components/footer";
import Farm from "../components/farm";
import Foto from "/papaya.png";
import { useNavigate } from "react-router-dom";
import Slide from "../components/sliderProduct";

function Home() {
  const [iconOpacity, setIconOpacity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      const newOpacity = Math.max(1 - window.pageYOffset / 500, 0);
      setIconOpacity(newOpacity);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden lg:block">
        <BigNav />
        <Jumbo />

        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => navigate("/shop")}
            className="flex rounded-md border-2 w-32 border-black bg-custom-red lg:bg-custom-yellow  lg:hover:bg-custom-red transition duration-500 ease-in-out  justify-center mt-12  lg:w-52  cursor-pointer  text-custom-black  text-lg lg:text-2xl lg:font-bold "
          >
            SHOP NOW!
            <img className="w-7" src={Foto} alt="" />
          </button>{" "}
          <FiArrowDown
            className="text-5xl mt-28 animate-bounce"
            style={{ opacity: iconOpacity }}
          />
        </div>
        <div>
          <h1 className="text-center text-5xl animated-text">
            More than a simple shop
          </h1>
        </div>
        <PresentationsCard />
        <Pub />

        <Farm />
        <Slide />

        <Footer />
      </div>

      {/* mobile */}
      <div className="lg:hidden xl:hidden">
        <MobileMenu />
        <Jumbo />

        <div className=" justify-center items-center flex flex-col ">
          <button
            onClick={() => navigate("/shop")}
            className="flex rounded-md  border-2 w-52 border-black bg-custom-red lg:bg-custom-yellow  lg:hover:bg-custom-red transition duration-500 ease-in-out  justify-center mt-12  lg:w-52  cursor-pointer  text-custom-black  text-lg lg:text-2xl lg:font-bold "
          >
            SHOP NOW!
            <img className="w-7" src={Foto} alt="" />
          </button>
          <FiArrowDown
            className="text-2xl mt-12 animate-bounce"
            style={{ opacity: iconOpacity }}
          />
        </div>
        <PresentationsCard />
        <Pub />
        <Farm />
        <Slide />

        <Footer />
      </div>
    </>
  );
}

export default Home;
