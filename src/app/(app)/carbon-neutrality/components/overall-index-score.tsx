'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { ProgressCircle } from '@/app/(app)/dashboard/components/progress-circle';


export default function OverallIndexScore() {
  const score = 88;

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-base font-medium">Overall Index Score</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-center flex-1">
        <ProgressCircle value={score} />
        <p className="mt-4 text-sm font-medium">Status: On Track for 2030 Goal</p>
        <div className="flex items-center text-green-600 dark:text-green-400 text-sm mt-2">
            <ArrowUp className="h-4 w-4" />
            <span>3.5 points increase</span>
        </div>
        <Button variant="outline" size="sm" className="mt-6">View Details</Button>
      </CardContent>
    </Card>
  );
}
