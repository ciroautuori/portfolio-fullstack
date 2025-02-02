import React from "react";
import SpeakBadge from "./SpeakBadge";
import { api } from "@/services/api/abouts";
import { useState, useEffect } from "react";

function SpeakList() {
  const [speaks, setSpeaks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadSpeaks = async () => {
    try {
      const data = await api.getSpeaks();
      setSpeaks(data);
      setLoading(false);
    } catch (err) {
      setError("Errore nel caricamento delle speaks");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSpeaks();
  }, []);

  if (loading) return <div className="text-center">Caricamento...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-xl mb-4 font-bold text-blue-electric">Languages</h2>
      <div className="flex flex-wrap gap-2">
        {speaks.map((speak) => (
          <SpeakBadge key={speak.id} speck={speak} />
        ))}
      </div>
    </div>
  );
}

export default SpeakList;
