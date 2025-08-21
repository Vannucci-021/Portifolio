import "./Button.css";
import { Link } from "react-router-dom";

interface ButtonProps {
  link: string;
  text: string;
  newTab?: boolean;
}

function Button({ link, text, newTab }: ButtonProps) {
  return (
    <>
      <Link to={link} target={newTab ? "_blank" : "_self"}>
        <button className="button">{text}</button>
      </Link>
    </>
  );
}

export default Button;
