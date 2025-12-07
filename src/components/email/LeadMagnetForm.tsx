'use client';

import { useState } from 'react';
import NewsletterForm from './NewsletterForm';

interface LeadMagnetFormProps {
  title: string;
  description: string;
  downloadUrl: string;
  fileName: string;
  source: string;
  thumbnail?: string;
  fileSize?: string;
  fileType?: string;
}

export default function LeadMagnetForm({
  title,
  description,
  downloadUrl,
  fileName,
  source,
  thumbnail,
  fileSize,
  fileType = 'PDF'
}: LeadMagnetFormProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Check if user has already unlocked this resource
  useState(() => {
    const unlocked = localStorage.getItem(`unlocked-${source}`);
    if (unlocked) {
      setIsUnlocked(true);
    }
  });

  const handleSuccess = () => {
    setIsUnlocked(true);
    localStorage.setItem(`unlocked-${source}`, 'true');
  };

  const handleDownload = () => {
    // Trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="glass rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Preview */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex flex-col items-center justify-center">
            {thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnail}
                alt={title}
                className="rounded-lg shadow-2xl max-w-full h-auto mb-4"
              />
            ) : (
              <div className="
                w-48 h-64 rounded-lg
                bg-gradient-to-br from-primary to-accent
                flex items-center justify-center
                shadow-2xl mb-4
              ">
                <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            )}

            {/* File Info */}
            <div className="flex gap-4 text-sm text-muted-foreground">
              {fileType && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {fileType}
                </span>
              )}
              {fileSize && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  {fileSize}
                </span>
              )}
            </div>
          </div>

          {/* Right side - Form or Download */}
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-foreground-secondary mb-8">
              {description}
            </p>

            {isUnlocked ? (
              <div className="space-y-4">
                {/* Success Message */}
                <div className="
                  p-4 rounded-lg
                  bg-green-500/10 border border-green-500/30
                  text-green-400 text-sm
                  flex items-start gap-3
                ">
                  <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold mb-1">Resource Unlocked!</div>
                    <div className="text-green-300">Your download is ready.</div>
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className="
                    w-full py-4 px-6 rounded-lg
                    bg-gradient-to-r from-primary to-primary-light
                    hover:from-primary-dark hover:to-primary
                    text-primary-foreground font-bold text-lg
                    transition-all duration-300
                    shadow-lg hover:shadow-primary/50
                    transform hover:scale-105 active:scale-95
                    flex items-center justify-center gap-3
                  "
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Now
                </button>

                {/* Additional Resources */}
                <p className="text-xs text-muted-foreground text-center">
                  Check your email for additional resources and next steps.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Benefits */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent mb-2">What you&apos;ll get:</h3>
                  {[
                    'Instant access to the resource',
                    'Weekly AI insights and updates',
                    'Exclusive tools and templates',
                    'Early access to new content'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Newsletter Form */}
                <div>
                  <NewsletterForm
                    variant="popup"
                    source={source}
                    onSuccess={handleSuccess}
                  />
                </div>

                {/* Lock Icon */}
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure. Your data is protected.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
