import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Applied", value: 24 },
  { name: "Screening", value: 8 },
  { name: "Interview", value: 5 },
  { name: "Offer", value: 2 },
  { name: "Rejected", value: 9 },
];

const config = {
  bar: {
    color: "#0EA5E9",
  },
};

export function ApplicationStats() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Application Pipeline</h2>
      <div className="h-[300px]">
        <ChartContainer config={config}>
          <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<ChartTooltip />} />
            <Bar dataKey="value" fill="var(--color-bar)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </div>
    </Card>
  );
}