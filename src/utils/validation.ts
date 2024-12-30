import { z } from 'zod';

export const waitlistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
});

export const analyticsSchema = z.object({
  event: z.string(),
  metadata: z.record(z.any()).optional(),
});