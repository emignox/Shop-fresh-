import { useState, useEffect } from "react";
import Poire from "/fragola.png";
import Verdura from "/carciofo.png";
import FruttaSecca from "/pistache.png";
import Splash from "/schizzo.png";

const images = [Poire, Verdura, FruttaSecca];
const texts = ["JUICY FRUITS", "VEGETABLES", "DRY FRUITS"];

function Jumbo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Cambia ogni 6 secondi

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row mt-10 justify-between lg:flex lg:justify-around ">
        <h1 className="font-bold text-2xl p-3  w-1/2  lg:w-1/2 lg:text-7xl lg:mt-24  ">
          Welcome to FRESH <br />
          Choose your{" "}
          <span
            className=" fade-in-out"
            style={{ color: "#e11c37", fontStyle: "italic" }}
          >
            {texts[index]}
          </span>{" "}
          <br />
          of high quality{" "}
        </h1>
        <div className="w-1/2 h-64  lg:w-1/3 ">
          <img
            className="lg:w-2/2  relative  lg:relative     "
            src={Splash}
            alt=""
          />{" "}
          <img
            className=" relative bottom-44 float    lg:mt-5  z-10  lg:relative lg:bottom-96 lg:left-10   lg:w-2/2 lg:h-96"
            src={images[index]}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Jumbo;
