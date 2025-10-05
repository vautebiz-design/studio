import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import CreditStats from "./components/credit-stats";
import TransactionsTable from "./components/transactions-table";
import DistributionChart from "./components/distribution-chart";

export default function CarbonCreditsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-headline tracking-tight">Carbon Credits Overview</h1>
          <p className="text-muted-foreground">
            Monitor and manage all carbon credit transactions.
          </p>
        </div>
        <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
        </Button>
      </div>

      <CreditStats />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <TransactionsTable />
        </div>
        <div>
            <DistributionChart />
        </div>
      </div>
    </div>
  );
}
