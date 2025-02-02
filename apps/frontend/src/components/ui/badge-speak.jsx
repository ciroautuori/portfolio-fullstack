import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/services/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border py-1 px-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      language: {
        italian:
          "bg-[#F0DB4F] text-black border-[#F0DB4F] hover:bg-[#F0DB4F]/80", // Giallo più intenso
        english:
          "bg-[#3776AB] text-white border-[#3776AB] hover:bg-[#3776AB]/80", // Blu più scuro
        spanish:
          "bg-[#CC342D] text-white border-[#CC342D] hover:bg-[#CC342D]/80", // Rosso rubino
        french:
          "bg-[#0055A4] text-white border-[#0055A4] hover:bg-[#0055A4]/80", // Blu scuro
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
