import { useState, FormEvent } from "react";
import Button from "../components/button";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      // Qui puoi reindirizzare l'utente alla pagina successiva
    } else {
      alert(data.message);
    }
  };
  return (
    <>
      <form
        className=" h-screen flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label className=" text-2xl  font-black text-center my-2">
          Nome:
          <br />
          <input
            className=" border-2 border-black rounded-md bg-transparent"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className=" text-2xl  font-black text-center my-2">
          Password:
          <br />
          <input
            className=" border-2 border-black rounded-md bg-transparent"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button value="Login" />
      </form>
    </>
  );
}
export default Login;
