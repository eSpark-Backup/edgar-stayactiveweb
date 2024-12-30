import { Router } from 'express';
import { WaitlistService } from '../services/waitlist';
import { waitlistSchema } from '../utils/validation';
import { sendCreated, sendError } from '../utils/response';
import { z } from 'zod';

const router = Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email } = waitlistSchema.parse(req.body);
    const user = await WaitlistService.createUser(name, email);
    
    sendCreated(res, {
      name: user.name,
      email: user.email,
      points: user.points
    }, 'Successfully joined waitlist');
  } catch (error) {
    if (error instanceof z.ZodError) {
      sendError(res, 'Invalid input', 400);
    } else if (error instanceof Error && error.message === 'Email already registered') {
      sendError(res, error.message, 409);
    } else {
      sendError(res, 'Server error', 500);
    }
  }
});

export const waitlistRoutes = router;