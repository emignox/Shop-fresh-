import { useState, useEffect } from "react";
import BigNav from "../components/bigNav";
import MobileMenu from "../components/mobileMenu";
import Jumbo from "../components/jumbotron";
import Button from "../components/button";
import PresentationsCard from "../components/presentationsCards";
import Pub from "../components/pub";
import { FiArrowDown } from "react-icons/fi";
import Footer from "../components/footer";

function Home() {
  const [iconOpacity, setIconOpacity] = useState(1);

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
          <Button value="SHOP NOW" />
          <FiArrowDown
            className="text-5xl mt-28 animate-bounce"
            style={{ opacity: iconOpacity }}
          />
        </div>
        <PresentationsCard />
        <Pub />
        <Footer />
      </div>

      {/* mobile */}
      <div className="lg:hidden xl:hidden">
        <MobileMenu />
        <Jumbo />

        <div className=" justify-center items-center flex flex-col ">
          <Button value="SHOP NOW" />
          <FiArrowDown
            className="text-2xl mt-12 animate-bounce"
            style={{ opacity: iconOpacity }}
          />
        </div>
        <PresentationsCard />
        <Pub />
        <Footer />
      </div>
    </>
  );
}

export default Home;
