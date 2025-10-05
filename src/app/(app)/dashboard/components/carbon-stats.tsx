'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MOCK_INDUSTRY_DATA } from '@/lib/data';
import { ArrowDown, ArrowUp, Scale } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CarbonStats() {
  const [stats, setStats] = useState({
    cni: 0,
    emissions: 0,
    absorption: 0,
  });

  useEffect(() => {
    // In a real app, this would be fetched data
    const data = MOCK_INDUSTRY_DATA[0];
    const cni = data.absorption_tons && data.emission_tons > 0 ? (data.absorption_tons / data.emission_tons) * 100 : 0;
    setStats({
      cni: Math.round(cni),
      emissions: data.emission_tons,
      absorption: data.absorption_tons,
    });
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Carbon Neutrality Index</CardTitle>
          <Scale className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.cni}%</div>
          <p className="text-xs text-muted-foreground">
            {stats.cni >= 100 ? 'Carbon Negative' : `${100 - stats.cni}% to neutral`}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Emissions</CardTitle>
          <ArrowUp className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.emissions.toLocaleString()} tons</div>
          <p className="text-xs text-muted-foreground">CO₂ equivalent</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Blue Carbon Absorption</CardTitle>
          <ArrowDown className="h-4 w-4 text-accent" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.absorption.toLocaleString()} tons</div>
          <p className="text-xs text-muted-foreground">CO₂ sequestered</p>
        </CardContent>
      </Card>
    </div>
  );
}
