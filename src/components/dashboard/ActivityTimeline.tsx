import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity, Calendar, Mail, Star } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "application",
    company: "Google",
    position: "Senior Frontend Developer",
    date: "2 hours ago",
    icon: Mail,
  },
  {
    id: 2,
    type: "interview",
    company: "Microsoft",
    position: "Full Stack Engineer",
    date: "Yesterday",
    icon: Calendar,
  },
  {
    id: 3,
    type: "saved",
    company: "Amazon",
    position: "React Developer",
    date: "2 days ago",
    icon: Star,
  },
];

export function ActivityTimeline() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="h-5 w-5 text-blue-500" />
        <h2 className="text-lg font-semibold">Recent Activity</h2>
      </div>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50">
              <div className="p-2 rounded-full bg-blue-100">
                <activity.icon className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{activity.company}</p>
                <p className="text-sm text-muted-foreground">{activity.position}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}