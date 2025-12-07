import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ToolCard from '@/components/tools/ToolCard';
import Link from 'next/link';

export const metadata = {
  title: 'Free AI Tools | AdvancingTechnology',
  description: 'Free AI-powered business tools. Generate ideas, analyze markets, and plan your startup journey.',
};

export default function ToolsPage() {
  const tools = [
    {
      title: 'AI Business Idea Generator',
      description: 'Generate viable business ideas based on your skills, budget, and market interests. Get instant market opportunity scores and startup cost estimates.',
      href: '/tools/ai-business-idea-generator',
      icon: '💡',
      badge: 'Free',
    },
    // Add more tools here in the future
  ];

  return (
    <>
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />

      <Navigation />

      <main className="relative z-10 pt-16">
        {/* Header Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Free AI <span className="gradient-text">Business Tools</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Powerful AI tools to help you start, grow, and scale your business.
              No credit card required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span>
                <span>100% Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span>
                <span>No Sign-Up Required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span>
                <span>Instant Results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <ToolCard
                  key={tool.href}
                  title={tool.title}
                  description={tool.description}
                  href={tool.href}
                  icon={tool.icon}
                  badge={tool.badge}
                />
              ))}

              {/* Coming Soon Card */}
              <div className="glass rounded-2xl p-6 opacity-60">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">🚀</div>
                  <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm font-semibold">
                    Coming Soon
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  More Tools
                </h3>
                <p className="text-gray-400 mb-4">
                  We&apos;re building more free tools for entrepreneurs. Market analysis, competitor research, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 text-center hover:border-[var(--primary)] transition-all">
              <div className="text-5xl mb-6">⚡</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need More <span className="gradient-text">Advanced Features?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Upgrade to premium tools on advancingtechnology.dev for API access,
                advanced analytics, custom integrations, and white-label solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://advancingtechnology.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:scale-105 transition-all"
                >
                  <span>Browse Premium Tools</span>
                  <span className="ml-2">→</span>
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--accent)] rounded-lg font-semibold hover:bg-[var(--accent)] hover:text-black transition-all"
                >
                  <span>Custom Development</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
