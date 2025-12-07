import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const resources = [
  {
    category: 'Guides',
    items: [
      {
        title: 'The Complete AI Solopreneur Playbook',
        description: '50-page guide to building a one-person AI business from scratch.',
        type: 'PDF',
        pages: 50,
        downloadUrl: '#',
        featured: true,
      },
      {
        title: 'AI Tech Stack Decision Matrix',
        description: 'Compare 20+ AI tools and frameworks to find your perfect stack.',
        type: 'Spreadsheet',
        pages: null,
        downloadUrl: '#',
        featured: false,
      },
      {
        title: 'Prompt Engineering Masterclass Notes',
        description: 'My personal notes from 2+ years of prompt engineering.',
        type: 'PDF',
        pages: 25,
        downloadUrl: '#',
        featured: false,
      },
    ],
  },
  {
    category: 'Templates',
    items: [
      {
        title: 'AI Agent Architecture Template',
        description: 'The exact architecture I use for multi-agent systems.',
        type: 'Figma + Code',
        pages: null,
        downloadUrl: '#',
        featured: true,
      },
      {
        title: 'SaaS Landing Page Template',
        description: 'High-converting landing page template for AI products.',
        type: 'Next.js',
        pages: null,
        downloadUrl: '#',
        featured: false,
      },
      {
        title: 'Email Nurture Sequence Templates',
        description: '5 proven email sequences for converting leads to customers.',
        type: 'Notion',
        pages: null,
        downloadUrl: '#',
        featured: false,
      },
    ],
  },
  {
    category: 'Checklists',
    items: [
      {
        title: 'AI Product Launch Checklist',
        description: '100-point checklist for launching your AI product.',
        type: 'PDF',
        pages: 10,
        downloadUrl: '#',
        featured: false,
      },
      {
        title: 'Security Audit Checklist for AI Apps',
        description: 'Essential security checks before going to production.',
        type: 'PDF',
        pages: 5,
        downloadUrl: '#',
        featured: false,
      },
      {
        title: 'Weekly Solopreneur Review Template',
        description: 'The review template I use every Sunday to stay on track.',
        type: 'Notion',
        pages: null,
        downloadUrl: '#',
        featured: false,
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="gradient-mesh" />
      <Navigation />

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Guides, templates, and checklists to accelerate your AI journey.
              All free. No catch.
            </p>
          </div>

          {/* Email Gate Banner */}
          <div className="glass rounded-2xl p-6 md:p-8 mb-12 text-center">
            <h2 className="text-xl font-bold mb-2">
              Get instant access to all resources
            </h2>
            <p className="text-gray-400 mb-4">
              Enter your email to unlock downloads and get notified when new resources drop.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Unlock All
              </button>
            </form>
          </div>

          {/* Resources by Category */}
          {resources.map((category) => (
            <section key={category.category} className="mb-16">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className={`glass rounded-2xl p-6 hover:border-[var(--accent-purple)] transition-all ${
                      item.featured ? 'border-[var(--accent-purple)]/50' : ''
                    }`}
                  >
                    {item.featured && (
                      <span className="inline-block px-3 py-1 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded-full text-xs mb-4">
                        Featured
                      </span>
                    )}
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="px-2 py-1 bg-white/5 rounded">{item.type}</span>
                        {item.pages && <span>{item.pages} pages</span>}
                      </div>
                      <button className="text-[var(--accent-purple)] hover:underline text-sm font-medium">
                        Download →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Upgrade CTA */}
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want Premium Resources?
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Get access to advanced templates, full source code, and priority support
              on our marketplace.
            </p>
            <a
              href="https://advancingtechnology.dev/resources"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:scale-105 transition-all"
            >
              Browse Premium Resources →
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
