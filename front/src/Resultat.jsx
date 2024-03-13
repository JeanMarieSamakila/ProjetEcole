import HeaderResultat from "./headermenu/HeaderResultat";

export default function Resultat() {
  const handleClick = (e) => {
    const matricule = document.getElementById("matricule").value;
    const periode = document.getElementById("periode").value;
    const classe = document.getElementById("classe").value;
    // const  = document.querySelectorAll('matricule').value;
    if (matricule === "" || periode === "" || classe === "") {
      alert("Veuillez remplir tous les champs obligatoires.");
      e.preventDefault();
    } else {
      matricule === matricule.value;
      periode === periode.value;
      classe === classe.value;
      alert("Votre message a bien été envoyé!");
    }
  };

  return (
    <div>
      {/* <div className="flex items-center pt-5 bg-blue-950 gap-10 text-xl font-bold w-90 h-20 mb-20  pl-20 text-white ">
                <div>
                    <Link to="/"><img className='w-8' src="src/image/material-symbols-light--arrow-back-ios-new.svg" alt="" /></Link>
                </div>
                <div>
                    <h1 className=" "> Resultat</h1>
                </div>
            </div> */}
      <div className="pb-32">
        <HeaderResultat />
      </div>

      <div className="flex items-center justify-center text-center mt-20">
        <div className="items-center justify-center text-center  bg-gray-300 border-2xl h-96 w-1/3 pt-2 mb-80">
          {/* <div className="pt-10 pl-10 ">
                        <input id="matricule" className="h-10 w-96 pl-3 border rounded-lg" type="text" placeholder='Matricule' />
                    </div> */}
          <div className="pt-10 pl-10">
            <input
              id="classe"
              className="h-10 w-96 pl-3 border rounded-lg"
              type="text"
              placeholder="Classe"
            />
          </div>
          <div className="pt-10 pl-10">
            <input
              id="periode"
              className="h-10 w-96 pl-3 border rounded-lg"
              type="text"
              placeholder="Période"
            />
          </div>
          <div className="pl-64 pt-5  ">
            <button
              onClick={handleClick}
              className=" bg-blue-950 font-bold text-white border rounded-full w-36 h-14">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}