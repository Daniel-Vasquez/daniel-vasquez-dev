import React from "react";
import { Link } from "react-router-dom";
import certificates from "../certificates";

const Certificates = () => {
  return (
    <section className="certificates mx-3">
      <div>
        <p className="text-black text-3xl text-center font-semibold mb-5 sm:text-start">
          Certificaciones
        </p>
      </div>
      <div
        className="flex flex-col gap-5 max-h-80 rounded-xl p-5 border-2 dark:border-black"
        style={{
          overflowY: "scroll",
          scrollbarColor: "#2463eb transparent",
        }}
      >
        {certificates.map((certificate, index) => {
          return (
            <div className="flex flex-col items-center gap-3 sm:flex-row" key={index}>
              <div className="listCertificates-img">
                <img
                  className="w-9"
                  src={certificate.img}
                  alt={certificate.title}
                />
              </div>
              <div>
                <Link
                  className="font-semibold text-blue-600 hover:underline"
                  to={certificate.link}
                  target="_blank"
                  title="Ver certificado"
                >
                  {certificate.title}
                </Link>
              </div>
            </div>
          );
        })}
        <p className="font-semibold text-md opacity-50 text-center my-2">Entre otros</p>
      </div>
    </section>
  );
};

export default Certificates;
