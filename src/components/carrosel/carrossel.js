import React, { useState } from 'react';
import './carrossel.css';
import Organize from "../../imagens/projeto organize.png"
import Landingpage from "../../imagens/landingpage.png"

const projects = [
  {
    title: 'Organize',
    description: 'Projeto em React JS com o foco em ajudar a organizar suas tarefas diárias',
    image: Organize,
    githubLink: 'https://github.com/FeMarquess/organize',
    deployLink: 'https://organize-4aby.vercel.app/',
  },
  {
    title: 'Landing page',
    description: 'Landing page em HTML CSS de um escola de cursos de inglês',
    image: Landingpage,
    githubLink: 'https://github.com/FeMarquess/LandingPageEnglishSchool',
    deployLink: 'https://landing-page-english-school.vercel.app/',
  },
];

const Carrossel = () => {
  const [indexAtual, setindexAtual] = useState(0);

  const nextProject = () => {
    setindexAtual((indexAtual + 1) % projects.length);
  };

  const prevProject = () => {
    setindexAtual((indexAtual - 1 + projects.length) % projects.length);
  };

  return (
    <div className="carousel">
        <button onClick={prevProject}>&lt;</button>
      <div className="project">
        <img src={projects[indexAtual].image} alt={projects[indexAtual].title} />
        <h2>{projects[indexAtual].title}</h2>
        <p>{projects[indexAtual].description}</p>
        <div className="buttons">
          <a href={projects[indexAtual].githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={projects[indexAtual].deployLink} target="_blank" rel="noopener noreferrer">
            Deploy
          </a>
        </div>
      </div>
        <button onClick={nextProject}> &gt;</button>
    </div>
  );
};

export default Carrossel;
