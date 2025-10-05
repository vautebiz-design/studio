'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';

const reportData = [
  { id: 'ER001', source: 'Factory A', industry: 'Manufacturing', date: '2024-03-15', amount: 50000, status: 'Verified' },
  { id: 'ER002', source: 'Power Plant B', industry: 'Energy', date: '2024-03-10', amount: 75000, status: 'Verified' },
  { id: 'ER003', source: 'Farm C', industry: 'Agriculture', date: '2024-03-01', amount: 12000, status: 'Pending' },
  { id: 'ER004', source: 'Logistics Hub D', industry: 'Transportation', date: '2024-02-28', amount: 30000, status: 'Verified' },
  { id: 'ER005', source: 'Waste Facility E', industry: 'Waste Mgmt', date: '2024-02-20', amount: 18000, status: 'Rejected' },
];


export default function DetailedReportsTable() {

    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'Verified':
                return 'default';
            case 'Pending':
                return 'secondary';
            case 'Rejected':
                return 'destructive';
            default:
                return 'outline';
        }
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Emission Reports</CardTitle>
        <div className="flex items-center gap-2 pt-2">
            <Input placeholder="Search reports..." className="max-w-xs" />
            <Select defaultValue="30">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="30">Last 30 Days</SelectItem>
                    <SelectItem value="90">Last 90 Days</SelectItem>
                    <SelectItem value="ytd">Year-to-Date</SelectItem>
                </SelectContent>
            </Select>
            <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="energy">Energy</SelectItem>
                    <SelectItem value="agriculture">Agriculture</SelectItem>
                    <SelectItem value="transportation">Transportation</SelectItem>
                    <SelectItem value="waste">Waste Mgmt</SelectItem>
                </SelectContent>
            </Select>
            <Button>Apply Filters</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Industry</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount (tCO2e)</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {reportData.map((report) => (
                    <TableRow key={report.id}>
                        <TableCell className="font-mono text-xs">{report.id}</TableCell>
                        <TableCell className="font-medium">{report.source}</TableCell>
                        <TableCell>{report.industry}</TableCell>
                        <TableCell>{report.date}</TableCell>
                        <TableCell className="text-right">{report.amount.toLocaleString('en-US')}</TableCell>
                        <TableCell>
                            <Badge variant={getStatusVariant(report.status)}>{report.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Verify Report</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Reject</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
