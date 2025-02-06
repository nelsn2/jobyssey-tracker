import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Briefcase, GraduationCap, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CareerPathAdvisor() {
  const [field, setField] = useState("");
  const [degree, setDegree] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const generateSuggestions = () => {
    // This would ideally connect to an AI service or database
    // For now, using static suggestions based on field
    const careerPaths = {
      tech: [
        "Cloud Solutions Architect",
        "DevOps Engineer",
        "Machine Learning Engineer",
        "Blockchain Developer",
        "IoT Specialist"
      ],
      business: [
        "Business Intelligence Analyst",
        "Management Consultant",
        "Product Operations Manager",
        "Strategic Planning Director",
        "Digital Transformation Lead"
      ],
      marketing: [
        "Growth Marketing Manager",
        "Content Strategy Director",
        "Marketing Analytics Specialist",
        "Brand Experience Designer",
        "Digital Marketing Strategist"
      ],
      manufacturing: [
        "Process Improvement Engineer",
        "Quality Systems Manager",
        "Supply Chain Optimizer",
        "Automation Specialist",
        "Manufacturing Technology Lead"
      ]
    }[field as keyof typeof careerPaths] || [];

    setSuggestions(careerPaths);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Career Path Advisor
        </CardTitle>
        <CardDescription>
          Discover specialized career paths based on your background
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
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

        <Button onClick={generateSuggestions} className="w-full">
          <Lightbulb className="mr-2 h-4 w-4" />
          Generate Career Suggestions
        </Button>

        {suggestions.length > 0 && (
          <div className="mt-6 space-y-4">
            <h4 className="font-medium">Recommended Career Paths:</h4>
            <div className="grid gap-3">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-colors"
                >
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span>{suggestion}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}