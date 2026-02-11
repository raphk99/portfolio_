import { experiences } from "@/data/experiences";
import ExperienceDetails from "@/components/ExperienceDetails";
import { notFound } from "next/navigation";

// Generate static params for all experience IDs
export function generateStaticParams() {
  return experiences.map((exp) => ({
    id: exp.id,
  }));
}

export default function ExperiencePage({ params }: { params: { id: string } }) {
  const experience = experiences.find((exp) => exp.id === params.id);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetails experience={experience} />;
}
