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
    const { email, source = 'website' } = body;

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

    // Get request metadata
    const timestamp = new Date().toISOString();

    console.log('📧 Newsletter Subscription:', { email, source, timestamp });

    // Send welcome email via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || 'AdvancingTechnology <hello@advancingtechnology.online>',
            to: email,
            subject: 'Welcome to AdvancingTechnology! 🚀',
            html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; padding: 20px 0; }
    .logo { font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .content { background: #f9fafb; border-radius: 12px; padding: 30px; margin: 20px 0; }
    .button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; }
    .footer { text-align: center; color: #666; font-size: 14px; padding: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">AdvancingTechnology</div>
    </div>

    <div class="content">
      <h1>Welcome aboard! 🎉</h1>
      <p>Hey there,</p>
      <p>Thanks for subscribing to the AdvancingTechnology newsletter. You're now part of a community of 5,000+ entrepreneurs learning to build with AI.</p>

      <p><strong>Here's what you can expect:</strong></p>
      <ul>
        <li>📧 Weekly AI insights every Tuesday</li>
        <li>🛠️ Free tools and templates</li>
        <li>💡 Behind-the-scenes of building in public</li>
        <li>🎯 Actionable tips you can use immediately</li>
      </ul>

      <p>While you're here, check out these resources:</p>

      <p style="text-align: center; margin: 30px 0;">
        <a href="https://advancingtechnology.online/blog" class="button">Read the Blog →</a>
      </p>

      <p>Or try our free AI Business Idea Generator:</p>
      <p style="text-align: center;">
        <a href="https://advancingtechnology.online/tools/ai-business-idea-generator" class="button">Try Free Tool →</a>
      </p>
    </div>

    <div class="footer">
      <p>Building the future with AI,<br><strong>Sxilent</strong><br>AdvancingTechnology</p>
      <p>Subscribed from: ${source}</p>
    </div>
  </div>
</body>
</html>
            `
          })
        });

        if (!resendResponse.ok) {
          const errorData = await resendResponse.json();
          console.error('Resend API error:', errorData);
        } else {
          console.log('✅ Welcome email sent via Resend');
        }
      } catch (resendError) {
        console.error('Resend error:', resendError);
        // Don't fail the subscription if email fails
      }
    }

    // Add to ConvertKit if configured
    if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
      try {
        const ckResponse = await fetch(
          `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              api_key: process.env.CONVERTKIT_API_KEY,
              email,
              tags: [source]
            })
          }
        );

        if (ckResponse.ok) {
          console.log('✅ Added to ConvertKit');
        }
      } catch (ckError) {
        console.error('ConvertKit error:', ckError);
      }
    }

    return NextResponse.json(
      {
        message: 'Successfully subscribed! Check your email for a welcome gift.',
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
