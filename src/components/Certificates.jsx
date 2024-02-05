import React from "react";
import { Link } from "react-router-dom";
import certificates from "../certificates";
import "./styles/Certificates.css";
import "./styles/Education-experience-info.css"

const Certificates = () => {
  return (
    <section className="personal-info">
      <div className="personal-info-title-title">
        <p className="personal-info-title__text">Certificaciones</p>
      </div>
      <div className="containerListCertificates">
        {certificates.map((certificate, index) => {
          return (
            <div className="listCertificates" key={index}>
              <div className="listCertificates-img">
                <img
                  className="listCertificates-img__img"
                  src={certificate.img}
                  alt={certificate.title}
                />
              </div>
              <div className="listCertificates-description">
                <Link
                  className="listCertificates-description__title"
                  to={ certificate.link }
                  target="_blank"
                  title="Ver certificado"
                >
                  {certificate.title}
                </Link>
                {/* <div>
                  <p className="listCertificates-description__institution">
                    {certificate.institution}
                  </p>
                  <p className="listCertificates-description__date">
                    Expedición: {certificate.date}
                  </p>
                </div> */}
              </div>
            </div>
          );
        })}
        <p className="moreCertificates">Entre otros</p>
      </div>
    </section>
  );
};

export default Certificates;
