import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Briefcase, GraduationCap, Lightbulb, Target, DollarSign, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface CareerRecommendation {
  title: string;
  description: string;
  salaryRange: string;
  skills: string[];
  matchScore: number;
}

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

    // This would ideally connect to an AI service or database
    const careerPaths: Record<string, CareerRecommendation[]> = {
      tech: [
        {
          title: "Cloud Solutions Architect",
          description: "Design and implement scalable cloud infrastructure solutions",
          salaryRange: "$120,000 - $180,000",
          skills: ["AWS", "Azure", "System Design", "DevOps"],
          matchScore: 95
        },
        {
          title: "Machine Learning Engineer",
          description: "Develop and deploy AI/ML models for production environments",
          salaryRange: "$130,000 - $190,000",
          skills: ["Python", "TensorFlow", "Deep Learning", "MLOps"],
          matchScore: 88
        }
      ],
      business: [
        {
          title: "Product Operations Manager",
          description: "Optimize product development and delivery processes",
          salaryRange: "$90,000 - $140,000",
          skills: ["Project Management", "Agile", "Analytics", "Leadership"],
          matchScore: 92
        },
        {
          title: "Business Intelligence Analyst",
          description: "Transform data into actionable business insights",
          salaryRange: "$85,000 - $130,000",
          skills: ["SQL", "Data Visualization", "Statistical Analysis"],
          matchScore: 85
        }
      ],
      marketing: [
        {
          title: "Digital Marketing Strategist",
          description: "Create and execute comprehensive digital marketing campaigns",
          salaryRange: "$75,000 - $120,000",
          skills: ["SEO", "Content Strategy", "Analytics", "Social Media"],
          matchScore: 90
        },
        {
          title: "Marketing Analytics Manager",
          description: "Drive data-driven marketing decisions and optimization",
          salaryRange: "$95,000 - $150,000",
          skills: ["Data Analysis", "Marketing Automation", "CRM"],
          matchScore: 87
        }
      ],
      manufacturing: [
        {
          title: "Process Improvement Engineer",
          description: "Optimize manufacturing processes and workflows",
          salaryRange: "$85,000 - $130,000",
          skills: ["Lean Six Sigma", "Quality Control", "Industrial Engineering"],
          matchScore: 93
        },
        {
          title: "Manufacturing Technology Lead",
          description: "Lead implementation of new manufacturing technologies",
          salaryRange: "$100,000 - $160,000",
          skills: ["Automation", "Industry 4.0", "Project Management"],
          matchScore: 89
        }
      ]
    };

    const recommendations = careerPaths[field] || [];
    setRecommendations(recommendations);

    toast({
      title: "Recommendations Generated!",
      description: "Based on your profile, we've found some great career matches.",
    });
  };

  return (
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
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="field">Your General Field</Label>
            <Select onValueChange={setField} value={field}>
              <SelectTrigger>
                <SelectValue placeholder="Select your field" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="degree">Highest Degree/Certification</Label>
            <Input
              id="degree"
              placeholder="e.g., BS in Computer Science"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={generateRecommendations} className="w-full">
          <Lightbulb className="mr-2 h-4 w-4" />
          Generate Career Suggestions
        </Button>

        {recommendations.length > 0 && (
          <div className="mt-8 space-y-6">
            <h4 className="text-lg font-medium flex items-center gap-2">
              <Target className="h-5 w-5" />
              Recommended Career Paths
            </h4>
            <div className="grid gap-4">
              {recommendations.map((recommendation, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                >
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
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}