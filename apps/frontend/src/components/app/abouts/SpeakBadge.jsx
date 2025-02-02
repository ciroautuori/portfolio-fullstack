import React from "react";
import { Badge } from "@/components/ui/badge-speak";

function SpeakBadge({ speck, className, ...props }) {
  if (!speck) return null; // Aggiunto controllo di sicurezza

  return (
    <Badge variant={speck.name} className={className} {...props}>
      <span className="inline-flex items-center">
        {speck.icon && (
          <img src={speck.icon} alt={speck.name} className="w-4 h-4 mr-2" />
        )}
        {speck.name}
      </span>
    </Badge>
  );
}

export default SpeakBadge;
