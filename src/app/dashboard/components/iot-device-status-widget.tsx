
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { HardDrive } from 'lucide-react';

export default function IotDeviceStatusWidget() {
  const activeDevices = 120;
  const totalDevices = 150;
  const progress = (activeDevices / totalDevices) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-base font-medium">
          <span>IoT Device Status</span>
          <HardDrive className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Progress value={progress} />
        <div className="text-sm text-muted-foreground">{activeDevices} Active / {totalDevices} Total</div>
        <p className="text-xs text-muted-foreground pt-2">All field sensors online and reporting.</p>
      </CardContent>
    </Card>
  );
}
