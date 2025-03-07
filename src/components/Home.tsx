import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/Home.css';
import { ProgressBar, Carousel } from 'react-bootstrap';

const Accueil: React.FC = () => {
  return (
    <div className="container-fluid p-0 home">
      {/* Section 1 : Présentation avec carrousel automatique */}
      <section id="presentation">
        <Carousel fade indicators={true} controls={true} interval={6000} pause="hover">
          {/* Slide 1 */}
          <Carousel.Item>
            <div className="carousel-item-background">
              <h1 className='title1'>Bienvenu Dans Mon Portfolio</h1>
            </div>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <div className="carousel-item-background">
              <h2 className='title2'>Presentation</h2>
              <p className='txt1'>Bienvenue sur mon portfolio étudiant ! <br />
                 Ce site met en avant mon parcours en licence Économie et Social, ainsi que mes expériences et compétences. <br />
                 Sur la page d'accueil, vous trouverez une section ‘À propos’ qui présente mon profil, ainsi qu’un aperçu de mes compétences. <br />
                 La section ‘Expérience’ détaille mon parcours académique et mes expériences professionnelles. <br />
                 Enfin, la section ‘Projets’ regroupe les travaux que j’ai réalisés durant mon cursus. <br />
                 <br />N’hésitez pas à explorer et à me contacter pour en savoir plus! </p>
            </div>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <div className="carousel-item-background">
              <h2 className='title3'>Mes Objectifs</h2>
              <p>Travailler dans le social, c’est avant tout s’engager pour le bien-être des autres et contribuer à une société plus solidaire. <br />
                 Ce domaine permet d’accompagner les personnes en difficulté, de lutter contre les inégalités et de favoriser l’insertion sociale. <br /> <br />
                 En plus d’un impact humain fort, il offre des opportunités variées dans l’éducation, l’accompagnement social ou encore le développement local. <br />
                C’est un secteur enrichissant où chaque action fait la différence, apportant une réelle satisfaction personnelle et professionnelle.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Section 2 : À propos */}
      <section className="apropos">
        <div className="container1">
          <div className="row">
            {/* Image à gauche */}
            <div className="col-sm-6 prp">
              <img src="/images/profile.webp" alt="profile pic" className="img-fluid rounded" />
            </div>

            {/* Texte à droite */}
            <div className="col-sm-6 pdm">
              <h2>À propos de moi</h2>
              <p>Bonjour, je m'appelle Myriam Bonnaire, j'ai 21 ans et je suis actuellement en Licence d'Économie et Social à l'université de Bourges. <br />
                 Je suis originaire de Nevers, une petite ville située dans la région Bourgogne-Franche-Comté, où j'ai grandi.</p>

              <h3>Mes Compétences</h3>
              {[ 
                { skill: "comptabilité", value: 90 },
                { skill: "analyse documentaire", value: 80 },
                { skill: "recherche et devellopement", value: 65 },
                { skill: "travaux d'administartion", value: 75 },
                { skill: "colaboration", value: 40 },
              ].map(({ skill, value }, index) => (
                <div key={index} className="mb-3">
                  <label className="small-text">{skill}</label>
                  <ProgressBar animated now={value} variant="danger" label={`${value}%`} aria-label={`${skill} Progress`} className="small-progress"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
