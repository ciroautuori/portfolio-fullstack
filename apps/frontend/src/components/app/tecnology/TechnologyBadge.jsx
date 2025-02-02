import React from "react";
import { Badge } from "@/components/ui/badge-tech";

function TechnologyBadge({ name, icon, className, ...props }) {
  return (
    <Badge language={name} className={className} {...props}>
      <span className="inline-flex items-center">
        {icon && <img src={icon} alt={name} className="w-4 h-4 mr-2" />}
        {name}
      </span>
    </Badge>
  );
}

export default TechnologyBadge;
