'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';


const transactionData = [
  { id: 'BC-001-2023-A', issuer: 'EcoSolutions Inc.', tonnage: 1200, issueDate: '2023-01-15', status: 'Verified', value: '$25,000' },
  { id: 'BC-002-2023-B', issuer: 'GreenFuture Corp.', tonnage: 850, issueDate: '2023-02-20', status: 'Pending', value: '$18,000' },
  { id: 'BC-003-2023-C', issuer: 'CleanAir Solutions', tonnage: 2500, issueDate: '2023-03-10', status: 'Verified', value: '$52,000' },
  { id: 'BC-004-2023-D', issuer: 'NatureGuard', tonnage: 400, issueDate: '2023-04-05', status: 'Rejected', value: '$8,500' },
  { id: 'BC-005-2023-E', issuer: 'AquaRestore Co.', tonnage: 600, issueDate: '2023-05-12', status: 'Verified', value: '$13,000' },
];


export default function TransactionsTable() {

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
        <CardTitle>Latest Credit Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Credit ID</TableHead>
                    <TableHead>Issuer</TableHead>
                    <TableHead>Tonnage (tCO2e)</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead className="text-right">Verification</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactionData.map((tx) => (
                    <TableRow key={tx.id}>
                        <TableCell className="font-mono text-xs">{tx.id}</TableCell>
                        <TableCell className="font-medium">{tx.issuer}</TableCell>
                        <TableCell>{tx.tonnage.toLocaleString()}</TableCell>
                        <TableCell>{tx.issueDate}</TableCell>
                        <TableCell>
                            <Badge variant={getStatusVariant(tx.status)}>{tx.status}</Badge>
                        </TableCell>
                        <TableCell>{tx.value}</TableCell>
                        <TableCell className="text-right">
                            <Button variant="link" size="sm" className="h-auto p-0">View</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <div className="flex justify-end pt-4">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
      </CardContent>
    </Card>
  );
}
