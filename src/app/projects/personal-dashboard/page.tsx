import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Personal Dashboard | Enterprise Project Management | AdvancingTechnology',
  description: 'Production-ready enterprise project management platform with real-time collaboration, AI-powered insights, Supabase integration, and comprehensive analytics.',
  openGraph: {
    title: 'Personal Dashboard | Enterprise Project Management',
    description: 'Enterprise project management platform with real-time collaboration and AI-powered insights',
    url: 'https://advancingtechnology.online/projects/personal-dashboard',
    type: 'website',
  },
};

export default function PersonalDashboardPage() {
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
              className="inline-flex items-center text-[var(--accent-blue)] hover:opacity-80 transition-opacity mb-8"
            >
              ← Back to Projects
            </Link>

            <div className="mb-8">
              <span className="px-3 py-1 bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] rounded-full text-sm">
                Production
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Personal Dashboard
            </h1>
            <p className="text-2xl text-gray-400 mb-8">
              Enterprise Project Management Platform
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              <span className="px-4 py-2 glass rounded-full text-sm">Next.js 15.2.4</span>
              <span className="px-4 py-2 glass rounded-full text-sm">React 19</span>
              <span className="px-4 py-2 glass rounded-full text-sm">Supabase</span>
              <span className="px-4 py-2 glass rounded-full text-sm">Stripe</span>
              <span className="px-4 py-2 glass rounded-full text-sm">MCP API</span>
              <span className="px-4 py-2 glass rounded-full text-sm">TypeScript Strict</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-gray-400 mb-4">
                The Personal Dashboard serves as the central hub for the entire AdvancingTechnology Business
                Ecosystem, providing comprehensive project management, task tracking, and real-time analytics
                across all 11 production projects and 25+ modular packages.
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Built with Next.js 15 and React 19, the platform implements server-first architecture with
                selective client components, complete type safety with TypeScript strict mode, and enterprise-grade
                security through Supabase Row Level Security (RLS).
              </p>
              <p className="text-lg text-gray-400">
                The dashboard features AI agent integration via MCP API, Stripe payment processing, and
                serves as the data source for intelligent decision-making across the entire ecosystem.
              </p>
            </div>

            {/* Key Features */}
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-blue)]">Project Management</h3>
                  <p className="text-gray-400">
                    Comprehensive tracking of all ecosystem projects with completion percentages, phase
                    management, task prioritization, and estimated hours.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-purple)]">Real-time Analytics</h3>
                  <p className="text-gray-400">
                    Velocity charts, completion trends, bottleneck detection, and resource allocation
                    insights powered by Supabase real-time subscriptions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-pink)]">MCP API Integration</h3>
                  <p className="text-gray-400">
                    12 programmatic tools allowing AI agents to query and update project data, enabling
                    autonomous workflow orchestration.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-blue)]">Time Tracking</h3>
                  <p className="text-gray-400">
                    Billable hours, project estimates, productivity metrics, and detailed audit logging
                    for complete transparency.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-purple)]">Supabase RLS</h3>
                  <p className="text-gray-400">
                    Enterprise-grade security with row-level security policies, role-based access control,
                    and comprehensive test coverage.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-pink)]">Stripe Integration</h3>
                  <p className="text-gray-400">
                    Payment processing, subscription management, and billing automation for client projects
                    and SaaS offerings.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Architecture */}
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-[var(--accent-blue)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">Server-First Design:</strong> Server Components by default, Client Components only for interactivity, optimized for performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-blue)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">Type Safety:</strong> Complete TypeScript strict mode across entire codebase with zero type errors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-blue)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">Database Sync Agent:</strong> Automated synchronization of local work with dashboard database via hooks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-blue)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">Modern Stack:</strong> React Query for data fetching, shadcn/ui for components, Tailwind CSS for styling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-blue)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">92% Complete:</strong> Nearly production-ready with final MCP integration and monitoring remaining</span>
                </li>
              </ul>
            </div>

            {/* Ecosystem Integration */}
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Business Ecosystem Hub</h2>
              <p className="text-lg text-gray-400 mb-6">
                The dashboard serves as the single source of truth for the entire AdvancingTechnology ecosystem:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Centralized Data</h3>
                  <p className="text-gray-400">All projects, tasks, and activities tracked in Supabase</p>
                </div>
                <div className="bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">AI Agent Access</h3>
                  <p className="text-gray-400">MCP API enables data-driven autonomous decisions</p>
                </div>
                <div className="bg-[var(--accent-pink)]/10 border border-[var(--accent-pink)]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Cross-Project Insights</h3>
                  <p className="text-gray-400">Analytics across 11 projects and 25+ packages</p>
                </div>
                <div className="bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Team Visibility</h3>
                  <p className="text-gray-400">Real-time progress updates for stakeholders</p>
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
                Need <span className="gradient-text">Enterprise Software?</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                We build scalable, production-ready platforms for real businesses
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-lg font-semibold hover:opacity-90 transition-opacity"
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
