import BigNav from "../components/bigNav";
import Footer from "../components/footer";
import Info from "../components/labelsInfo";
import MobileMenu from "../components/mobileMenu";

function Contact() {
  return (
    <>
      <div className="hidden lg:block">
        <BigNav />
        <Info />
        <Footer />
      </div>
      <div className="lg:hidden xl:hidden">
        {/* mobile  */}
        <MobileMenu />
        <Info />
        <Footer />
      </div>
    </>
  );
}

export default Contact;
