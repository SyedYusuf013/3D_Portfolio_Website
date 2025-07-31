import React from "react";
import SkillsLevel from "./SkillsLevel";

const Skills = () => {
  return (
    <div className="block h-full px-4 bg-white md:px-10 page-shadow">
      <div className="text-sharp">
        {/* heading */}
        <div>
          <div className="relative">
            <div className="text-4xl font-bold text-center md:text-6xl xl:text-8xl text-black/5">
              SKILLS
            </div>
            <h1 className="absolute text-2xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-4xl sm:text-xl">
              Skills
            </h1>
          </div>
        </div>

        {/* skills section */}
        <div className="mt-4 space-y-2 text-base overflow-y-auto md:overflow-y-hidden max-h-[80vh] md:mt-6 md:space-y-4 md:text-2xl">
          <SkillsLevel skillName="Python" percentage={"80%"} />
          <SkillsLevel skillName="HTML" percentage={"90%"} />
          <SkillsLevel skillName="CSS" percentage={"85%"} />
          <SkillsLevel skillName="Tailwind CSS" percentage={"95%"} />
          <SkillsLevel skillName="JavaScript" percentage={"75%"} />
          <SkillsLevel skillName="React.js" percentage={"80%"} />
          <SkillsLevel skillName="MongoDB" percentage={"80%"} />
          <SkillsLevel skillName="Node.js" percentage={"75%"} />
          <SkillsLevel skillName="Express.js" percentage={"75%"} />
          <SkillsLevel skillName="Rest API" percentage={"80%"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
