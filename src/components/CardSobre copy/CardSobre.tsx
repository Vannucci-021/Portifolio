import "./CardSobre.css";

interface CardSobreProps {
  ano: string;
  description?: string;
  line: "left" | "right" | "center";
}

function CardSobre({ ano, line, description }: CardSobreProps) {
  return (
    <>
      <div className="sobre-card-container">
        {line === "left" && (
          <div className="line-container-left">
            <div className="circle-left"></div>
            <div className="line-left"></div>
          </div>
        )}
        {line === "right" && (
          <div className="line-container-right">
            <div className="circle-right"></div>
            <div className="line-right"></div>
          </div>
        )}
        {line === "center" && (
          <div className="line-container-center">
            <div className="circle-center"></div>
            <div className="line-center"></div>
          </div>
        )}
        <h1 className="sobre-card-title">{ano}</h1>
        <div className="sobre-card-content">
          <p className="sobre-card-description">{description}</p>
        </div>
      </div>
    </>
  );
}

export default CardSobre;
