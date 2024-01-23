import Logo from "./logo";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="  lg:flex lg:flex-row lg:justify-between lg:items-center">
        <div className="p-3">
          {" "}
          <Logo />
        </div>

        <div>
          <ul className=" lg:flex lg:flex-row  lg:justify-around lg:items-center mt-2 mx-8">
            <li
              className="lg:mx-5 lg:text-xl lg:font-bold"
              onClick={() => navigate("./")}
            >
              Home{" "}
            </li>
            <li
              className="lg:mx-5 lg:text-xl lg:font-semibold"
              onClick={() => navigate("./")}
            >
              About Us
            </li>
            <li
              className="lg:mx-5 lg:text-xl lg:font-semibold"
              onClick={() => navigate("./")}
            >
              shop
            </li>
            <li
              className="lg:mx-5 lg:text-xl lg:font-semibold"
              onClick={() => navigate("./")}
            >
              gallery
            </li>
            <li
              className="lg:mr-32 lg:text-xl lg:font-semibold "
              onClick={() => navigate("./")}
            >
              contact us
            </li>
            <p className="lg:mx-5 lg:text-xl lg:font-bold "> /Log in </p>

            <div
              onClick={() => navigate("/cart")}
              className="text-2xl cursor-pointer mx-3"
            >
              <FiShoppingCart style={{ color: "#e11c37" }} />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Nav;
