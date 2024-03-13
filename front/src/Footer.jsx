import { Link } from 'react-router-dom'



export default function Footer() {

    return (
        <div className="bg-gray-600 border-2xl h-94 text-white ">
            <div className=" flex flex-col items-center justify-center font-bold w-18">
                <div className="mt-6">
                    <img className="w-20 border rounded-full " src="src/image/logo.jpg" alt="" />
                </div>
                <div>
                    <p>CheradeSchool</p>
                </div>
                <div className="border border-gray-500 w-96 mt-8"></div>
            </div>
            <div>

            </div>
            <div className=" flex items-center justify-center gap-8 mt-10 ">
                <img src="src/image/Groupe.svg" alt="" />
                <img src="src/image/Messages.svg" alt="" />
               <Link to="https://www.facebook.com/cheradschool/?locale=fr_FR"> <img src="src/image/icon-facebook.svg" alt="" /></Link>
                <img src="src/image/icon-twitter.svg" alt="" />

            </div>
            <div className="flex items-center justify-center text-gray-400 gap-5 pl-10 pt-24 ">
                    {/* <img src="src/image/Messages.svg" alt="" /> */}
                    <p>info@cscheradSchool.org</p>
                </div>
                <div className="flex items-center justify-center text-gray-400 gap-5 pl-10 pt-3 pb-10">
                    <img src="src/image/Home-Fill.svg" alt="" />
                    <p>n° 11 Avenue Deplaines, Q/ Bel-Air II, Lubumbashi - République Démocratique du Congo.</p>
                </div>

        </div>
    )

}