import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";

const data = [
  { x: 0, y: 2 },
  { x: 10, y: 5 },
  { x: 20, y: 10 },
  { x: 30, y: 20 },
  { x: 40, y: 35 },
  { x: 50, y: 50 },
  { x: 60, y: 40 },
  { x: 70, y: 25 },
  { x: 80, y: 20 },
  { x: 90, y: 10 },
  { x: 100, y: 5 },
];

export default function ComparisonGraph() {
  return (
    <Card className="p-4 w-full h-full mx-auto shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Comparison Graph</h2>
        <Button variant="outline" size="icon">
          <BarChart3 className="w-5 h-5" />
        </Button>
      </div>
      <p className="text-sm text-gray-600 mb-2">
        You scored <strong>30% percentile</strong> which is lower than the
        average percentile <strong>72%</strong> of all the engineers who took
        this assessment.
      </p>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="x" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#4F46E5" dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
