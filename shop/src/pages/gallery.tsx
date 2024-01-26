import BigNav from "../components/bigNav";
import Footer from "../components/footer";
import MobileMenu from "../components/mobileMenu";
import Foto from "../components/foto";

function Gallery() {
  return (
    <>
      <div className="hidden lg:block">
        <BigNav />
        <Foto />
        <Footer />
      </div>
      <div className="lg:hidden xl:hidden">
        {/* mobile  */}
        <MobileMenu />
        <Foto />
        <Footer />
      </div>
    </>
  );
}

export default Gallery;
