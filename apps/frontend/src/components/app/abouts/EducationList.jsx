import { useState, useEffect } from "react";
import { api } from "@/services/api/abouts";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function EducationList() {
  const [educations, setEducations] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEducations = async () => {
      try {
        const data = await api.getEducations();
        setEducations(data);
        setLoading(false);
      } catch (err) {
        setError("Errore nel caricamento delle educations");
        setLoading(false);
      }
    };

    loadEducations();
  }, []);

  if (loading) return <div className="text-center">Caricamento...</div>;

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto">
      <h2 className="text-xl mb-4 font-bold text-blue-electric">Educations</h2>
      <div className="grid grid-cols-1 gap-5">
        {educations.map((education) => (
          <div key={education.id}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-none">
                {" "}
                <div className="rounded-lg text-card-foreground">
                  {" "}
                  <div className="flex p-4 text-white items-center justify-center">
                    {/* Logo Section */}
                    <div className="flex-none">
                      <Avatar className="h-14 w-14  shadow-lg">
                        <AvatarImage
                          src={education.icon || education.image}
                          alt={education.school}
                        />
                        <AvatarFallback className="bg-blue-dark">
                          {education.school.substring(0, 2)}
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
                            {education.degree}
                          </AccordionTrigger>

                          <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                            {format(
                              new Date(education.start_date),
                              "dd/MM/yyyy"
                            )}{" "}
                            -{" "}
                            {education.end_date
                              ? format(
                                  new Date(education.end_date),
                                  "dd/MM/yyyy"
                                )
                              : "Presente"}
                          </div>
                        </div>

                        {/* Job Title */}
                        <div className="font-sans text-xs mt-1">
                          {education.school}
                        </div>
                      </div>

                      {/* Accordion Content */}
                      <AccordionContent className="mt-4 text-sm text-muted-foreground">
                        <div className="space-y-2">
                          <p>{education.description}</p>
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
}

export default EducationList;
