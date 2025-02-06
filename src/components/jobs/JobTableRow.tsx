import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { JobMatchScore } from "./JobMatchScore";
import { SavedJob } from "@/types/jobs";
import { Star, Trash2, BarChart2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

interface JobTableRowProps {
  job: SavedJob;
  onRemove: (id: number) => void;
}

export function JobTableRow({ job, onRemove }: JobTableRowProps) {
  // This would typically come from an API, but for demo purposes:
  const matchData = {
    overallMatch: 85,
    skillGaps: [
      { skill: "React", importance: 5, userLevel: 4, requiredLevel: 5 },
      { skill: "TypeScript", importance: 4, userLevel: 3, requiredLevel: 4 },
      { skill: "Node.js", importance: 3, userLevel: 2, requiredLevel: 3 },
    ],
    recommendedCourses: [
      "Advanced React Patterns",
      "TypeScript Best Practices",
      "Node.js Performance Optimization",
    ],
  };

  return (
    <TableRow>
      <TableCell>
        <div className="space-y-1">
          <div className="font-medium">{job.title}</div>
          <div className="text-sm text-muted-foreground">{job.company}</div>
        </div>
      </TableCell>
      <TableCell>{job.company}</TableCell>
      <TableCell>{job.location}</TableCell>
      <TableCell>{job.salary}</TableCell>
      <TableCell>{job.savedDate}</TableCell>
      <TableCell>
        <Badge variant="secondary">{job.status}</Badge>
      </TableCell>
      <TableCell>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="w-[110px]">
              <BarChart2 className="h-4 w-4 mr-2" />
              {matchData.overallMatch}% Match
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px]" align="end">
            <JobMatchScore {...matchData} />
          </PopoverContent>
        </Popover>
      </TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <Star className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onRemove(job.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}