import { Link } from "react-router-dom";



export default function Login() {


    const handleClick = () => {
        alert("Votre message a bien été envoyé!");
    }

    return (

        <div>
            <div className="flex items-center pt-5 bg-blue-950 gap-10 text-xl font-bold w-90 h-20 mb-20  pl-20 text-white ">
                <div>
                    <Link to="/"><img className='w-8' src="src/image/material-symbols-light--arrow-back-ios-new.svg" alt="" /></Link>
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
                    <p className=" text-sky-300 font-bold">Sign Up</p>
                </div>
            </div>
            <div className="flex-col pt-20 pl-44">
                <div className="pb-10 ">
                    <input className="border rounded-full h-14 w-1/4  bg-gray-100 " type="text" placeholder="Nom d’Utilisateur" />
                </div>
                <div className="pb-10 ">
                    <input className="border rounded-full h-14 w-1/4  bg-gray-100 " type="text" placeholder="Mot de Passe" />
                </div>

                <div className="pt-10 pb-10">
                    <button onClick={handleClick} className="font-bold text-white border rounded-full h-14 w-44 bg-blue-950 ">Connexion</button>
                </div>

            </div>

         

        </div>
    )
}
