import { NextRequest, NextResponse } from 'next/server';

interface NewsletterRequest {
  email: string;
  source: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body: NewsletterRequest = await request.json();
    const { email, source } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate source
    if (!source || typeof source !== 'string') {
      return NextResponse.json(
        { error: 'Source is required' },
        { status: 400 }
      );
    }

    // Get request metadata
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const timestamp = new Date().toISOString();

    // Log to console (can be integrated with Resend, ConvertKit, etc.)
    console.log('📧 Newsletter Subscription:', {
      email,
      source,
      ip,
      userAgent,
      timestamp
    });

    // TODO: Integration options (uncomment when ready)
    //
    // Option 1: Resend
    // await fetch('https://api.resend.com/audiences/{audience_id}/contacts', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ email })
    // });
    //
    // Option 2: ConvertKit
    // await fetch('https://api.convertkit.com/v3/forms/{form_id}/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     api_key: process.env.CONVERTKIT_API_KEY,
    //     email,
    //     tags: [source]
    //   })
    // });
    //
    // Option 3: Mailchimp
    // await fetch(`https://{dc}.api.mailchimp.com/3.0/lists/{list_id}/members`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email_address: email,
    //     status: 'subscribed',
    //     tags: [source]
    //   })
    // });
    //
    // Option 4: Save to Database (Supabase)
    // const { data, error } = await supabase
    //   .from('newsletter_subscribers')
    //   .insert([
    //     {
    //       email,
    //       source,
    //       ip,
    //       user_agent: userAgent,
    //       subscribed_at: timestamp
    //     }
    //   ]);

    // Simulate processing delay (remove in production)
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        message: 'Successfully subscribed! Check your email for confirmation.',
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
