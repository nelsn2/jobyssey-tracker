import { useState } from "react";
import { GraduationCap, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { CareerRecommendationCard } from "./CareerRecommendationCard";
import { CareerAdvisorForm } from "./CareerAdvisorForm";
import { CareerRecommendation, careerPaths } from "@/utils/careerRecommendations";

export function CareerPathAdvisor() {
  const { toast } = useToast();
  const [field, setField] = useState("");
  const [degree, setDegree] = useState("");
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);

  const generateRecommendations = () => {
    if (!field || !degree) {
      toast({
        title: "Missing Information",
        description: "Please fill in both your field and degree before generating recommendations.",
        variant: "destructive",
      });
      return;
    }

    const recommendations = careerPaths[field] || [];
    setRecommendations(recommendations);

    toast({
      title: "Recommendations Generated!",
      description: "Based on your profile, we've found some great career matches.",
    });
  };

  return (
    <div className="w-full max-w-none p-4">
      <Card className="w-full animate-fade-up">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Career Path Advisor
          </CardTitle>
          <CardDescription>
            Discover specialized career paths based on your background
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CareerAdvisorForm
            field={field}
            degree={degree}
            onFieldChange={setField}
            onDegreeChange={setDegree}
            onSubmit={generateRecommendations}
          />

          {recommendations.length > 0 && (
            <div className="mt-8 space-y-6">
              <h4 className="text-lg font-medium flex items-center gap-2">
                <Target className="h-5 w-5" />
                Recommended Career Paths
              </h4>
              <div className="grid gap-4">
                {recommendations.map((recommendation, index) => (
                  <CareerRecommendationCard
                    key={index}
                    recommendation={recommendation}
                  />
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}