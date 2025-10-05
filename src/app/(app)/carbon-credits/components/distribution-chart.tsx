'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Mangrove Restoration', value: 48 },
  { name: 'Seagrass Protection', value: 33 },
  { name: 'Industrial Carbon Capture', value: 19 },
];

const COLORS = ['hsl(var(--primary))', 'hsl(var(--primary)/0.7)', 'hsl(var(--primary)/0.4)'];


export default function DistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Credit Type Distribution</CardTitle>
        <CardDescription>Breakdown of credits by project type</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                     <Legend
                        iconSize={10}
                        layout="horizontal"
                        verticalAlign="bottom"
                        align="center"
                        wrapperStyle={{ fontSize: "12px", paddingTop: '20px' }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
