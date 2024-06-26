import { Skill_data1,Skill_data2,Skill_data3} from "@/constants";
import React from "react";
import SkillMotion from "../sub/SkillMotion";
  
const Skills = () => {
  return (
    <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 pt-2 pb-0"
        style={{ transform: "scale(0.9" }}
    >

<h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:py-20 py-10">
        My Skills
    </h1>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Skill_data1.map((image, index) => (
            <SkillMotion
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Skill_data2.map((image, index) => (
            <SkillMotion
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center" style={{background: '#fff', padding: '10px', boaderRadius: '15px'}}>
          {Skill_data3.map((image, index) => (
            <SkillMotion
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
  
        <div className="w-full h-full absolute pt-16">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;