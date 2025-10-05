import InteractiveMap from "./components/interactive-map";
import PlantationStats from "./components/plantation-stats";
import RecentActivities from "./components/recent-activities";

export default function MapPage() {
  return (
    <div className="flex flex-col gap-8">
        <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight">Plantation Tracker</h1>
            <p className="text-muted-foreground">Monitoring blue carbon ecosystems worldwide.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <PlantationStats />
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <InteractiveMap />
            </div>
            <div>
                <RecentActivities />
            </div>
        </div>
    </div>
  );
}
