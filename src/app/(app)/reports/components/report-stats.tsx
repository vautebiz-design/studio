'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Gauge, Target } from 'lucide-react';

const stats = [
    {
        title: 'Total Emissions (YTD)',
        value: '1.25M',
        unit: 'tCO2e',
        icon: Target
    },
    {
        title: 'Avg. Emission Intensity',
        value: '0.85',
        unit: 'tCO2e/unit',
        icon: Gauge
    },
    {
        title: 'Active Sources',
        value: '124',
        unit: 'sources',
        icon: Activity
    }
]

export default function ReportStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
             <Card key={stat.title}>
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
               <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
               <stat.icon className="h-4 w-4 text-muted-foreground" />
             </CardHeader>
             <CardContent>
               <div className="text-2xl font-bold flex items-baseline gap-2">
                    <span>{stat.value}</span>
                    <span className="text-sm font-normal text-muted-foreground">{stat.unit}</span>
                </div>
             </CardContent>
           </Card>
        ))}
    </div>
  );
}
