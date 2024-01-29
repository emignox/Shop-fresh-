import { useState } from "react";
import { Products } from "./DataShop.ts";
import { Product } from "./DataShop.ts";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";
import Category from "./CategoryButton";
import { UseCart } from "./cartContext";

function Shopping() {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState("All");
  const { addToCart } = UseCart();

  const filteredProducts: Product[] =
    currentCategory === "All"
      ? Products
      : Products.filter((product) => product.category === currentCategory);

  return (
    <>
      <div className="flex flex-row  justify-center items-center">
        <h1 className="text-center my-20  text-2xl lg:text-5xl text-custom-black mx-5 underline">
          Start your shopping{" "}
        </h1>
        <FaShoppingBasket className="text-custom-red lg:text-5xl  text-2xl" />
      </div>

      <Category setCurrentCategory={setCurrentCategory} />

      <div className="flex flex-wrap justify-around items-stretch my-20">
        {filteredProducts.map((product: Product, index: number) => (
          <div
            key={index}
            className="flex flex-col m-2 bg-custom-canarino rounded-xl overflow-hidden shadow-lg w-60 mx-12 hover:scale-105 transition duration-500 lg:my-10"
            onClick={() => navigate("./")}
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={product.photoUrl}
                alt={product.title}
              />
            </div>
            <div className="flex-grow p-4 ">
              <h1 className="text-lg font-bold mb-2 text-center ">
                {product.title}
              </h1>
              <div className="flex justify-center items-center">
                <p className="text-custom-red text-center font-black ">
                  Price: ${product.price}
                </p>
                <button
                  className="text-custom-red font-black flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-center lg:items-center lg:space-x-2"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                  <FiShoppingCart className="text-2xl text-custom-red text-center  hover:scale-150 transition duration-200 " />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shopping;
