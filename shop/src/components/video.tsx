import { GiThreeLeaves } from "react-icons/gi";
import Vid from "/choix.mp4";

function Video() {
  return (
    <>
      <div className=" mx-3  shadow-2xl font-black rounded-xl  lg:w-1/2 lg:mx-auto mt-10   ">
        <div className="flex flex-row  justify-center">
          <h1 className="text-center text-2xl">Fresh Produce Emporium</h1>
          <GiThreeLeaves className="text-green-700" />
        </div>
        <p className=" text-center mt-5">
          Choice is simpler when everything is of high quality.
        </p>

        <video className="mx-auto w-2/2 p-3 " autoPlay loop src={Vid}></video>
      </div>
    </>
  );
}
export default Video;
