import { useNavigate } from "react-router-dom";
import Frame from "./video";
import { GiThreeLeaves } from "react-icons/gi";

const images = [
  {
    src: "/fruits.avif",
    alt: "Clementine",
    title: "Discover our fruits",
    icone: "/pomme.png",
    description: "Explore succulent, exotic delights in vibrant freshness.",
  },
  {
    src: "/nuts.avif",
    alt: "Noix",
    title: "Discover our dry fruit",
    icone: "/pistache.png",

    description: "Indulge in rich, wholesome goodness for delightful snacking.",
  },
  {
    src: "/tomate.avif",
    alt: "Poivron",
    title: "Discover our vegetables",
    icone: "/piselli.png",

    description: "Embark on a culinary journey with fresh, flavorful produce.",
  },
];

function PresentationsCards() {
  const navigate = useNavigate();

  return (
    <>
      <div className="   bg-custom-canarino  h-auto rounded-2xl lg:mx-12 mx-5 my-12 lg:mt-72 pb-10  lg:shadow-lg">
        <div className="flex justify-center items-center">
          <GiThreeLeaves className="text-green-700 text-5xl" />

          <h1 className="text-center text-2xl p-5 lg:text-2xl font-bold text-custom-black">
            Experience the Purity: <br /> Our Organic, Untreated Products
          </h1>
          <GiThreeLeaves className="text-green-700 text-5xl" />
        </div>
        <div className="flex flex-col justify-center items-center my-3 lg:flex lg:flex-row">
          {images.map((image) => (
            <div
              onClick={() => navigate("/shop")}
              key={image.alt}
              className=" w-2/2 mx-10 shadow-sm bg-transparent lg:shadow-lg lg:flex  lg:flex-col  lg:justify-center   lg:no-underline rounded-2xl overflow-hidden my-3 lg:w-96 lg:my-20 lg:mx-20 hover:scale-150 transition duration-500  cursor-pointer lg:h-auto   "
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover "
              />
              <div className="p-4">
                <div className=" flex items-center ">
                  <h1 className=" text-lg text-custom-black text-center font-bold  hover:scale-110 transition duration-500  lg:text-xs">
                    {image.title}
                  </h1>
                  <img className=" w-8" src={image.icone} alt="" />
                </div>

                <h3>{image.description}</h3>
              </div>
            </div>
          ))}
        </div>
        <Frame />
      </div>
    </>
  );
}

export default PresentationsCards;
