'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Bot, Sparkles } from 'lucide-react';
import { aiCarbonEfficiencyPrediction, AICarbonEfficiencyPredictionOutput } from '@/ai/flows/ai-carbon-efficiency-prediction';
import { ScrollArea } from '@/components/ui/scroll-area';

const formSchema = z.object({
  location: z.string().min(1, 'Location is required.'),
  ecosystemType: z.enum(['mangroves', 'seagrass']),
  healthScore: z.number().min(0).max(100),
  investmentLevel: z.number().min(0, 'Investment must be a positive number.'),
});

type FormData = z.infer<typeof formSchema>;

export default function AIEfficiencyTool() {
  const [prediction, setPrediction] = useState<AICarbonEfficiencyPredictionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: 'Sunda Mangrove Forest',
      ecosystemType: 'mangroves',
      healthScore: 80,
      investmentLevel: 10000,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setPrediction(null);
    try {
      const result = await aiCarbonEfficiencyPrediction(data);
      setPrediction(result);
    } catch (error) {
      console.error('AI prediction failed:', error);
      // You might want to show an error to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          AI Efficiency Prediction
        </CardTitle>
        <CardDescription>Predict the carbon absorption efficiency of a blue carbon ecosystem.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 pr-4 -mr-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Florida Keys" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ecosystemType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ecosystem Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an ecosystem" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="mangroves">Mangroves</SelectItem>
                        <SelectItem value="seagrass">Seagrass</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="healthScore"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Health Score: {field.value}</FormLabel>
                    <FormControl>
                      <Slider
                        min={0}
                        max={100}
                        step={1}
                        defaultValue={[field.value]}
                        onValueChange={(values) => field.onChange(values[0])}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="investmentLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Investment Level ($)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 50000" {...field} onChange={e => field.onChange(Number(e.target.value))}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Analyzing...' : 'Predict Efficiency'}
                <Sparkles className="ml-2 h-4 w-4"/>
              </Button>
            </form>
          </Form>
          {prediction && (
            <Card className="mt-4 bg-primary/10">
              <CardHeader>
                <CardTitle className="text-primary">Prediction Result</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                  <div className="text-center">
                      <p className="text-sm text-muted-foreground">Predicted Efficiency</p>
                      <p className="text-4xl font-bold text-primary">{prediction.predictedEfficiency.toFixed(1)}%</p>
                  </div>
                  <div>
                      <p className="text-sm font-semibold">Rationale:</p>
                      <p className="text-sm text-muted-foreground italic">{prediction.rationale}</p>
                  </div>
              </CardContent>
            </Card>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
