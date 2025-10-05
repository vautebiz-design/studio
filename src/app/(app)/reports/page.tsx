import DetailedReportsTable from "./components/detailed-reports-table";
import EmissionTrendsChart from "./components/emission-trends-chart";
import EmissionsByIndustryChart from "./components/emissions-by-industry-chart";
import ReportStats from "./components/report-stats";


export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-8">
        <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight">Emission Reports</h1>
            <p className="text-muted-foreground">Detailed analysis of carbon emissions.</p>
        </div>
        <ReportStats />
        <div className="grid gap-8 lg:grid-cols-2">
            <EmissionTrendsChart />
            <EmissionsByIndustryChart />
        </div>
        <DetailedReportsTable />
    </div>
  );
}
