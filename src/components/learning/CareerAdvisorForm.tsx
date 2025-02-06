import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lightbulb } from "lucide-react";

interface CareerAdvisorFormProps {
  field: string;
  degree: string;
  onFieldChange: (value: string) => void;
  onDegreeChange: (value: string) => void;
  onSubmit: () => void;
}

export function CareerAdvisorForm({
  field,
  degree,
  onFieldChange,
  onDegreeChange,
  onSubmit
}: CareerAdvisorFormProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="field">Your General Field</Label>
          <Select onValueChange={onFieldChange} value={field}>
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
            onChange={(e) => onDegreeChange(e.target.value)}
          />
        </div>
      </div>

      <Button onClick={onSubmit} className="w-full">
        <Lightbulb className="mr-2 h-4 w-4" />
        Generate Career Suggestions
      </Button>
    </div>
  );
}