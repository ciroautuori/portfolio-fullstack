import React from "react";
import { Badge } from "@/components/ui/badge-project";

function SkillBadge({ skill, className, ...props }) {
  return (
    <Badge language={skill.name} className={className} {...props}>
      <span className="inline-flex items-center">
        {skill.icon && (
          <img src={skill.icon} alt={skill.name} className="w-4 h-4 mr-2" />
        )}
        {skill.name}
      </span>
    </Badge>
  );
}

export default SkillBadge;
