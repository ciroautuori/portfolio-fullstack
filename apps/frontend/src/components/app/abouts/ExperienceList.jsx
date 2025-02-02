import { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { api } from "../../../services/api/abouts";

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        const data = await api.getExperiences();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
        setError("Errore nel caricamento delle esperienze");
      } finally {
        setLoading(false);
      }
    };

    loadExperiences();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg">Caricamento...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-xl mb-4 font-bold text-blue-electric">Experiences</h2>
      <div className="grid grid-cols-1 gap-5">
        {experiences.map((experience) => (
          <div key={experience.id}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-none">
                {" "}
                <div className="rounded-lg text-card-foreground">
                  {" "}
                  <div className="flex p-4 text-white items-center justify-center">
                    {/* Logo Section */}
                    <div className="flex-none">
                      <Avatar className="h-14 w-14 shadow-lg">
                        <AvatarImage
                          src={experience.icon || experience.img}
                          alt={experience.company}
                        />
                        <AvatarFallback className="bg-blue-dark">
                          {experience.company.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow ml-4 flex-col group">
                      <div className="flex flex-col w-full">
                        {/* Header with Title and Date */}
                        <div className="flex items-center justify-between gap-x-2 text-base w-full">
                          <AccordionTrigger className="inline-flex items-center justify-center font-semibold text-xs sm:text-sm hover:no-underline p-0">
                            {" "}
                            {experience.company}
                          </AccordionTrigger>

                          <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                            {format(
                              new Date(experience.start_date),
                              "dd/MM/yyyy"
                            )}{" "}
                            -{" "}
                            {experience.end_date
                              ? format(
                                  new Date(experience.end_date),
                                  "dd/MM/yyyy"
                                )
                              : "Presente"}
                          </div>
                        </div>

                        {/* Job Title */}
                        <div className="font-sans text-xs mt-1">
                          {experience.title}
                        </div>
                      </div>

                      {/* Accordion Content */}
                      <AccordionContent className="mt-4 text-sm text-muted-foreground">
                        <div className="space-y-2">
                          <p>{experience.description}</p>
                        </div>
                      </AccordionContent>
                    </div>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
