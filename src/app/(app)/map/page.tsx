import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MOCK_BLUE_CARBON_DATA } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { MapPin, Leaf, Zap } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MapPage() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'map-placeholder');

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Blue Carbon Map</h1>
        <p className="text-muted-foreground">
          Explore blue carbon ecosystems and their verified carbon absorption rates.
        </p>
      </div>

      <Card>
        <div className="grid lg:grid-cols-3">
          <div className="lg:col-span-2 relative h-64 lg:h-full min-h-[400px]">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt="World map placeholder"
                fill
                className="object-cover rounded-l-lg"
                data-ai-hint={mapImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <CardTitle className="absolute bottom-4 left-4 text-primary-foreground">Monitored Ecosystems</CardTitle>
          </div>
          <div className="lg:col-span-1 p-4 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Project Sites</h3>
            <div className="flex-1 overflow-y-auto">
              <ul className="space-y-4">
                {MOCK_BLUE_CARBON_DATA.map((site, index) => (
                  <li key={site.id}>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 mt-1 text-primary" />
                      <div>
                        <p className="font-semibold">{site.location}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1"><Leaf className="h-3 w-3 text-accent" /> {site.carbon_absorbed} tons CO₂</span>
                          <span className="flex items-center gap-1"><Zap className="h-3 w-3 text-yellow-500" /> Health: {site.health_score}%</span>
                        </div>
                      </div>
                    </div>
                    {index < MOCK_BLUE_CARBON_DATA.length - 1 && <Separator className="mt-4" />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
