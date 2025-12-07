import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MyCrashApp | Accident Claims Management | AdvancingTechnology',
  description: 'Production-ready accident claims management platform with AI-powered document processing, streamlined workflow automation, and comprehensive case tracking.',
  openGraph: {
    title: 'MyCrashApp | Accident Claims Management',
    description: 'AI-powered accident claims management platform with automated document processing',
    url: 'https://advancingtechnology.online/projects/mycrashapp',
    type: 'website',
  },
};

export default function MyCrashAppPage() {
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
              className="inline-flex items-center text-[var(--accent-pink)] hover:opacity-80 transition-opacity mb-8"
            >
              ← Back to Projects
            </Link>

            <div className="mb-8">
              <span className="px-3 py-1 bg-[var(--accent-pink)]/20 text-[var(--accent-pink)] rounded-full text-sm">
                Client Project
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              MyCrashApp
            </h1>
            <p className="text-2xl text-gray-400 mb-8">
              AI-Powered Accident Claims Management Platform
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              <span className="px-4 py-2 glass rounded-full text-sm">Full-Stack</span>
              <span className="px-4 py-2 glass rounded-full text-sm">AI Document Processing</span>
              <span className="px-4 py-2 glass rounded-full text-sm">Workflow Automation</span>
              <span className="px-4 py-2 glass rounded-full text-sm">Case Management</span>
              <span className="px-4 py-2 glass rounded-full text-sm">83% Complete</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-gray-400 mb-4">
                MyCrashApp is a flagship client project that revolutionizes accident claims management through
                intelligent automation and AI-powered document processing. The platform streamlines the entire
                claims lifecycle from initial incident reporting to final settlement.
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Built for insurance companies, law firms, and claims adjusters, the system reduces processing
                time by up to 70% while maintaining accuracy and compliance with legal requirements. It handles
                everything from photo evidence analysis to automated report generation.
              </p>
              <p className="text-lg text-gray-400">
                The platform is 83% complete and production-ready for deployment, with final legal compliance
                review and AI integration refinements underway.
              </p>
            </div>

            {/* Key Features */}
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-pink)]">AI Document Processing</h3>
                  <p className="text-gray-400">
                    Automated extraction and analysis of accident reports, insurance forms, medical records,
                    and legal documents with intelligent categorization.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-purple)]">Photo Evidence Analysis</h3>
                  <p className="text-gray-400">
                    Computer vision algorithms to assess vehicle damage, identify injuries, and generate
                    preliminary damage estimates from uploaded photos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-blue)]">Workflow Automation</h3>
                  <p className="text-gray-400">
                    Streamlined claims processing with automated task assignment, deadline tracking,
                    and intelligent routing based on case complexity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-pink)]">Case Management</h3>
                  <p className="text-gray-400">
                    Comprehensive tracking of claims from intake to settlement with status updates,
                    document versioning, and stakeholder communication.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-purple)]">Compliance Tools</h3>
                  <p className="text-gray-400">
                    Built-in legal compliance checks, audit trails, and regulatory reporting to ensure
                    adherence to industry standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-blue)]">Real-time Analytics</h3>
                  <p className="text-gray-400">
                    Dashboard insights on claim velocity, processing bottlenecks, settlement patterns,
                    and team performance metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Business Impact</h2>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-[var(--accent-pink)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">70% Faster Processing:</strong> Automated workflows reduce claim processing time from weeks to days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-pink)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">Reduced Costs:</strong> AI-powered automation decreases manual labor requirements and operational expenses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-pink)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">Improved Accuracy:</strong> Machine learning models ensure consistent, unbiased claim assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-pink)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">Better Customer Experience:</strong> Faster settlements and transparent communication improve client satisfaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-pink)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">Scalable Solution:</strong> Cloud infrastructure handles growing claim volumes without performance degradation</span>
                </li>
              </ul>
            </div>

            {/* Technology Stack */}
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[var(--accent-pink)]/10 border border-[var(--accent-pink)]/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2">Frontend</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2">AI/ML</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>OpenAI GPT-4</li>
                    <li>Computer Vision</li>
                    <li>Document AI</li>
                  </ul>
                </div>
                <div className="bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2">Infrastructure</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>Cloud Storage</li>
                    <li>Serverless Functions</li>
                    <li>PostgreSQL</li>
                  </ul>
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
                Need <span className="gradient-text">Custom Automation?</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                We build AI-powered solutions that transform business operations
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-purple)] rounded-lg font-semibold hover:opacity-90 transition-opacity"
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
