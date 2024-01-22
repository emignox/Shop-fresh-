import Foto from "/papaya.png";

function invia() {
  return (
    <button
      className="flex rounded-md border-2 w-32 border-black  justify-center mt-12"
      style={{ backgroundColor: "#e11c37" }}
    >
      {" "}
      <input className=" font-black  text-lg " type="submit" value="Invia" />
      <img className="w-7" src={Foto} alt="" />
    </button>
  );
}

export default invia;
