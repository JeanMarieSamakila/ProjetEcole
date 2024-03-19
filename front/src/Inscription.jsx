import { useState } from "react";
import HeaderInscription from "./headermenu/HeaderInsciption";

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

  // Fonction appelée lorsqu'une option est sélectionnée
  const handleSelectChange = (event) => {
    setGenre(event.target.value); // Mise à jour de la valeur sélectionnée dans l'état local
  };
  const handleSectionSelectChange = (event) => {
    setSection(event.target.value); // Mise à jour de la valeur sélectionnée dans l'état local
  };
  const handleOptionSelectChange = (event) => {
    setOption(event.target.value); // Mise à jour de la valeur sélectionnée dans l'état local
  };

  const handleClassesollicitelectChange = (event) => {
    setClassesollicite(event.target.value); // Mise à jour de la valeur sélectionnée dans l'état local
  };
  const handleClasseprovenanceSelectChange = (event) => {
    setClasseprovenance(event.target.value); // Mise à jour de la valeur sélectionnée dans l'état local
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification des champs obligatoires
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
      const response = await fetch("http://localhost:3000/inscription", {
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
        alert(data.message); // Afficher un message d'inscription réussie
      } else {
        alert("Une erreur s'est produite lors de l'inscription");
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Une erreur s'est produite lors de l'inscription");
    }
  };
  return (
    <div className=" ">
      <div className="">
        <HeaderInscription/>
      </div>
      <h1 className="pt-5 text-xl font-bold text-blue-950 w-74 underline h-16 pl-20">
          Formulaire de demande d’inscription
        </h1>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center bg-slate-400">
        <div className=" ml-72 mt-20 ">
          <h1 className="font-bold text-sky-950 pl-10 pb-5 ">
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
                onChange={(e) => setPhone(e.target.value)}
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
                      <option value="Primaire">Primaire</option>
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
                      <option value="Commercial Général">Commercial Général</option>
                    </select>
                  </div>
                  <div className="pl-10 space-y-2">
                    <p>Classe</p>
                    <select
                className=" w-[380px] rounded-lg h-10"
                value={classesollicite}
                onChange={handleClassesollicitelectChange}
              >
                <option value="">Sélectionnez la classe de l'eleve</option>
                <option value="1 ère">1 ère</option>
                <option value="2 iéme">2 iéme</option>
                <option value="3 iéme">3 iéme</option>
                <option value="4 iéme">4 iéme</option>
                <option value="5 iéme">5 iéme</option>
                <option value="6 iéme">6 iéme</option>
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
                <option value="">Sélectionnez la classe de l'eleve</option>
                <option value="1 ère">1 ère</option>
                <option value="2 iéme">2 iéme</option>
                <option value="3 iéme">3 iéme</option>
                <option value="4 iéme">4 iéme</option>
                <option value="5 iéme">5 iéme</option>
                <option value="6 iéme">6 iéme</option>
              </select>
                    </div>
                    <div className="pl-10 space-y-2">
                      <p>Pourcentage (%)</p>
                      <input
                        className="h-10 w-96 border rounded-lg bg-stone-100"
                        type="text"
                        name="pourcentage"
                        value={pourcentage}
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
