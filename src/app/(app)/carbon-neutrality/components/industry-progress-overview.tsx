'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const industries = [
  { name: 'Manufacturing', progress: 75 },
  { name: 'Energy Sector', progress: 88 },
  { name: 'Agriculture', progress: 80 },
  { name: 'Technology', progress: 95 },
];

export default function IndustryProgressOverview() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-medium">Industry Progress Overview</CardTitle>
        <Button variant="link" size="sm" asChild>
            <Link href="#">Full Report</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {industries.map(industry => (
            <div key={industry.name} className="flex items-center gap-4">
              <span className="text-sm w-32 truncate">{industry.name}</span>
              <Progress value={industry.progress} className="h-2 flex-1"/>
              <span className="text-sm font-mono w-12 text-right">{industry.progress}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
