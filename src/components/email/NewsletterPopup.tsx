'use client';

import { useState, useEffect } from 'react';
import NewsletterForm from './NewsletterForm';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed or subscribed
    const dismissed = localStorage.getItem('newsletter-popup-dismissed');
    const subscribed = localStorage.getItem('newsletter-subscribed');

    if (dismissed || subscribed) {
      setIsDismissed(true);
      return;
    }

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isDismissed) {
        setIsVisible(true);
      }
    };

    // Show after 30 seconds as fallback
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('newsletter-popup-dismissed', 'true');
  };

  const handleSuccess = () => {
    localStorage.setItem('newsletter-subscribed', 'true');
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={handleDismiss}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="
            glass rounded-2xl p-8 md:p-12 max-w-2xl w-full
            pointer-events-auto
            animate-in zoom-in-95 slide-in-from-bottom-4 duration-300
            shadow-2xl
            relative
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="
              absolute top-4 right-4
              text-muted-foreground hover:text-foreground
              transition-colors duration-200
            "
            aria-label="Close popup"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="
              w-16 h-16 rounded-full
              bg-gradient-to-br from-primary to-accent
              flex items-center justify-center
              shadow-lg
            ">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Wait! Get Your <span className="gradient-text">Free AI Toolkit</span>
          </h2>

          {/* Subheading */}
          <p className="text-foreground-secondary text-center mb-8 text-lg">
            Join 10,000+ professionals getting cutting-edge AI insights, tools, and strategies delivered weekly.
          </p>

          {/* Benefits */}
          <div className="grid gap-3 mb-8 text-sm">
            {[
              'Weekly AI industry updates and trends',
              'Exclusive tools and resources',
              'Implementation guides and tutorials',
              'Early access to new features'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-foreground-secondary">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <NewsletterForm
            variant="popup"
            source="exit-intent-popup"
            onSuccess={handleSuccess}
          />
        </div>
      </div>
    </>
  );
}
