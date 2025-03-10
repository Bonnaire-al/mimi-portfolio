import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/experience.css";

const experiences = [
  {
    date: "08/2008 - 11/2008",
    title: "Titre du Poste",
    company: "Nom de l'Entreprise",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    date: "07/2023 - Présent",
    title: "Onzième Poste",
    company: "Future Technologies",
    description: "Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
  },
  {
    date: "07/2023 - Présent",
    title: "Onzième Poste",
    company: "Future Technologies",
    description: "Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
  },
  {
    date: "07/2023 - Présent",
    title: "Onzième Poste",
    company: "Future Technologies",
    description: "Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
  },
  {
    date: "07/2023 - Présent",
    title: "Onzième Poste",
    company: "Future Technologies",
    description: "Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
  },
];

const ExperienceItem: React.FC<{ exp: (typeof experiences)[0] }> = ({ exp }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={itemRef} className={`timeline-item ${isVisible ? "visible" : ""}`}>
      <div className="timeline-date">{exp.date}</div>
      <div className="timeline-content">
        <h3 className="title-ex">{exp.title}</h3>
        <h4 className="title-ex2">{exp.company}</h4>
        <p>{exp.description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <Container>
      <h2 className="text-center mt-5">Mon Parcours</h2>
      <Row>
        <Col md={4}>
          <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <Card.Title className="text-center">Mes Diplômes</Card.Title>
              <Card.Text>
                - Diplôme A (Année) <br />
                - Diplôme B (Année) <br />
                - Diplôme C (Année)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;