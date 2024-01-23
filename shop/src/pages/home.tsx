import BigNav from "../components/bigNav";
import MobileMenu from "../components/mobileMenu";
import Jumbo from "../components/jumbotron";
import Button from "../components/button";
function home() {
  return (
    <>
      <div className="hidden lg:block">
        <BigNav />
        <Jumbo />
        <div className="flex justify-center items-center">
          <Button value="SHOP NOW" />
        </div>
      </div>
      <div className="lg:hidden xl:hidden">
        <MobileMenu />
        <Jumbo />
        <div className="flex justify-center items-center ">
          <Button value="SHOP NOW" />
        </div>
      </div>
    </>
  );
}
export default home;
