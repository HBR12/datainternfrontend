import { getInternships, Internship } from "@/lib/supabase/actions";
import MasonryWrapper from "./masonry-wrapper";
import InternshipCard from "./internship-card";

export default async function Internships() {
  // Sample internship data
  const data = (await getInternships()) as Internship[];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Available Internships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exciting internship opportunities from top companies and
            kickstart your career in tech.
          </p>
        </div>

        <MasonryWrapper>
          {data.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </MasonryWrapper>
      </div>
    </section>
  );
}
