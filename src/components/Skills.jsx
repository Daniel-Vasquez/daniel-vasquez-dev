import { SkillFulness } from "./SkillFulness";

const ITEMSDEV = [
  "Astro",
  "React",
  "Node.js",
  "Express",
  "Python",
  "AWS (S3, Cloudwatch)",
  "Selenium",
  "Git",
  "JavaScript",
]

const TOOLSDEV = [
  "VSCode",
  "GitHub",
]

const ITEMSLAYOUT = [
  "Tailwind CSS",
  "CSS3",
  "CSS Grid",
  "Flexbox",
]

const TOOLSLAYOUT = [
  "Figma (Conceptos básicos)",
]

const Skills = () => {
  return (
    <div className=" p-3 my-3">
      <h2 className="text-black text-3xl text-center font-semibold mb-5 sm:text-start">Habilidades</h2>
      <div className="flex justify-evenly flex-wrap gap-7" id="skills">
        <div className="max-w-72 w-full rounded-3xl border-2 border-black bg-gray-800 text-white dark:bg-white dark:text-black">
          <SkillFulness
            title="Desarrollo"
            items={ITEMSDEV}
            tools={TOOLSDEV}
          />
        </div>
        <div className="max-w-72 w-full rounded-3xl border-2 border-black bg-gray-800 text-white dark:bg-white dark:text-black">
          <SkillFulness
            title="Maquetación web"
            items={ITEMSLAYOUT}
            tools={TOOLSLAYOUT}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
