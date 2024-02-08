import { Logos } from "./Logos";
import "./styles/Icons.css";

export const Icons = ({ technologies }) => {
  return (
    <div className="icons">
      {technologies.map(({ name, src, url }) => {
        return (
          <div key={name}>
            <ul className="wrapper">
              <Logos
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
