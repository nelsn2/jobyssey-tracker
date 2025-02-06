import { Card } from "@/components/ui/card";

export const ActivityHeatmap = () => {
  // This is a simplified version - could be enhanced with a real heatmap library
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const activities = ['Applications', 'Interviews', 'Follow-ups'];
  
  return (
    <div className="grid grid-cols-7 gap-2">
      {months.map((month) => (
        activities.map((activity, i) => (
          <Card 
            key={`${month}-${activity}`}
            className="h-8 bg-accent hover:bg-accent/80 transition-colors"
            style={{ opacity: 0.3 + (Math.random() * 0.7) }}
          />
        ))
      ))}
    </div>
  );
};