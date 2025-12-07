'use client';

import { useState, FormEvent } from 'react';

interface NewsletterFormProps {
  variant?: 'inline' | 'hero' | 'footer' | 'popup';
  source: string;
  className?: string;
  onSuccess?: () => void;
}

export default function NewsletterForm({
  variant = 'inline',
  source,
  className = '',
  onSuccess
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully subscribed!');
        setEmail('');
        onSuccess?.();
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  // Variant-specific styles
  const variantStyles = {
    inline: 'max-w-md',
    hero: 'max-w-2xl',
    footer: 'max-w-sm',
    popup: 'w-full'
  };

  const inputStyles = {
    inline: 'text-sm',
    hero: 'text-base md:text-lg py-4',
    footer: 'text-sm',
    popup: 'text-base'
  };

  const buttonStyles = {
    inline: 'text-sm px-4 py-2',
    hero: 'text-base md:text-lg px-6 md:px-8 py-3 md:py-4',
    footer: 'text-sm px-4 py-2',
    popup: 'text-base px-6 py-3'
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading' || status === 'success'}
            className={`
              flex-1 ${inputStyles[variant]}
              px-4 py-3 rounded-lg
              glass
              text-foreground placeholder:text-muted-foreground
              focus:outline-none focus:ring-2 focus:ring-primary/50
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200
            `}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`
              ${buttonStyles[variant]}
              bg-gradient-to-r from-primary to-primary-light
              hover:from-primary-dark hover:to-primary
              text-primary-foreground font-semibold rounded-lg
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-300
              shadow-lg hover:shadow-primary/50
              transform hover:scale-105 active:scale-95
            `}
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Subscribing...
              </span>
            ) : status === 'success' ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Subscribed!
              </span>
            ) : (
              'Subscribe'
            )}
          </button>
        </div>

        {/* Status Messages */}
        {message && (
          <div
            className={`
              text-sm p-3 rounded-lg glass
              ${status === 'success'
                ? 'text-green-400 border border-green-400/30'
                : 'text-red-400 border border-red-400/30'
              }
              animate-in fade-in slide-in-from-top-2 duration-300
            `}
          >
            {message}
          </div>
        )}
      </form>

      {/* Privacy Note */}
      {variant !== 'inline' && (
        <p className="text-xs text-muted-foreground mt-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      )}
    </div>
  );
}
