<<<<<<< HEAD
import HeaderInscription from "./headermenu/HeaderContact";

=======
import { useState } from "react";
import HeaderInscription from "./headermenu/HeaderInsciption";
>>>>>>> b8680a45c30659a4768c22925413a9227d967d91

export default function Inscription() {
    const handleClick = (e) => {
        const nom = document.getElementById('nom').value;
        const tel = document.getElementById('tel').value;
        const genre = document.getElementById('genre').value;
        const section = document.getElementById('section').value;
        const option = document.getElementById('option').value;
        const classe = document.getElementById('classe').value;
        const ecole = document.getElementById('ecole').value;
        const ecolepro = document.getElementById('ecolepro').value;
        const pourcentage = document.getElementById('pourcentage').value;

<<<<<<< HEAD
        if (nom === '' || tel === '' || email === '' || genre === '' || section === '' || option === '' || classe === '' || ecole === '' || ecolepro === '' || pourcentage === '') {
            alert('Veuillez remplir tous les champs obligatoires.');
            e.preventDefault();
        }
        else {
            nom === nom.value;
            tel === tel.value;
            email === email.value;
            genre === genre.value;
            pourcentage === pourcentage.value;
            section === section.value;
            option === option.value;
            classe === classe.value;
            ecole === ecole.value;

            alert('Votre message a bien été envoyé!');
        }
    };
    return (
=======
  
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
>>>>>>> b8680a45c30659a4768c22925413a9227d967d91

        <div>
            <div>
            <HeaderInscription />

<<<<<<< HEAD
            </div>
            <div className="flex justify-center items-center bg-slate-400">
                <div>
                    <img src="src/image/istockphoto-1.jpg" alt="" />
=======
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
>>>>>>> b8680a45c30659a4768c22925413a9227d967d91
                </div>
                <div className="  ml-7 mt-10 ">
                    <h1 className="font-bold text-sky-950 pl-10 pb-5 ">1. IDENTITE DE L’ELEVE</h1>
                    <div className=" space-y-7 ">
                        <div className="pl-10 space-y-2">
                            <p>Noms(PostNom Prenom) </p>
                            <input className="h-10 w-96 border rounded-lg bg-stone-100" type="text" id="nom" />
                        </div>
                        <div className="pl-10 space-y-2">
                            <p>Genre </p>
                            <input className="h-10 w-96 border rounded-lg bg-stone-100" type="text" id="genre" />
                        </div>
                        <div className="pl-10 space-y-2">
                            <p>Telephone </p>
                            <input className="h-10 w-96 border rounded-lg bg-stone-100" type="text" id="tel" />
                        </div >
                    </div>
                    <div >
                        <div className="flex">
                            <div>
                                <h1 className="font-bold text-sky-950 pl-10 pb-5 pt-10">2. SOLLICITATION</h1>
                                <div className=" space-y-7 ">
                                    <div className="pl-10 space-y-2">
                                        <p>Section</p>
                                        <input className="h-10 w-96 border rounded-lg bg-stone-100" type="text" id="section" />
                                    </div>
                                    <div className="pl-10 space-y-2">
                                        <p>Option</p>
                                        <input className="h-10 w-96 border rounded-lg bg-stone-100" type="text" id="option" />
                                    </div>
                                    <div className="pl-10 space-y-2">
                                        <p>Classe</p>
                                        <input className="h-10 w-96 border rounded-lg bg-stone-100" type="text" id="classe" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-86">
                                <div>
                                    <h1 className="font-bold text-sky-950 pl-10 pb-5 pt-10"> 3. ETUDES ANTERIEURS (Ecole de provenance)</h1>
                                    <div className=" space-y-7 ">
                                        <div className="pl-10 space-y-2">
                                            <p>Nom de l’Ecole</p>
                                            <input className="h-10 w-96 border rounded-lg bg-stone-100" type="text" id="ecole" />
                                        </div>
                                        <div className="pl-10 space-y-2">
                                            <p>Classe</p>
                                            <input className="h-10 w-96 border rounded-lg bg-stone-100" type="text" id="ecolepro" />
                                        </div>
                                        <div className="pl-10 space-y-2">
                                            <p>Pourcentage (%)</p>
                                            <input className="h-10 w-96 border rounded-lg bg-stone-100" type="text" id="pourcentage" />
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>


                    </div>
                    <div className="pl-64 pt-24 pb-10 ">
                        <button onClick={handleClick} className=" bg-blue-950 font-bold text-white border rounded-full w-40 h-16">Suivant</button>
                    </div>
                </div>

            </div>
<<<<<<< HEAD
=======
          </div>
          <div className="pl-64 pt-24 pb-10 ">
            <button
              type="submit"
              className=" bg-blue-950 font-bold text-white border rounded-full w-40 h-16"
            >
              Suivant
            </button>
          </div>
>>>>>>> b8680a45c30659a4768c22925413a9227d967d91
        </div>
    )
}