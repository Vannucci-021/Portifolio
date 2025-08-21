import Button from "../../components/Button/Button";
import ProjectCard from "../../components/CardProject/CardProject";
import Header from "../../components/Header/Header";
import "./home.css";

// Importando as imagens
import landingPageImage from "../../assets/images/Landing-page-DNC.png";
import responsiveBlogImage from "../../assets/images/Responsive-blog-DNC.png";
import bootstrapBankImage from "../../assets/images/Bootstrap-bank-dnc.png";
import todoListImage from "../../assets/images/Todo-list-DNC.png";
import CardSobre from "../../components/CardSobre copy/CardSobre";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";

const projects: Project[] = [
  {
    title: "Landing Page DNC",
    description:
      "No presente projeto foi utilizado as linguagens HTML / CSS. Para a integração do formulário com a planilha do google foi utilizado o Sheets Monkey.",
    image: landingPageImage,
    link: "https://desafio-projeto-one.vercel.app/",
  },
  {
    title: "Responsive Blog DNC",
    description:
      "Este é um projeto de um Blog Responsivo, desenvolvido com foco em adaptabilidade para diferentes tamanhos de tela, proporcionando uma experiência otimizada para usuários em dispositivos variados.",
    image: responsiveBlogImage,
    link: "https://projeto-responsividade.netlify.app/",
  },
  {
    title: "Bootstrap Bank DNC",
    description:
      "Este é um projeto de um site responsivo DNC banc, desenvolvido com foco em adaptabilidade para diferentes tamanhos de tela, utilizando HTML, CSS e Bootstrap.",
    image: bootstrapBankImage,
    link: "https://dnc-bank-bootstrap.netlify.app/",
  },
  {
    title: "Todo List DNC",
    description:
      "Este projeto é uma aplicação de To-Do List desenvolvida para aprimorar habilidades em JavaScript, HTML e CSS, como parte das atividades propostas pela escola DNC.",
    image: todoListImage,
    link: "https://todo-list-dnc.netlify.app/",
  },
];

const sobre: Sobre[] = [
  {
    ano: "2022",
    description:
      "Em 2022 me interessei pela área de tech, porém nesse caminho novo não tinha nada definido, como não tive um norte nem apoio desisti da área e acabei seguindo outros caminhos.",
  },
  {
    ano: "2023",
    description:
      "Em 2023 foi diferente, vi um amigo da escola programando e me interessei, não sabia nada, comecei a pesquisar, assistindo alguns videos, entrando em grupos porém nada de iniciar.",
  },
  {
    ano: "2023/2024",
    description:
      "No mesmo ano, iniciei um curso básico com o famoso Gustavo Guanabara do curso em vídeo, ali comecei a ter um norte da área e foi ai que iniciei no front, com HTML e CSS apenas, que já para o inicio de 2024 tava pesquisando assuntos mais profundos.",
  },
  {
    ano: "2024/2025",
    description:
      "E foi ai que em setembro de 2024 iniciei o curso na DNC, me interessei por ter apoio de professores, contato com empresas, projetos reais, e atualmente estou com uma bagagem devido a isso, atuei em projeto com dev, PO, aprendi diversos assuntos, contatos com pessoas importantes, sempre em busca da evolução.",
  },
  {
    ano: "2025",
    description: 
      "Atualmente estou em busca de um emprego na área, aprendendo uma nova área que é o backend, me interessei devido não so querer aprender fazer telas bonitas, e sim mecher com banco, lógica e entre outros assuntos. Agradeço a DNC por esse apoio."
  },
];
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Sobre {
  ano: string;
  description: string;
}

function Home() {
  const sobreContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sobreContainerRef.current) {
      sobreContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sobreContainerRef.current) {
      sobreContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Kevinn Vannucci</h1>
        <div className="resume-container">
          <p className="resume">
            Sou Kevinn, desenvolvedor front-end com 1 ano de experiência na área
            de tecnologia. <br />
            Estou em busca de construir uma carreira sólida no
            desenvolvimento de software e estou em busca de oportunidades que me
            permitam crescer profissionalmente e contribuir com projetos
            desafiadores na área.
          </p>
          <Button link="/sobre" text="Sobre mim" />
        </div>
        <h1 id="projetos" className="title">
          Projetos
        </h1>
        <div className="projects-container">
          {projects.map((project: Project, index: number) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
        <h1 id="sobre" className="title">
          Sobre mim
        </h1>
        {/* <div className="sobre-wrapper"> */}
        <div className="sobre-container" ref={sobreContainerRef}>
          {sobre.map((el: Sobre, index: number) => (
            <CardSobre
              key={index}
              ano={el.ano}
              description={el.description}
              line={
                index === 0
                  ? "right"
                  : index === sobre.length - 1
                  ? "left"
                  : "center"
              }
            />
          ))}
        </div>
        <div className="sobre-navigation">
          <button className="nav-button left" onClick={scrollLeft}>
            ←
          </button>
          <button className="nav-button right" onClick={scrollRight}>
            →
          </button>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
