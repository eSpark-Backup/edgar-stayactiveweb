import { PrismaClient } from '@prisma/client';
import { WaitlistUser } from '../types';
import { sendWelcomeEmail } from './email';

const prisma = new PrismaClient();

export class WaitlistService {
  static async createUser(name: string, email: string): Promise<WaitlistUser> {
    const existingUser = await prisma.waitlist.findUnique({
      where: { email }
    });

    if (existingUser) {
      throw new Error('Email already registered');
    }

    const user = await prisma.waitlist.create({
      data: {
        name,
        email,
        points: 50,
      }
    });

    await sendWelcomeEmail(email, name);

    return user;
  }

  static async getUserByEmail(email: string): Promise<WaitlistUser | null> {
    return prisma.waitlist.findUnique({
      where: { email }
    });
  }
}