'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

const benefits = [
  {
    icon: '📧',
    title: 'Weekly AI Insights',
    description: 'Curated lessons from building AI products, delivered every Tuesday.',
  },
  {
    icon: '🛠️',
    title: 'Free Tools & Templates',
    description: 'Exclusive access to tools and templates before anyone else.',
  },
  {
    icon: '💡',
    title: 'Behind-the-Scenes',
    description: 'Raw updates from building in public—wins, losses, and everything in between.',
  },
  {
    icon: '🎯',
    title: 'Actionable Tips',
    description: 'No fluff. Just practical advice you can implement immediately.',
  },
];

const pastIssues = [
  {
    title: 'How I Automated 80% of My Workday',
    date: 'Dec 3, 2025',
    preview: 'The exact AI workflows I use to save 30+ hours per week...',
  },
  {
    title: 'The $10K Mistake That Taught Me Everything',
    date: 'Nov 26, 2025',
    preview: 'I lost $10K on a failed product launch. Here\'s what I learned...',
  },
  {
    title: 'My Tech Stack for 2025 (Complete Breakdown)',
    date: 'Nov 19, 2025',
    preview: 'Every tool, API, and framework powering my AI business...',
  },
];

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'newsletter-page' }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <div className="gradient-mesh" />
      <Navigation />

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join 5,000+ Learning to
              <br />
              <span className="gradient-text">Build with AI</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Weekly insights on AI development, automation, and building a solopreneur business.
              Free forever. No spam.
            </p>

            {/* Signup Form */}
            {status === 'success' ? (
              <div className="glass rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold mb-2">You&apos;re in!</h2>
                <p className="text-gray-400">
                  Check your email for a welcome gift. See you Tuesday!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-5 py-4 bg-white/5 border border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--accent-purple)] transition-colors text-lg"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-50 text-lg"
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
                  </button>
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                )}
                <p className="text-gray-500 text-sm">
                  Join 5,000+ subscribers. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

          {/* What You'll Get */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">What You&apos;ll Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="glass rounded-2xl p-6 hover:border-[var(--accent-purple)] transition-all"
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Past Issues */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Recent Issues</h2>
            <div className="space-y-4">
              {pastIssues.map((issue) => (
                <div
                  key={issue.title}
                  className="glass rounded-xl p-6 hover:border-[var(--accent-purple)] transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{issue.title}</h3>
                    <span className="text-gray-500 text-sm">{issue.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{issue.preview}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Social Proof */}
          <section className="glass rounded-3xl p-8 text-center">
            <h2 className="text-xl font-bold mb-6">Trusted by Builders at</h2>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <span>Google</span>
              <span>Meta</span>
              <span>Stripe</span>
              <span>OpenAI</span>
              <span>Vercel</span>
              <span>+ 100s of startups</span>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
