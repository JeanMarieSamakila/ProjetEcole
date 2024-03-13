import HeaderSection from "./headermenu/HeaderSection";


export default function Section() {

    return (
      <div>
        {/* <div className="flex items-center pt-5 bg-blue-950 gap-10 text-xl font-bold w-90 h-20 mb-20  pl-20 text-white ">
                <div>
                <Link to="/"><img className='w-8' src="src/image/material-symbols-light--arrow-back-ios-new.svg" alt="" /></Link>
                </div>
                <h1> Section</h1>
            </div> */}
        <div className="pb-32">
          
          <HeaderSection/>
        </div>
        <div className=" flex-col text-center pl-80 pr-80">
          <div>
            <h1 className="underline font-bold text-blue-950 text-4xl">
              Section Secondaire
            </h1>
            <p>
              Bienvenue dans la section Secondaire de notre école, où
              l'apprentissage devient une aventure stimulante et transformative.
              Notre engagement envers l'excellence académique et le
              développement personnel prépare les élèves à réussir dans un monde
              en constante évolution.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="underline font-bold text-blue-950 text-3xl">
              Notre Vision Éducative
            </h1>
            <p>
              À la section Secondaire, nous sommes déterminés à offrir un
              environnement d'apprentissage dynamique et inclusif, où chaque
              élève est encouragé à explorer ses passions, à exceller
              académiquement et à devenir un citoyen du monde responsable.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-blue-950 text-3xl">
              Programme Scolaire
            </h1>
            <p>
              Notre programme Scolaire rigoureux met l'accent sur la pensée
              critique, la résolution de problèmes et la collaboration. Les
              élèves ont la possibilité de choisir parmi une variété de cours
              avancés, y compris les sciences, les mathématiques, les sciences
              humaines, les arts et les langues étrangères.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-blue-950 text-3xl">
              Enrichissement et Dépassement
            </h1>
            <p>
              En plus des cours obligatoires, nous offrons des programmes
              d'enrichissement et des activités extracurriculaires qui
              permettent aux élèves d'explorer leurs intérêts spécifiques et de
              développer leurs compétences dans des domaines tels que les arts,
              le sport, la technologie et le leadership.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="font-bold text-blue-950 text-3xl">
              Soutien aux Élèves
            </h1>
            <p>
              Nous sommes déterminés à soutenir le succès de chaque élève. Notre
              équipe pédagogique offre un soutien personnalisé, des services de
              conseil et des programmes de tutorat pour aider les élèves à
              surmonter les défis académiques et personnels.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="font-bold text-blue-950 text-3xl">
              Préparation à l'Université et à la Carrière
            </h1>
            <p>
              Notre programme vise à préparer les élèves à réussir au-delà de
              l'école. Nous offrons des conseils en orientation scolaire et
              professionnelle, des opportunités de stage et des ressources pour
              aider les élèves à planifier leur parcours postsecondaire et leur
              carrière future.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-blue-950 text-3xl">Admissions</h1>
            <p>
              Pour en savoir plus sur le processus d'admission à la section
              Secondaire de notre école et pour planifier une visite, veuillez
              contacter notre bureau des admissions. Nous sommes impatients de
              vous accueillir dans notre communauté scolaire dynamique.
            </p>
          </div>
          <div className="mt-20 mb-5">
            <p>
              Cette structure offre un aperçu des principaux aspects de la
              section Secondaire de l'école, mettant en avant le programme
              académique, les activités enrichissantes, le soutien aux élèves et
              la préparation à l'université et à la carrière.
            </p>
          </div>
        </div>
      </div>
    );
}