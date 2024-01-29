// CartContext.tsx
import React, { createContext, useContext, useState } from "react";
import { Product } from "./DataShop";

interface CartContextProps {
  items: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
  updateQuantity: (item: Product, quantity: number) => void;
}

interface CartItem {
  product: Product;
  quantity: number;
}
export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // ...  // Specifica il tipo delle props per CartProvider
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Product) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.product.title === item.title
    );

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.product.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { product: item, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (item: Product) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.product.title !== item.title)
    );
  };

  const updateQuantity = (item: Product, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.product.title === item.title
          ? { ...cartItem, quantity: quantity }
          : cartItem
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("UseCart must be used within a CartProvider");
  }
  return context;
};
