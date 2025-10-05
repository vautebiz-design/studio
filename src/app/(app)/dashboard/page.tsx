'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import CarbonStats from './components/carbon-stats';
import EmissionChart from './components/emission-chart';
import AIEfficiencyTool from './components/ai-efficiency-tool';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  if (user?.role !== 'industry') {
    // Or show a 'not authorized' message
    if (typeof window !== 'undefined') {
      router.push('/admin');
    }
    return null;
  }

  const handleBuyCredits = () => {
    toast({
      title: 'Purchase Initiated',
      description: 'This is a simulation. No real purchase will be made.',
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-headline tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user.companyName}. Here&apos;s your carbon summary.
          </p>
        </div>
        <Button onClick={handleBuyCredits}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Buy Credits
        </Button>
      </div>

      <CarbonStats />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <EmissionChart />
        </div>
        <div>
          <AIEfficiencyTool />
        </div>
      </div>
    </div>
  );
}
