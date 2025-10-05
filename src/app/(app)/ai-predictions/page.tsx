import KeyForecastMetrics from "./components/key-forecast-metrics";
import LongTermProjections from "./components/long-term-projections";
import DetailedPredictionData from "./components/detailed-prediction-data";

export default function AiPredictionsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">AI/ML Predictions</h1>
        <p className="text-muted-foreground">
            Leverage advanced machine learning models to forecast future carbon absorption
            and emission trends, providing critical insights for strategic environmental planning
            and decision-making.
        </p>
      </div>

      <KeyForecastMetrics />
      <LongTermProjections />
      <DetailedPredictionData />

    </div>
  );
}
