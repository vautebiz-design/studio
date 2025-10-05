'use server';
/**
 * @fileOverview Predicts the carbon absorption efficiency of blue carbon ecosystems.
 *
 * - aiCarbonEfficiencyPrediction - A function that predicts the carbon absorption efficiency.
 * - AICarbonEfficiencyPredictionInput - The input type for the aiCarbonEfficiencyPrediction function.
 * - AICarbonEfficiencyPredictionOutput - The return type for the aiCarbonEfficiencyPrediction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AICarbonEfficiencyPredictionInputSchema = z.object({
  location: z.string().describe('The location of the blue carbon ecosystem.'),
  ecosystemType: z.enum(['mangroves', 'seagrass']).describe('The type of blue carbon ecosystem.'),
  healthScore: z.number().min(0).max(100).describe('The health score of the ecosystem (0-100).'),
  investmentLevel: z.number().min(0).describe('The level of investment in the ecosystem.'),
});

export type AICarbonEfficiencyPredictionInput = z.infer<typeof AICarbonEfficiencyPredictionInputSchema>;

const AICarbonEfficiencyPredictionOutputSchema = z.object({
  predictedEfficiency: z.number().min(0).max(100).describe('The predicted carbon absorption efficiency (0-100).'),
  rationale: z.string().describe('The AI rationale for the prediction.'),
});

export type AICarbonEfficiencyPredictionOutput = z.infer<typeof AICarbonEfficiencyPredictionOutputSchema>;

export async function aiCarbonEfficiencyPrediction(input: AICarbonEfficiencyPredictionInput): Promise<AICarbonEfficiencyPredictionOutput> {
  return aiCarbonEfficiencyPredictionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCarbonEfficiencyPredictionPrompt',
  input: {schema: AICarbonEfficiencyPredictionInputSchema},
  output: {schema: AICarbonEfficiencyPredictionOutputSchema},
  prompt: `You are an AI assistant specialized in predicting the carbon absorption efficiency of blue carbon ecosystems.

  Based on the location, ecosystem type, health score, and investment level, predict the carbon absorption efficiency.

  Location: {{{location}}}
  Ecosystem Type: {{{ecosystemType}}}
  Health Score: {{{healthScore}}}
  Investment Level: {{{investmentLevel}}}

  Provide a rationale for your prediction.

  Output should be a JSON object with 'predictedEfficiency' (0-100) and 'rationale'.
  Make sure your response can be parsed by JSON.parse.
  `,
});

const aiCarbonEfficiencyPredictionFlow = ai.defineFlow(
  {
    name: 'aiCarbonEfficiencyPredictionFlow',
    inputSchema: AICarbonEfficiencyPredictionInputSchema,
    outputSchema: AICarbonEfficiencyPredictionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
