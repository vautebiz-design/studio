'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy } from 'lucide-react';
import Link from 'next/link';

export default function CarbonCreditsWidget() {
  return (
    <Card className="h-full hover:border-primary transition-colors">
      <Link href="/carbon-credits">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-base font-medium">
          <span>Carbon Credits Issued</span>
          <Copy className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
        <CardDescription>Total credits generated from projects</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-3xl font-bold">1,500,000</p>
          <p className="text-sm text-muted-foreground">Total Credits</p>
        </div>
        <div>
          <p className="text-xl font-bold">250,000 tons</p>
          <p className="text-sm text-muted-foreground">Total Tonnage</p>
        </div>
      </CardContent>
      </Link>
    </Card>
  );
}
