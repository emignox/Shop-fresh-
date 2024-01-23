import React from "react";
import Foto from "/papaya.png";

interface InviaProps {
  value: string;
}

const Invia: React.FC<InviaProps> = ({ value }) => {
  return (
    <button className="flex rounded-md border-2 w-32 border-black bg-custom-red lg:bg-custom-yellow  lg:hover:bg-custom-red transition duration-500 ease-in-out  justify-center mt-12  lg:w-52  cursor-pointer">
      <input
        className=" text-custom-black  text-lg lg:text-2xl lg:font-bold  "
        type="submit"
        value={value}
      />
      <img className="w-7" src={Foto} alt="" />
    </button>
  );
};

export default Invia;
