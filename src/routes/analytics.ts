import { Router } from 'express';
import { AnalyticsService } from '../services/analytics';
import { analyticsSchema } from '../utils/validation';
import { sendCreated, sendError } from '../utils/response';

const router = Router();

router.post('/track', async (req, res) => {
  try {
    const { event, metadata } = analyticsSchema.parse(req.body);
    const trackedEvent = await AnalyticsService.trackEvent(event, metadata);
    
    sendCreated(res, trackedEvent, 'Event tracked successfully');
  } catch (error) {
    sendError(res, 'Failed to track event', 500);
  }
});

export const analyticsRoutes = router;