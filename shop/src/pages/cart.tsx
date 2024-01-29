import BigNav from "../components/bigNav";
import MobileMenu from "../components/mobileMenu";
import Footer from "../components/footer";
import ProductCart from "../components/productCart";
import { Products } from "../components/DataShop";
import { UseCart } from "../components/cartContext";

function Cart() {
  const { items } = UseCart();

  return (
    <>
      <div className="hidden lg:block">
        <BigNav />
        {Products.filter((product) =>
          items.some((item) => item.product.title === product.title)
        ).map((product) => (
          <ProductCart key={product.title} product={product} />
        ))}
        <Footer />
      </div>
      <div className="lg:hidden xl:hidden">
        <MobileMenu />
        {Products.filter((product) =>
          items.some((item) => item.product.title === product.title)
        ).map((product) => (
          <ProductCart key={product.title} product={product} />
        ))}
        <Footer />
      </div>
    </>
  );
}

export default Cart;
