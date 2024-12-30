import { PrismaClient } from '@prisma/client';
import { AnalyticsEvent } from '../types';

const prisma = new PrismaClient();

export class AnalyticsService {
  static async trackEvent(event: string, metadata?: Record<string, any>): Promise<AnalyticsEvent> {
    return prisma.analytics.create({
      data: {
        event,
        metadata,
        timestamp: new Date()
      }
    });
  }

  static async getEventsByType(eventType: string): Promise<AnalyticsEvent[]> {
    return prisma.analytics.findMany({
      where: { event: eventType },
      orderBy: { timestamp: 'desc' }
    });
  }
}