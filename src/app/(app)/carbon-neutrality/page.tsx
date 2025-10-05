import CarbonOffsetSummary from "./components/carbon-offset-summary";
import DetailedIndustryPerformance from "./components/detailed-industry-performance";
import HistoricalTrendAnalysis from "./components/historical-trend-analysis";
import IndustryProgressOverview from "./components/industry-progress-overview";
import OverallIndexScore from "./components/overall-index-score";

export default function CarbonNeutralityPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Carbon Neutrality Index</h1>
        <p className="text-muted-foreground">Assessing progress towards carbon neutrality goals.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <OverallIndexScore />
        <div className="lg:col-span-2 grid gap-8 md:grid-cols-2">
            <IndustryProgressOverview />
            <CarbonOffsetSummary />
        </div>
      </div>
      <HistoricalTrendAnalysis />
      <DetailedIndustryPerformance />
    </div>
  );
}
