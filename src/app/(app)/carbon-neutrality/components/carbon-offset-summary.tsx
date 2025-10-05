'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Zap, Trash2, Waves } from 'lucide-react';
import Link from 'next/link';

const offsetProjects = [
  { name: 'Reforestation Projects', tons: 12500, icon: Leaf },
  { name: 'Renewable Energy', tons: 8000, icon: Zap },
  { name: 'Waste Management', tons: 3200, icon: Trash2 },
  { name: 'Blue Carbon Initiatives', tons: 5000, icon: Waves },
];

export default function CarbonOffsetSummary() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base font-medium">Carbon Offset Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {offsetProjects.map(project => (
            <div key={project.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <project.icon className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">{project.name}</span>
              </div>
              <span className="font-semibold text-sm">{project.tons.toLocaleString('en-US')} tons CO2e</span>
            </div>
          ))}
        </div>
        <div className="text-right mt-6">
            <Button variant="link" size="sm" asChild>
                <Link href="/carbon-credits">Manage Credits</Link>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
