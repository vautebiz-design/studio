import type { User, IndustryData, BlueCarbonData, Transaction, Report } from './types';

export const MOCK_USERS: User[] = [
  {
    userId: 'user-001',
    role: 'industry',
    companyName: 'EcoLogistics Inc.',
    walletAddress: '0x123...abc',
    email: 'industry@example.com',
  },
  {
    userId: 'user-002',
    role: 'admin',
    companyName: 'BlueBalance Admin',
    walletAddress: '0x456...def',
    email: 'admin@example.com',
  },
  {
    userId: 'user-003',
    role: 'public',
    companyName: '',
    walletAddress: '',
    email: 'public@example.com',
  },
];

export const MOCK_INDUSTRY_DATA: IndustryData[] = [
    {
        industryId: 'user-001',
        emission_tons: 250,
        absorption_tons: 150,
        CNI: 60,
        timestamp: new Date('2024-07-01'),
        verified: true,
    },
    {
        industryId: 'user-001',
        emission_tons: 280,
        absorption_tons: 120,
        CNI: 42,
        timestamp: new Date('2024-06-01'),
        verified: true,
    },
    {
        industryId: 'another-corp',
        emission_tons: 500,
        absorption_tons: 100,
        CNI: 20,
        timestamp: new Date('2024-07-01'),
        verified: false,
    },
];

export const MOCK_BLUE_CARBON_DATA: BlueCarbonData[] = [
    {
        id: 'site-01',
        location: 'Sunda Mangrove Forest, Indonesia',
        lat: -6.200000,
        lon: 106.816666,
        carbon_absorbed: 1200,
        health_score: 88,
        ecosystemType: 'mangroves',
    },
    {
        id: 'site-02',
        location: 'Florida Keys Seagrass Meadow, USA',
        lat: 24.5551,
        lon: -81.7800,
        carbon_absorbed: 850,
        health_score: 92,
        ecosystemType: 'seagrass',
    },
    {
        id: 'site-03',
        location: 'Queensland Coast, Australia',
        lat: -16.9203,
        lon: 145.7710,
        carbon_absorbed: 2500,
        health_score: 75,
        ecosystemType: 'seagrass',
    },
    {
        id: 'site-04',
        location: 'Andaman Islands Mangroves, India',
        lat: 11.7401,
        lon: 92.6586,
        carbon_absorbed: 1800,
        health_score: 95,
        ecosystemType: 'mangroves',
    },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
    {
        txId: 'tx-1001',
        industryId: 'user-001',
        credits_generated: 0,
        credits_used: 50,
        status: 'completed',
        timestamp: new Date('2024-07-15'),
    },
    {
        txId: 'tx-1002',
        industryId: 'another-corp',
        credits_generated: 100,
        credits_used: 0,
        status: 'pending',
        timestamp: new Date('2024-07-20'),
    },
    {
        txId: 'tx-1003',
        industryId: 'user-001',
        credits_generated: 0,
        credits_used: 30,
        status: 'completed',
        timestamp: new Date('2024-06-25'),
    },
    {
        txId: 'tx-1004',
        industryId: 'third-entity',
        credits_generated: 20,
        credits_used: 20,
        status: 'failed',
        timestamp: new Date('2024-07-22'),
    },
];

export const MOCK_REPORTS: Report[] = [
    {
        reportId: 'rep-001',
        industryId: 'user-001',
        reportURL: '/dummy-report.pdf',
        createdAt: new Date('2024-07-01'),
        title: 'Q2 2024 Carbon Footprint Analysis',
    },
    {
        reportId: 'rep-002',
        industryId: 'user-001',
        reportURL: '/dummy-report.pdf',
        createdAt: new Date('2024-04-01'),
        title: 'Q1 2024 Emissions Report',
    },
    {
        reportId: 'rep-003',
        industryId: 'user-001',
        reportURL: '/dummy-report.pdf',
        createdAt: new Date('2024-01-01'),
        title: 'Annual Report 2023',
    },
];

export const MOCK_CHART_DATA = [
  { month: "January", emission: 186, absorption: 80 },
  { month: "February", emission: 305, absorption: 200 },
  { month: "March", emission: 237, absorption: 120 },
  { month: "April", emission: 273, absorption: 190 },
  { month: "May", emission: 209, absorption: 130 },
  { month: "June", emission: 214, absorption: 140 },
]
