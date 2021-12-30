import React, { useEffect, useState } from "react";
import ProjectsCompleted from "react-countup";
import Design from "react-countup";
import Clients from "react-countup";
import CoffeeDrinked from "react-countup";

const Counter = () => {
  const [projects, setProjects] = useState(0);
  const [design, setDesign] = useState(0);
  const [clients, setClients] = useState(0);
  const [hotChocolate, setHotChocolate] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const Position = window.scrollY;
    if (Math.round(Position) >= 5700) {
      setProjects(350);
      setDesign(150);
      setClients(470);
      setHotChocolate(750);
    }
  };

  const counterStyle = {
    color: "tomato",
    fontWeight: "900",
    fontSize: "4rem",
  };

  const counterText = {
    color: "#fff",
    textTransform: "uppercase",
  };

  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col-md-3 text-center">
          <ProjectsCompleted
            style={counterStyle}
            start={0}
            end={projects}
            duration={2}
          />
          <h5 style={counterText}>projects completed</h5>
        </div>
        <div className="col-md-3 text-center">
          <Design style={counterStyle} start={0} end={design} duration={3} />
          <h5 style={counterText}>designs completed</h5>
        </div>
        <div className="col-md-3 text-center">
          <Clients style={counterStyle} start={0} end={clients} duration={3} />
          <h5 style={counterText}>happy clients</h5>
        </div>
        <div className="col-md-3 text-center">
          <CoffeeDrinked
            style={counterStyle}
            start={0}
            end={hotChocolate}
            duration={3}
          />
          <h5 style={counterText}>cups of hot chocolate consumed</h5>
        </div>
      </div>
    </div>
  );
};

export default Counter;
