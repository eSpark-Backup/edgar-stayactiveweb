import { Request, Response, NextFunction } from 'express';

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Add API key validation if needed
  const apiKey = req.headers['x-api-key'];
  
  if (process.env.NODE_ENV === 'production' && !apiKey) {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }

  next();
};