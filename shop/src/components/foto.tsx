import { FaImage } from "react-icons/fa";
import { Product, Products } from "../components/DataShop";
import { useNavigate } from "react-router-dom";

function Foto() {
  const navigate = useNavigate();

  const handleProductClick = (productTitle: string) => {
    navigate(`/product/${productTitle}`);
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center ">
        <h1 className="lg:text-5xl ">Our gallery</h1>
        <FaImage
          className="tex-2xl my-8  lg:text-5xl ml-5 text-custom-red
        "
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {Products.map((product: Product, index: number) => (
          <div
            key={index}
            className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto"
            onClick={() => handleProductClick(product.title)}
          >
            <img
              className="w-full h-full rounded-md object-cover max-h-36"
              src={product.photoUrl}
              alt={product.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Foto;
