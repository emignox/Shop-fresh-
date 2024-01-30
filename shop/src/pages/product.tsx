import { useParams } from "react-router-dom";
import { Products } from "../components/DataShop";
import BigNav from "../components/bigNav";
import Footer from "../components/footer";
import MobileMenu from "../components/mobileMenu";

function SingleProduct() {
  const { productTitle } = useParams();
  const product = Products.find((p) => p.title === productTitle);

  if (!product) {
    return <div>Prodotto non trovato</div>;
  }

  return (
    <>
      <div className="hidden lg:block">
        <BigNav />
        <div className="p-4  shadow rounded border-t-2 border-custom-black  flex flex-col justify-center items-center">
          <h1 className="text-2xl font-black  mb-4">{product.title}</h1>
          <img
            src={product.photoUrl}
            alt={product.title}
            className=" object-fit mb-4 rounded"
          />
          <p className="text-custom-black font-black text-lg mb-2">
            Category: {product.category}
          </p>
          <p className="text-custom-black font-black text-lg mb-2">
            Price: {product.price}
          </p>
          <p className="text-custom-black  border-t-2 border-custom-black  font-black text-lg">
            Description: {product.description}
          </p>
        </div>
        <Footer />
      </div>

      {/* mobile */}
      <div className="lg:hidden xl:hidden">
        <MobileMenu />
        <div className="p-4  shadow rounded     flex flex-col justify-center items-center">
          <h1 className="text-2xl font-black   mb-4">{product.title}</h1>
          <img
            src={product.photoUrl}
            alt={product.title}
            className=" object-fit mb-4 rounded"
          />
          <p className="text-custom-black font-black text-lg mb-2">
            Category: {product.category}
          </p>
          <p className="text-custom-black font-black text-lg mb-2">
            Price: {product.price}
          </p>
          <p className="text-custom-black  font-black text-lg">
            Description: {product.description}
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SingleProduct;
