'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartTooltipContent } from '@/components/ui/chart';

const data = [
  { name: 'Manufacturing', Emissions: 3500 },
  { name: 'Energy', Emissions: 2800 },
  { name: 'Agriculture', Emissions: 1500 },
  { name: 'Transportation', Emissions: 1200 },
  { name: 'Waste Mgmt', Emissions: 800 },
];

export default function EmissionsByIndustryChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Emissions by Industry</CardTitle>
        <CardDescription>Breakdown of CO2e emissions by sector</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={(value) => `${value / 1000}k`} stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} width={80} />
              <Tooltip content={<ChartTooltipContent />} cursor={{fill: 'hsl(var(--accent) / 0.3)'}}/>
              <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}}/>
              <Bar dataKey="Emissions" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={20}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
