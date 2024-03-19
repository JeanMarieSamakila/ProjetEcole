<<<<<<< HEAD
import HeaderInscription from "./headermenu/HeaderContact";

=======
import { useState } from "react";
import PersIns from "./PersIns";
>>>>>>> a3cb3feedb5eeddb8c0b3fb634323299c406a731

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
>>>>>>> a3cb3feedb5eeddb8c0b3fb634323299c406a731

        <div>
            <div className="pb-32">
            <HeaderInscription />

<<<<<<< HEAD
            </div>
           
            {/* <div>
                <h1 className=" items-center pt-5 bg-blue-950 text-xl font-bold text-white w-74 h-20 mb-20  pl-20">Formulaire de demande d’inscription</h1>
            </div> */}


            <div className="flex justify-center items-center">
                <div>
                    <img src="src/image/istockphoto-1.jpg" alt="" />
=======
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
        <h1 className=" items-center pt-5 bg-blue-950 text-xl font-bold text-white w-74 h-20 mb-20  pl-20">
          Formulaire de demande d’inscription
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center"
      >
        <div className=" ml-72 ">
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
              {/* <input
                className="h-10 w-96 border rounded-lg bg-stone-100"
                type="text"
                name="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                id="genre"
              /> */}
              <select
                className=" w-[380px] rounded-lg h-10"
                value={genre}
                onChange={handleSelectChange}
              >
                <option value="">Sélectionnez le genre de l'eleve</option>
                <option value="Masculin">Masculin</option>
                <option value="Feminin">Feminin</option>
                {/* <p>Option sélectionnée : {genre}</p> */}
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
                    {/* <input
                      className="h-10 w-96 border rounded-lg bg-stone-100"
                      type="text"
                      name="section"
                      value={section}
                      onChange={(e) => setSection(e.target.value)}
                      id="section"
                    /> */}
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
                      {/* <p>Option sélectionnée : {genre}</p> */}
                    </select>
                  </div>
                  <div className="pl-10 space-y-2">
                    <p>Option</p>
                    {/* <input
                      className="h-10 w-96 border rounded-lg bg-stone-100"
                      type="text"
                      name="option"
                      value={option}
                      onChange={(e) => setOption(e.target.value)}
                      id="option"
                    /> */}
                    <select
                      className=" w-[380px] rounded-lg h-10"
                      value={option}
                      onChange={handleOptionSelectChange}
                    >
                      <option value="">Sélectionnez l'option de l'eleve</option>
                      <option value="Scientifique">Scientifique</option>
                      <option value="Commercial Général">Commercial Général</option>
                      {/* <p>Option sélectionnée : {genre}</p> */}
                    </select>
                  </div>
                  <div className="pl-10 space-y-2">
                    <p>Classe</p>
                    {/* <input
                      className="h-10 w-96 border rounded-lg bg-stone-100"
                      type="text"
                      name="classe"
                      value={classesollicite}
                      onChange={(e) => setClassesollicite(e.target.value)}
                      id="classe"
                    /> */}
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
                {/* <p>Option sélectionnée : {genre}</p> */}
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
                      {/* <input
                        className="h-10 w-96 border rounded-lg bg-stone-100"
                        type="text"
                        name="classeprovenance"
                        value={classeprovenance}
                        onChange={(e) => setClasseprovenance(e.target.value)}
                        id="ecolepro"
                      /> */}
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
                {/* <p>Option sélectionnée : {genre}</p> */}
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
>>>>>>> a3cb3feedb5eeddb8c0b3fb634323299c406a731
                </div>
                <div className=" ml-7 ">
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
          <PersIns />
>>>>>>> a3cb3feedb5eeddb8c0b3fb634323299c406a731
        </div>
    )
}