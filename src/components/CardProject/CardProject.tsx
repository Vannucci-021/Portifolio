import "./CardProject.css";
import Button from "../Button/Button";
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

function ProjectCard({ title, description, link, image }: ProjectCardProps) {
  return (
    <>
      <div className="project-card-container">
        {/* imagem do projeto */}
        <img src={image} alt={title} className="project-image" />
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <Button newTab={true} link={link} text="Ver projeto" />
      </div>
    </>
  );
}

export default ProjectCard;
