import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lightbulb } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { AVAILABLE_SKILLS, CareerPreferences } from "@/utils/careerRecommendations";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CareerAdvisorFormProps {
  preferences: CareerPreferences;
  onPreferencesChange: (preferences: Partial<CareerPreferences>) => void;
  onSubmit: () => void;
}

export function CareerAdvisorForm({
  preferences,
  onPreferencesChange,
  onSubmit
}: CareerAdvisorFormProps) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="field">Your General Field</Label>
          <Select 
            onValueChange={(value) => onPreferencesChange({ field: value })} 
            value={preferences.field}
          >
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
            value={preferences.degree}
            onChange={(e) => onPreferencesChange({ degree: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-4">
        <Label>Preferred Skills</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {AVAILABLE_SKILLS.map((skill) => (
            <div key={skill} className="flex items-center space-x-2">
              <Checkbox
                id={skill}
                checked={preferences.preferredSkills.includes(skill)}
                onCheckedChange={(checked) => {
                  const newSkills = checked
                    ? [...preferences.preferredSkills, skill]
                    : preferences.preferredSkills.filter((s) => s !== skill);
                  onPreferencesChange({ preferredSkills: newSkills });
                }}
              />
              <label
                htmlFor={skill}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {skill}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label>Work Location Preference</Label>
        <RadioGroup
          value={preferences.workLocation}
          onValueChange={(value) => onPreferencesChange({ workLocation: value })}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="remote" id="remote" />
            <Label htmlFor="remote">Remote</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hybrid" id="hybrid" />
            <Label htmlFor="hybrid">Hybrid</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="in-office" id="in-office" />
            <Label htmlFor="in-office">In Office</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <Label>Maximum Stress Level</Label>
        <RadioGroup
          value={preferences.maxStressLevel}
          onValueChange={(value) => onPreferencesChange({ maxStressLevel: value })}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="low" id="stress-low" />
            <Label htmlFor="stress-low">Low - Predictable workload</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="stress-medium" />
            <Label htmlFor="stress-medium">Medium - Occasional pressure</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="high" id="stress-high" />
            <Label htmlFor="stress-high">High - Fast-paced environment</Label>
          </div>
        </RadioGroup>
      </div>

      <Button onClick={onSubmit} className="w-full">
        <Lightbulb className="mr-2 h-4 w-4" />
        Generate Career Suggestions
      </Button>
    </div>
  );
}