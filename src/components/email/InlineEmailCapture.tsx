'use client';

import NewsletterForm from './NewsletterForm';

interface InlineEmailCaptureProps {
  title?: string;
  description?: string;
  leadMagnet?: string;
  source?: string;
  className?: string;
}

export default function InlineEmailCapture({
  title = 'Want more like this?',
  description = 'Get weekly AI insights and practical guides delivered to your inbox.',
  leadMagnet,
  source = 'blog-inline',
  className = ''
}: InlineEmailCaptureProps) {
  return (
    <div className={`
      my-12 p-8 rounded-xl glass
      border-l-4 border-accent
      ${className}
    `}>
      {/* Icon */}
      <div className="flex items-start gap-4 mb-6">
        <div className="
          w-12 h-12 rounded-lg
          bg-gradient-to-br from-primary to-accent
          flex items-center justify-center shrink-0
          shadow-lg
        ">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">
            {title}
          </h3>
          <p className="text-foreground-secondary">
            {description}
          </p>

          {leadMagnet && (
            <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Free: {leadMagnet}
            </div>
          )}
        </div>
      </div>

      {/* Form */}
      <NewsletterForm
        variant="inline"
        source={source}
      />

      {/* Social Proof */}
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
            />
          ))}
        </div>
        <span>Join 10,000+ subscribers</span>
      </div>
    </div>
  );
}
