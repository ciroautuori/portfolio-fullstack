import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/services/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border py-1 px-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      language: {
        bash: "bg-[#4EAA25] text-white border-[#4EAA25] hover:bg-[#4EAA25]/80", // Verde
        react:
          "bg-[#61DAFB] text-black border-[#61DAFB] hover:bg-[#61DAFB]/80", // Azzurro React
        vue: "bg-[#42B883] text-white border-[#42B883] hover:bg-[#42B883]/80", // Verde Vue.js
        angular:
          "bg-[#DD0031] text-white border-[#DD0031] hover:bg-[#DD0031]/80", // Rosso Angular
        svelte:
          "bg-[#FF3E00] text-white border-[#FF3E00] hover:bg-[#FF3E00]/80", // Arancione Svelte
        django:
          "bg-[#092E20] text-white border-[#092E20] hover:bg-[#092E20]/80", // Verde scuro Django
        flask:
          "bg-[#000000] text-white border-[#000000] hover:bg-[#000000]/80", // Nero Flask
        rails:
          "bg-[#CC0000] text-white border-[#CC0000] hover:bg-[#CC0000]/80", // Rosso Rails
        spring:
          "bg-[#6DB33F] text-white border-[#6DB33F] hover:bg-[#6DB33F]/80", // Verde Spring Boot
        aspnet:
          "bg-[#5C2D91] text-white border-[#5C2D91] hover:bg-[#5C2D91]/80", // Viola ASP.NET
        laravel:
          "bg-[#FF2D20] text-white border-[#FF2D20] hover:bg-[#FF2D20]/80", // Rosso Laravel
        bootstrap:
          "bg-[#7952B3] text-white border-[#7952B3] hover:bg-[#7952B3]/80", // Viola Bootstrap
        tailwind:
          "bg-[#38B2AC] text-white border-[#38B2AC] hover:bg-[#38B2AC]/80", // Turchese Tailwind
        foundation:
          "bg-[#002B5C] text-white border-[#002B5C] hover:bg-[#002B5C]/80", // Blu Foundation
        symfony:
          "bg-[#000000] text-white border-[#000000] hover:bg-[#000000]/80", // Nero Symfony
        codeigniter:
          "bg-[#EE4623] text-white border-[#EE4623] hover:bg-[#EE4623]/80", // Rosso CodeIgniter
        express:
          "bg-[#444444] text-white border-[#444444] hover:bg-[#444444]/80", // Grigio Express.js
        fastapi:
          "bg-[#009688] text-white border-[#009688] hover:bg-[#009688]/80", // Verde acqua FastAPI
        nuxt:
          "bg-[#00DC82] text-black border-[#00DC82] hover:bg-[#00DC82]/80", // Verde Nuxt.js
        nest:
          "bg-[#E0234E] text-white border-[#E0234E] hover:bg-[#E0234E]/80", // Rosso NestJS
        wordpress:
          "bg-[#21759B] text-white border-[#21759B] hover:bg-[#21759B]/80", // Blu WordPress
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
