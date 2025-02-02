import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";

function ContactText() {
  return (
    <div className="container mx-auto my-16">
      <TextAnimate
        className="text-blue-electric font-bold text-3xl text-center mb-3"
        animation="slideLeft"
        by="character"
      >
        Get in Touch
      </TextAnimate>
      <TextAnimate
        className="text-white text-sm"
        animation="slideLeft"
        by="character"
      >
        Want to chat? Just shoot me a dm with a direct question on whatsapp and
        I'll respond whenever I can. I will ignore all soliciting.
      </TextAnimate>
    </div>
  );
}

export default ContactText;
