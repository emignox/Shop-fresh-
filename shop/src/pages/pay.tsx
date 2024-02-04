import BigNav from "../components/bigNav";
import MobileMenu from "../components/mobileMenu";
import Footer from "../components/footer";
import Payement from "../components/payment";

function Pay() {
  return (
    <>
      <div className="hidden lg:block">
        <BigNav />
        <Payement />
        <Footer />
      </div>

      <div className="lg:hidden xl:hidden">
        {/* mobile  */}
        <MobileMenu />
        <Payement />
        <Footer />
      </div>
    </>
  );
}

export default Pay;
