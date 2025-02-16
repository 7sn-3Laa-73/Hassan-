import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div className="w-20 h-20" key={technology.name}>
            <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" />
            <p className="text-center mt-2 text-white font-semibold text-sm">{technology.name}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
