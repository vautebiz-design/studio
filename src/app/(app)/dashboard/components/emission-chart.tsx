'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MOCK_CHART_DATA } from '@/lib/data';
import { ChartTooltipContent } from '@/components/ui/chart';

export default function EmissionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Carbon Balance</CardTitle>
        <CardDescription>Emissions vs. Blue Carbon Absorption</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MOCK_CHART_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value} t`}
              />
              <Tooltip
                cursor={{ fill: 'hsl(var(--accent) / 0.1)' }}
                content={<ChartTooltipContent />}
              />
              <Legend wrapperStyle={{fontSize: '12px'}}/>
              <Bar dataKey="emission" name="Emission" fill="hsl(var(--destructive) / 0.7)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="absorption" name="Absorption" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
