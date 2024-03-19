import HeaderContact from "./headermenu/HeaderContact";


export default function Contact() {
    const handleClick = (e) => {
        const nom = document.getElementById('nom').value;
        const tel = document.getElementById('tel').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        // const  = document.querySelectorAll('matricule').value;
        if (nom === '' || tel === '' || email === '' || message === '') {
            alert('Veuillez remplir tous les champs obligatoires.');
            e.preventDefault();
        }
        else {
            nom === nom.value;
            tel === tel.value;
            email === email.value;
            message === message.value;
            alert('Votre message a bien été envoyé!');
        }
    };

    function tel(numero) {
        let format = /^(084|085|080|089|081|082|099|097|090)/;
        return format.test(numero);
    }


    return (
      <div>
        {/* <div className="flex items-center pt-5 bg-blue-950 gap-10 text-xl font-bold w-90 h-20 mb-20  pl-20 text-white ">
                <div>
                    <Link to="/"><img className='w-8' src="src/image/material-symbols-light--arrow-back-ios-new.svg" alt="" /></Link>
                </div>
                <div>
                    <h1 className=" "> Contact</h1>
                </div>
            </div> */}
        {/* <div className="flex items-center pt-5 bg-blue-950 gap-10 text-xl font-bold w-90 h-20 mb-20  pl-20 text-white ">
            <HeaderContact/>
            </div> */}
        <div className="">
          <HeaderContact />
        </div>
        <div className=" flex  items-center justify-center font-bold bg-slate-300">
          <form className=" items-center justify-center  border-2xl  w-1/2 pt-2 ml-40 bg-slate-400  mb-80 mt-20">
            <div className="flex pl-52 gap-16 mt-10">
              <p for="name"> Nom :</p>
              <input
                className="h-14  border rounded-lg w-[51%]  bg-transparent "
                type="text"
                id="nom"
              />
            </div>
            <div className="flex pt-9 pl-52 gap-6 ">
              <p for="tel">Telephone :</p>
              <input
                className="h-14 border rounded-lg w-[51%]  bg-gray-100  "
                type="tel"
                id="tel"
              />
            </div>
            <div className="flex pt-9  pl-52 gap-16 ">
              <p for="email">Mail :</p>
              <input
                className="h-14 border rounded-lg w-[51%] ml-1  bg-gray-100 "
                type="email"
                id="email"
              />
            </div>

            <div className="flex pt-9  pl-52 gap-10">
              <p for="message">Message :</p>
              <textarea
                name="message"
                className="h-14 border rounded-lg w-[51%] ml-  bg-gray-100 "
                id="message"
              />
            </div>
            <div className="pl-64 pt-24 ">
              <button
                onClick={handleClick}
                type="submit"
                className=" bg-blue-950 font-bold text-white border rounded-full ml-44 w-32 h-14 mb-10"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}