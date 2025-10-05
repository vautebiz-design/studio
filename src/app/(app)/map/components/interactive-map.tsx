'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function InteractiveMap() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Interactive Plantation Map</CardTitle>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </CardHeader>
      <CardContent className="relative h-[calc(100%-4rem)]">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFlcmlhbCUyMHZpZXd8ZW58MHx8fHwxNzIzNTc0Mzc3fDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Plantation map"
          fill
          className="object-cover rounded-b-lg"
          data-ai-hint="aerial island"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center max-w-xs">
            <h3 className="font-bold">Absorption Hotspot: Site Alpha</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Mangrove density: High
              <br />
              Carbon sequestration: 250 tons/year
            </p>
            <Button size="sm" className="mt-3">
              Learn More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}