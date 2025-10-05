
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe } from 'lucide-react';

export default function MapTrackerWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-base font-medium">
          <span>Mangrove/Seagrass Map Tracker</span>
          <Globe className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Image
          src="/map-placeholder.png"
          alt="World map with absorption hotspots"
          width={600}
          height={300}
          className="rounded-md object-cover"
        />
        <Tabs defaultValue="region-a" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="region-a">Coastal Region A</TabsTrigger>
            <TabsTrigger value="zone-b">Delta Zone B</TabsTrigger>
            <TabsTrigger value="estuary-c">Estuary C</TabsTrigger>
          </TabsList>
        </Tabs>
        <CardDescription className="mt-2">Visualizing carbon absorption hotspots</CardDescription>
      </CardContent>
    </Card>
  );
}
