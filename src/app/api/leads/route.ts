import { NextRequest, NextResponse } from 'next/server';

interface LeadData {
  name: string;
  email: string;
  toolName: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, toolName, timestamp }: LeadData = body;

    // Validate inputs
    if (!name || !email || !toolName) {
      return NextResponse.json(
        { error: 'Name, email, and tool name are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log lead (in production, save to CRM/database)
    console.log('New lead captured:', {
      name,
      email,
      toolName,
      timestamp: timestamp || new Date().toISOString(),
    });

    // TODO: In production, integrate with:
    // - Email marketing platform (ConvertKit, Mailchimp, etc.)
    // - CRM (HubSpot, Salesforce, etc.)
    // - Database (Supabase, PostgreSQL, etc.)
    // - Send welcome email with PDF report

    // For now, simulate success
    // In production, you would:
    // 1. Save to database
    // 2. Add to email list
    // 3. Send PDF via email
    // 4. Trigger automation sequences

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      email: email,
    });
  } catch (error) {
    console.error('Error in leads API:', error);
    return NextResponse.json(
      { error: 'Failed to capture lead' },
      { status: 500 }
    );
  }
}
