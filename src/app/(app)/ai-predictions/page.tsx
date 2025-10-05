import DetailedPredictionData from "./components/detailed-prediction-data";
import KeyForecastMetrics from "./components/key-forecast-metrics";
import LongTermProjections from "./components/long-term-projections";

export default function AiPredictionsPage() {
  return (
    <div className="flex flex-col gap-8">
       <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">AI/ML Predictions</h1>
        <p className="text-muted-foreground">Forecasting future carbon metrics and trends.</p>
      </div>
      <KeyForecastMetrics />
      <LongTermProjections />
      <DetailedPredictionData />
    </div>
  );
}
