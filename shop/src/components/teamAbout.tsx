import Luca from "/luca.jpeg";

import Lola from "/lola.jpeg";
import Harry from "/harry.jpeg";
import Luna from "/luna.jpeg";

function Team() {
  const team = [
    {
      name: "Luca",
      role: "CEO",
      img: Luca,
      description:
        "Luca is the CEO of Fresh. He is a passionate farmer and a great leader. He",
    },
    {
      name: "Sofia",
      role: "COO",
      img: Lola,
      description:
        "Sofia is the COO of Fresh. She is a passionate farmer and a great leader. She",
    },
    {
      name: "Harry",
      role: "Farmer",
      img: Harry,
      description:
        "Harry is the farmer of Fresh. He is a passionate farmer and a great leader. He",
    },
    {
      name: "Luna",
      role: "Farmer",
      img: Luna,
      description:
        "Luna is the farmer of Fresh. She is a passionate farmer and a great leader. She",
    },
  ];

  return (
    <>
      <h1 className="text-5xl text-center my-20">
        Meet the <span className=" text-custom-red"> Team</span>
      </h1>
      <div className="bg-custom-canarino flex flex-col justify-center items-center lg:flex lg:flex-row mx-3 rounded-xl my-6 p-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="lg:flex lg:flex-col lg:w-1/4  mx-auto justify-items-center items-center m-3  lg:mx-3 "
          >
            <img
              className="w-52 rounded-full mx-auto"
              src={member.img}
              alt={member.name}
            />
            <div className=" shadow-xl rounded-xl ">
              <h1 className="text-3xl text-center ">{member.name}</h1>
              <h2 className="text-xl text-center ">{member.role}</h2>
              <p className="text-center">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Team;
