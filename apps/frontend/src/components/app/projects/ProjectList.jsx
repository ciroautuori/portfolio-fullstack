import { useState, useEffect } from "react";
import { api } from "@/services/api/projects";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await api.getProjects();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError("Errore nel caricamento dei progetti");
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) return <div className="text-center">Caricamento...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default ProjectList;
