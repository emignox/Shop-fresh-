import React from "react";
import Foto from "/papaya.png";

interface InviaProps {
  value: string;
}

const Invia: React.FC<InviaProps> = ({ value }) => {
  return (
    <button className="flex rounded-md border-2 w-32 border-black bg-custom-red  justify-center mt-12  lg:w-52">
      <input
        className=" text-custom-black  text-lg lg:text-2xl lg:font-bold   "
        type="submit"
        value={value}
      />
      <img className="w-7" src={Foto} alt="" />
    </button>
  );
};

export default Invia;
