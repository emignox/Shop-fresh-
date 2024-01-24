import { useState, useEffect } from "react";
import Poire from "/fragola.png";
import Verdura from "/carciofo.png";
import FruttaSecca from "/pistache.png";
import Splash from "/splash5.png";

const images = [Poire, Verdura, FruttaSecca];
const texts = ["JUICY FRUITS", "VEGETABLES", "DRY FRUITS"];

function Jumbo() {
  const [index, setIndex] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Cambia ogni 6 secondi

    return () => {
      clearInterval(interval);
    };
  }, []);

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
      <div
        className="flex flex-row mt-10 justify-between lg:flex lg:justify-around   overflow-hidden  "
        style={{ opacity: iconOpacity }}
      >
        <h1 className="font-bold text-2xl p-3  w-1/2  lg:w-1/2 lg:text-6xl lg:mt-24 md:text-5xl  ">
          Welcome to FRESH <br />
          Choose your{" "}
          <span
            className=" fadeInOut text-custom-red"
            style={{ fontStyle: "italic" }}
          >
            {texts[index]}
          </span>{" "}
          <br />
          of high quality{" "}
        </h1>
        <div className="w-1/2 h-64  lg:w-1/3 ">
          <img
            className="lg:w-2/2   relative  float lg:relative lg:top-16   md:w-72   "
            src={Splash}
            alt=""
          />{" "}
          <img
            className=" relative bottom-44  float    lg:mt-5  z-10  lg:relative  lg:bottom-64 lg:left-10    lg:w-2/2   md:bottom-72 md:w-72"
            src={images[index]}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Jumbo;
