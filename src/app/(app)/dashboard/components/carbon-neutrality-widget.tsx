
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import { ProgressCircle } from './progress-circle';

export default function CarbonNeutralityWidget() {
  const percentage = 78;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-base font-medium">
          <span>Carbon Neutrality Index</span>
          <TrendingUp className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-2">
        <ProgressCircle value={percentage} />
        <p className="text-xs text-muted-foreground">Target: 90%</p>
        <p className="text-sm text-center">Progress towards neutrality is up.</p>
      </CardContent>
    </Card>
  );
}
