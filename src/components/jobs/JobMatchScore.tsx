import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface SkillGap {
  skill: string;
  importance: number;
  userLevel: number;
  requiredLevel: number;
}

interface JobMatchScoreProps {
  overallMatch: number;
  skillGaps: SkillGap[];
  recommendedCourses: string[];
}

export function JobMatchScore({ overallMatch, skillGaps, recommendedCourses }: JobMatchScoreProps) {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Overall Match</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  Based on skills, experience, and preferences
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Badge variant={overallMatch >= 80 ? "default" : "secondary"}>
            {overallMatch}% Match
          </Badge>
        </div>
        <Progress value={overallMatch} className="h-2" />
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Skill Gaps</h4>
        <div className="grid gap-2">
          {skillGaps.map((gap) => (
            <div key={gap.skill} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm">{gap.skill}</span>
                <span className="text-sm text-muted-foreground">
                  {gap.userLevel}/{gap.requiredLevel}
                </span>
              </div>
              <Progress value={(gap.userLevel / gap.requiredLevel) * 100} className="h-1" />
            </div>
          ))}
        </div>
      </div>

      {recommendedCourses.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Recommended Courses</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {recommendedCourses.map((course) => (
              <li key={course}>• {course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}