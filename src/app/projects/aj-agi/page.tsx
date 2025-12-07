import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AJ-AGI System | Proprietary AI Assistant | AdvancingTechnology',
  description: 'Advanced AI assistant with voice capabilities, multi-agent orchestration, RAG memory system, and business intelligence integration.',
  openGraph: {
    title: 'AJ-AGI System | Proprietary AI Assistant',
    description: 'Advanced AI assistant with voice capabilities and multi-agent orchestration',
    url: 'https://advancingtechnology.online/projects/aj-agi',
    type: 'website',
  },
};

export default function AjAgiPage() {
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
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                In Development
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AJ-AGI System
            </h1>
            <p className="text-2xl text-gray-400 mb-8">
              Proprietary AI Assistant with Voice Capabilities
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              <span className="px-4 py-2 glass rounded-full text-sm">Python</span>
              <span className="px-4 py-2 glass rounded-full text-sm">Voice AI</span>
              <span className="px-4 py-2 glass rounded-full text-sm">Multi-Agent</span>
              <span className="px-4 py-2 glass rounded-full text-sm">RAG System</span>
              <span className="px-4 py-2 glass rounded-full text-sm">NVIDIA GPU</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-gray-400 mb-4">
                AJ-AGI is a sophisticated personal AI assistant system designed for the CEO of AdvancingTechnology.
                Unlike Life-Coach-Ai (which serves vulnerable populations), AJ is a personal companion with a
                unique personality, RAG-powered memory system, and voice interface capabilities.
              </p>
              <p className="text-lg text-gray-400 mb-4">
                The system features a distinctive Soviet accent voice personality, leveraging 8,446+ ChatGPT
                conversation memories through advanced RAG (Retrieval-Augmented Generation) architecture. AJ
                orchestrates multiple specialized agents and integrates with the personal dashboard for seamless
                business intelligence.
              </p>
              <p className="text-lg text-gray-400">
                Built with NVIDIA-optimized frameworks (NeMo, Riva) for maximum GPU utilization on RTX 5090
                hardware, AJ represents the cutting edge of voice AI and agent orchestration technology.
              </p>
            </div>

            {/* Key Features */}
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-purple)]">Voice Interface</h3>
                  <p className="text-gray-400">
                    Natural voice interactions with Soviet accent personality using NVIDIA NeMo for
                    speech-to-text and Riva for text-to-speech with GPU acceleration.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-blue)]">RAG Memory System</h3>
                  <p className="text-gray-400">
                    Advanced retrieval-augmented generation using 8,446+ conversation memories from
                    ChatGPT history with Qdrant vector database for context-aware responses.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-pink)]">Multi-Agent Orchestration</h3>
                  <p className="text-gray-400">
                    Coordination of specialized agents for different tasks: dashboard management,
                    domain registration, website building, and business intelligence.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-purple)]">Dashboard Integration</h3>
                  <p className="text-gray-400">
                    Seamless integration with personal dashboard for project management, task tracking,
                    and real-time business insights through MCP API.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-blue)]">Personality System</h3>
                  <p className="text-gray-400">
                    Unique conversational personality with affirmative, flirty, and professional modes,
                    creating a personalized companion experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--accent-pink)]">GPU Optimization</h3>
                  <p className="text-gray-400">
                    NVIDIA-native solutions (NeMo, Riva) optimized for RTX 5090 GPU with CUDA
                    acceleration for real-time inference and low latency.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Architecture */}
            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-[var(--accent-purple)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">Voice Pipeline:</strong> NVIDIA NeMo for ASR, Riva for TTS, with custom accent training for Soviet personality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-purple)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">Memory System:</strong> Qdrant vector database with 8,446+ conversation embeddings for contextual retrieval</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-purple)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">Agent Framework:</strong> Python-based orchestrator coordinating specialized agents for different domains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-purple)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">API Server:</strong> FastAPI backend with WebSocket support for real-time voice communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-purple)] mr-3 text-xl">→</span>
                  <span><strong className="text-white">Integration Layer:</strong> Claude Code SDK adapter for seamless workflow automation</span>
                </li>
              </ul>
            </div>

            {/* Development Status */}
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Development Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-400">Completed</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>RAG memory system</li>
                    <li>Vector database integration</li>
                    <li>Basic agent orchestration</li>
                    <li>API server infrastructure</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">In Progress</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>Voice interface refinement</li>
                    <li>Soviet accent training</li>
                    <li>Dashboard MCP integration</li>
                    <li>Agent tool expansion</li>
                  </ul>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">Planned</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>Advanced personality modes</li>
                    <li>Multi-language support</li>
                    <li>Mobile companion app</li>
                    <li>Autonomous task execution</li>
                  </ul>
                </div>
                <div className="bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Research</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>Cognitive twin training</li>
                    <li>Long-term memory models</li>
                    <li>Emotion recognition</li>
                    <li>Context awareness</li>
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
                Interested in <span className="gradient-text">Voice AI?</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                We build cutting-edge AI assistants and agent orchestration systems
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
