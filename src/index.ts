import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { PrismaClient } from '@prisma/client';
import { waitlistRoutes } from './routes/waitlist';
import { analyticsRoutes } from './routes/analytics';
import { errorHandler } from './middleware/errorHandler';
import { validateRequest } from './middleware/validateRequest';
import { config } from './config';

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(helmet());
app.use(cors({
  origin: config.server.frontendUrl,
  credentials: true
}));
app.use(express.json());

// Rate limiting
const limiter = rateLimit(config.rateLimit);
app.use(limiter);

// Routes
app.use('/api/waitlist', validateRequest, waitlistRoutes);
app.use('/api/analytics', validateRequest, analyticsRoutes);

// Error handling
app.use(errorHandler);

app.listen(config.server.port, () => {
  console.log(`Server running on port ${config.server.port}`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});