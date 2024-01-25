import BigNav from "../components/bigNav";
import MobileMenu from "../components/mobileMenu";
import Footer from "../components/footer";
import Shopping from "../components/shopping";
function Shop() {
  return (
    <>
      <div className="hidden lg:block">
        <BigNav />
        <Shopping />
        <Footer />
      </div>
      <div className="lg:hidden xl:hidden">
        <MobileMenu />
        <Shopping />
        <Footer />
      </div>
    </>
  );
}
export default Shop;
