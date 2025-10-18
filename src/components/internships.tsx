import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getInternships, Internship } from "@/lib/supabase/actions";
import MasonryWrapper from "./masonry-wrapper";

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
            <Card key={internship.id} className="mb-4 w-full">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src={internship.logo}
                      alt={`${internship.company} logo`}
                    />
                    <AvatarFallback className="text-sm font-semibold">
                      {internship.company.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg leading-tight">
                      {internship.title}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-muted-foreground mt-1">
                      {internship.company}
                    </CardDescription>
                    <div className="flex items-center gap-1 mt-2">
                      <svg
                        className="size-4 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm text-muted-foreground">
                        {internship.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {internship.description}
                </p>

                <Button asChild className="w-full">
                  <a
                    href={internship.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    Apply Now
                    <svg
                      className="ml-2 size-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </MasonryWrapper>
      </div>
    </section>
  );
}
