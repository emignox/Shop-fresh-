import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiShoppingCart,
  FiHome,
  FiShoppingBag,
  FiImage,
  FiMail,
} from "react-icons/fi";
import Logo from "./logo";

const App: React.FC = () => {
  const navigate = useNavigate();
  const menuItems = [
    { name: "Home", icon: <FiHome />, href: "/" },
    { name: "Shop", icon: <FiShoppingBag />, href: "/shop" },
    { name: "Gallery", icon: <FiImage />, href: "/gallery" },
    { name: "Contact Us", icon: <FiMail />, href: "/contact" },
  ];

  return (
    <>
      <div className=" flex justify-between items-center">
        <div></div>{" "}
        {/* Questo div vuoto serve per mantenere la spaziatura corretta */}
        <Logo />
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

      <div className="flex flex-col justify-between  lg:hidden xl:hidden fixed bottom-0 w-full">
        <div
          className="flex justify-around items-center h-14"
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
