import { Link } from 'react-router-dom'


export default function Header() {
    return (

        <section className="flex items-center justify-center bg-blue-950 h-auto md:h-20 pt-1 pb-1 pl-5 pr-5 md:pr-20">
        <div className="pr-4 md:pr-80">
            <img className="w-16 md:w-20 border rounded-full" src="src/image/logo.jpg" alt="" />
        </div>
        <div className="flex flex-col md:flex-row text-white font-bold md:justify-between items-center gap-2 md:gap-20">
            <div className='flex flex-wrap justify-center md:justify-start'>
                <Link to="/"><h2 className="hover:bg-gradient-to-r from-green-400 to-blue-400 w-full md:w-24 text-center md:text-left rounded-3xl py-2 px-2 md:px-2 mt-2 md:mt-0 text-sm md:text-base">Accueil</h2></Link>
                <Link to="/Contact"><h2 className="hover:bg-gradient-to-r from-green-400 to-blue-400 w-full md:w-24 text-center md:text-left rounded-3xl py-2 px-2 md:px-2 mt-2 md:mt-0 text-sm md:text-base">Contact</h2></Link>
                <Link to="/Resultat"><h2 className="hover:bg-gradient-to-r from-green-400 to-blue-400 w-full md:w-24 text-center md:text-left rounded-3xl py-2 px-2 md:px-2 mt-2 md:mt-0 text-sm md:text-base">Résultats</h2></Link>
                <Link to="/Section"><h2 className="hover:bg-gradient-to-r from-green-400 to-blue-400 w-full md:w-28 text-center md:text-left rounded-3xl py-2 px-2 md:px-2 mt-2 md:mt-0 text-sm md:text-base">Nos Sections</h2></Link>
            </div>
            <Link to="/Login"><button className="text-blue-950 hover:bg-gradient-to-r from-green-400 to-blue-400 bg-blue-300 rounded-full w-full md:w-28 h-12 mt-4 md:mt-0 text-sm md:text-base">Connexion</button></Link>
        </div>
    </section>
    
    

    )
}