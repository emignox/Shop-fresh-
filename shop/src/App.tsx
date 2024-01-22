import React, { useState } from "react";
import Button from "./components/button";
import Logo from "./components/logo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <form
        className="flex  flex-col  h-screen justify-center items-center  "
        onSubmit={handleSubmit}
      >
        <div className=" w-full flex  justify-center  mb-12">
          <Logo />
        </div>
        <label className=" text-2xl  font-black text-center ">
          Name:
          <br />
          <input
            className=" border-2 border-black rounded-md bg-transparent"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className=" text-2xl  font-black text-center my-5">
          Email:
          <br />
          <input
            className=" border-2 border-black rounded-md bg-transparent"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className=" text-2xl  font-black text-center my-2">
          Choose Password:
          <br />
          <input
            className=" border-2 border-black rounded-md bg-transparent"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button />
        <div className="flex  mt-9">
          <p className="hover:underline mr-10">Log-In</p>
          <p className=" hover:underline">forgot password</p>
        </div>
      </form>
    </>
  );
}

export default App;
