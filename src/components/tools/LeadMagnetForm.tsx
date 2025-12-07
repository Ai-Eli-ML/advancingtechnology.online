'use client';

import { useState, FormEvent } from 'react';

interface LeadMagnetFormProps {
  toolName: string;
  onSuccess?: () => void;
}

export default function LeadMagnetForm({ toolName, onSuccess }: LeadMagnetFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          toolName,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setName('');
        setEmail('');
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setSubmitStatus('error');
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Lead form error:', err);
      setSubmitStatus('error');
      setError('Unable to submit. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="glass rounded-2xl p-8 text-center border-[var(--accent)] animate-pulse">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-3 text-[var(--accent)]">
          Check Your Email!
        </h3>
        <p className="text-gray-400">
          We&apos;ve sent your full PDF report to <span className="text-white font-semibold">{email}</span>
        </p>
        <p className="text-gray-500 text-sm mt-4">
          Don&apos;t see it? Check your spam folder.
        </p>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-8">
      <div className="text-center mb-6">
        <div className="text-4xl mb-3">📧</div>
        <h3 className="text-2xl font-bold mb-2">
          Get Your Full <span className="gradient-text">PDF Report</span>
        </h3>
        <p className="text-gray-400">
          Enter your email to receive detailed analysis, market research, and implementation roadmap
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
            placeholder="Your name"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Get My Free PDF Report'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
