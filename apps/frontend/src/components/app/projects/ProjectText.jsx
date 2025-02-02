import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";

function ProjectText() {
  return (
    <div className="my-12">
      <TextAnimate
        className="text-white font-bold text-3xl text-center mb-3"
        animation="slideLeft"
        by="character"
      >
        Check out my latest work
      </TextAnimate>
      <TextAnimate
        className="text-white text-sm"
        animation="slideLeft"
        by="character"
      >
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </TextAnimate>
    </div>
  );
}

export default ProjectText;
