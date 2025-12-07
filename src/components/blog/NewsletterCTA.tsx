'use client';

import { useState } from 'react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Integrate with email service (e.g., Mailchimp, ConvertKit, Resend)
    // For now, just simulate success
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="mt-12 glass rounded-2xl p-8 md:p-12 text-center">
      <h3 className="text-3xl font-bold mb-4">
        Stay Updated with <span className="gradient-text">AI Insights</span>
      </h3>
      <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
        Get the latest articles on AI development, autonomous systems, and business automation
        delivered to your inbox. No spam, unsubscribe anytime.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
          </button>
        </div>
      </form>

      {status === 'error' && (
        <p className="mt-4 text-red-400 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
