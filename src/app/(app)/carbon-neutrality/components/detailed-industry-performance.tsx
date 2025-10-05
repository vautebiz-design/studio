'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';


const performanceData = [
  { industry: 'Energy Sector', score: 82, change: 1.2, emissions: 1200, absorption: 900, status: 'Achieving' },
  { industry: 'Manufacturing', score: 65, change: -0.8, emissions: 2500, absorption: 1500, status: 'Improving' },
  { industry: 'Agriculture', score: 70, change: 0.5, emissions: 1800, absorption: 1300, status: 'Achieving' },
  { industry: 'Technology', score: 90, change: 0.2, emissions: 300, absorption: 450, status: 'Achieving' },
  { industry: 'Transportation', score: 58, change: -1.5, emissions: 3000, absorption: 1000, status: 'Lagging' },
  { industry: 'Construction', score: 62, change: 0.3, emissions: 2800, absorption: 1200, status: 'Improving' },
];

export default function DetailedIndustryPerformance() {

    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'Achieving':
                return 'default';
            case 'Improving':
                return 'secondary';
            case 'Lagging':
                return 'destructive';
            default:
                return 'outline';
        }
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Industry Performance</CardTitle>
        <div className="flex items-center gap-2 pt-2">
            <Input placeholder="Search industry..." className="max-w-xs" />
            <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="achieving">Achieving</SelectItem>
                    <SelectItem value="improving">Improving</SelectItem>
                    <SelectItem value="lagging">Lagging</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Industry</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Change (MoM)</TableHead>
                    <TableHead>Emissions (MT)</TableHead>
                    <TableHead>Absorption (MT)</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {performanceData.map((item) => (
                    <TableRow key={item.industry}>
                        <TableCell className="font-medium">{item.industry}</TableCell>
                        <TableCell>{item.score}</TableCell>
                        <TableCell className={cn(
                            'flex items-center',
                            item.change > 0 ? 'text-green-600' : 'text-red-600'
                        )}>
                            {item.change > 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                            {Math.abs(item.change)}%
                        </TableCell>
                        <TableCell>{item.emissions.toLocaleString()}</TableCell>
                        <TableCell>{item.absorption.toLocaleString()}</TableCell>
                        <TableCell>
                            <Badge variant={getStatusVariant(item.status)}>{item.status}</Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <div className="flex justify-center pt-4">
            <Button variant="ghost">View All Industries</Button>
        </div>
      </CardContent>
    </Card>
  );
}
