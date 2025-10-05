import Link from 'next/link';
import { Suspense } from 'react';
import AIPredictionsWidget from './(app)/dashboard/components/ai-predictions-widget';
import CarbonCreditsWidget from './(app)/dashboard/components/carbon-credits-widget';
import CarbonNeutralityWidget from './(app)/dashboard/components/carbon-neutrality-widget';
import CarbonStats from './(app)/dashboard/components/carbon-stats';
import EmissionChart from './(app)/dashboard/components/emission-chart';
import MapTrackerWidget from './(app)/dashboard/components/map-tracker-widget';
import AIEfficiencyTool from './(app)/dashboard/components/ai-efficiency-tool';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function WidgetSkeleton() {
  return <Skeleton className="h-full w-full min-h-[200px]" />;
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Industry Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your BlueBalance portal.</p>
      </div>

      <Suspense fallback={<CarbonStatsSkeleton />}>
        <CarbonStats />
      </Suspense>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Suspense fallback={<WidgetSkeleton />}>
            <EmissionChart />
          </Suspense>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Suspense fallback={<WidgetSkeleton />}>
              <MapTrackerWidget />
            </Suspense>
            <Suspense fallback={<WidgetSkeleton />}>
              <CarbonCreditsWidget />
            </Suspense>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-6">
           <Suspense fallback={<WidgetSkeleton />}>
              <Link href="/carbon-neutrality">
                  <CarbonNeutralityWidget />
              </Link>
          </Suspense>
          <Suspense fallback={<WidgetSkeleton />}>
              <Link href="/ai-predictions">
                  <AIPredictionsWidget />
              </Link>
          </Suspense>
          <Suspense fallback={<WidgetSkeleton />}>
              <AIEfficiencyTool />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function CarbonStatsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Carbon Neutrality Index</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-3/4 mt-1" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Emissions</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-3/4 mt-1" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Blue Carbon Absorption</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-3/4 mt-1" />
        </CardContent>
      </Card>
    </div>
  );
}
