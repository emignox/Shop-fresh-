import { Products } from "./DataShop";
import { useNavigate } from "react-router-dom";

function ProductSlider() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/shop");
        window.scrollTo(0, 0);
      }}
      className="overflow-auto "
    >
      <div className="flex w-max  bg-custom-black">
        {Products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col m-2 bg-custom-yellow rounded-xl overflow-hidden shadow-lg w-52 mx-2 hover:scale-105 transition duration-500 lg:my-10 min-w-max cursor-pointer"
          >
            <div className="w-52 h-48 overflow-hidden">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;
