'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const predictionData = [
  { period: 'Q1 2024', absorption: 155000, emissions: 125000, netImpact: 30000, confidence: 'High' },
  { period: 'Q2 2024', absorption: 170000, emissions: 130000, netImpact: 40000, confidence: 'High' },
  { period: 'Q3 2024', absorption: 185000, emissions: 140000, netImpact: 45000, confidence: 'Medium' },
  { period: 'Q4 2024', absorption: 200000, emissions: 150000, netImpact: 50000, confidence: 'Medium' },
  { period: 'Q1 2025', absorption: 215000, emissions: 160000, netImpact: 55000, confidence: 'Low' },
  { period: 'Q2 2025', absorption: 230000, emissions: 170000, netImpact: 60000, confidence: 'Low' },
];

export default function DetailedPredictionData() {

    const getConfidenceVariant = (confidence: string) => {
        switch (confidence) {
            case 'High':
                return 'default';
            case 'Medium':
                return 'secondary';
            case 'Low':
                return 'destructive';
            default:
                return 'outline';
        }
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Prediction Data</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Period</TableHead>
                    <TableHead>Absorption (Tons)</TableHead>
                    <TableHead>Emissions (Tons)</TableHead>
                    <TableHead>Net Impact</TableHead>
                    <TableHead className="text-right">Confidence</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {predictionData.map((row) => (
                    <TableRow key={row.period}>
                        <TableCell className="font-medium">{row.period}</TableCell>
                        <TableCell>{row.absorption.toLocaleString('en-US')} T</TableCell>
                        <TableCell>{row.emissions.toLocaleString('en-US')} T</TableCell>
                        <TableCell>{row.netImpact.toLocaleString('en-US')} T</TableCell>
                        <TableCell className="text-right">
                            <Badge variant={getConfidenceVariant(row.confidence)} className={cn(
                                row.confidence === 'Medium' && 'bg-yellow-500 text-black',
                            )}>
                                {row.confidence}
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
