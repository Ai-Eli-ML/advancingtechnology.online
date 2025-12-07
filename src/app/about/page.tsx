import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | AdvancingTechnology',
  description: 'Learn about AdvancingTechnology - a production AI-powered services company specializing in therapeutic AI, autonomous agents, and enterprise solutions.',
  openGraph: {
    title: 'About Us | AdvancingTechnology',
    description: 'Production AI-powered services company building the future with intelligent solutions',
    url: 'https://advancingtechnology.online/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="gradient-mesh" />
      <Navigation />

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Building the Future with
              <br />
              <span className="gradient-text">AI</span>
            </h1>
            <p className="text-2xl text-gray-400 mb-12">
              Production-ready AI solutions that create real-world impact
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-400 mb-4">
                At AdvancingTechnology, we believe artificial intelligence should serve humanity&apos;s greatest needs.
                We build production-ready AI systems that address real-world challenges, from mental health crises
                to business automation.
              </p>
              <p className="text-xl text-gray-400">
                Our focus is on vulnerable populations and high-impact applications where technology can make
                a measurable difference in people&apos;s lives. We combine cutting-edge AI research with pragmatic
                engineering to deliver solutions that work in production environments.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              What We <span className="gradient-text">Build</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="glass rounded-2xl p-8 hover:border-[var(--accent-purple)] transition-all">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-3">Therapeutic AI Systems</h3>
                <p className="text-gray-400">
                  Production-ready AI companions for vulnerable populations including seniors, abuse survivors,
                  and people on therapy waitlists. Crisis intervention with HIPAA-level security.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 hover:border-[var(--accent-blue)] transition-all">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-3">Multi-Agent Systems</h3>
                <p className="text-gray-400">
                  Sophisticated agent orchestration frameworks for complex workflows. Intelligent coordination,
                  autonomous decision-making, and scalable architectures.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 hover:border-[var(--accent-pink)] transition-all">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-3">Enterprise Software</h3>
                <p className="text-gray-400">
                  Full-stack applications with modern tech stacks. Next.js, React, TypeScript, real-time features,
                  and cloud infrastructure built for scale.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 hover:border-[var(--accent-purple)] transition-all">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold mb-3">AI Automation</h3>
                <p className="text-gray-400">
                  Document processing, workflow automation, and intelligent analysis systems that reduce
                  operational costs while improving accuracy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-4xl font-bold mb-6">Our Approach</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--accent-purple)]">Production-First Mindset</h3>
                  <p className="text-lg text-gray-400">
                    We don&apos;t build prototypes. Every project is designed for production deployment from day one,
                    with comprehensive testing, security measures, and scalability built in. Our Life-Coach-Ai
                    platform has 149/149 tests passing with 100% coverage on critical safety features.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--accent-blue)]">Autonomous Development</h3>
                  <p className="text-lg text-gray-400">
                    We leverage autonomous AI agents for 2-3x faster development cycles. Our 30-agent architecture
                    enables rapid iteration while maintaining quality. This allows us to deliver enterprise-grade
                    solutions in startup timeframes.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--accent-pink)]">Human-Centered Design</h3>
                  <p className="text-lg text-gray-400">
                    Technology serves people, not the other way around. Our therapeutic AI systems prioritize
                    accessibility for seniors, crisis intervention for vulnerable populations, and ethical
                    considerations at every step. We build solutions that respect human dignity.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--accent-purple)]">Transparent Operations</h3>
                  <p className="text-lg text-gray-400">
                    We believe in radical transparency. Our development process is tracked in real-time through
                    our personal dashboard. Clients can see progress, test results, and system health at any time.
                    No black boxes, no surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>

            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Next.js 15 with App Router</li>
                    <li>React 19 with Server Components</li>
                    <li>TypeScript Strict Mode</li>
                    <li>Tailwind CSS v4</li>
                    <li>shadcn/ui Components</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">AI/ML</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>OpenAI GPT-4 & Realtime API</li>
                    <li>Claude (Anthropic)</li>
                    <li>NVIDIA NeMo & Riva</li>
                    <li>RAG with Vector Databases</li>
                    <li>Multi-Agent Orchestration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Supabase (Database, Auth, RLS)</li>
                    <li>Python FastAPI</li>
                    <li>Node.js 20 Runtime</li>
                    <li>Serverless Functions</li>
                    <li>WebSocket Real-time</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Infrastructure</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Vercel Deployment</li>
                    <li>Docker Containerization</li>
                    <li>NVIDIA GPU Acceleration</li>
                    <li>PostgreSQL Databases</li>
                    <li>Cloud Storage (S3-compatible)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">11+</div>
                <div className="text-gray-400">Production Projects</div>
              </div>
              <div className="glass rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">30+</div>
                <div className="text-gray-400">AI Agents Deployed</div>
              </div>
              <div className="glass rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">57K+</div>
                <div className="text-gray-400">Lines of Production Code</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Our <span className="gradient-text">Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-3">Impact Over Hype</h3>
                <p className="text-gray-400">
                  We build solutions that work in production and serve real needs. No vaporware, no demos
                  that never ship. Every project is designed for immediate deployment.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-3">Ethics First</h3>
                <p className="text-gray-400">
                  AI systems must respect human dignity and privacy. HIPAA-level security for therapeutic data,
                  crisis intervention protocols, and transparent operations are non-negotiable.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-3">Quality Excellence</h3>
                <p className="text-gray-400">
                  149/149 tests passing. 100% coverage on critical systems. TypeScript strict mode. These aren&apos;t
                  aspirations - they&apos;re requirements for every project we ship.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-3">Open Innovation</h3>
                <p className="text-gray-400">
                  We share knowledge, contribute to open source, and believe in lifting the entire industry.
                  Competition makes everyone better.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-2xl p-12">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Build the Future
                <br />
                <span className="gradient-text">Together?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let&apos;s create AI solutions that make a real difference
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-blue)] rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
