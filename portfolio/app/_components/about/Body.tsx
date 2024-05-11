import Image from "next/image";
import Navi from "../common/Navi";

const Body = () => {
  return (
    <div className="about">
      <div className="about_col about_right-col backdrop-blur-none lg:backdrop-blur-sm">
        <div className="about_profile lg:space-y-20 backdrop-blur-xs lg:backdrop-blur-none">
          <div className="title text-large">Hello, I am Masaomi Goto.</div>
          <div className="introduction text-normal">
            A web developer who loves coding, designing, problem solving,
            workout, and Japanese manga. Without limiting myself to either the
            front-end or back-end, I learn software development with my
            unlimited interest.
          </div>
        </div>
      </div>
      <div className="about_col about_left-col backdrop-blur-none lg:backdrop-blur-sm">
        <div className="about_career mt-24 lg:mt-0 lg:space-y-4 text-normal backdrop-blur-xs lg:backdrop-blur-none">
          <p className="block">
            2020 - 2023 Bachelor of computer and information sciences at
            Auckland University of Technology
          </p>
          <p className="block">
            2015 - 2017 Java Programmer at Sankei Cries (Japan)
          </p>
        </div>

        <div className="about_skills backdrop-blur-xs lg:backdrop-blur-none">
          <div className="skills-title text-normal">Skills</div>
          <div className="skills-icons">
            <Image src="icon-next.svg" width={60} height={60} alt={"next"} />
            <Image src="icon-react.svg" width={60} height={60} alt={"react"} />
            <Image src="icon-js.svg" width={60} height={60} alt={"js"} />
            <Image src="icon-node.svg" width={60} height={60} alt={"node"} />
            <Image src="icon-java.svg" width={60} height={60} alt={"java"} />
            <Image src="icon-html.svg" width={60} height={60} alt={"html"} />
            <Image src="icon-css.svg" width={60} height={60} alt={"java"} />
            <Image src="icon-mysql.svg" width={60} height={60} alt={"mysql"} />
            <Image src="icon-linux.svg" width={60} height={60} alt={"linux"} />
            <Image src="icon-git.svg" width={60} height={60} alt={"git"} />
            <Image
              src="icon-docker.svg"
              width={60}
              height={60}
              alt={"docker"}
            />
            <Image src="icon-figma.svg" width={60} height={60} alt={"figma"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
