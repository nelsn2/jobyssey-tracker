import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const interviews = [
  {
    id: 1,
    company: "Microsoft",
    position: "Full Stack Engineer",
    date: "March 15, 2024",
    time: "2:00 PM",
    type: "Technical Interview",
  },
  {
    id: 2,
    company: "Google",
    position: "Senior Frontend Developer",
    date: "March 18, 2024",
    time: "11:00 AM",
    type: "System Design",
  },
];

export function UpcomingInterviews() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Upcoming Interviews</h2>
      <div className="space-y-4">
        {interviews.map((interview) => (
          <div
            key={interview.id}
            className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">{interview.company}</h3>
                <p className="text-sm text-muted-foreground">{interview.position}</p>
              </div>
              <Button variant="outline" size="sm">
                Join Call
              </Button>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{interview.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{interview.time}</span>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {interview.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}