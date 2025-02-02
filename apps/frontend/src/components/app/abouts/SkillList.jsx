import React from "react";
import SkillBadge from "./SkillBadge";
import { api } from "@/services/api/abouts";
import { useState, useEffect } from "react";

function SkillList() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadSkills = async () => {
    try {
      const data = await api.getSkills();
      setSkills(data);
      setLoading(false);
    } catch (err) {
      setError("Errore nel caricamento delle skills");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  if (loading) return <div className="text-center">Caricamento...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-xl mb-4 font-bold text-blue-electric">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillList;
