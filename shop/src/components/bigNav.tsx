import Logo from "./logo";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { useState } from "react";
import { UseCart } from "./cartContext";

function Nav() {
  const navigate = useNavigate();
  const [isInputVisible, setInputVisible] = useState(false);
  const { items } = UseCart();

  return (
    <>
      <nav className="  lg:flex lg:flex-row lg:justify-between lg:items-center">
        <div className="p-3">
          {" "}
          <Logo />
        </div>

        <div>
          <ul className=" lg:flex lg:flex-row  lg:justify-around lg:items-center mt-2 mx-8 cursor-pointer">
            <li
              className="lg:mx-5 lg:text-lg lg:font-bold"
              onClick={() => navigate("/home")}
            >
              Home{" "}
            </li>
            <li
              className="lg:mx-5 lg:text-lg lg:font-semibold cursor-pointer"
              onClick={() => navigate("/about")}
            >
              About Us
            </li>
            <li
              className="lg:mx-5 lg:text-lg lg:font-semibold cursor-pointer"
              onClick={() => navigate("/shop")}
            >
              shop
            </li>
            <li
              className="lg:mx-5 lg:text-lg lg:font-semibold cursor-pointer"
              onClick={() => navigate("/gallery")}
            >
              gallery
            </li>
            <li
              className="lg:mr-32 lg:text-lg lg:font-semibold  cursor-pointer"
              onClick={() => navigate("/")}
            >
              contact us
            </li>
            <FiSearch
              className="mx-5"
              style={{ color: "#e11c37" }}
              onClick={() => setInputVisible(!isInputVisible)} // Inverti il valore di isInputVisible
            />
            {isInputVisible && (
              <input
                className="w-32 bg-transparent border-2 border-custom-red rounded-md placeholder:text-custom-black placeholder:text-base  lg:text-base"
                type="text"
                placeholder="search.."
              />
            )}

            <p className="lg:mx-5 lg:text-lg lg:font-bold  "> /Log in </p>

            <div
              onClick={() => navigate("/cart")}
              className="text-2xl cursor-pointer mx-3 flex items-center"
            >
              <FiShoppingCart style={{ color: "#e11c37" }} />
              {items.length > 0 && (
                <span className="bg-custom-black text-white mb-3 ml-1 text-xs h-5 w-5  rounded-full text-center  flex  justify-center items-center ">
                  {items.length}
                </span>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Nav;
