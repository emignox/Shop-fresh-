import React, { useState } from "react";
import { Product } from "./DataShop";
import { UseCart } from "./cartContext";

export interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, removeFromCart, updateQuantity } = UseCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
    updateQuantity(product, newQuantity);
  };

  return (
    <div className="p-4 bg-transparent shadow rounded">
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
      >
        Aggiungi al carrello
      </button>
      <button
        onClick={handleRemoveFromCart}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Rimuovi dal carrello
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        className="ml-4 w-20 pl-2"
      />
    </div>
  );
};

export default ProductItem;
