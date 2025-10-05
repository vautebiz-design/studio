'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, CheckCircle, Clock, DollarSign } from 'lucide-react';

const stats = [
    {
        title: 'Total Credits Issued',
        value: '7,750',
        unit: 'tCO2e',
        description: 'Total carbon credits issued since inception',
        icon: Copy
    },
    {
        title: 'Verified Tonnage',
        value: '6,350',
        unit: 'tCO2e',
        description: 'Credits successfully verified on blockchain',
        icon: CheckCircle
    },
    {
        title: 'Credits Pending',
        value: '850',
        unit: 'tCO2e',
        description: 'Credits awaiting verification process',
        icon: Clock
    },
    {
        title: 'Average Value',
        value: '$21.50',
        unit: '/tCO2e',
        description: 'Market average price per tonne of CO2e',
        icon: DollarSign
    }
]

export default function CreditStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
             <Card key={stat.title}>
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
               <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
               <stat.icon className="h-4 w-4 text-muted-foreground" />
             </CardHeader>
             <CardContent>
               <div className="text-2xl font-bold flex items-baseline gap-1">
                    <span>{stat.value}</span>
                    <span className="text-sm font-normal text-muted-foreground">{stat.unit}</span>
                </div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
             </CardContent>
           </Card>
        ))}
    </div>
  );
}
