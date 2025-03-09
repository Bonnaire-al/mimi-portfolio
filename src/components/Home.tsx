import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/Home.css';
import { Container, Row, Col, ProgressBar, Carousel } from 'react-bootstrap';

const Accueil: React.FC = () => {
  return (
    <div className="container-fluid p-0 home">
      
      {/* Section 1 : Présentation avec Carrousel */}
      <section id="presentation">
        <Carousel fade indicators controls interval={6000} pause="hover">
          
          <Carousel.Item>
            <div className="carousel-item-background">
              <h1 className="title1">Bienvenue Dans Mon Portfolio</h1>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-background">
              <h2 className="title2">Présentation</h2>
              <p className="txt1">
                Bienvenue sur mon portfolio étudiant ! <br />
                Ce site met en avant mon parcours en licence Économie et Social, ainsi que mes expériences et compétences. <br />
                Explorez la section "À propos" pour mieux me connaître, "Expérience" pour mon parcours académique et "Projets" pour mes réalisations. <br />
                <br />N’hésitez pas à me contacter pour en savoir plus !
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-background">
              <h2 className="title3">Mes Objectifs</h2>
              <p>
                Travailler dans le social, c’est s’engager pour le bien-être des autres et une société plus solidaire. <br />
                Ce domaine permet d’accompagner les personnes en difficulté, de lutter contre les inégalités et de favoriser l’insertion sociale. <br /> <br />
                C’est un secteur enrichissant où chaque action fait la différence, offrant des opportunités variées et une grande satisfaction personnelle et professionnelle.
              </p>
            </div>
          </Carousel.Item>

        </Carousel>
      </section>

      {/* Section 2 : À propos */}
      <section className="apropos">
        <Container className="container1">
          <Row className="d-flex justify-content-between align-items-center gap-5">
            
            {/* Image à gauche */}
            <Col sm={5} className="prp flex-grow-1 d-flex ">
              <img src="/images/profile.webp" alt="profile pic" className="img-fluid rounded" />
            </Col>

            {/* Texte à droite */}
            <Col sm={5} className="pdm flex-grow-1">
              <h3>À propos de moi</h3>
              <p className='par'>
                Bonjour, je m'appelle Myriam Bonnaire, j'ai 21 ans et je suis actuellement en Licence d'Économie et Social à l'université de Bourges. <br />
                Je suis originaire de Nevers, une petite ville située en Bourgogne-Franche-Comté.
              </p>

              <h3>Mes Compétences</h3>
              {[
                { skill: "Comptabilité", value: 90 },
                { skill: "Analyse documentaire", value: 80 },
                { skill: "Recherche et développement", value: 65 },
                { skill: "Travaux d'administration", value: 75 },
                { skill: "Collaboration", value: 40 },
              ].map(({ skill, value }, index) => (
                <div key={index} className="mb-3">
                  <label className="small-text">{skill}</label>
                  <ProgressBar animated now={value} variant="danger" label={`${value}%`} className="small-progress"/>
                </div>
              ))}
            </Col>

          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Accueil;
