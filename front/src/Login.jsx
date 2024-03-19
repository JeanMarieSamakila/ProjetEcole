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

      <div className='pb-32'>
        <HeaderContact />
      </div>
      <div className="image-contact">
        <div className="flex  items-center justify-center font-bold">
          {/* <div className="">
          <img src="src/image/istockphoto-2.jpg" alt="" />
        </div> */}
          <form className=" items-center justify-center border-2xl  w-1/2 pt-2 pl-20 mb-80">


            <div className="flex pl-5 gap-16">
              <p for="name"> Nom :</p>
              <input
                className="h-14  border rounded-lg w-1/2  bg-gray-100 "
                type="text"
                id="nom"
              />
            </div>
            <div className="flex pt-9 pl-5 gap-6 ">
              <p for="tel">Telephone :</p>
              <input
                className="h-14 border rounded-lg w-1/2  bg-gray-100  "
                type="tel"
                id="tel"
              />
            </div>
            <div className="flex pt-9  pl-5 gap-16 ">
              <p for="email">Mail :</p>
              <input
                className="h-14 border rounded-lg w-1/2  bg-gray-100 "
                type="email"
                id="email"
              />
            </div>

            <div className="flex pt-9  pl-5 gap-10">
              <p for="message">Message :</p>
              <textarea
                name="message"
                className="h-14 border rounded-lg w-1/2  bg-gray-100 "
                id="message"
              />
            </div>
            <div className="pl-64 pt-24 ">
              <button
                onClick={handleClick}
                type="submit"
                className=" bg-blue-950 font-bold text-white border rounded-full w-32 h-14"
              >
                Envoyer
              </button>
            </div>

          </form>
        </div>
      </div>
<<<<<<< HEAD
=======
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
>>>>>>> a3cb3feedb5eeddb8c0b3fb634323299c406a731
    </div>
  );
}