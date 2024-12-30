export interface WaitlistUser {
  id: string;
  email: string;
  name: string;
  points: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AnalyticsEvent {
  id: string;
  event: string;
  metadata?: Record<string, any>;
  timestamp: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}