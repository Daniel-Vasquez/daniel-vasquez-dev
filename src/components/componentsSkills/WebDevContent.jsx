import React from "react";
import { Link } from "react-router-dom";
import "./SkillsWebDevAndLayoutStyles.css";

const WebDevContent = ({
  title,
  titleTechnologies,
  item,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  titleTools,
  tool,
  tool2,
}) => {
  return (
    <div className="skillscontent-container">
      <h2 className="skillscontent-container__title">{title}</h2>
      <div className="skillscontent-container__technologies">
        <h3 className="skillscontent-container__technologies--title">
          {titleTechnologies}
        </h3>
        <hr className="skillscontent-container__technologies--line" />
        <ul className="skillscontent-container__technologies--list">
          <li className="item">{item}</li>
          <li className="item">
            <Link
              className="item-link"
              to="https://platzi.com/p/DanielVas/curso/1548-course/diploma/detalle/"
              target="_blank"
              title="Certificado"
            >
              {item2}
            </Link>
          </li>
          <li className="item">
            {item3}
          </li>
          <li className="item">{item4}</li>
          <li className="item">
            <Link
              className="item-link"
              to="https://platzi.com/p/DanielVas/curso/2255-python-intermedio/diploma/detalle/"
              target="_blank"
              title="Certificado"
            >
              {item5}
            </Link>
          </li>
          <li className="item">
            <Link
              className="item-link"
              to="https://platzi.com/p/DanielVas/curso/2731-aws-fundamentos/diploma/detalle/"
              target="_blank"
              title="Documentación de Selenium"
            >
              {item6}
            </Link>
          </li>
          <li className="item">
            <Link
              className="item-link"
              to="https://selenium-python.readthedocs.io/index.html"
              target="_blank"
              title="Documentación de Selenium"
            >
              {item7}
            </Link>
          </li>
          <li className="item">{item8}</li>
        </ul>
      </div>
      <div className="skillscontent-container__tools">
        <h3 className="skillscontent-container__tools--title">{titleTools}</h3>
        <hr className="skillscontent-container__tools--line" />
        <ul className="skillscontent-container__tools--list">
          <li className="item">{tool}</li>
          <li className="item">
            <Link
              className="item-link"
              to="https://github.com/Daniel-Vasquez"
              target="_blank"
              title="Certificado"
            >
              {tool2}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WebDevContent;
