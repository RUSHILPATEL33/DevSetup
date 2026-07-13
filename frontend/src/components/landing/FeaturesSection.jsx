import {
    ScanSearch,
    ShieldCheck,
    BookOpen,
    FileSearch,
  } from "lucide-react";
  
  import FeatureCard from "./FeatureCard";
  
  const FEATURES = [
    {
      icon: ScanSearch,
      title: "Configuration Scanner",
      description:
        "Scan backend configuration files and detect missing variables or invalid settings.",
    },
    {
      icon: ShieldCheck,
      title: "Diagnosis Engine",
      description:
        "Understand issues with human-readable explanations and recommended fixes.",
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description:
        "Access curated solutions for common backend development problems.",
    },
    {
      icon: FileSearch,
      title: "Detailed Reports",
      description:
        "Generate organized diagnosis reports to review and share with your team.",
    },
  ];
  
  function FeaturesSection() {
    return (
      <section
        id="features"
        className="bg-slate-950 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="mx-auto mb-16 max-w-3xl text-center">
  
            <p className="font-semibold text-blue-500">
              FEATURES
            </p>
  
            <h2 className="mt-4 text-4xl font-bold text-white">
              Everything You Need to Debug Faster
            </h2>
  
            <p className="mt-6 text-lg text-slate-400">
              DevSetup Doctor helps developers identify,
              understand and solve backend configuration
              issues in one place.
            </p>
  
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                {...feature}
              />
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  
  export default FeaturesSection;