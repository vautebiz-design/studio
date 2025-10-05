'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const metrics = [
    {
        title: 'Projected Absorption',
        value: '485K',
        unit: 'Tons',
        change: '+12.5%',
        changeType: 'positive',
        description: 'Next quarter forecast for carbon absorption across all tracked regions.'
    },
    {
        title: 'Projected Emissions',
        value: '320K',
        unit: 'Tons',
        change: '+5.1%',
        changeType: 'positive',
        description: 'Predicted carbon emissions for the upcoming quarter from identified sources.'
    },
    {
        title: 'Net Impact',
        value: '165K',
        unit: 'Tons',
        change: 'Improving trend',
        changeType: 'positive',
        description: 'Overall positive carbon balance anticipated next quarter, indicating progress.'
    }
]

export default function KeyForecastMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
            <Card key={metric.title}>
                <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold">{metric.value} <span className="text-2xl text-muted-foreground">{metric.unit}</span></div>
                    <div className={cn(
                        'flex items-center text-xs mt-1',
                        metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    )}>
                        <ArrowUp className="h-3 w-3 mr-1" />
                        <span>{metric.change} {metric.change.includes('%') && 'vs. previous'}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{metric.description}</p>
                </CardContent>
            </Card>
        ))}
    </div>
  );
}
