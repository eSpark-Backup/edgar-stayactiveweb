import { Response } from 'express';
import { ApiResponse } from '../types';

export function sendSuccess<T>(res: Response, data: T, message = 'Success'): void {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data
  };
  res.status(200).json(response);
}

export function sendError(res: Response, message: string, statusCode = 500): void {
  const response: ApiResponse = {
    success: false,
    message,
    error: message
  };
  res.status(statusCode).json(response);
}

export function sendCreated<T>(res: Response, data: T, message = 'Created successfully'): void {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data
  };
  res.status(201).json(response);
}