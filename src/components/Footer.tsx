'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer' }),
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
    <footer className="border-t border-[var(--border)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="glass rounded-2xl p-8 md:p-12 mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get Weekly <span className="gradient-text">AI Insights</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Join 5,000+ entrepreneurs learning to build with AI. Free tutorials,
            tools, and insights delivered every Tuesday.
          </p>

          {status === 'success' ? (
            <div className="text-[var(--accent)] font-semibold">
              You&apos;re in! Check your email for a welcome gift.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 bg-white/5 border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50"
              >
                {status === 'loading' ? 'Joining...' : 'Subscribe Free'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-red-400 mt-2 text-sm">Something went wrong. Please try again.</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold gradient-text mb-4">
              AdvancingTechnology
            </div>
            <p className="text-gray-400 text-sm">
              Free education, tools, and resources for AI entrepreneurs.
              Building in public since 2023.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/blog" className="hover:text-[var(--accent-purple)] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[var(--accent-purple)] transition-colors">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[var(--accent-purple)] transition-colors">
                  Free Tools
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:text-[var(--accent-purple)] transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Upgrade</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://advancingtechnology.dev"
                  className="hover:text-[var(--accent-purple)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AI Marketplace
                </a>
              </li>
              <li>
                <a
                  href="https://advancingtechnology.dev/plugins"
                  className="hover:text-[var(--accent-purple)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Premium Plugins
                </a>
              </li>
              <li>
                <a
                  href="https://elijahbrown.info"
                  className="hover:text-[var(--accent-purple)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://youtube.com/@advancingtechnology"
                  className="hover:text-[var(--accent-purple)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/advtech_ai"
                  className="hover:text-[var(--accent-purple)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AdvancingTechnology"
                  className="hover:text-[var(--accent-purple)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--accent-purple)] transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; {currentYear} AdvancingTechnology. Building in public.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--accent-purple)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--accent-purple)] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
