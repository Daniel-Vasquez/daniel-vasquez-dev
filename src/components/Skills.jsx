import React from "react";
import WebDevContent from "./componentsSkills/WebDevContent.jsx";
import LayoutContent from "./componentsSkills/LayoutContent.jsx";
import "./styles/Skills.css";
import "./styles/Education-experience-info.css";


const Skills = () => {
  return (
    <div className="personal-info">
      <h2 className="personal-info-title__text">Habilidades</h2>
      <div className="skills-container" id="skills">
        <WebDevContent
          title="Desarrollo"
          titleTechnologies="Tecnologías"
          item="JavaScript"
          item2="React"
          item3="Node.js"
          item4="Git"
          item5="Python"
          item6="AWS (S3, Cloudwatch)"
          item7="Selenium"
          item8="Express"
          titleTools="Herramientas"
          tool="VSCode"
          tool2="GitHub"
        />
        <LayoutContent
          title="Maquetación web"
          titleTechnologies="Tecnologías"
          item="HTML5"
          item2="CSS3"
          item3="CSS Grid"
          item4="Flexbox"
          titleTools="Herramientas"
          tool="Figma (Conceptos básicos)"
        />
      </div>
    </div>
  );
};

export default Skills;
