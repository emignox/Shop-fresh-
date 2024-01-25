import { useState, FormEvent } from "react";
import Button from "../components/button";
import Logo from "../components/logo";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      navigate("/home");
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
        <div className="mb-10">
          {" "}
          <Logo />
        </div>

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
        <p
          className="hover:underline  mt-4 text-center"
          onClick={() => navigate("/sign")}
        >
          Log-In
        </p>
      </form>
    </>
  );
}
export default Login;
