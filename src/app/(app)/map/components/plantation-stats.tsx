'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target, Leaf, Sprout, AreaChart } from 'lucide-react';

const stats = [
  {
    title: 'Total Area Managed',
    value: '12,500',
    unit: 'Hectares',
    description: 'Across 23 regions globally',
    icon: AreaChart,
  },
  {
    title: 'Carbon Sequestration',
    value: '1.5M',
    unit: 'Tons/Year',
    description: 'Average annual absorption rate',
    icon: Leaf,
  },
  {
    title: 'Species Diversity',
    value: 'High',
    description: 'Over 50 native species identified',
    icon: Sprout,
  },
];

export default function PlantationStats() {
  return (
    <>
      {stats.map(stat => (
        <Card key={stat.title}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-base font-medium">
              <span>{stat.title}</span>
              <stat.icon className="h-5 w-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between text-base font-medium">
            <span>Restoration Goal (2025)</span>
            <Target className="h-5 w-5 text-muted-foreground" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">85%</div>
          <p className="text-xs text-muted-foreground">8500 Hectares of 10000 Hectares achieved</p>
          <Progress value={85} className="mt-2 h-2" />
        </CardContent>
      </Card>
    </>
  );
}