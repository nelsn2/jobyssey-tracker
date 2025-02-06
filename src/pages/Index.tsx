import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-primary to-accent/90 text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Track Your Job Search Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Organize applications, track interviews, and land your dream job with our
            intelligent job tracking system.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white"
            onClick={() => navigate("/dashboard")}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;