import CreditStats from "./components/credit-stats";
import DistributionChart from "./components/distribution-chart";
import TransactionsTable from "./components/transactions-table";

export default function CarbonCreditsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Carbon Credits Marketplace</h1>
        <p className="text-muted-foreground">Manage and track your blue carbon credits.</p>
      </div>
      <CreditStats />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
            <TransactionsTable />
        </div>
        <div>
            <DistributionChart />
        </div>
      </div>
    </div>
  );
}
