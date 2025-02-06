import { useState } from "react";
import { GraduationCap, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { CareerRecommendationCard } from "./CareerRecommendationCard";
import { CareerAdvisorForm } from "./CareerAdvisorForm";
import { CareerPreferences, CareerRecommendation, careerPaths } from "@/utils/careerRecommendations";

export function CareerPathAdvisor() {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState<CareerPreferences>({
    field: "",
    degree: "",
    preferredSkills: [],
    workLocation: "hybrid",
    maxStressLevel: "medium"
  });
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);

  const generateRecommendations = () => {
    if (!preferences.field || !preferences.degree) {
      toast({
        title: "Missing Information",
        description: "Please fill in both your field and degree before generating recommendations.",
        variant: "destructive",
      });
      return;
    }

    const recommendations = careerPaths[preferences.field] || [];
    
    // Filter and sort recommendations based on preferences
    const filteredRecommendations = recommendations
      .filter(rec => {
        // Filter by work location if specified
        if (preferences.workLocation && rec.workLocation.toLowerCase() !== preferences.workLocation) {
          return false;
        }
        
        // Filter by stress level
        const stressLevels = { low: 1, medium: 2, high: 3 };
        const maxStress = stressLevels[preferences.maxStressLevel as keyof typeof stressLevels];
        const recStress = stressLevels[rec.stressLevel.toLowerCase() as keyof typeof stressLevels];
        if (recStress > maxStress) {
          return false;
        }

        // Check if the career has at least one preferred skill
        return preferences.preferredSkills.length === 0 || 
          rec.skills.some(skill => preferences.preferredSkills.includes(skill));
      })
      .map(rec => ({
        ...rec,
        matchScore: calculateMatchScore(rec, preferences)
      }))
      .sort((a, b) => b.matchScore - a.matchScore);

    setRecommendations(filteredRecommendations);

    toast({
      title: "Recommendations Generated!",
      description: "Based on your profile, we've found some great career matches.",
    });
  };

  const calculateMatchScore = (recommendation: CareerRecommendation, preferences: CareerPreferences): number => {
    let score = 0;
    
    // Base score from the original matchScore
    score += recommendation.matchScore * 0.4;

    // Skills match (up to 30 points)
    const skillsMatch = preferences.preferredSkills.filter(skill => 
      recommendation.skills.includes(skill)
    ).length;
    score += (skillsMatch / Math.max(preferences.preferredSkills.length, 1)) * 30;

    // Work location match (up to 20 points)
    if (recommendation.workLocation.toLowerCase() === preferences.workLocation) {
      score += 20;
    }

    // Stress level match (up to 10 points)
    const stressLevels = { low: 1, medium: 2, high: 3 };
    const prefStress = stressLevels[preferences.maxStressLevel as keyof typeof stressLevels];
    const recStress = stressLevels[recommendation.stressLevel.toLowerCase() as keyof typeof stressLevels];
    if (recStress <= prefStress) {
      score += 10;
    }

    return Math.round(score);
  };

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <Card className="w-full animate-fade-up">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Career Path Advisor
          </CardTitle>
          <CardDescription>
            Discover specialized career paths based on your background and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CareerAdvisorForm
            preferences={preferences}
            onPreferencesChange={(newPrefs) => setPreferences({ ...preferences, ...newPrefs })}
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