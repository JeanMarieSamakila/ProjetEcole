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
        <div className=" ">
            <div className="">
                <h1 className=" items-center pt-5 bg-blue-950 text-xl font-bold text-white w-74 h-20 mb-20  pl-20">Formulaire de demande d’inscription</h1>
            </div>

            <div className="flex justify-center items-center">
                <div className=" ml-72 ">
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
                            <div>
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

        </div>
    )
}