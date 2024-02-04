function dataCard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 my-16">
        <label
          htmlFor=""
          className="block text-sm font-black text-custom-black "
        >
          Card Number
          <br />
          <input
            type="number"
            className="mt-1  block w-72 shadow-sm sm:text-sm  rounded-md h-8  de   "
          />
        </label>
        <label
          htmlFor=""
          className="block text-sm    font-black text-custom-black"
        >
          Expiration Date
          <br />
          <input
            type="number"
            className="mt-1  block  w-32  shadow-sm sm:text-sm  rounded-md h-8 "
          />
        </label>
        <label
          htmlFor=""
          className="block text-sm  font-black text-custom-black"
        >
          Secret Number
          <br />
          <input
            type="password"
            className="mt-1 block  w-72 shadow-sm sm:text-sm border-gray-300 rounded-md h-8 "
          />
        </label>
      </div>
    </>
  );
}
export default dataCard;
