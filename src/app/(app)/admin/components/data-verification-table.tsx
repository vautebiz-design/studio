'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { MOCK_INDUSTRY_DATA } from '@/lib/data';
import type { IndustryData } from '@/lib/types';
import { format } from 'date-fns';

export default function DataVerificationTable() {
  const [data, setData] = useState<IndustryData[]>(MOCK_INDUSTRY_DATA);

  const handleVerificationChange = (industryId: string, timestamp: Date, verified: boolean) => {
    setData(currentData =>
      currentData.map(item =>
        item.industryId === industryId && item.timestamp === timestamp
          ? { ...item, verified }
          : item
      )
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Verification</CardTitle>
        <CardDescription>Review and verify submitted industry data.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Industry ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>CNI</TableHead>
              <TableHead className="text-right">Verified</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={`${item.industryId}-${item.timestamp}`}>
                <TableCell className="font-mono text-xs">{item.industryId}</TableCell>
                <TableCell>{format(item.timestamp, "MMM yyyy")}</TableCell>
                <TableCell className="font-medium">{item.CNI}%</TableCell>
                <TableCell className="text-right">
                  <Switch
                    checked={item.verified}
                    onCheckedChange={(checked) => handleVerificationChange(item.industryId, item.timestamp, checked)}
                    aria-label="Toggle verification"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
