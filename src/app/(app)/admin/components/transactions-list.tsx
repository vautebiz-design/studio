import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MOCK_TRANSACTIONS } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from 'date-fns';

export default function TransactionsList() {
    const getStatusVariant = (status: 'completed' | 'pending' | 'failed') => {
        switch (status) {
            case 'completed':
                return 'default';
            case 'pending':
                return 'secondary';
            case 'failed':
                return 'destructive';
        }
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Transactions</CardTitle>
        <CardDescription>A log of all credit transactions in the system.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
            {MOCK_TRANSACTIONS.map((tx, index) => (
                <div key={tx.txId}>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-mono text-sm">{tx.txId}</p>
                            <p className="text-xs text-muted-foreground">
                                By: {tx.industryId}
                            </p>
                        </div>
                        <div className="text-right">
                             <Badge variant={getStatusVariant(tx.status)} className="capitalize">{tx.status}</Badge>
                             <p className="text-xs text-muted-foreground mt-1">
                                {formatDistanceToNow(tx.timestamp, { addSuffix: true })}
                            </p>
                        </div>
                    </div>
                    {index < MOCK_TRANSACTIONS.length - 1 && <Separator className="mt-4" />}
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
