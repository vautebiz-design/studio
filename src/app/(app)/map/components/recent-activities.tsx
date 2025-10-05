'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Leaf, Droplets, ArrowRight } from 'lucide-react';

const activities = [
  {
    icon: Leaf,
    title: 'New Mangrove Planting Initiative',
    description: 'Successfully planted 500 new mangrove saplings in Region Delta. (2 days ago)',
  },
  {
    icon: Droplets,
    title: 'Seagrass Health Monitoring',
    description: 'Reported 95% survival rate for seagrass beds in Site Gamma. (1 week ago)',
  },
  {
    icon: ArrowRight,
    title: 'Area Expansion Assessment',
    description: 'Assessment completed for potential 200-hectare expansion in Coastal Zone X. (2 weeks ago)',
  },
];

export default function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Plantation Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={activity.title}>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <activity.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
              </div>
              {index < activities.length - 1 && <Separator className="mt-6" />}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button variant="outline">View All Activities</Button>
        </div>
      </CardContent>
    </Card>
  );
}