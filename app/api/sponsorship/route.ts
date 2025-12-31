// app/api/sponsorship/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import { z } from 'zod';
import { SponsorshipEmail } from '@/emails/SponsorShipEmail';
import { ReactNode } from 'react';

// Validation schema
const sponsorshipSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  organisation: z.string().min(2, 'Organisation name is required'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  city: z.string().min(2, 'City is required'),
  country: z.string().min(2, 'Country is required'),
  sponsorshipType: z.string().min(1, 'Please select a sponsorship type'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate input
    const validatedData = sponsorshipSchema.parse(body);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Sponsorship Requests <onboarding@resend.dev>', // Update this to your verified domain
      to: ['bunnyking828@gmail.com'], // Your admin email
      replyTo: validatedData.email, // User's email for easy reply
      subject: `New Sponsorship Request: ${validatedData.sponsorshipType}`,
      react: SponsorshipEmail(validatedData) as ReactNode,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Sponsorship request submitted successfully!',
        emailId: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Sponsorship submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}