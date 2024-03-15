import { useState } from "react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification des champs obligatoires
    if (!name || !phone || !genre || !section || !option || !classesollicite || !ecoleprovenance || !pourcentage || !classeprovenance) {
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

      <form onSubmit={handleSubmit} className="flex justify-center items-center">
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
              <input
                className="h-10 w-96 border rounded-lg bg-stone-100"
                type="text"
                name="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                id="genre"
              />
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
                    <input
                      className="h-10 w-96 border rounded-lg bg-stone-100"
                      type="text"
                      name="section"
                      value={section}
                      onChange={(e) => setSection(e.target.value)}
                      id="section"
                    />
                  </div>
                  <div className="pl-10 space-y-2">
                    <p>Option</p>
                    <input
                      className="h-10 w-96 border rounded-lg bg-stone-100"
                      type="text"
                      name="option"
                      value={option}
                      onChange={(e) => setOption(e.target.value)}
                      id="option"
                    />
                  </div>
                  <div className="pl-10 space-y-2">
                    <p>Classe</p>
                    <input
                      className="h-10 w-96 border rounded-lg bg-stone-100"
                      type="text"
                      name="classe"
                      value={classesollicite}
                      onChange={(e) => setClassesollicite(e.target.value)}
                      id="classe"
                    />
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
                      <input
                        className="h-10 w-96 border rounded-lg bg-stone-100"
                        type="text"
                        name="classeprovenance"
                        value={classeprovenance}
                        onChange={(e) => setClasseprovenance(e.target.value)}
                        id="ecolepro"
                      />
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
