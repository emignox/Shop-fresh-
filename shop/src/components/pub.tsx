function pub() {
  return (
    <>
      <div className="lg:flex lg:flex-row flex flex-col font-black">
        <div className="flex flex-col lg:flex-col items-center  bg-custom-canarino  h-auto rounded-2xl lg:mx-32 mx-5 my-12 lg:my-28  lg:shadow-2xl">
          <h2 className="my-5 text-center lg:text-3xl ">
            Dyscover our <span className="text-custom-red">OFFERS</span> of the
            month till <strong>30/03/2024</strong>
          </h2>
          <img className="w-full lg:w-2/2 lg:mt-10" src="/sale.png" alt="" />
        </div>

        <div className="flex flex-col lg:flex-col items-center  bg-custom-canarino  h-auto rounded-2xl lg:mx-32 mx-5 my-12 lg:my-28  lg:shadow-2xl">
          <h2 className="my-5 text-center lg:text-3xl lg:mx-2">
            Profit for the <span className="text-custom-red">VEGAN</span> DAY
            sign Up and dycover more offer for you
          </h2>
          <img className="w-full lg:w-2/2 lg:my-9" src="/vegan1.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default pub;
