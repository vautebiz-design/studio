import DataVerificationTable from "./components/data-verification-table";
import TransactionsList from "./components/transactions-list";

export default function AdminPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <DataVerificationTable />
        </div>
        <div>
            <TransactionsList />
        </div>
    </div>
  );
}
