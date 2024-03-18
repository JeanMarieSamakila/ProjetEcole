import { Link } from 'react-router-dom'


export default function Header() {
    return (

        <section className="flex items-center justify-center  bg-blue-950 h-20 pt-1 pb-1 pl-5 pr-20">
            <div className="pr-80">
                <img className=" w-16 border rounded-full " src="src/image/logo.jpg" alt="" />
            </div>
            <div className="flex text-white font-bold gap-20 ">

                <div className='pt-3 gap-20 flex'>
                <Link to="/"><h2 className="hover:bg-gradient-to-r from-green-400 to-blue-400 w-24 text-center rounded-3xl">Accueil</h2></Link>
                <Link to="/Contact"><h2 className="hover:bg-gradient-to-r from-green-400 to-blue-400 w-24 text-center rounded-3xl">Contact</h2></Link>
                <Link to="/Resultat"><h2 className="hover:bg-gradient-to-r from-green-400 to-blue-400 w-24 text-center rounded-3xl">Resultat</h2></Link>
               <Link to="/Section"> <h2 className="hover:bg-gradient-to-r from-green-400 to-blue-400 w-28 text-center rounded-3xl">Nos Section</h2></Link>
                </div>
                <Link to="/Login"> <button className=" text-blue-950 hover:bg-gradient-to-r from-green-400 to-blue-400 bg-blue-300 rounded-full w-28 h-12 ">Log in</button></Link>
                
            </div>
        </section>

    )
}