import BigNav from "../components/bigNav";
import MobileMenu from "../components/mobileMenu";
import Footer from "../components/footer";
import ProductCart from "../components/productCart";
import { Products } from "../components/DataShop";
import { UseCart } from "../components/cartContext";
import { useNavigate } from "react-router-dom";
import Foto from "/papaya.png";

function Cart() {
  const navigate = useNavigate();
  const { items } = UseCart();
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <>
      <div className="hidden lg:block">
        <BigNav />

        {items.length > 0 ? (
          <>
            {Products.filter((product) =>
              items.some((item) => item.product.title === product.title)
            ).map((product) => (
              <ProductCart key={product.title} product={product} />
            ))}
            <div className="my-12 lg:my-32">
              <h3 className="text-lg font-bold">Total: ${total.toFixed(2)}</h3>
            </div>
          </>
        ) : (
          <div className=" flex flex-col justify-center items-center lg:h-screen  ">
            <h1 className="  l lg:mt-5 lg:text-6xl "> your cart is empty </h1>
            <button
              onClick={() => navigate("/shop")}
              className="flex rounded-md border-2 w-32 border-black bg-custom-red lg:bg-custom-yellow  lg:hover:bg-custom-red transition duration-500 ease-in-out  justify-center mt-12  lg:w-52  cursor-pointer  text-custom-black  text-lg lg:text-2xl lg:font-bold "
            >
              SHOP NOW!
              <img className="w-7" src={Foto} alt="" />
            </button>
          </div>
        )}

        <Footer />
      </div>
      {/* MOBILE //////////////////////////////////////////////////// */}
      <div className="lg:hidden xl:hidden">
        <MobileMenu />
        {items.length >= 0 ? (
          <>
            {Products.filter((product) =>
              items.some((item) => item.product.title === product.title)
            ).map((product) => (
              <ProductCart key={product.title} product={product} />
            ))}
          </>
        ) : (
          <h1> your chart is empty </h1>
        )}
        <div className="my-12 lg:my-32">
          <h3 className="text-lg font-bold">Total: ${total.toFixed(2)}</h3>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Cart;
