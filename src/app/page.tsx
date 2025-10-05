import AIPredictionsWidget from './(app)/dashboard/components/ai-predictions-widget';
import CarbonCreditsWidget from './(app)/dashboard/components/carbon-credits-widget';
import CarbonNeutralityWidget from './(app)/dashboard/components/carbon-neutrality-widget';
import IotDeviceStatusWidget from './(app)/dashboard/components/iot-device-status-widget';
import MapTrackerWidget from './(app)/dashboard/components/map-tracker-widget';
import NetPollutionWidget from './(app)/dashboard/components/net-pollution-widget';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <NetPollutionWidget />
        <div className="space-y-6">
          <CarbonCreditsWidget />
          <IotDeviceStatusWidget />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MapTrackerWidget />
        <CarbonNeutralityWidget />
        <AIPredictionsWidget />
      </div>
    </div>
  );
}
