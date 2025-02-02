import React from "react";
import TechnologyBadge from "./TechnologyBadge";

function TecnologyList() {
  return (
    // <!-- Badge List -->
    <div className="container mx-auto mt-6">
      <h2 className="text-xl mb-2 font-bold text-blue-electric">Skills</h2>
      <div className="flex flex-wrap gap-2 py-6">
        <TechnologyBadge name="javascript" />
        <TechnologyBadge name="python" />
        <TechnologyBadge name="php" />
        <TechnologyBadge name="html" />
        <TechnologyBadge name="css" />
        <TechnologyBadge name="bash" />
      </div>
    </div>
  );
}

export default TecnologyList;
