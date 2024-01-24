import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiShoppingCart,
  FiHome,
  FiShoppingBag,
  FiImage,
  FiMail,
  FiSearch,
} from "react-icons/fi";
import Logo from "./logo";

const App: React.FC = () => {
  const navigate = useNavigate();
  const [isInputVisible, setInputVisible] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FiHome />, href: "/" },
    { name: "Shop", icon: <FiShoppingBag />, href: "/shop" },
    { name: "Gallery", icon: <FiImage />, href: "/gallery" },
    { name: "Contact Us", icon: <FiMail />, href: "/contact" },
  ];

  return (
    <>
      <div className="   bg-custom-canarino  h-auto rounded-2xl mt-2 mx-3 lg:shadow-2xl">
        <div className=" flex justify-between items-center ">
          <Logo />
          <FiSearch
            className="mx-5"
            style={{ color: "#e11c37" }}
            onClick={() => setInputVisible(!isInputVisible)}
          />
          {isInputVisible && (
            <input
              className="w-32 bg-transparent  border-2 border-custom-black rounded-md  placeholder:text-custom-black placeholder:text-xs text-xs "
              type="text"
              placeholder="search.."
            />
          )}
          <h2
            className="text-right  mx-4"
            style={{
              color: "#e11c37",
              fontStyle: "italic",
            }}
          >
            Login
          </h2>
        </div>
      </div>

      <div className="flex flex-col justify-between  lg:hidden xl:hidden fixed bottom-0 w-full  z-50 m-0">
        <div
          className="flex justify-around items-center h-14 m-0"
          style={{
            backgroundColor: "#080101",
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.href)}
              className="text-2xl cursor-pointer"
            >
              {React.cloneElement(item.icon, { style: { color: "#e11c37" } })}
            </div>
          ))}
          <div
            onClick={() => navigate("/cart")}
            className="text-2xl cursor-pointer"
          >
            <FiShoppingCart style={{ color: "#e11c37" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
