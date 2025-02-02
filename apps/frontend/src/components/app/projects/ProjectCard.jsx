// Import necessari:
// - motion: libreria Framer Motion per animazioni
// - useState: Hook React per gestire lo stato
// - Componenti personalizzati e icone
import { motion } from "framer-motion";
import { useState } from "react";
import TechnologyBadge from "../tecnology/TechnologyBadge";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project }) {
  // Stato per gestire l'hover sulla card
  const [isHovered, setIsHovered] = useState(false);

  return (
    // Container principale con Framer Motion
    // 'group' permette di controllare gli stili dei figli quando si verifica un evento sul genitore
    // 'motion.div' è un elemento animabile di Framer Motion
    <motion.div
      className="group relative bg-blue-dark rounded-xl overflow-hidden"
      // Animazioni Framer Motion:
      initial={{ opacity: 0, y: 20 }} // Stato iniziale: invisibile e 20px sotto
      animate={{ opacity: 1, y: 0 }} // Animazione all'entrata: diventa visibile e sale
      whileHover={{ y: -5 }} // Durante l'hover: si solleva di 5px
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Overlay gradient che appare in hover 
          - inset-0: copre tutto il contenitore
          - opacity-0: inizialmente invisibile
          - group-hover:opacity-70: diventa visibile (70%) quando il gruppo è in hover
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-dark opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10" />

      {/* Layout responsivo: colonna su mobile, riga su desktop (md:flex-row) */}
      <div className="flex flex-col md:flex-row w-full h-full mr-5">
        {/* Contenuto della card */}
        <div className="p-6 relative z-20 bg-transparent rounded-xl">
          {/* Container immagine */}
          <motion.div className="relative h-48 md:h-64 w-full mb-4  ">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-xl"
              // scale-105 durante hover: zoom leggero dell'immagine
            />
            {/* Overlay gradiente sull'immagine per migliorare leggibilità */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-dark/40" />
          </motion.div>
          {/* Titolo animato */}
          <motion.h3
            className="text-xl font-bold mb-3 text-blue-light"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
          >
            {project.title}
          </motion.h3>

          {/* Descrizione con animazione fade-in 
              line-clamp-3: limita il testo a 3 righe
          */}
          <motion.p
            className="text-grey-light mb-4 opacity-90 line-clamp-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {project.description}
          </motion.p>

          {/* Sezione tecnologie 
              flex flex-wrap: permette alle badge di andare a capo
          */}
          <motion.div
            className="mb-4 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }} // Ritardo di 0.2s nell'animazione
          >
            {project.technologies.map((tech) => (
              <TechnologyBadge
                key={tech.id}
                name={tech.name}
                icon={tech.icon}
              />
            ))}
          </motion.div>

          {/* Links section 
              border-t: linea superiore per separare i link
          */}
          <div className="flex items-center space-x-4 pt-3 border-t border-grey-light/20">
            {/* Link condizionale al demo */}
            {project.url && (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-electric hover:text-blue-light transition-colors duration-300"
                whileHover={{ x: 3 }} // Si sposta di 3px a destra durante hover
              >
                <ExternalLink size={16} />
                <span>Demo Live</span>
              </motion.a>
            )}
            {/* Link condizionale a GitHub */}
            {project.github_url && (
              <motion.a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-grey-light hover:text-blue-electric transition-colors duration-300"
                whileHover={{ x: 3 }}
              >
                <Github size={16} />
                <span>GitHub</span>
              </motion.a>
            )}
          </div>

          {/* Barra di evidenziazione animata sul fondo 
              - Si estende da 0% a 100% della larghezza durante l'hover
          */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-blue-electric"
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
