import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "./logo";

function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="  h-auto bg-custom-black  w-full flex flex-col justify-start  lg:justify-center lg:flex lg:flex-col lg:h-auto  ">
          <div className=" flex  justify-center my-5">
            {" "}
            <Logo />
          </div>
          <h2 className="text-custom-canarino font-black  border-b-2 border-b-custom-yellow  m-5 lg mx-auto w-full text-center">
            Business Time: <br />
            Monday-Friday:8:00 AM to 5 PM <br />
            Saturday:8:00 AM to 3 PM
          </h2>
          <h2 className="text-custom-canarino text-center font-black">
            Where you can reach Us{" "}
          </h2>
          <div className="flex justify-center border-b-2 border-b-custom-yellow m-5 cursor-pointer ">
            <FaFacebook className="text-custom-canarino mx-2 text-2xl m-3 cursor-pointer" />
            <FaInstagram className="text-custom-canarino mx-2 text-2xl m-3 cursor-pointer" />
            <FaTwitter className="text-custom-canarino mx-2 text-2xl m-3 cursor-pointer" />
          </div>
          <div className="flex  justify-center my-5">
            <FaPhone className="text-custom-canarino mx-2 text-2xl" />
            <h2 className="text-custom-canarino text-center font-black underline">
              +32 456792134{" "}
            </h2>{" "}
          </div>
          <div className="flex  justify-center    lg:my-5">
            <FaEnvelope className="text-custom-canarino mx-2 text-2xl" />
            <h2 className="text-custom-canarino text-center font-black underline">
              FreshBe@icloud.com
            </h2>{" "}
          </div>
          <p className="text-custom-red text-center text-xs   font-black pb-20 lg:pb-0 mt-5">
            All Rights Reserved. © 2018 ThewayShop Design By : html design
          </p>{" "}
        </div>
      </footer>
    </>
  );
}

export default Footer;
