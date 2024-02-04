import React, { useState } from "react";
import { Product } from "./DataShop";
import { UseCart } from "./cartContext";

export interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { removeFromCart, updateQuantity } = UseCart();

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
    updateQuantity(product, newQuantity);
  };

  return (
    <>
      <div className="p-4 bg-transparent shadow rounded flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between lg:items-center ">
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
        <p className=" text-custom-red font-black mb-2">${product.price}</p>
        <img
          src={product.photoUrl}
          alt={product.title}
          className="w-32 mx-3  object-cover mb-4 rounded"
        />

        <button
          onClick={handleRemoveFromCart}
          className=" bg-custom-red lg:w-20 text-white  rounded hover:bg-red-600"
        >
          Remove
        </button>
        <p>choose your quantity </p>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className=" p-2 w-auto text-center rounded-xl border-2 border-custom-red"
        />
        <div className="mt-4"></div>
      </div>
    </>
  );
};

export default ProductItem;
