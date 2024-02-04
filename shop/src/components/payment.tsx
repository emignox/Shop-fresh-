import { UseCart } from "../components/cartContext";
import Visa from "/1.png";
import MasterCard from "/2.png";
import Maestro from "/3.png";
import PayPal from "/5.png";
import { useState } from "react";
import CardPayement from "./cardPayment";

function Payement() {
  const { items, clearCart } = UseCart();
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleClick = (payment: string) => {
    setSelectedPayment(payment);
  };

  const handlePayment = () => {
    if (items.length > 0) {
      // qui puoi implementare la logica di pagamento
      clearCart(); // Svuota il carrello dopo il pagamento
      alert("tankyou for your purchase!");
    } else {
      alert("your cart is empty! ");
    }
  };

  // Calcola il prezzo totale
  const totalPrice = items
    .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    .toFixed(2);
  return (
    <>
      <div className="flex flex-col   items-center justify-center  p-8 rounded shadow-lg h-screen">
        <div className="flex flex-col  text-center  ">
          <h1 className="text-3xl font-medium my-10 lg:text-5xl">
            payment Method:
          </h1>
          <div className="   grid grid-cols-2 gap-3 lg:flex   ">
            <img
              onClick={() => handleClick("Visa")}
              className={`w-20 h-12 mx-5 cursor-pointer rounded-xl ${
                selectedPayment === "Visa"
                  ? "border-4 border-custom-red rounded-xl"
                  : ""
              }`}
              src={Visa}
              alt=""
            />
            <img
              onClick={() => handleClick("MasterCard")}
              className={`w-20 h-12 mx-5 cursor-pointer rounded-xl ${
                selectedPayment === "MasterCard"
                  ? "border-4 border-custom-red rounded-xl"
                  : ""
              }`}
              src={MasterCard}
              alt=""
            />
            <img
              onClick={() => handleClick("Maestro")}
              className={`w-20 h-12 mx-5 cursor-pointer rounded-xl ${
                selectedPayment === "Maestro"
                  ? "border-4 border-custom-red rounded-xl"
                  : ""
              }`}
              src={Maestro}
              alt=""
            />
            <img
              onClick={() => handleClick("PayPal")}
              className={`w-20 h-12 mx-5 cursor-pointer rounded-xl ${
                selectedPayment === "PayPal"
                  ? "border-4 border-custom-red rounded-xl"
                  : ""
              }`}
              src={PayPal}
              alt=""
            />
          </div>
          <CardPayement />
          <h2 className="text-2xl font-bold my-10">Total: ${totalPrice}</h2>
          <button
            onClick={handlePayment}
            className="h-12 bg-custom-red text-custom-yellow rounded-2xl text-3xl hover:bg-custom-black transition duration-500 hover:text-white"
          >
            Pay
          </button>
        </div>
      </div>
    </>
  );
}
export default Payement;
