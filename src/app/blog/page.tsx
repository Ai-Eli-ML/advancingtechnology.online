import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | AdvancingTechnology',
  description: 'Free tutorials, guides, and insights on AI development, automation, and building a solopreneur business.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featuredPosts = posts.filter((p) => p.featured);

  return (
    <>
      <div className="gradient-mesh" />
      <Navigation />

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Deep dives into AI development, automation strategies, and lessons from building in public.
            </p>
          </div>

          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="px-4 py-2 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded-full text-sm font-medium">
                All Posts
              </span>
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm text-gray-400 cursor-pointer transition-colors"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="glass rounded-2xl p-8 hover:border-[var(--accent-purple)] transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded-full text-xs">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readingTime} min read</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent-purple)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{post.description}</p>
                    <div className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              {featuredPosts.length > 0 ? 'All Posts' : 'Latest Posts'}
            </h2>
            {posts.length === 0 ? (
              <div className="glass rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                <p className="text-gray-400 mb-6">
                  Blog posts are on the way. Subscribe to get notified when they drop.
                </p>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Subscribe to Newsletter
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="glass rounded-2xl p-6 hover:border-[var(--accent-purple)] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readingTime} min</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--accent-purple)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">{post.description}</p>
                    <div className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>

          {/* Newsletter CTA */}
          <section className="mt-16">
            <div className="glass rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Never Miss a Post
              </h2>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                Get new articles delivered straight to your inbox. Plus exclusive tools and resources.
              </p>
              <Link
                href="/newsletter"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Subscribe Free →
              </Link>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
