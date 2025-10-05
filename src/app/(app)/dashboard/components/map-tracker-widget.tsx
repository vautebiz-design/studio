'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MapTrackerWidget() {
  return (
    <Card className="h-full hover:border-primary transition-colors flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-base font-medium">
          <span>Mangrove/Seagrass Map Tracker</span>
          <Globe className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
        <CardDescription>Visualizing carbon absorption hotspots</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center">
        <div className="relative w-full h-48 rounded-md overflow-hidden">
            <Image
              src="https://picsum.photos/seed/map/600/300"
              alt="World map with absorption hotspots"
              fill
              className="object-cover"
              data-ai-hint="world map"
            />
        </div>
        <div className="w-full mt-4 flex justify-center">
            <Button variant="outline" size="sm" asChild>
                <Link href="/map">View Interactive Map</Link>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
