import TitleHeader from "../components/TitleHeader";
import { TechStackIconList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const TechStack = () => (
  <div className="mt-20" id="skills">
    <TitleHeader 
      title="My Preferred Tech Stack"
      sub="🤝 The Skills I Bring to the Table"
    />
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {TechStackIconList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}

          {TechStackIconList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TechStack;