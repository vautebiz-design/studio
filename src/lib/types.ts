
export type UserRole = 'industry' | 'admin' | 'public';

export interface User {
  userId: string;
  role: UserRole;
  companyName: string;
  walletAddress: string;
  email: string;
}

export interface IndustryData {
  industryId: string;
  emission_tons: number;
  absorption_tons: number;
  CNI: number;
  timestamp: Date;
  verified: boolean;
}

export interface BlueCarbonData {
  id: string;
  location: string;
  lat: number;
  lon: number;
  carbon_absorbed: number;
  health_score: number;
  ecosystemType: 'mangroves' | 'seagrass';
}

export interface Transaction {
  txId: string;
  industryId: string;
  credits_generated: number;
  credits_used: number;
  status: 'completed' | 'pending' | 'failed';
  timestamp: Date;
}

export interface Report {
  reportId: string;
  industryId: string;
  reportURL: string;
  createdAt: Date;
  title: string;
}
