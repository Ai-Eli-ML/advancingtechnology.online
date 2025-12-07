import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`block glass rounded-2xl p-6 md:p-8 hover:border-[var(--accent)] transition-all group ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          {post.category && (
            <span className="px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent)] rounded-full text-sm font-medium">
              {post.category}
            </span>
          )}
          {post.featured && (
            <span className="px-3 py-1 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded-full text-sm font-medium">
              Featured
            </span>
          )}
        </div>

        <time className="text-sm text-gray-400 mb-3">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>

        <h3 className={`font-bold mb-3 group-hover:text-[var(--accent)] transition-colors ${
          featured ? 'text-3xl md:text-4xl' : 'text-2xl'
        }`}>
          {post.title}
        </h3>

        <p className={`text-gray-400 mb-4 flex-grow ${
          featured ? 'text-lg' : 'text-base'
        }`}>
          {post.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {post.tags?.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {post.readingTime && (
            <span className="text-sm text-gray-400">
              {post.readingTime} min read
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
