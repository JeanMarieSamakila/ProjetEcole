import HeaderSection from "./headermenu/HeaderSection";


export default function Section() {

  return (
    <div>

      <div className="pb-">

        <HeaderSection />
      </div>

      <div className=" gap-10  mt-1 text-xl ">
      <div className="flex flex-col items-center justify-center">
  <div>
    <h1 className="text-center font-bold text-blue-300 text-3xl md:text-4xl mb-3">Section Secondaire</h1>
    <h2 className="text-center font-bold text-orange-600 text-lg md:text-xl mt-3 mb-5">Bienvenue à Cherad School</h2>
  </div>
  <p className="mx-2 text-lg md:text-xl mb-8 md:mb-12 max-w-screen-lg">Bienvenue dans la section Secondaire de notre école, où l'apprentissage devient une aventure stimulante et transformative. Notre engagement envers l'excellence académique et le développement personnel prépare les élèves à réussir dans un monde en constante évolution.</p>

  <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
    <div className="flex gap-3">
      <img className="w-full md:w-[500px] h-[300px]" src="src/image/classe.png" alt="" />
      <img className="w-full md:w-[500px] h-[300px] mt-5 md:mt-0" src="src/image/Scolarisation.png" alt="" />
    </div>
{/* 
    <div className="flex ">
      <img className="w-full md:w-[500px] h-[300px]" src="src/image/Scolarisation.png" alt="" />
      <img className="w-full md:w-[500px] h-[300px] mt-5 md:mt-0" src="src/image/classe.png" alt="" />
    </div> */}
  </div>
</div>

        <div className="mt-10">
          
          <div className=" gap-10 mt-6 ">
          <h1 className="text-center font-bold text-blue-300 text-3xl ">
            Programme Scolaire
          </h1>
          <div className="justify-center text-center">
          <p>
            
            Notre programme Scolaire rigoureux met l'accent sur la pensée
            critique, la résolution de problèmes et la collaboration. Les
            élèves ont la possibilité de choisir parmi une variété de cours
            avancés, y compris les sciences, les mathématiques, les sciences
            humaines, les arts et les langues étrangères.
          </p>
          </div>
          <div className="justify-center text-center">

          <p>
              Notre programme vise à préparer les élèves à réussir au-delà de
              l'école. Nous offrons des conseils en orientation scolaire et
              professionnelle, des opportunités de stage et des ressources pour
              aider les élèves à planifier leur parcours postsecondaire et leur
              carrière future.
            </p>
          </div>
           
          </div>
          <div className="">
            <div className=" mt-10 ">
              <div>
              </div>
              <div className=" text-center gap-10 ">
             
            <p>
            <h1 className="text-center font-bold text-blue-300 mb-6 text-3xl">Admissions</h1>
              Notre programme Scolaire rigoureux met l'accent sur la pensée
              critique, la résolution de problèmes et la collaboration. Les
              élèves ont la possibilité de choisir parmi une variété de cours
              avancés, y compris les sciences, les mathématiques, les sciences
              humaines, les arts et les langues étrangères.
            </p>
            <p>
              Notre programme vise à préparer les élèves à réussir au-delà de
              l'école. Nous offrons des conseils en orientation scolaire et
              professionnelle, des opportunités de stage et des ressources pour
              aider les élèves à planifier leur parcours postsecondaire et leur
              carrière future.
            </p>
          </div>
            </div>
          </div>
          
          <div className="flex gap-5 justify-center items-center">
            <img className="w-full md:w-[500px] h-[300px]" src="src/image/eleve-noir.png" alt="" />
            <img className="w-full md:w-[500px] h-[300px]" src="src/Ecole.png" alt="" />
          </div>
          <h1 className="text-center font-bold text-blue-300 text-3xl">
            Programme Scolaire
          </h1>
          <div>
            <p>  Cette structure offre un aperçu des principaux aspects de la
            section Secondaire de l'école, mettant en avant le programme
            académique, les activités enrichissantes, le soutien aux élèves et
            la préparation à l'université et à la carrière.</p>
            <p>Pour en savoir plus sur le processus d'admission à la section
            Secondaire de notre école et pour planifier une visite, veuillez
            contacter notre bureau des admissions. Nous sommes impatients de
            vous accueillir dans notre communauté scolaire dynamique.</p>
          </div>
        </div>

      </div>


    </div>

    /* <div className="flex-row  text-xl ">
      <div className="mb-20">

      </div>
      <div className="flex gap-10 ">
        <div className="  ">
          <h1 className=" font-bold  justify-center items-center text-center text-blue-950 text-4xl mb-16 ml-40">
            Section Secondaire
          </h1>
          <p className=" ml-20 text-center ">

            Bienvenue dans la section Secondaire de notre école, où
            l'apprentissage devient une aventure stimulante et transformative.
            Notre engagement envers l'excellence académique et le
            développement personnel prépare les élèves à réussir dans un monde
            en constante évolution.
          </p>
          <p className=" ml-20 text-center ">  Notre programme Scolaire rigoureux met l'accent sur la pensée
            critique, la résolution de problèmes et la collaboration. Les
            élèves ont la possibilité de choisir parmi une variété de cours
            avancés, y compris les sciences, les mathématiques, les sciences
            humaines, les arts et les langues étrangères.</p>
          <h1 className="text-center font-bold text-blue-950 text-3xl mt-10">
            Enrichissement et Dépassement
          </h1>
          <p className=" mr-10 ml-20">
            En plus des cours obligatoires, nous offrons des programmes
            d'enrichissement et des activités extracurriculaires qui
            permettent aux élèves d'explorer leurs intérêts spécifiques et de
            développer leurs compétences dans des domaines tels que les arts,
            le sport, la technologie et le leadership.
          </p>
        </div>
        <img className=" mr-40 w-[2000px] h-[400px] " src="src/image/eleve2.png" alt="" />
      </div>

      <div className="flex gap-10 mt-20">
        {/* <div>
        <img className="rounded-xl ml-60 w-[2500px] h-[400px] " src="src/image/eleve2.png" alt="" />

        </div> */
    /* <div className="flex mr-10 ml-20">
          <p className=" mr-60 text-center ">
            Bienvenue dans la section Secondaire de notre école, où
            l'apprentissage devient une aventure stimulante et transformative.
            Notre engagement envers l'excellence académique et le
            développement personnel prépare les élèves à réussir dans un monde
            en constante évolution.
          </p>
          <p className="">  Notre programme Scolaire rigoureux met l'accent sur la pensée
            critique, la résolution de problèmes et la collaboration. Les
            élèves ont la possibilité de choisir parmi une variété de cours
            avancés, y compris les sciences, les mathématiques, les sciences
            humaines, les arts et les langues étrangères.</p>

        </div> */

    /* </div>
      <div className="flex gap-10">
        <img className=" ml-40 mr-20 w-[2000px] h-[400px] " src="src/image/eleve2.png" alt="" />

        <p className="mt-20">
          Nous sommes déterminés à soutenir le succès de chaque élève. Notre
          équipe pédagogique offre un soutien personnalisé, des services de
          conseil et des programmes de tutorat pour aider les élèves à
          surmonter les défis académiques et personnels.
        </p>

      </div>
      <div className=" justify-center items-center text-center ml-10 mr-10">
        <div className="flex gap-10">
          <div className="mt-10">
            <h1 className="text-center font-bold text-blue-950 text-3xl">
              Programme Scolaire
            </h1>
            <p>
              Notre programme Scolaire rigoureux met l'accent sur la pensée
              critique, la résolution de problèmes et la collaboration. Les
              élèves ont la possibilité de choisir parmi une variété de cours
              avancés, y compris les sciences, les mathématiques, les sciences
              humaines, les arts et les langues étrangères.
            </p>
          </div> */

    /* <div className="mt-10">
            <h1 className="text-center font-bold text-blue-950 text-3xl">
              Enrichissement et Dépassement
            </h1>
            <p>
              En plus des cours obligatoires, nous offrons des programmes
              d'enrichissement et des activités extracurriculaires qui
              permettent aux élèves d'explorer leurs intérêts spécifiques et de
              développer leurs compétences dans des domaines tels que les arts,
              le sport, la technologie et le leadership.
            </p>
          </div> */


    /* </div>
        <div className="flex gap-20">


          <div className="mt-10">
            <h1 className="text-center font-bold text-blue-950 text-3xl">
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
            <h1 className=" text-center font-bold text-blue-950 text-3xl">
              Préparation à l'Université et à la Carrière
            </h1>
            <p>
              Notre programme vise à préparer les élèves à réussir au-delà de
              l'école. Nous offrons des conseils en orientation scolaire et
              professionnelle, des opportunités de stage et des ressources pour
              aider les élèves à planifier leur parcours postsecondaire et leur
              carrière future.
            </p> */
    /* </div>
        </div>
        <div className="mt-10">
          <h1 className="text-center font-bold text-blue-950 text-3xl">Admissions</h1>
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
        </div> */

    /* 
      </div>
    </div> */
    // </div>
  );
}