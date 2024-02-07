export const SkillFulness = ({
  title,
  items,
  tools
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold p-4 pb-0">{title}</h2>
      <div className="m-5">
        <h3 className="mb-2 text-blue-600 text-lg font-semibold">
          Tecnologías
        </h3>
        <hr className="border border-blue-600 w-16 m-0" />
        <ul
          className="flex flex-col pl-3 gap-2 mt-4 mr-6"
          style={{
            listStyleType: "square",
          }}>

          {items.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            );
          })}
        </ul>

        <div className="mt-4">
          <h3 className="mb-2 text-blue-600 text-lg font-semibold">Herramientas</h3>
          <hr className="border border-blue-600 w-16 m-0" />
          <ul
            className="flex flex-col pl-3 gap-2 mt-4 mr-6"
            style={{
              listStyleType: "square",
            }}
          >
            {tools.map((tool, index) => {
              return (
                <li key={index} className="item">
                  {tool}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
