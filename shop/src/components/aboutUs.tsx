import Logo from "./logo";
import Market from "/market.jpeg";
import Farm from "/farm2.jpeg";
import Team from "./teamAbout";

function Story() {
  return (
    <>
      <div className="  mx-auto my-5  w-full  ">
        {" "}
        <div className=" lg:bg-custom-black w-full lg:p-5 flex justify-center items-center ">
          {" "}
          <Logo />
        </div>
        <h1 className=" text-center my-12 lg:text-5xl text-5xl ">
          our <strong className=" text-custom-red "> story </strong>
        </h1>
      </div>
      {/* contenuto */}
      <div className=" lg:flex   lg:flex-row flex  flex-col">
        <div className=" lg:flex lg:flex-col lg:w-1/2 mt-5 lg:justify-center lg:items-center bg-custom-canarino rounded-2xl p-5 flex flex-col justify-center items-center shadow-xl  mx-3">
          <h1 className=" lg:text-6xl text-center my-8 text-3xl">shop</h1>

          <img
            className=" lg:w-2/2 rounded-r-full    "
            src={Market}
            alt="Market"
          />

          <p className="  font-black text-lg ml-7 mt-5">
            In the heart of Greenville, "
            <span className="text-custom-red">
              <strong>Fresh</strong>
            </span>
            " emerges as more than a vegetable market; it's a testament to Luca
            and Sofia's dedication to local, sustainable, and organic produce.
            Guided by Luca's agricultural acumen, the store meticulously selects
            from nearby farms, ensuring controlled origins and minimal
            environmental impact. "
            <span className="text-custom-red">
              <strong>Fresh</strong>
            </span>
            " extends beyond commerce, actively engaging the community. Weekly
            events, "
            <span className="text-custom-red">
              <strong>Fresh</strong>
            </span>
            " becomes a catalyst, inspiring Greenville residents to make
            informed, health-conscious choices and fostering a deeper connection
            between food, environment, and community wellbeing.
          </p>
        </div>

        <div className=" lg:flex lg:flex-col mt-5 lg:w-1/2 lg:justify-end lg:items-center bg-custom-canarino rounded-2xl p-5 shadow-xl  mx-3 ">
          <h1 className=" lg:text-6xl text-center my-8 text-3xl">
            Harry's Farm{" "}
          </h1>
          <img className="lg:w-2/2  rounded-l-full " src={Farm} alt="" />

          <p className="font-black text-lg mr-7 mt-5">
            Nestled on the outskirts of Greenville, lies the idyllic farm that
            serves as the lifeblood of "
            <span className="text-custom-red">
              <strong>Freshness</strong>
            </span>
            ." " values. The farm's fertile soil yields a bounty of vibrant
            vegetables, each cultivated with meticulous care and a profound
            respect for the land. Luca, with his discerning eye, personally
            selects the finest produce, forging a direct connection between the
            farm and "
            <span className="text-custom-red">
              <strong>Freshness</strong>
            </span>
            " form a harmonious alliance, bringing the essence of Greenville's
            agricultural heritage to each customer's table, ensuring a truly
            farm-to-fork experience.
          </p>
        </div>
      </div>
      <div>
        <Team />
      </div>
    </>
  );
}

export default Story;
