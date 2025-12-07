'use client';

import { useState, FormEvent } from 'react';
import ToolLayout from '@/components/tools/ToolLayout';
import LeadMagnetForm from '@/components/tools/LeadMagnetForm';

interface FormData {
  industry: string;
  targetMarket: string;
  budget: string;
  techInterests: string;
}

interface BusinessIdea {
  name: string;
  description: string;
  requiredSkills: string[];
  estimatedCost: string;
  marketScore: number;
  timeToLaunch: string;
  revenueModel: string;
}

export default function AIBusinessIdeaGenerator() {
  const [formData, setFormData] = useState<FormData>({
    industry: '',
    targetMarket: '',
    budget: '',
    techInterests: '',
  });

  const [ideas, setIdeas] = useState<BusinessIdea[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setShowLeadForm(false);

    try {
      const response = await fetch('/api/tools/generate-ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setIdeas(data.ideas);
        // Show lead form after displaying results
        setTimeout(() => setShowLeadForm(true), 1000);
      }
    } catch (error) {
      console.error('Error generating ideas:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <ToolLayout
      title="AI Business Idea Generator"
      description="Generate viable business ideas tailored to your skills, budget, and interests using AI"
    >
      {/* Input Form */}
      <div className="glass rounded-2xl p-8 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Industry */}
          <div>
            <label htmlFor="industry" className="block text-sm font-medium mb-2">
              Industry or Area of Interest *
            </label>
            <input
              type="text"
              id="industry"
              value={formData.industry}
              onChange={(e) => handleChange('industry', e.target.value)}
              className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
              placeholder="e.g., Healthcare, E-commerce, SaaS, Education"
              required
            />
          </div>

          {/* Target Market */}
          <div>
            <label htmlFor="targetMarket" className="block text-sm font-medium mb-2">
              Target Market *
            </label>
            <input
              type="text"
              id="targetMarket"
              value={formData.targetMarket}
              onChange={(e) => handleChange('targetMarket', e.target.value)}
              className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
              placeholder="e.g., Small businesses, Developers, Fitness enthusiasts"
              required
            />
          </div>

          {/* Budget Range */}
          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-2">
              Startup Budget *
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => handleChange('budget', e.target.value)}
              className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
              required
            >
              <option value="">Select budget range</option>
              <option value="0-1k">$0 - $1,000 (Bootstrap)</option>
              <option value="1k-5k">$1,000 - $5,000 (Micro Startup)</option>
              <option value="5k-25k">$5,000 - $25,000 (Small Business)</option>
              <option value="25k-100k">$25,000 - $100,000 (Growth Stage)</option>
              <option value="100k+">$100,000+ (Funded Startup)</option>
            </select>
          </div>

          {/* Tech Interests */}
          <div>
            <label htmlFor="techInterests" className="block text-sm font-medium mb-2">
              Technical Skills or Interests *
            </label>
            <textarea
              id="techInterests"
              value={formData.techInterests}
              onChange={(e) => handleChange('techInterests', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:border-[var(--accent-purple)] transition-colors resize-none"
              placeholder="e.g., Web development, AI/ML, Mobile apps, Marketing, Design"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isGenerating}
            className="w-full px-8 py-4 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-blue)] rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? 'Generating Ideas...' : 'Generate Business Ideas 🚀'}
          </button>
        </form>
      </div>

      {/* Results */}
      {ideas.length > 0 && (
        <>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Your Personalized <span className="gradient-text">Business Ideas</span>
            </h2>

            <div className="space-y-6">
              {ideas.map((idea, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 hover:border-[var(--accent-purple)] transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{idea.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Market Score:</span>
                      <span className="px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent)] rounded-full font-bold">
                        {idea.marketScore}/100
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">{idea.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {idea.requiredSkills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Details</h4>
                      <div className="space-y-1 text-sm">
                        <p>💰 Estimated Cost: <span className="text-white font-semibold">{idea.estimatedCost}</span></p>
                        <p>⏱️ Time to Launch: <span className="text-white font-semibold">{idea.timeToLaunch}</span></p>
                        <p>💵 Revenue Model: <span className="text-white font-semibold">{idea.revenueModel}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Magnet Form */}
          {showLeadForm && (
            <div className="mb-8">
              <LeadMagnetForm
                toolName="AI Business Idea Generator"
                onSuccess={() => {
                  // Could trigger PDF download or redirect
                  console.log('Lead captured successfully');
                }}
              />
            </div>
          )}
        </>
      )}

      {/* Empty State - How It Works */}
      {ideas.length === 0 && !isGenerating && (
        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            How It <span className="gradient-text">Works</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-lg font-semibold mb-2">1. Enter Your Details</h3>
              <p className="text-gray-400 text-sm">
                Tell us about your industry interests, target market, budget, and skills
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold mb-2">2. AI Analysis</h3>
              <p className="text-gray-400 text-sm">
                Our AI analyzes market trends, competition, and opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-lg font-semibold mb-2">3. Get Ideas</h3>
              <p className="text-gray-400 text-sm">
                Receive 5 viable business ideas with actionable insights
              </p>
            </div>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
