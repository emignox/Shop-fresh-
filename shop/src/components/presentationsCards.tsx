import { useNavigate } from "react-router-dom";

const images = [
  { src: "/fruits.avif", alt: "Clementine", title: "Discover our fruits" },
  { src: "/nuts.avif", alt: "Noix", title: "Discover our dry fruit" },
  { src: "/tomate.avif", alt: "Poivron", title: "Discover our vegetables " },
];

function PresentationsCards() {
  const navigate = useNavigate();

  return (
    <>
      <div className="   bg-custom-canarino  h-auto rounded-2xl lg:mx-32 mx-5 my-12 lg:mt-72  lg:shadow-2xl">
        <h2 className="text-center text-2xl  p-5 lg:text-5xl font-bold text-custom-black">
          Our Products are organic and not Trated{" "}
        </h2>{" "}
        <div className="flex flex-col justify-center items-center my-3 lg:flex lg:flex-row    ">
          {images.map((image) => (
            <div
              onClick={() => navigate("/shop")}
              key={image.alt}
              className=" w-2/2 mx-10 shadow-sm bg-transparent lg:shadow-lg   lg:no-underline rounded-2xl overflow-hidden my-3 lg:w-1/5 lg:my-20 lg:mx-20 hover:scale-125 transition duration-500  cursor-pointer  "
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover "
              />
              <div className="p-4">
                <h2 className=" text-lg text-custom-black text-center font-bold  hover:scale-110 transition duration-500  lg:text-xs">
                  {image.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PresentationsCards;
