import React, { useState, useEffect } from "react";
import { api } from "@/services/api/abouts";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

function DockMain() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAboutData = async () => {
      try {
        const data = await api.getAbouts();
        // Prendiamo il primo record, assumendo che sia quello che vogliamo mostrare
        setAboutData(Array.isArray(data) && data.length > 0 ? data[0] : null);
      } catch (err) {
        console.error("Error loading about data:", err);
        setError("Error loading data");
      } finally {
        setLoading(false);
      }
    };
    loadAboutData();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!aboutData) return <div className="text-center">No data available</div>;

  // Definiamo i link sociali con le relative icone
  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      url: aboutData.github,
      icon: Github,
    },
    {
      id: 2,
      name: "LinkedIn",
      url: aboutData.linkedin,
      icon: Linkedin,
    },
    {
      id: 3,
      name: "Email",
      url: `mailto:${aboutData.email}`,
      icon: Mail,
    },
    {
      id: 4,
      name: "WhatsApp",
      url: `https://wa.me/${aboutData.phone}`,
      icon: Phone,
    },
  ];

  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center space-x-4 pointer-events-auto">
      <Dock>
        {socialLinks.map(({ id, name, url, icon: IconComponent }) => (
          <DockIcon
            key={id}
            aria-label={name}
            className="hover:scale-125 transition-transform"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-all duration-300"
            >
              <IconComponent className="size-6 text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors duration-200" />
            </a>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}

export default DockMain;
