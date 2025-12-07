import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Life-Coach-Ai | AI Therapeutic Companion | AdvancingTechnology',
  description: 'Production-ready AI therapeutic companion for vulnerable populations. 30-agent system with crisis intervention, voice interactions, 50+ language support, and HIPAA-level security.',
  openGraph: {
    title: 'Life-Coach-Ai | AI Therapeutic Companion',
    description: 'Production-ready AI therapeutic companion for vulnerable populations with 30-agent architecture',
    url: 'https://advancingtechnology.online/projects/life-coach-ai',
    type: 'website',
  },
};

export default function LifeCoachAiPage() {
  return (
    <>
      <div className="gradient-mesh" />
      <Navigation />

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/#projects"
              className="inline-flex items-center text-[var(--accent-purple)] hover:opacity-80 transition-opacity mb-8"
            >
              ← Back to Projects
            </Link>

            <div className="mb-8">
              <span className="px-3 py-1 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded-full text-sm">
                99% Complete
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Life-Coach-Ai
            </h1>
            <p className="text-2xl text-gray-400 mb-8">
              AI Therapeutic Companion for Vulnerable Populations
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              <span className="px-4 py-2 glass rounded-full text-sm">Next.js 15</span>
              <span className="px-4 py-2 glass rounded-full text-sm">React 19</span>
              <span className="px-4 py-2 glass rounded-full text-sm">OpenAI Realtime API</span>
              <span className="px-4 py-2 glass rounded-full text-sm">30 AI Agents</span>
              <span className="px-4 py-2 glass rounded-full text-sm">Supabase</span>
              <span className="px-4 py-2 glass rounded-full text-sm">50+ Languages</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-gray-400 mb-4">
                Life-Coach-Ai is a production-ready AI therapeutic companion specifically designed to support
                vulnerable populations including lonely seniors, people on therapy waitlists, inmates re-entering
                society, and abuse survivors.
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Built with a sophisticated 30-agent architecture, the system provides compassionate voice
                interactions with real-time crisis detection, emergency protocols, and multi-language support
                across 50+ languages.
              </p>
              <p className="text-lg text-gray-400">
                The platform features HIPAA-level security, SafeWord emergency systems with AES-256-GCM encryption,
                and seamless integration with healthcare providers, hospitals, and rehabilitation centers.
              </p>
            </div>

            {/* Key Features */}
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-purple)]">30-Agent Architecture</h3>
                  <p className="text-gray-400">
                    Specialized AI agents organized across Sprint 5-9, handling therapeutic conversations,
                    crisis intervention, accessibility, voice interactions, and healthcare partnerships.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-blue)]">Crisis Detection</h3>
                  <p className="text-gray-400">
                    102 comprehensive tests ensuring 100% accuracy in detecting crisis situations with
                    immediate intervention protocols and emergency contact integration.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-pink)]">SafeWord System</h3>
                  <p className="text-gray-400">
                    24 tests validating encrypted emergency protocols with AES-256-GCM, allowing users
                    to trigger immediate help with a single phrase.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-purple)]">Multi-language Support</h3>
                  <p className="text-gray-400">
                    50+ languages with cultural sensitivity, ensuring accessible support for diverse
                    populations worldwide.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-blue)]">Voice Interactions</h3>
                  <p className="text-gray-400">
                    Real-time compassionate voice conversations using OpenAI Realtime API, designed
                    for senior-friendly accessibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-pink)]">Healthcare Integration</h3>
                  <p className="text-gray-400">
                    Partnerships with hospitals, clinics, and rehabilitation centers for seamless
                    care coordination and resource referrals.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Achievements */}
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Technical Achievements</h2>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-[var(--accent-purple)] mr-3 text-xl">✓</span>
                  <span><strong className="text-white">149/149 Tests Passing:</strong> 100% test coverage on critical safety features with 3.26s total runtime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-purple)] mr-3 text-xl">✓</span>
                  <span><strong className="text-white">57,000+ Lines of Code:</strong> Production-ready implementation with comprehensive error boundaries (47 tests)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-purple)] mr-3 text-xl">✓</span>
                  <span><strong className="text-white">Sprint-Based Organization:</strong> Systematic development across Sprint 5-9 with health monitoring and optimization tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-purple)] mr-3 text-xl">✓</span>
                  <span><strong className="text-white">Production Deployment:</strong> Live at life-coach-ai.vercel.app with full crisis detection and SafeWord systems operational</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-purple)] mr-3 text-xl">✓</span>
                  <span><strong className="text-white">HIPAA-Level Security:</strong> AES-256-GCM encryption for sensitive therapeutic data and emergency protocols</span>
                </li>
              </ul>
            </div>

            {/* Impact */}
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Real-World Impact</h2>
              <p className="text-lg text-gray-400 mb-4">
                Life-Coach-Ai addresses the critical mental health crisis by providing immediate, accessible
                support to vulnerable populations who often fall through the cracks of traditional healthcare systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-2">24/7 Availability</h3>
                  <p className="text-gray-400">Immediate support without waitlists or appointments</p>
                </div>
                <div className="bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-2">Crisis Prevention</h3>
                  <p className="text-gray-400">Proactive intervention before situations escalate</p>
                </div>
                <div className="bg-[var(--accent-pink)]/10 border border-[var(--accent-pink)]/20 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-2">Accessible Care</h3>
                  <p className="text-gray-400">Senior-friendly interface with voice-first interactions</p>
                </div>
                <div className="bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
                  <p className="text-gray-400">50+ languages serving diverse communities worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-6">
                Interested in <span className="gradient-text">Similar Solutions?</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                We build production-ready AI systems for real-world impact
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
