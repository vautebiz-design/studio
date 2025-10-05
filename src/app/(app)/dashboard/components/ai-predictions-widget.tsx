'use client';

import { Line, ComposedChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit } from 'lucide-react';
import { ChartTooltipContent, ChartContainer, type ChartConfig } from '@/components/ui/chart';


const data = [
  { month: 'Aug', emissions: 160, absorption: 180 },
  { month: 'Sep', emissions: 180, absorption: 200 },
  { month: 'Oct', emissions: 170, absorption: 220 },
  { month: 'Nov', emissions: 200, absorption: 240 },
  { month: 'Dec', emissions: 220, absorption: 260 },
  { month: 'Jan', emissions: 240, absorption: 280 },
];

const chartConfig = {
  emissions: {
    label: 'Emissions',
    color: 'hsl(var(--destructive)/0.7)',
  },
  absorption: {
    label: 'Absorption',
    color: 'hsl(var(--accent))',
  },
} satisfies ChartConfig;

export default function AIPredictionsWidget() {
  return (
    <Card className="h-full hover:border-primary transition-colors">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-base font-medium">
          <span>AI/ML Predictions</span>
          <BrainCircuit className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
        <CardDescription>Future environmental trends</CardDescription>
      </CardHeader>
      <CardContent className="h-[120px] w-full">
         <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="month" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}k`}/>
                <Tooltip content={<ChartTooltipContent />} cursor={{fill: 'hsl(var(--accent) / 0.5)'}}/>
                <Line type="monotone" dataKey="emissions" stroke="var(--color-emissions)" strokeWidth={2} dot={false} name="Emissions" />
                <Line type="monotone" dataKey="absorption" stroke="var(--color-absorption)" strokeWidth={2} dot={false} name="Absorption" />
            </ComposedChart>
            </ResponsiveContainer>
         </ChartContainer>
      </CardContent>
    </Card>
  );
}
