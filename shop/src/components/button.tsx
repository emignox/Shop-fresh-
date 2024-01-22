import React from "react";
import Foto from "/papaya.png";

interface InviaProps {
  value: string;
}

const Invia: React.FC<InviaProps> = ({ value }) => {
  return (
    <button
      className="flex rounded-md border-2 w-32 border-black  justify-center mt-12"
      style={{ backgroundColor: "#e11c37" }}
    >
      <input className=" font-black  text-lg " type="submit" value={value} />
      <img className="w-7" src={Foto} alt="" />
    </button>
  );
};

export default Invia;
