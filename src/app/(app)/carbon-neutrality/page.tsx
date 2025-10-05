import OverallIndexScore from "./components/overall-index-score";
import IndustryProgressOverview from "./components/industry-progress-overview";
import HistoricalTrendAnalysis from "./components/historical-trend-analysis";
import DetailedIndustryPerformance from "./components/detailed-industry-performance";
import CarbonOffsetSummary from "./components/carbon-offset-summary";

export default function CarbonNeutralityPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Carbon Neutrality Index</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <OverallIndexScore />
        <div className="lg:col-span-2">
            <IndustryProgressOverview />
        </div>
      </div>
      
      <HistoricalTrendAnalysis />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <DetailedIndustryPerformance />
        </div>
        <CarbonOffsetSummary />
      </div>

    </div>
  );
}
