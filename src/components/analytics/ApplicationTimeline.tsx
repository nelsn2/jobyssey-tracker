import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-01', applications: 4 },
  { date: '2024-02', applications: 6 },
  { date: '2024-03', applications: 8 },
  { date: '2024-04', applications: 5 },
];

export const ApplicationTimeline = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="applications" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};