import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3010/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Afficher un message d'inscription réussie
      }else {
        alert("Une erreur s'est produite lors de l'inscription");
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Une erreur s'est produite lors de l'inscription");
    }
  };

  return (
    <div>
      <div className="flex items-center pt-5 bg-blue-950 gap-10 text-xl font-bold w-90 h-20 mb-20  pl-20 text-white ">
        <div>
          <Link to="/">
            <img
              className="w-8"
              src="src/image/material-symbols-light--arrow-back-ios-new.svg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <h1 className=" ">Connexion</h1>
        </div>
      </div>
      <div className="flex gap-64  pl-44">
        <div>
          <p className=" text-blue-300 font-bold">Sign In</p>
        </div>
        <div>
          <Link to="/Signup"><p className=" text-sky-300 font-bold">Sign Up</p></Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex-col pt-20 pl-44">
        <div className="pb-10 ">
          <input
            className="border rounded-full h-14 w-1/4  bg-gray-100 pl-5 "
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="pb-10 ">
          <input
            className="border rounded-full h-14 w-1/4  bg-gray-100 pl-5 "
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de Passe"
          />
        </div>
        <div className="pt-10 pb-10">
          <button
            type="submit"
            className="font-bold text-white border rounded-full h-14 w-44 bg-blue-950 "
          >
            Se connecté
          </button>
        </div>
      </form>
    </div>
  );
}
