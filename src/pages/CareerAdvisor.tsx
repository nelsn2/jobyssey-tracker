import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import {
  GraduationCap,
  Briefcase,
  Target,
  DollarSign,
  Brain,
  Users,
  Clock,
  ChevronRight,
  ChevronLeft,
  Sparkles,
} from "lucide-react";

interface CareerProfile {
  field: string;
  degree: string;
  skills: string[];
  desiredSalary: number;
  workPreference: string;
  stressLevel: number;
  leadershipInterest: number;
}

const CareerAdvisor = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<CareerProfile>({
    field: "",
    degree: "",
    skills: [],
    desiredSalary: 60000,
    workPreference: "",
    stressLevel: 50,
    leadershipInterest: 50,
  });

  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      generateRecommendations();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const generateRecommendations = () => {
    // This would ideally connect to an AI service for personalized recommendations
    const recommendations = [
      {
        role: "Technical Product Manager",
        match: 95,
        description: "Bridge between technical teams and business stakeholders",
        salary: "$120,000 - $180,000",
      },
      {
        role: "Solutions Architect",
        match: 88,
        description: "Design and oversee technical solutions for enterprise clients",
        salary: "$140,000 - $200,000",
      },
      {
        role: "DevOps Team Lead",
        match: 82,
        description: "Lead automation and deployment strategies",
        salary: "$130,000 - $190,000",
      },
    ];

    toast({
      title: "Career Recommendations Generated!",
      description: "Based on your profile, we've found some great matches.",
    });

    // In a real implementation, you would use these recommendations to update the UI
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Your General Field</Label>
              <Select
                value={profile.field}
                onValueChange={(value) =>
                  setProfile({ ...profile, field: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Highest Degree/Certification</Label>
              <Input
                value={profile.degree}
                onChange={(e) =>
                  setProfile({ ...profile, degree: e.target.value })
                }
                placeholder="e.g., BS in Computer Science"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <Label>Key Skills (comma-separated)</Label>
            <Input
              value={profile.skills.join(", ")}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  skills: e.target.value.split(",").map((s) => s.trim()),
                })
              }
              placeholder="e.g., Python, Project Management, Data Analysis"
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <Label>Desired Annual Salary (USD)</Label>
            <div className="flex items-center gap-4">
              <DollarSign className="h-4 w-4" />
              <Input
                type="number"
                value={profile.desiredSalary}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    desiredSalary: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <Label>Preferred Work Environment</Label>
            <Select
              value={profile.workPreference}
              onValueChange={(value) =>
                setProfile({ ...profile, workPreference: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select work preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="remote">Fully Remote</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
                <SelectItem value="office">Office-based</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label>Preferred Stress Level</Label>
              <div className="flex items-center gap-4">
                <Brain className="h-4 w-4" />
                <Slider
                  value={[profile.stressLevel]}
                  onValueChange={(value) =>
                    setProfile({ ...profile, stressLevel: value[0] })
                  }
                  max={100}
                  step={1}
                />
                <span className="w-12 text-sm">{profile.stressLevel}%</span>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label>Interest in Leadership Roles</Label>
              <div className="flex items-center gap-4">
                <Users className="h-4 w-4" />
                <Slider
                  value={[profile.leadershipInterest]}
                  onValueChange={(value) =>
                    setProfile({ ...profile, leadershipInterest: value[0] })
                  }
                  max={100}
                  step={1}
                />
                <span className="w-12 text-sm">
                  {profile.leadershipInterest}%
                </span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          Career Path Advisor
        </CardTitle>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        {renderStep()}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button onClick={handleNext}>
            {step === totalSteps ? (
              "Generate Recommendations"
            ) : (
              <>
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CareerAdvisor;