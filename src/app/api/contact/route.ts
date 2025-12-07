import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // For now, just log the contact request
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      company: body.company || 'N/A',
      message: body.message.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
    });

    // In production, you would send an email here:
    /*
    await sendEmail({
      to: 'contact@advancingtechnology.online',
      from: 'noreply@advancingtechnology.online',
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });
    */

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
