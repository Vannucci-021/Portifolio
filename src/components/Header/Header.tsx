import "./Header.css";
import linkedinDark from "../../assets/icon-linkedin-light.svg";
import linkedinLight from "../../assets/icon-linkedin-dark.svg";
import githubDark from "../../assets/icon-github-light.svg";
import githubLight from "../../assets/icon-github-dark.svg";
import lightTheme from "../../assets/light.svg";
import darkTheme from "../../assets/dark.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="container container-header">
        <nav className="header-buttons">
          <div
            className="header-button"
            onClick={() => scrollToSection("projetos")}
          >
            Projetos
          </div>
          <div
            className="header-button"
            onClick={() => scrollToSection("tecnologias")}
          >
            Tecnologias
          </div>
          <div
            className="header-button"
            onClick={() => scrollToSection("sobre")}
          >
            Sobre
          </div>
        </nav>
        <div className="header-icons">
          <Link target="_blank" to="https://github.com/Vannucci-021">
            <img
              className={"header-icon"}
              src={isDarkMode ? githubDark : githubLight}
              alt="Github"
            />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/kevinn-vannucci/"
          >
            <img
              className={"header-icon"}
              src={isDarkMode ? linkedinDark : linkedinLight}
              alt="Linkedin"
            />
          </Link>
          <button onClick={toggleTheme} className="theme-toggle">
            <img
              className={"header-icon"}
              src={isDarkMode ? darkTheme : lightTheme}
              alt="Theme"
            />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
