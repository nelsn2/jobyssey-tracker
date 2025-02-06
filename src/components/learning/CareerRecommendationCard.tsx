import { Briefcase, DollarSign, Star, Target } from "lucide-react";
import { CareerRecommendation } from "@/utils/careerRecommendations";

interface CareerRecommendationCardProps {
  recommendation: CareerRecommendation;
}

export function CareerRecommendationCard({ recommendation }: CareerRecommendationCardProps) {
  return (
    <div className="p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h5 className="font-medium flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            {recommendation.title}
          </h5>
          <p className="text-sm text-muted-foreground mt-1">
            {recommendation.description}
          </p>
        </div>
        <div className="flex items-center gap-1 text-sm font-medium text-green-600">
          <Star className="h-4 w-4" />
          {recommendation.matchScore}% Match
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3">
        <DollarSign className="h-4 w-4" />
        {recommendation.salaryRange}
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {recommendation.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}