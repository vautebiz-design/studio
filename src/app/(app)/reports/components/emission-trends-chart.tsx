'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartTooltipContent } from '@/components/ui/chart';


const data = [
  { name: 'Jan', Emissions: 2000, Target: 1800 },
  { name: 'Feb', Emissions: 2200, Target: 2000 },
  { name: 'Mar', Emissions: 2100, Target: 2100 },
  { name: 'Apr', Emissions: 2300, Target: 2200 },
  { name: 'May', Emissions: 2400, Target: 2300 },
  { name: 'Jun', Emissions: 2200, Target: 2400 },
];

export default function EmissionTrendsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Emission Trends Over Time</CardTitle>
        <CardDescription>Monthly total CO2 equivalent emissions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false}/>
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis tickFormatter={(value) => `${value / 1000}k`} stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false}/>
              <Tooltip content={<ChartTooltipContent />} cursor={{fill: 'hsl(var(--accent) / 0.3)'}}/>
              <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}}/>
              <Line type="monotone" dataKey="Emissions" stroke="hsl(var(--primary))" strokeWidth={2} dot={{r: 4, fill: 'hsl(var(--primary))'}} activeDot={{ r: 6 }}/>
              <Line type="monotone" dataKey="Target" stroke="hsl(var(--muted-foreground))" strokeWidth={2} strokeDasharray="5 5" dot={false}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
