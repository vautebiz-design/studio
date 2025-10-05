import PlantationStats from './components/plantation-stats';
import InteractiveMap from './components/interactive-map';
import RecentActivities from './components/recent-activities';

export default function MapPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Plantation Tracker</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <InteractiveMap />
        </div>
        <div className="flex flex-col gap-8">
          <PlantationStats />
        </div>
      </div>
      <RecentActivities />
    </div>
  );
}