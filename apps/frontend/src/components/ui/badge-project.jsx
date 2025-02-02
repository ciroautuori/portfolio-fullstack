import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/services/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border py-1 px-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      language: {
        javascript:
          "bg-[#F0DB4F] text-black border-[#F0DB4F] hover:bg-[#F0DB4F]/80", // Giallo più intenso
        python:
          "bg-[#3776AB] text-white border-[#3776AB] hover:bg-[#3776AB]/80", // Blu più scuro
        ruby: "bg-[#CC342D] text-white border-[#CC342D] hover:bg-[#CC342D]/80", // Rosso rubino
        java: "bg-[#E76F00] text-white border-[#E76F00] hover:bg-[#E76F00]/80", // Arancione più intenso
        csharp:
          "bg-[#239120] text-white border-[#239120] hover:bg-[#239120]/80", // Verde più profondo
        php: "bg-[#777BB4] text-white border-[#777BB4] hover:bg-[#777BB4]/80", // Viola chiaro
        html: "bg-[#E34F26] text-white border-[#E34F26] hover:bg-[#E34F26]/80", // Arancione/rosso
        css: "bg-[#1572B6] text-white border-[#1572B6] hover:bg-[#1572B6]/80", // Blu
        bash: "bg-[#4EAA25] text-white border-[#4EAA25] hover:bg-[#4EAA25]/80", // Verde
        docker:
          "bg-[#0db7ed] text-white border-[#0db7ed] hover:bg-[#0db7ed]/80", // Azzurro Docker
        default: "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200",
      },
    },
    defaultVariants: {
      language: "default",
    },
  }
);

function Badge({ className, language, ...props }) {
  return (
    <div className={cn(badgeVariants({ language }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
