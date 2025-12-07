import { NextRequest, NextResponse } from 'next/server';

interface BusinessIdea {
  name: string;
  description: string;
  requiredSkills: string[];
  estimatedCost: string;
  marketScore: number;
  timeToLaunch: string;
  revenueModel: string;
}

// Template-based idea generation (can be replaced with AI later)
function generateIdeas(formData: {
  industry: string;
  targetMarket: string;
  budget: string;
  techInterests: string;
}): BusinessIdea[] {
  const { industry, targetMarket, budget, techInterests } = formData;

  // Parse budget range
  const budgetMap: Record<string, { min: number; max: number }> = {
    '0-1k': { min: 0, max: 1000 },
    '1k-5k': { min: 1000, max: 5000 },
    '5k-25k': { min: 5000, max: 25000 },
    '25k-100k': { min: 25000, max: 100000 },
    '100k+': { min: 100000, max: 500000 },
  };

  const budgetRange = budgetMap[budget] || { min: 0, max: 1000 };
  const isLowBudget = budgetRange.max <= 5000;
  const isMidBudget = budgetRange.max > 5000 && budgetRange.max <= 25000;
  const isHighBudget = budgetRange.max > 25000;

  // Check for tech skills
  const hasTech = techInterests.toLowerCase().includes('dev') ||
                  techInterests.toLowerCase().includes('program') ||
                  techInterests.toLowerCase().includes('code');
  const hasAI = techInterests.toLowerCase().includes('ai') ||
                techInterests.toLowerCase().includes('ml') ||
                techInterests.toLowerCase().includes('machine learning');
  const hasMarketing = techInterests.toLowerCase().includes('market') ||
                       techInterests.toLowerCase().includes('seo') ||
                       techInterests.toLowerCase().includes('content');

  const ideas: BusinessIdea[] = [];

  // Generate ideas based on input

  // Idea 1: SaaS/Digital Product (if tech skills)
  if (hasTech) {
    ideas.push({
      name: `${industry} Automation SaaS for ${targetMarket}`,
      description: `A cloud-based platform that automates repetitive tasks in the ${industry.toLowerCase()} industry, specifically designed for ${targetMarket.toLowerCase()}. Streamline workflows, save time, and increase productivity with AI-powered automation.`,
      requiredSkills: ['Web Development', 'Cloud Infrastructure', 'UI/UX Design', hasAI ? 'AI/ML' : 'API Integration'],
      estimatedCost: isLowBudget ? '$500 - $2,000' : isMidBudget ? '$5,000 - $15,000' : '$25,000 - $75,000',
      marketScore: 85,
      timeToLaunch: isLowBudget ? '2-3 months' : isMidBudget ? '4-6 months' : '6-12 months',
      revenueModel: 'Subscription (MRR)',
    });
  }

  // Idea 2: Marketplace/Platform
  ideas.push({
    name: `${industry} Marketplace Connecting ${targetMarket}`,
    description: `A two-sided marketplace platform connecting service providers and customers in the ${industry.toLowerCase()} space. Focus on ${targetMarket.toLowerCase()} with features like instant booking, reviews, and secure payments.`,
    requiredSkills: ['Full-Stack Development', 'Payment Integration', 'Marketing', 'Community Management'],
    estimatedCost: isMidBudget || isHighBudget ? '$15,000 - $50,000' : '$3,000 - $8,000',
    marketScore: 78,
    timeToLaunch: isLowBudget ? '3-4 months' : '6-9 months',
    revenueModel: 'Commission per transaction',
  });

  // Idea 3: AI-Powered Tool (if AI interest)
  if (hasAI) {
    ideas.push({
      name: `AI ${industry} Assistant for ${targetMarket}`,
      description: `An intelligent AI assistant that helps ${targetMarket.toLowerCase()} solve common ${industry.toLowerCase()} challenges. Uses machine learning to provide personalized recommendations and automate decision-making.`,
      requiredSkills: ['AI/ML Engineering', 'Python', 'API Development', 'Data Analysis'],
      estimatedCost: isMidBudget || isHighBudget ? '$20,000 - $60,000' : '$5,000 - $12,000',
      marketScore: 92,
      timeToLaunch: '4-8 months',
      revenueModel: 'Freemium + API credits',
    });
  } else {
    // Idea 3 alternative: Consulting/Service
    ideas.push({
      name: `${industry} Consulting Agency for ${targetMarket}`,
      description: `A specialized consulting service helping ${targetMarket.toLowerCase()} navigate ${industry.toLowerCase()} challenges. Offer strategic advice, implementation support, and ongoing optimization services.`,
      requiredSkills: ['Industry Expertise', hasMarketing ? 'Digital Marketing' : 'Business Development', 'Client Management', 'Strategy'],
      estimatedCost: isLowBudget ? '$500 - $2,000' : '$3,000 - $10,000',
      marketScore: 73,
      timeToLaunch: '1-2 months',
      revenueModel: 'Retainer + project fees',
    });
  }

  // Idea 4: Content/Education Platform
  ideas.push({
    name: `${industry} Education Platform for ${targetMarket}`,
    description: `An online learning platform offering courses, workshops, and resources specifically for ${targetMarket.toLowerCase()} in the ${industry.toLowerCase()} space. Build a community while monetizing your expertise.`,
    requiredSkills: ['Content Creation', hasMarketing ? 'SEO/Marketing' : 'Community Building', 'Course Design', hasTech ? 'Web Development' : 'Platform Management'],
    estimatedCost: isLowBudget ? '$300 - $1,500' : isMidBudget ? '$2,000 - $8,000' : '$10,000 - $30,000',
    marketScore: 81,
    timeToLaunch: isLowBudget ? '1-3 months' : '3-6 months',
    revenueModel: 'Course sales + memberships',
  });

  // Idea 5: Niche Tool/Widget
  if (hasTech) {
    ideas.push({
      name: `${industry} Analytics Dashboard for ${targetMarket}`,
      description: `A specialized analytics and reporting tool that helps ${targetMarket.toLowerCase()} track key metrics in their ${industry.toLowerCase()} operations. Beautiful visualizations, automated reports, and actionable insights.`,
      requiredSkills: ['Data Visualization', 'Backend Development', 'Database Design', 'Analytics'],
      estimatedCost: isLowBudget ? '$1,000 - $3,000' : isMidBudget ? '$5,000 - $15,000' : '$20,000 - $50,000',
      marketScore: 76,
      timeToLaunch: '2-4 months',
      revenueModel: 'Monthly subscription',
    });
  } else {
    // Alternative: Physical Product/Service
    ideas.push({
      name: `Premium ${industry} Service for ${targetMarket}`,
      description: `A white-glove service offering in the ${industry.toLowerCase()} space, targeting ${targetMarket.toLowerCase()} who value quality and personalization. Focus on premium positioning and exceptional customer experience.`,
      requiredSkills: ['Customer Service', 'Operations', hasMarketing ? 'Brand Marketing' : 'Sales', 'Quality Control'],
      estimatedCost: isLowBudget ? '$1,000 - $3,000' : isMidBudget ? '$5,000 - $15,000' : '$20,000 - $60,000',
      marketScore: 69,
      timeToLaunch: isLowBudget ? '1-2 months' : '3-5 months',
      revenueModel: 'Premium pricing per project',
    });
  }

  return ideas.slice(0, 5); // Return top 5 ideas
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { industry, targetMarket, budget, techInterests } = body;

    // Validate inputs
    if (!industry || !targetMarket || !budget || !techInterests) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Generate ideas
    const ideas = generateIdeas({ industry, targetMarket, budget, techInterests });

    // Log usage (in production, save to database)
    console.log('Idea generation request:', {
      timestamp: new Date().toISOString(),
      industry,
      targetMarket,
      budget,
      ideasGenerated: ideas.length,
    });

    return NextResponse.json({
      success: true,
      ideas,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error in generate-ideas API:', error);
    return NextResponse.json(
      { error: 'Failed to generate ideas' },
      { status: 500 }
    );
  }
}
