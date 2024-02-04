import { UseCart } from "../components/cartContext";
import { useNavigate } from "react-router-dom";

function Summary() {
  const { items } = UseCart();
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  return (
    <>
      <div className="flex flex-col justify-center items-center  lg:h-full border-l-2 border-custom-black px-5 w-auto overflow-auto">
        <h1 className="lg:text-xl font-bold mb-4">summary:</h1>
        {items.map((item) => (
          <div key={item.product.title}>
            <p className="text-custom-red font-black">{item.product.title}</p>
            <p className=" font-black">Quantiy: {item.quantity}</p>
            <p className="text-custom-black font-black">
              Price product : ${item.product.price.toFixed(2)}
            </p>
            <p>Subtotale: ${(item.product.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <h3 className="text-lg font-bold mt-4 text-custom-red mx-auto">
          Total: $
          {items
            .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
            .toFixed(2)}
        </h3>
        <button
          onClick={() => {
            navigate("/pay");
            window.scrollTo(0, 0);
          }}
          className=" bg-custom-red rounded-xl my-5 w-32"
        >
          <h1 className=" text-white">Go to pay </h1>{" "}
        </button>
      </div>
    </>
  );
}

export default Summary;
