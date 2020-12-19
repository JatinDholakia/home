import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import SkillsRow from "./SkillsRow";

function Skills({ heading, programming, database,frameworks,miscellaneous}) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
//   const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <SkillsRow 
            type="Programming"
            skills={programming}
        />
        <SkillsRow
            type="Database"
            skills={database}
        />
        <SkillsRow
            type="Frameworks"
            skills={frameworks}
        />
        <SkillsRow
            type="Miscellaneous"
            skills={miscellaneous}
        />
      </Container>
    </Jumbotron>
  );
}

export default Skills;
