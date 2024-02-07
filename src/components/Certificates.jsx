import React from "react";
import { Link } from "react-router-dom";
import certificates from "../certificates";

const Certificates = () => {
  return (
    <section className="certificates my-9">
      <div>
        <p className="text-white text-3xl text-center font-semibold mb-5 sm:text-start dark:text-black">
          Certificaciones
        </p>
      </div>
      <div
        className="bg-blue-light flex flex-col gap-4 max-h-80 rounded-xl p-5 border-2 border-black dark:bg-white"
        style={{
          overflowY: "scroll",
          scrollbarColor: "#2463eb transparent",
        }}
      >
        {certificates.map(({ img, title }, index) => {
          return (
            <div className="flex flex-col items-center gap-5 font-semibold text-white sm:flex-row dark:text-black" key={index}>
              <div className="listCertificates-img">
                <img
                  className="w-9"
                  src={img}
                  alt={title}
                />
              </div>
              <div>
                {title}
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
