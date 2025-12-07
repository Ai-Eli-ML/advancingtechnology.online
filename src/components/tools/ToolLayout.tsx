import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface ToolLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function ToolLayout({ children, title, description }: ToolLayoutProps) {
  return (
    <>
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />

      <Navigation />

      <main className="relative z-10 pt-16">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/tools"
              className="inline-flex items-center text-gray-400 hover:text-[var(--accent-purple)] transition-colors mb-6"
            >
              <span className="mr-2">←</span>
              <span>Back to Tools</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-400">
              {description}
            </p>
          </div>
        </section>

        {/* Tool Content */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </section>

        {/* Upgrade CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[var(--background-secondary)]">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 text-center hover:border-[var(--primary)] transition-all">
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want More <span className="gradient-text">Powerful Tools?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Access our complete suite of premium AI tools on advancingtechnology.dev.
                Advanced features, API access, and priority support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://advancingtechnology.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:scale-105 transition-all"
                >
                  <span>Upgrade to Premium</span>
                  <span className="ml-2">→</span>
                </a>
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center px-8 py-4 glass rounded-lg font-semibold hover:border-[var(--accent-purple)] transition-colors"
                >
                  <span>Browse Free Tools</span>
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
