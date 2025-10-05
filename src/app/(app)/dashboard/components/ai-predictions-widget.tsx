
'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Line, ComposedChart } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit } from 'lucide-react';

const data = [
  { month: 'Aug', emissions: 16000, absorption: 18000 },
  { month: 'Sep', emissions: 18000, absorption: 20000 },
  { month: 'Oct', emissions: 17000, absorption: 22000 },
  { month: 'Nov', emissions: 20000, absorption: 24000 },
  { month: 'Dec', emissions: 22000, absorption: 26000 },
  { month: 'Jan', emissions: 24000, absorption: 28000 },
  { month: 'Feb 25', emissions: 28000, absorption: 30000 },
];

export default function AIPredictionsWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-base font-medium">
          <span>AI/ML Predictions</span>
          <BrainCircuit className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
        <CardDescription>Future environmental trends</CardDescription>
      </CardHeader>
      <CardContent className="h-[150px] w-full">
         <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`}/>
            <Line type="monotone" dataKey="emissions" stroke="hsl(var(--foreground))" strokeWidth={2} dot={false} name="Emissions" />
            <Line type="monotone" dataKey="absorption" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} name="Absorption" />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
