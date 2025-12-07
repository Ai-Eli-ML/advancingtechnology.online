import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-12 glass rounded-xl p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
          >
            <time className="text-xs text-gray-400 mb-2 block">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
            <h4 className="font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
              {post.title}
            </h4>
            <p className="text-sm text-gray-400 line-clamp-2">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
