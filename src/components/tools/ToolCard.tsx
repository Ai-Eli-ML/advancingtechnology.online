import Link from 'next/link';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  badge?: string;
}

export default function ToolCard({ title, description, href, icon, badge = 'Free' }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="glass rounded-2xl p-6 hover:border-[var(--accent-purple)] transition-all group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <span className="px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent)] rounded-full text-sm font-semibold">
          {badge}
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent-purple)] transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 mb-4">
        {description}
      </p>

      <div className="flex items-center text-[var(--accent-purple)] font-semibold">
        <span>Try it now</span>
        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}
