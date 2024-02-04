import { useState } from "react";

function Info() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (name && email && message) {
      alert("Thank you for your message");
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <>
      <div className="flex flex-col  justify-center  items-center lg:h-screen lg:my-0    space-y-12 my-16">
        <h1 className="  text-5xl lg:text-7xl">
          Contacts <img className="w-32 inline" src="./melon.png" alt="" />
        </h1>
        <p className=" underline ">Send us a message!</p>
        <label
          htmlFor="name"
          className="block text-sm font-black text-custom-black text-center lg:text-2xl "
        >
          Your Name:
          <br />
          <input
            type="text"
            id="name"
            className="mt-1 block w-72 lg:w-96 shadow-sm sm:text-sm rounded-md h-8"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label
          htmlFor="email"
          className="block text-sm font-black text-custom-black text-center lg:text-2xl"
        >
          Your Email:
          <br />
          <input
            type="email"
            id="email"
            className="mt-1 block w-72 lg:w-96 shadow-sm sm:text-sm rounded-md h-8"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label
          htmlFor="message"
          className="block text-sm font-black text-custom-black text-center lg:text-2xl"
        >
          Your Message:
          <br />
          <textarea
            id="message"
            className="mt-1 block w-72 lg:w-96 shadow-sm sm:text-sm rounded-md h-8"
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button
          onClick={handleClick}
          className="py-2 px-4   bg-custom-red rounded-2xl text-custom-yellow hover:text-custom-red"
        >
          Send Message
        </button>
      </div>
    </>
  );
}

export default Info;
