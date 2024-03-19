import { Link } from 'react-router-dom'
import Header from './Header'


export default function Body() {

    return (

        <div>
            <Header />
            <div className="container_central flex flex-col items-center justify-center gap-18pt-20 overflow-y-hidden">
                <div className="flex items-center justify-center z-10">
                    <h4 className=" h-32 text-8xl font-bold font-serif text-blue-400 content-center" >Ensemble nous irons loin.</h4>
                </div>
                <div className="flex  text-center justify-center">
                    <h1 className="font-bold font-mono pl-40 pr-40 text-white  text-3xl z-10">"Découvrez l'excellence académique et l'environnement stimulant de notre école, où chaque élève s'épanouit et réussit!" </h1>
                </div>
            
                <div className=" flex pt-0 gap-10 ">
                    <div className="flex z-10 items-center mt-40 bg-blue-950 gap-3 text-xl font-bold w-64 py-2 rounded-lg mb-20  text-blue-400 ">
                        <div>
                            <svg className='w-20 ml-5 fill-blue-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.615 20q-.67 0-1.143-.472Q4 19.056 4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.615 4h4.7q-.136-.765.367-1.383Q11.185 2 12 2q.835 0 1.338.617q.502.618.347 1.383h4.7q.67 0 1.143.472q.472.472.472 1.143v5.95q-.263-.09-.504-.147q-.24-.056-.496-.112v-5.69q0-.231-.192-.424Q18.615 5 18.385 5H5.615q-.23 0-.423.192Q5 5.385 5 5.615v12.77q0 .23.192.423q.193.192.423.192h5.666q.036.28.093.521q.057.24.147.479zM5 18v1V5v6.306v-.075zm2.5-1.73h3.96q.055-.257.15-.497l.2-.504H7.5zm0-3.77h6.58q.493-.346.97-.587q.479-.24 1.027-.376V11.5H7.5zm0-3.77h9v-1h-9zM12 4.443q.325 0 .538-.212t.212-.538q0-.325-.213-.537T12 2.942q-.325 0-.537.213t-.213.537q0 .325.213.538t.537.212m6 17.673q-1.671 0-2.836-1.164T14 18.115q0-1.67 1.164-2.835T18 14.115q1.671 0 2.836 1.165T22 18.115q0 1.672-1.164 2.836Q19.67 22.115 18 22.115M17.615 21h.77v-2.5h2.5v-.77h-2.5v-2.5h-.77v2.5h-2.5v.77h2.5z" /></svg>
                            {/* <img className='w-20 ml-5' src="src/image/material-symbols-light--assignment-add-outline.svg" alt="" /> */}
                        </div>
                        <div>
                            <Link to='/Inscription'> <h1 className=" ">Inscription</h1> </Link>
                        </div>
                    </div>

                    <div className="flex z-10 items-center mt-40 bg-blue-400 gap-3 text-xl font-bold w-64 py-2 rounded-lg mb-20  text-blue-950 ">
                        <div>
                            <img className='w-20 ml-5' src="src/image/material-symbols-light--assignment-ind-outline-sharp.svg" alt="" />
                        </div>
                        <div>
                          <Link to="/Dash"><h1 className=" ">Dash-bord</h1></Link> 
                        </div>
                    </div>


                </div>

            </div>
            <div>
                <div className='flex justify-center gap-40 mt-10'>
                    <div className=' justify-center items-center text-center w-54 mt-10'>
                        <div className="flex-col rounded-2xl items-center pt-10 bg-blue-100 mb-20 ml-10 ">
                            <div className='flex justify-center items-center'>
                                <img className='w-64 rounded-xl' src="src/image/eleve2.png" alt="" />
                            </div>
                            <div className='mt-5 mb-6'>
                                <h4 className='ml-10 mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores numquam, sequi et aperiam, quos dolorem ipsa ex tempora inventore molestias, repellendus praesentium. Voluptates, et similique inventore qui itaque totam!</h4>
                            </div>
                        </div>
                    </div>

                    <div className=' justify-center items-center text-center w-54 mt-10'>
                        <div className="flex-col rounded-2xl items-center pt-10 bg-blue-100 mb-20 mr-10 ">
                            <div className=' flex justify-center items-center'>
                                <img className='w-64 rounded-xl' src="src/image/eleve2.png" alt="" />
                            </div>
                            <div  className='mt-5 mb-6'>
                                <h4 className='ml-10 mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores numquam, sequi et aperiam, quos dolorem ipsa ex tempora inventore molestias, repellendus praesentium. Voluptates, et similique inventore qui itaque totam!</h4>
                            </div>
                        </div>
                    </div>

                    <div className=' justify-center items-center text-center w-54 mt-10'>
                        <div className="flex-col rounded-2xl items-center pt-10 bg-blue-100 mb-20 mr-10 ">
                            <div className='flex justify-center items-center'>
                                <img className='w-64 rounded-xl' src="src/image/eleve2.png" alt="" />
                            </div>
                            <div  className='mt-5 mb-6'>
                                <h4 className='ml-10 mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores numquam, sequi et aperiam, quos dolorem ipsa ex tempora inventore molestias, repellendus praesentium. Voluptates, et similique inventore qui itaque totam!</h4>
                            </div>
                        </div>
                    </div>
                </div>



                <div>
                    <div className="flex flex-col items-center justify-center mb-10 mt-10">
                        <Link to="/Section"> <button className=" bg-blue-950 font-bold text-white border rounded-2xl w-40 h-14  ">Savoir plus</button></Link>
                    </div>

                </div>

            </div>

        </div>
    )
}