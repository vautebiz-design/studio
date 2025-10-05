'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartTooltipContent, ChartContainer, type ChartConfig } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const data = [
  { name: 'Jan 23', "Index Score": 58 },
  { name: 'Feb 23', "Index Score": 60 },
  { name: 'Mar 23', "Index Score": 62 },
  { name: 'Apr 23', "Index Score": 65 },
  { name: 'May 23', "Index Score": 68 },
  { name: 'Jun 23', "Index Score": 70 },
  { name: 'Jul 23', "Index Score": 72 },
  { name: 'Aug 23', "Index Score": 75 },
  { name: 'Sep 23', "Index Score": 78 },
  { name: 'Oct 23', "Index Score": 80 },
  { name: 'Nov 23', "Index Score": 82 },
  { name: 'Dec 23', "Index Score": 85 },
  { name: 'Feb 24', "Index Score": 88 },
];

const chartConfig = {
  "Index Score": {
    label: "Index Score",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;


export default function HistoricalTrendAnalysis() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Historical Trend Analysis</CardTitle>
        <Select defaultValue="12">
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="12">Last 12 Months</SelectItem>
                <SelectItem value="24">Last 24 Months</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5, right: 10, left: -10, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false}/>
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false}/>
              <Tooltip content={<ChartTooltipContent />} cursor={{fill: 'hsl(var(--accent) / 0.3)'}}/>
              <Line type="monotone" dataKey="Index Score" stroke="var(--color-Index Score)" strokeWidth={2} dot={false} activeDot={{ r: 6 }}/>
            </LineChart>
          </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
