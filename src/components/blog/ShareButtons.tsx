'use client';

import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://advancingtechnology.online/blog/${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  return (
    <div className="glass rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Share this article</h3>
      <div className="flex flex-wrap gap-3">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#1DA1F2]/20 text-[#1DA1F2] rounded-lg hover:bg-[#1DA1F2]/30 transition-all font-medium"
        >
          Twitter
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#0A66C2]/20 text-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/30 transition-all font-medium"
        >
          LinkedIn
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#1877F2]/20 text-[#1877F2] rounded-lg hover:bg-[#1877F2]/30 transition-all font-medium"
        >
          Facebook
        </a>
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-[var(--accent)]/20 text-[var(--accent)] rounded-lg hover:bg-[var(--accent)]/30 transition-all font-medium"
        >
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
    </div>
  );
}
