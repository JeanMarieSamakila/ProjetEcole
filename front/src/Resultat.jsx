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
    <div className="flex flex-col items-center justify-center pb-8 md:pb-32">
      <HeaderResultat />
    </div>
  
    <div className="flex items-center justify-center text-center mt-10 md:mt-20">
      <div className="bg-gray-300 border-2xl md:h-96 md:w-1/3 pt-2 md:mb-80">
        <div className="pt-6 md:pt-10 px-4 md:px-10">
          {/* <input id="matricule" className="h-10 md:w-96 pl-3 border rounded-lg" type="text" placeholder='Matricule' /> */}
          <input
            id="classe"
            className="h-10 md:w-full md:max-w-lg px-3 border rounded-lg mt-4 md:mt-10"
            type="text"
            placeholder="Classe"
          />
        </div>
        <div className="pt-6 md:pt-10 px-4 md:px-10">
          <input
            id="periode"
            className="h-10 md:w-full md:max-w-lg px-3 border rounded-lg mt-4"
            type="text"
            placeholder="Période"
          />
        </div>
        <div className="flex justify-center pt-5 md:pt-10 px-4 md:px-10">
          <button
            onClick={handleClick}
            className="bg-blue-950 font-bold text-white border rounded-full w-36 h-12 md:h-14 mt-4 md:mt-8"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
}