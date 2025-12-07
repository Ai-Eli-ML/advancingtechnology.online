import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My Story | AdvancingTechnology',
  description: 'From Uber driver to AI entrepreneur - the honest journey of building AI products in public.',
  openGraph: {
    title: 'My Story | AdvancingTechnology',
    description: 'From Uber driver to AI entrepreneur - building in public since 2023',
    url: 'https://advancingtechnology.online/about',
    type: 'website',
  },
};

const timeline = [
  {
    year: '2022',
    title: 'The Beginning',
    description: 'Started driving Uber while learning to code. Spent nights studying AI, watching tutorials, and building small projects.',
    highlight: 'First line of Python',
  },
  {
    year: '2023',
    title: 'First AI Projects',
    description: 'Built my first AI tools. Started using ChatGPT obsessively. Had 1,000+ conversations learning everything I could.',
    highlight: '8,446 ChatGPT conversations',
  },
  {
    year: '2024',
    title: 'Going All In',
    description: 'Quit Uber to focus full-time on AI. Built AJ (my personal AI assistant), started Life-Coach-Ai, and landed first clients.',
    highlight: 'Full-time AI builder',
  },
  {
    year: '2025',
    title: 'Building in Public',
    description: 'Launched 3 production AI products. Built a 30-agent system. Started sharing everything I learn with 5,000+ subscribers.',
    highlight: '$1B exit goal',
  },
];

const stats = [
  { value: '2+', label: 'Years Building' },
  { value: '8,446', label: 'ChatGPT Convos' },
  { value: '30', label: 'AI Agents Built' },
  { value: '3', label: 'Products Shipped' },
];

export default function AboutPage() {
  return (
    <>
      <div className="gradient-mesh" />
      <Navigation />

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-4xl">
              👨‍💻
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hey, I&apos;m <span className="gradient-text">Sxilent</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From Uber driver to AI entrepreneur. Building in public, sharing everything I learn.
            </p>
          </div>

          {/* The Story */}
          <section className="mb-16">
            <div className="glass rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">The Honest Story</h2>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Two years ago, I was driving Uber to pay rent. I had a laptop, a dream, and absolutely
                  no idea what I was doing. I knew one thing: AI was going to change everything, and I
                  wanted to be part of it.
                </p>

                <p>
                  So I started learning. Every night after driving, I&apos;d come home and study. Python.
                  Machine learning. APIs. I had over <strong className="text-white">8,446 conversations with ChatGPT</strong> just
                  trying to understand how this stuff worked.
                </p>

                <p>
                  I built crappy projects. Lots of them. Most failed. But each failure taught me something.
                  Slowly, I got better. Then I got good enough to build things that actually worked.
                </p>

                <p>
                  Today, I run AdvancingTechnology. I&apos;ve built a <strong className="text-white">30-agent AI system</strong> for
                  therapeutic applications. I have <strong className="text-white">3 products in production</strong>. And I&apos;m
                  working toward a <strong className="text-white">$1 billion exit</strong>.
                </p>

                <p>
                  Sounds crazy? Maybe. But I&apos;ve learned that audacious goals attract audacious results.
                </p>

                <p className="text-[var(--accent-purple)]">
                  This site exists to share everything I&apos;ve learned along the way. The wins. The losses.
                  The tools that actually work. No gatekeeping, no BS.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">The Journey</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] flex items-center justify-center font-bold text-sm">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-[var(--border)] mt-2" />
                    )}
                  </div>
                  <div className="glass rounded-xl p-6 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <span className="text-xs px-3 py-1 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded-full">
                        {item.highlight}
                      </span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* What I Believe */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">What I Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2 text-[var(--accent-purple)]">Build in Public</h3>
                <p className="text-gray-400 text-sm">
                  Share your journey. The wins AND the losses. Authenticity builds trust, and trust builds business.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2 text-[var(--accent-blue)]">Give First</h3>
                <p className="text-gray-400 text-sm">
                  Provide massive value before asking for anything. This site is free because helping others helps everyone.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2 text-[var(--accent-pink)]">AI is Leverage</h3>
                <p className="text-gray-400 text-sm">
                  One person with AI can do the work of ten. Use it. The playing field has never been more level.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2 text-[var(--accent)]">Audacious Goals</h3>
                <p className="text-gray-400 text-sm">
                  $1B exit sounds crazy until it doesn&apos;t. Dream big, execute daily, iterate constantly.
                </p>
              </div>
            </div>
          </section>

          {/* Current Projects */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">What I&apos;m Building</h2>
            <div className="space-y-4">
              <div className="glass rounded-xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">Life-Coach-Ai</h3>
                  <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full">75% Complete</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  AI therapeutic companion for vulnerable populations. 30-agent architecture with crisis intervention.
                </p>
                <a href="https://lifecoach.advancingtechnology.online" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-purple)] text-sm hover:underline">
                  View Live →
                </a>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">AJ-AGI</h3>
                  <span className="text-xs px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">In Development</span>
                </div>
                <p className="text-gray-400 text-sm">
                  My personal AI assistant with voice, memory, and business intelligence integration.
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">Personal Dashboard</h3>
                  <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full">92% Complete</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Multi-tenant project management platform with real-time collaboration and AI insights.
                </p>
              </div>
            </div>
          </section>

          {/* Connect */}
          <section className="glass rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              I read every email and try to respond to everyone. Whether you want to collaborate,
              have questions, or just want to say hi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/newsletter"
                className="px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Join Newsletter
              </Link>
              <a
                href="https://twitter.com/advtech_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[var(--border)] rounded-lg font-semibold hover:border-[var(--accent-purple)] transition-all"
              >
                Follow on X
              </a>
              <a
                href="https://elijahbrown.info"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[var(--border)] rounded-lg font-semibold hover:border-[var(--accent-purple)] transition-all"
              >
                Book a Call
              </a>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
