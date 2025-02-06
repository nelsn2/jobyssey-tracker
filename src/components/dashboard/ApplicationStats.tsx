import { Card } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Applied", value: 24 },
  { name: "Screening", value: 8 },
  { name: "Interview", value: 5 },
  { name: "Offer", value: 2 },
  { name: "Rejected", value: 9 },
];

export function ApplicationStats() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Application Pipeline</h2>
      <div className="h-[300px] w-full">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}