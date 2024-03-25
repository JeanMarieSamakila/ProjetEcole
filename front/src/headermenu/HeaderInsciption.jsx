import { Link } from "react-router-dom";


export default function HeaderInscription() {
  return (
    <section className="flex items-center justify-center  bg-blue-950 h-20 pt-1 pb-1 pl-5 pr-20">
      <div className="pr-80">
                <img className=" w-16 border rounded-full " src="src/image/logo.jpg" alt="" />
            </div>

     
      <div className="flex text-white font-bold gap-20 pt-2">
        <Link to="/">
          <h2 className="pt-2">Accueil</h2>
        </Link>
        <Link to="/Contact">
          <h2 className="pt-2 ">Contact</h2>
        </Link>
        <Link to="/Resultat">
          <h2 className="pt-2">Resultat</h2>
        </Link>
        <Link to="/Section">
          {" "}
          <h2 className="pt-2">Nos Section</h2>
        </Link>

        <div className="pb-2">
          <Link to="Login">
            {" "}
            <button className=" text-blue-950 bg-blue-300 border rounded-full w-32 h-14 ">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
