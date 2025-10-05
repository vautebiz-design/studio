
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Bolt } from 'lucide-react';

const data = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 5 },
  { name: 'Mar', value: -2 },
  { name: 'Apr', value: 8 },
  { name: 'May', value: -4 },
  { name: 'Jun', value: -8 },
  { name: 'Jul', value: -5 },
  { name: 'Aug', value: 2 },
  { name: 'Sep', value: 10 },
  { name: 'Oct', value: 15 },
  { name: 'Nov', value: 12 },
  { name: 'Dec', value: 5 },
];

export default function NetPollutionWidget() {
  const latestValue = data[data.length - 1].value;
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-base font-medium">
          <span>Net Pollution Widget</span>
          <Bolt className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
        <div className="flex items-baseline gap-2">
          <p className="text-4xl font-bold text-destructive">{latestValue}</p>
          <p className="text-lg text-muted-foreground">k tons</p>
        </div>
        <CardDescription>Balance of Emissions & Absorption</CardDescription>
      </CardHeader>
      <CardContent className="h-[150px] w-full">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" hide />
            <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
                fontSize: '12px',
                borderRadius: '0.5rem',
              }}
              labelStyle={{ fontWeight: 'bold' }}
            />
            <Area type="monotone" dataKey="value" stroke="hsl(var(--destructive))" strokeWidth={2} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
