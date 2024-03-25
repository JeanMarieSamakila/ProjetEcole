import { useState } from "react";
import HeaderInscription from "./headermenu/HeaderInsciption";
import AddEvent from "./AddEvent";

export default function Inscription() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [phone, setPhone] = useState("");
  const [section, setSection] = useState("");
  const [option, setOption] = useState("");
  const [classesollicite, setClassesollicite] = useState("");
  const [ecoleprovenance, setEcoleprovenance] = useState("");
  const [pourcentage, setPourcentage] = useState("");
  const [classeprovenance, setClasseprovenance] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  
  const handleSelectChange = (event) => {
    setGenre(event.target.value); 
  };
  const handleSectionSelectChange = (event) => {
    setSection(event.target.value); 
  };
  const handleOptionSelectChange = (event) => {
    setOption(event.target.value); 
  };

  const handleClassesollicitelectChange = (event) => {
    setClassesollicite(event.target.value); 
  };
  const handleClasseprovenanceSelectChange = (event) => {
    setClasseprovenance(event.target.value); 
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !phone ||
      !genre ||
      !section ||
      !option ||
      !classesollicite ||
      !ecoleprovenance ||
      !pourcentage ||
      !classeprovenance
    ) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3010/inscription", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          genre,
          phone,
          section,
          option,
          classesollicite,
          ecoleprovenance,
          pourcentage,
          classeprovenance,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message); 
      } else {
        alert("Une erreur s'est produite lors de l'inscription");
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Une erreur s'est produite lors de l'inscription");
    }
  };
  return (
    <div className="w-full">
      <div className="">
        <HeaderInscription />
      </div>
      <AddEvent/>
      <h1 className="pt-5 text-xl font-bold text-blue-950 w-full underline pl-8 md:pl-20">
        Formulaire de demande d’inscription
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center bg-slate-400"
      >
        <div className="w-full md:w-3/4 lg:w-1/2 xl:w-2/3 mx-auto mt-8 md:mt-20">
          <h1 className="font-bold text-sky-950 pl-6 md:pl-10 pb-5">
            1. IDENTITE DE L’ELEVE
          </h1>
          <div className=" space-y-7 ">
            <div className="pl-10 space-y-2">
              <p>Noms(PostNom Prenom) </p>
              <input
                className="h-10 w-96 border rounded-lg bg-stone-100"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="nom"
              />
            </div>
            <div className="pl-10 space-y-2">
              <p>Genre </p>
              <select
                className=" w-[380px] rounded-lg h-10"
                value={genre}
                onChange={handleSelectChange}
              >
                <option value="">Sélectionnez le genre de l'eleve</option>
                <option value="Masculin">Masculin</option>
                <option value="Feminin">Feminin</option>
              </select>
            </div>
            <div className="pl-10 space-y-2">
              <p>Telephone </p>
              <input
                className="h-10 w-96 border rounded-lg bg-stone-100"
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => {
                  const inputPhone = e.target.value;
                  if (/^(\d{10}|\d{3}[-\s]\d{3}[-\s]\d{4})$/.test(inputPhone) || inputPhone === '') {
                    setPhone(inputPhone);
                  }
                }}
                id="tel"
              />
            </div>
          </div>
          <div>
            <div className="flex">
              <div>
                <h1 className="font-bold text-sky-950 pl-10 pb-5 pt-10">
                  2. SOLLICITATION
                </h1>
                <div className=" space-y-7 ">
                  <div className="pl-10 space-y-2">
                    <p>Section</p>
                    <select
                      className=" w-[380px] rounded-lg h-10"
                      value={section}
                      onChange={handleSectionSelectChange}
                    >
                      <option value="">
                        Sélectionnez la section de l'élève
                      </option>
                      <option value="Secondaire">Secondaire</option>
                    </select>
                  </div>
                  <div className="pl-10 space-y-2">
                    <p>Option</p>
                    <select
                      className=" w-[380px] rounded-lg h-10"
                      value={option}
                      onChange={handleOptionSelectChange}
                    >
                      <option value="">Sélectionnez l'option de l'eleve</option>
                      <option value="Scientifique">Scientifique</option>
                      <option value="Commercial Général">
                        Commercial Général
                      </option>
                    </select>
                  </div>
                  <div className="pl-10 space-y-2">
                    <p>Classe</p>
                    <select
                      className=" w-[380px] rounded-lg h-10"
                      value={classesollicite}
                      onChange={handleClassesollicitelectChange}
                    >
                      <option value="">
                        Sélectionnez la classe de l'eleve
                      </option>
                      <option value="1 ère">1 ere</option>
                      <option value="2 iéme">2 eme</option>
                      <option value="3 iéme">3 eme</option>
                      <option value="4 iéme">4 eme</option>
                      <option value="5 iéme">5 eme</option>
                      <option value="6 iéme">6 eme</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h1 className="font-bold text-sky-950 pl-10 pb-5 pt-10">
                    {" "}
                    3. ETUDES ANTERIEURS (Ecole de provenance)
                  </h1>
                  <div className=" space-y-7 ">
                    <div className="pl-10 space-y-2">
                      <p>Nom de l’Ecole</p>
                      <input
                        className="h-10 w-96 border rounded-lg bg-stone-100"
                        type="text"
                        name="ecoleprovenance"
                        value={ecoleprovenance}
                        onChange={(e) => setEcoleprovenance(e.target.value)}
                        id="ecole"
                      />
                    </div>
                    <div className="pl-10 space-y-2">
                      <p>Classe</p>
                      <select
                        className=" w-[380px] rounded-lg h-10"
                        value={classeprovenance}
                        onChange={handleClasseprovenanceSelectChange}
                      >
                        <option value="">
                          Sélectionnez la classe de l'eleve
                        </option>
                        <option value="1 ère">1 ere</option>
                        <option value="2 iéme">2 eme</option>
                        <option value="3 iéme">3 eme</option>
                        <option value="4 iéme">4 eme</option>
                        <option value="5 iéme">5 eme</option>
                        <option value="6 iéme">6 eme</option>
                      </select>
                    </div>
                    <div className="pl-10 space-y-2">
                      <p>Pourcentage (%)</p>
                      <input
                        className="h-10 w-96 border rounded-lg bg-stone-100"
                        type="number"
                        name="pourcentage"
                        value={pourcentage}
                        min="45"
                        max="95"
                        onChange={(e) => setPourcentage(e.target.value)}
                        id="pourcentage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-64 pt-24 pb-10 ">
            <button
              type="submit"
              className=" bg-blue-950 font-bold text-white border rounded-full w-40 h-16"
            >
              Suivant
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

