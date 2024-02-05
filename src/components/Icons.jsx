import FooterLogos from "./FooterLogos";
import "./styles/Icons.css";

const Icons = ({ technologies }) => {
  return (
    <div className="icons">
      {technologies.map(({ name, src, url }) => {
        return (
          <div key={name}>
            <ul className="wrapper">
              <FooterLogos
                socialClassName={name.toLowerCase()}
                url={url}
                logo={src}
                name={name}
              />
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Icons;
