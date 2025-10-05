'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartTooltipContent, ChartContainer, type ChartConfig } from '@/components/ui/chart';

const absorptionData = [
  { name: 'Jan', Actual: 160, Predicted: 165 },
  { name: 'Feb', Actual: 170, Predicted: 175 },
  { name: 'Mar', Actual: 180, Predicted: 185 },
  { name: 'Apr', Actual: 190, Predicted: 195 },
  { name: 'May', Actual: 200, Predicted: 205 },
  { name: 'Jun', Actual: 210, Predicted: 220 },
  { name: 'Jul', Actual: 220, Predicted: 235 },
  { name: 'Aug', Actual: 230, Predicted: 250 },
  { name: 'Sep', Actual: 240, Predicted: 265 },
  { name: 'Oct', Actual: 250, Predicted: 280 },
  { name: 'Nov', Actual: 260, Predicted: 295 },
  { name: 'Dec', Actual: 270, Predicted: 310 },
];

const emissionData = [
    { name: 'Jan', Actual: 110, Predicted: 115 },
    { name: 'Feb', Actual: 120, Predicted: 125 },
    { name: 'Mar', Actual: 115, Predicted: 120 },
    { name: 'Apr', Actual: 130, Predicted: 135 },
    { name: 'May', Actual: 140, Predicted: 145 },
    { name: 'Jun', Actual: 135, Predicted: 140 },
    { name: 'Jul', Actual: 150, Predicted: 160 },
    { name: 'Aug', Actual: 160, Predicted: 170 },
    { name: 'Sep', Actual: 170, Predicted: 180 },
    { name: 'Oct', Actual: 180, Predicted: 190 },
    { name: 'Nov', Actual: 190, Predicted: 205 },
    { name: 'Dec', Actual: 200, Predicted: 215 },
];

const absorptionChartConfig = {
    "Actual": {
        label: "Actual Absorption",
        color: "hsl(var(--primary))",
    },
    "Predicted": {
        label: "Predicted Absorption",
        color: "hsl(var(--primary))",
    }
} satisfies ChartConfig;

const emissionChartConfig = {
    "Actual": {
        label: "Actual Emissions",
        color: "hsl(var(--foreground))",
    },
    "Predicted": {
        label: "Predicted Emissions",
        color: "hsl(var(--foreground))",
    }
} satisfies ChartConfig;


export default function LongTermProjections() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Long-term Projections</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8 lg:grid-cols-2">
            <div>
                <h3 className="font-semibold mb-4 text-center">Carbon Absorption Forecast</h3>
                <div className="h-[300px]">
                    <ChartContainer config={absorptionChartConfig} className="w-full h-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={absorptionData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false}/>
                            <Tooltip content={<ChartTooltipContent />} cursor={{fill: 'hsl(var(--accent) / 0.3)'}}/>
                            <Legend iconSize={10} wrapperStyle={{fontSize: "12px", paddingTop: '20px'}}/>
                            <Line type="monotone" dataKey="Actual" stroke="var(--color-Actual)" strokeWidth={2} name="Actual Absorption" dot={false} />
                            <Line type="monotone" dataKey="Predicted" stroke="var(--color-Predicted)" strokeDasharray="5 5" strokeWidth={2} name="Predicted Absorption" dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </div>
            </div>
            <div>
                <h3 className="font-semibold mb-4 text-center">Carbon Emission Forecast</h3>
                <div className="h-[300px]">
                <ChartContainer config={emissionChartConfig} className="w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={emissionData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false}/>
                            <Tooltip content={<ChartTooltipContent />} cursor={{fill: 'hsl(var(--accent) / 0.3)'}}/>
                            <Legend iconSize={10} wrapperStyle={{fontSize: "12px", paddingTop: '20px'}}/>
                            <Line type="monotone" dataKey="Actual" stroke="var(--color-Actual)" strokeWidth={2} name="Actual Emissions" dot={false} />
                            <Line type="monotone" dataKey="Predicted" stroke="var(--color-Predicted)" strokeDasharray="5 5" strokeWidth={2} name="Predicted Emissions" dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
