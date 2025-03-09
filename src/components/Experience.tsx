import React, { useState, useEffect, useRef } from "react";
import "../assets/experience.css";

// Liste des expériences
const experiences = [
  {
    date: "08/2008 - 11/2008",
    title: "Titre du Poste",
    company: "Nom de l'Entreprise",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    date: "01/2009 - 06/2010",
    title: "Deuxième Poste",
    company: "Autre Entreprise",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "07/2010 - 12/2012",
    title: "Troisième Poste",
    company: "Encore Une Entreprise",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    date: "01/2013 - 06/2014",
    title: "Quatrième Poste",
    company: "Nouvelle Entreprise",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    date: "07/2014 - 12/2015",
    title: "Cinquième Poste",
    company: "Entreprise X",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    date: "01/2016 - 06/2017",
    title: "Sixième Poste",
    company: "Tech Corp",
    description: "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    date: "07/2017 - 12/2018",
    title: "Septième Poste",
    company: "Innovatech Solutions",
    description: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
  },
  {
    date: "01/2019 - 06/2020",
    title: "Huitième Poste",
    company: "Entreprise Innovante",
    description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
  },
  {
    date: "07/2020 - 12/2021",
    title: "Neuvième Poste",
    company: "Global Ventures",
    description: "Aenean sit amet erat nunc. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta.",
  },
  {
    date: "01/2022 - 06/2023",
    title: "Dixième Poste",
    company: "Tech Innovations",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt.",
  },
  {
    date: "07/2023 - Présent",
    title: "Onzième Poste",
    company: "Future Technologies",
    description: "Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.",
  },
];

const ExperienceItem: React.FC<{ exp: typeof experiences[0] }> = ({ exp }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      // Si 20% de l'élément est visible dans la fenêtre
      if (rect.top <= window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    }
  };

  // Ajout d'un événement de scroll lors du montage du composant
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Vérifie la visibilité dès le premier rendu

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`timeline-item ${isVisible ? "visible" : ""}`}
    >
      <div className="timeline-date">{exp.date}</div>
      <div className="timeline-content">
        <h3 className="title-ex">{exp.title}</h3>
        <h4 className="title-ex2">{exp.company}</h4>
        <p>{exp.description}</p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="timeline">
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} exp={exp} />
      ))}
    </div>
  );
};

export default Experience;
