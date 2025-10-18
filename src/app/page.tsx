import Internships from "@/components/internships";
import { Marquee } from "@/components/ui/marquee";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Find Your Internship Now!!
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find the perfect internship for you and start your career today!
          </p>

          {/* Marquee with Company Logos */}
          <Marquee pauseOnHover className="[--duration:20s]">
            <div className="flex items-center justify-center h-16 px-8 mx-4 bg-background rounded-lg shadow-sm border">
              <span className="text-lg font-semibold text-muted-foreground">
                Microsoft
              </span>
            </div>
            <div className="flex items-center justify-center h-16 px-8 mx-4 bg-background rounded-lg shadow-sm border">
              <span className="text-lg font-semibold text-muted-foreground">
                Google
              </span>
            </div>
            <div className="flex items-center justify-center h-16 px-8 mx-4 bg-background rounded-lg shadow-sm border">
              <span className="text-lg font-semibold text-muted-foreground">
                Amazon
              </span>
            </div>
            <div className="flex items-center justify-center h-16 px-8 mx-4 bg-background rounded-lg shadow-sm border">
              <span className="text-lg font-semibold text-muted-foreground">
                Meta
              </span>
            </div>
            <div className="flex items-center justify-center h-16 px-8 mx-4 bg-background rounded-lg shadow-sm border">
              <span className="text-lg font-semibold text-muted-foreground">
                Netflix
              </span>
            </div>
          </Marquee>
        </div>
      </section>

      <Internships />
    </div>
  );
}
