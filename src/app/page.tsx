import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />

      <Navigation />

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight">
              AI-Powered
              <br />
              <span className="gradient-text">Business Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Enterprise-grade AI systems and autonomous agents for modern businesses.
              We build intelligent solutions that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://advancingtechnology.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105"
              >
                Browse AI Marketplace →
              </a>
              <a
                href="#projects"
                className="px-8 py-4 glass rounded-lg font-semibold hover:border-[var(--primary)] transition-colors"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-[var(--accent)] rounded-lg font-semibold hover:bg-[var(--accent)] hover:text-black transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              What We <span className="gradient-text">Build</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
              Specialized AI solutions for real-world challenges
            </p>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Large card */}
              <div className="lg:col-span-2 glass rounded-2xl p-8 md:p-12 hover:border-[var(--accent-purple)] transition-all">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-3xl font-bold mb-4">Therapeutic AI Systems</h3>
                <p className="text-gray-400 text-lg">
                  Production-ready AI companions for vulnerable populations. 30-agent architecture
                  with crisis intervention, 50+ language support, and HIPAA-level security.
                </p>
              </div>

              {/* Tall card */}
              <div className="lg:row-span-2 glass rounded-2xl p-8 md:p-12 hover:border-[var(--accent-blue)] transition-all">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-3xl font-bold mb-4">Autonomous Agent Systems</h3>
                <p className="text-gray-400 text-lg mb-6">
                  Multi-agent orchestration for complex workflows. Intelligent coordination,
                  real-time decision making, and scalable architecture.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[var(--accent-blue)] mr-2">→</span>
                    <span>Agent orchestration frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent-blue)] mr-2">→</span>
                    <span>Voice-enabled AI assistants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent-blue)] mr-2">→</span>
                    <span>Business intelligence systems</span>
                  </li>
                </ul>
              </div>

              {/* Wide card */}
              <div className="lg:col-span-2 glass rounded-2xl p-8 md:p-12 hover:border-[var(--accent-pink)] transition-all">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold mb-4">Custom Development</h3>
                <p className="text-gray-400 text-lg">
                  Full-stack applications with modern tech stacks. Next.js, React, TypeScript,
                  AI integrations, and scalable cloud infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplace CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 text-center hover:border-[var(--primary)] transition-all">
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need AI Tools <span className="gradient-text">Right Now?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Browse our marketplace of production-ready AI plugins. Pre-built solutions
                that integrate in minutes, not months. Ship 10x faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://advancingtechnology.dev/marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:scale-105 transition-all"
                >
                  <span>Browse 150+ Plugins</span>
                  <span className="ml-2">→</span>
                </a>
                <a
                  href="https://elijahbrown.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--accent)] rounded-lg font-semibold hover:bg-[var(--accent)] hover:text-black transition-all"
                >
                  <span>About The Founder</span>
                </a>
              </div>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--accent)]">✓</span>
                  <span>150+ AI Plugins</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--accent)]">✓</span>
                  <span>5-Minute Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--accent)]">✓</span>
                  <span>Production-Ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
              Production-ready solutions delivering real impact
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Life-Coach-AI */}
              <Link href="/projects/life-coach-ai" className="glass rounded-2xl p-8 md:p-10 hover:border-[var(--accent-purple)] transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[var(--accent-purple)] transition-colors">Life-Coach-Ai</h3>
                  <span className="px-3 py-1 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded-full text-sm">
                    99% Complete
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  AI therapeutic companion for vulnerable populations. 30-agent system with
                  crisis intervention, voice interactions, and multi-language support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">Next.js 15</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">OpenAI</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">30 Agents</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">50+ Languages</span>
                </div>
              </Link>

              {/* Personal Dashboard */}
              <Link href="/projects/personal-dashboard" className="glass rounded-2xl p-8 md:p-10 hover:border-[var(--accent-blue)] transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[var(--accent-blue)] transition-colors">Personal Dashboard</h3>
                  <span className="px-3 py-1 bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] rounded-full text-sm">
                    Production
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  Enterprise project management platform with real-time collaboration,
                  AI-powered insights, and comprehensive analytics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">React 19</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">Supabase</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">Stripe</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">MCP API</span>
                </div>
              </Link>

              {/* MyCrashApp */}
              <Link href="/projects/mycrashapp" className="glass rounded-2xl p-8 md:p-10 hover:border-[var(--accent-pink)] transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[var(--accent-pink)] transition-colors">MyCrashApp</h3>
                  <span className="px-3 py-1 bg-[var(--accent-pink)]/20 text-[var(--accent-pink)] rounded-full text-sm">
                    Client Project
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  Accident claims management platform with AI-powered document processing
                  and streamlined workflow automation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">Full-Stack</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">AI Processing</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">Automation</span>
                </div>
              </Link>

              {/* AJ-AGI System */}
              <Link href="/projects/aj-agi" className="glass rounded-2xl p-8 md:p-10 hover:border-[var(--accent-purple)] transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[var(--accent-purple)] transition-colors">AJ-AGI System</h3>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    In Development
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  Proprietary AI assistant with voice capabilities, agent orchestration,
                  and business intelligence integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">Voice AI</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">Multi-Agent</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">Python</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Built With <span className="gradient-text">Modern Tech</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
              Cutting-edge tools and frameworks for production-grade applications
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'Next.js', icon: '▲' },
                { name: 'React', icon: '⚛️' },
                { name: 'TypeScript', icon: 'TS' },
                { name: 'Tailwind', icon: '🎨' },
                { name: 'OpenAI', icon: '🤖' },
                { name: 'Supabase', icon: '⚡' },
                { name: 'Python', icon: '🐍' },
                { name: 'Node.js', icon: '📦' },
                { name: 'Claude', icon: '🧠' },
                { name: 'Vercel', icon: '▲' },
                { name: 'Stripe', icon: '💳' },
                { name: 'Docker', icon: '🐳' },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="glass rounded-xl p-6 text-center hover:border-[var(--accent-purple)] transition-all"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build Something
                <br />
                <span className="gradient-text">Extraordinary?</span>
              </h2>
              <p className="text-xl text-gray-400">
                Let&apos;s discuss how AI can transform your business
              </p>
            </div>

            <div className="glass rounded-3xl p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
