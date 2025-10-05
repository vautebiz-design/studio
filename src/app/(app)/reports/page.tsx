import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import ReportStats from "./components/report-stats";
import EmissionTrendsChart from "./components/emission-trends-chart";
import EmissionsByIndustryChart from "./components/emissions-by-industry-chart";
import DetailedReportsTable from "./components/detailed-reports-table";

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-headline tracking-tight">Emission Reports</h1>
          <p className="text-muted-foreground">
            Detailed insights into industrial emission data and trends.
          </p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Reports
            </Button>
            <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Report
            </Button>
        </div>
      </div>
      
      <ReportStats />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
            <EmissionTrendsChart />
        </div>
        <div className="lg:col-span-2">
            <EmissionsByIndustryChart />
        </div>
      </div>

      <DetailedReportsTable />

    </div>
  );
}
