import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Featured blog posts (will be dynamic later)
const featuredPosts = [
  {
    slug: 'building-30-agent-ai-system',
    title: 'How I Built a 30-Agent AI System (And What I Learned)',
    description: 'The architecture decisions, failures, and breakthroughs from building Life-Coach-Ai.',
    category: 'Building in Public',
    readingTime: 12,
    date: '2025-12-01',
  },
  {
    slug: 'solopreneur-ai-stack-2025',
    title: 'My Complete AI Tech Stack as a Solopreneur (2025)',
    description: 'Every tool, API, and framework I use to run a one-person AI business.',
    category: 'AI Tutorials',
    readingTime: 8,
    date: '2025-11-28',
  },
  {
    slug: 'from-uber-driver-to-ai-entrepreneur',
    title: 'From Uber Driver to AI Entrepreneur: My 2-Year Journey',
    description: 'The honest story of how I went from driving rideshare to building AI products.',
    category: 'Building in Public',
    readingTime: 15,
    date: '2025-11-20',
  },
];

// Free tools
const freeTools = [
  {
    href: '/tools/ai-business-idea-generator',
    icon: '💡',
    title: 'AI Business Idea Generator',
    description: 'Get 10 validated AI business ideas based on your skills and market.',
    badge: 'Popular',
  },
  {
    href: '/tools/automation-roi-calculator',
    icon: '📊',
    title: 'Automation ROI Calculator',
    description: 'Calculate how much time and money AI automation could save your business.',
    badge: 'New',
  },
  {
    href: '/tools/prompt-library',
    icon: '✨',
    title: 'AI Prompt Library',
    description: '100+ battle-tested prompts for ChatGPT, Claude, and more.',
    badge: null,
  },
];

export default function Home() {
  return (
    <>
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />

      <Navigation />

      <main className="relative z-10 pt-16">
        {/* Hero Section - Educational Focus */}
        <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 text-sm">
              <span className="text-[var(--accent)]">New:</span>
              <span className="text-gray-300">AI Business Idea Generator is live</span>
              <Link href="/tools/ai-business-idea-generator" className="text-[var(--accent-purple)] hover:underline">
                Try it free →
              </Link>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Learn to Build with
              <br />
              <span className="gradient-text">AI & Automation</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Free tutorials, tools, and resources for entrepreneurs building AI-powered businesses.
              Join 5,000+ learning in public.
            </p>

            {/* Email Capture - Hero */}
            <div className="max-w-lg mx-auto mb-8">
              <form className="flex flex-col sm:flex-row gap-3" action="/api/newsletter" method="POST">
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-4 bg-white/5 border border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--accent-purple)] transition-colors text-lg"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105 text-lg"
                >
                  Subscribe Free
                </button>
              </form>
              <p className="text-gray-500 text-sm mt-3">
                Weekly AI insights. No spam. Unsubscribe anytime.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📧</span>
                <span>5,000+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📝</span>
                <span>50+ tutorials</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                <span>Free tools</span>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What You&apos;ll <span className="gradient-text">Learn</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Practical skills to build, launch, and scale AI-powered products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '🤖',
                  title: 'AI Development',
                  description: 'Build agents, integrate LLMs, and create intelligent systems',
                },
                {
                  icon: '⚡',
                  title: 'Automation',
                  description: 'Automate workflows, save time, and scale operations',
                },
                {
                  icon: '💰',
                  title: 'Monetization',
                  description: 'Turn AI skills into revenue with proven business models',
                },
                {
                  icon: '🚀',
                  title: 'Solopreneur',
                  description: 'Run a one-person AI business without burning out',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass rounded-2xl p-6 hover:border-[var(--accent-purple)] transition-all text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Latest <span className="gradient-text">Articles</span>
                </h2>
                <p className="text-gray-400">
                  Deep dives into AI, automation, and building in public
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-[var(--accent-purple)] hover:underline"
              >
                View all posts →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass rounded-2xl p-6 hover:border-[var(--accent-purple)] transition-all group"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readingTime} min read</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-[var(--accent-purple)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[var(--accent-purple)] hover:underline"
              >
                View all posts →
              </Link>
            </div>
          </div>
        </section>

        {/* Free Tools Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Free <span className="gradient-text">Tools</span>
                </h2>
                <p className="text-gray-400">
                  No signup required. Just use them.
                </p>
              </div>
              <Link
                href="/tools"
                className="hidden md:inline-flex items-center gap-2 text-[var(--accent-purple)] hover:underline"
              >
                View all tools →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {freeTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="glass rounded-2xl p-6 hover:border-[var(--accent-purple)] transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{tool.icon}</span>
                    {tool.badge && (
                      <span className="px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent)] rounded-full text-xs">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-[var(--accent-purple)] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 text-[var(--accent-purple)] hover:underline"
              >
                View all tools →
              </Link>
            </div>
          </div>
        </section>

        {/* Building in Public Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Building in <span className="gradient-text">Public</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Follow my journey from Uber driver to AI entrepreneur
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { value: '$1B', label: 'Exit Goal' },
                  { value: '3', label: 'Active Products' },
                  { value: '30', label: 'AI Agents Built' },
                  { value: '2+', label: 'Years Building' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--accent-purple)] rounded-lg font-semibold hover:bg-[var(--accent-purple)] hover:text-black transition-all"
                >
                  Read My Story →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Upgrade CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 text-center border-[var(--accent-purple)]/30">
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="gradient-text">Level Up?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Get premium AI plugins, templates, and tools on our marketplace.
                Ship faster with production-ready solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://advancingtechnology.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:scale-105 transition-all"
                >
                  Browse AI Marketplace →
                </a>
                <a
                  href="https://elijahbrown.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-[var(--border)] rounded-lg font-semibold hover:border-[var(--accent-purple)] transition-all"
                >
                  Book Consulting
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
