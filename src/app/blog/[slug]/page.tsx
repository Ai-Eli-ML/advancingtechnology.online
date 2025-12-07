import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug, getAdjacentPosts } from '@/lib/blog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ShareButtons from '@/components/blog/ShareButtons';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedPosts from '@/components/blog/RelatedPosts';
import NewsletterCTA from '@/components/blog/NewsletterCTA';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | AdvancingTechnology`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://advancingtechnology.online/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'AdvancingTechnology Team'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(slug);

  // Get related posts (same category, excluding current post)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />

      <Navigation />

      <main className="relative z-10 pt-16">
        <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-400 hover:text-[var(--accent)] transition-colors mb-8"
            >
              <span className="mr-2">←</span>
              Back to Blog
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
              {/* Main Content */}
              <div>
                <article>
                  {/* Header */}
                  <header className="mb-8">
                    {post.category && (
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent)] rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    )}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      {post.title}
                    </h1>

                    {post.description && (
                      <p className="text-xl text-gray-400 mb-6">
                        {post.description}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 pb-6 border-b border-white/10">
                      <time>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      {post.readingTime && (
                        <>
                          <span>•</span>
                          <span>{post.readingTime} min read</span>
                        </>
                      )}
                      {post.author && (
                        <>
                          <span>•</span>
                          <span>By {post.author}</span>
                        </>
                      )}
                    </div>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-6">
                        {post.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </header>

                  {/* MDX Content */}
                  <div className="glass rounded-2xl p-6 md:p-10 mb-8">
                    <div className="prose prose-invert prose-lg max-w-none">
                      <MDXRemote
                        source={post.content}
                        options={{
                          mdxOptions: {
                            remarkPlugins: [remarkGfm],
                            rehypePlugins: [rehypeHighlight],
                          },
                        }}
                      />
                    </div>
                  </div>
                </article>

                {/* Share Buttons */}
                <ShareButtons title={post.title} slug={slug} />

                {/* Post Navigation */}
                {(prev || next) && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prev && (
                      <Link
                        href={`/blog/${prev.slug}`}
                        className="glass rounded-xl p-6 hover:border-[var(--accent)] transition-all group"
                      >
                        <div className="text-sm text-gray-400 mb-2">← Previous</div>
                        <div className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                          {prev.title}
                        </div>
                      </Link>
                    )}
                    {next && (
                      <Link
                        href={`/blog/${next.slug}`}
                        className="glass rounded-xl p-6 hover:border-[var(--accent)] transition-all group md:text-right"
                      >
                        <div className="text-sm text-gray-400 mb-2">Next →</div>
                        <div className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                          {next.title}
                        </div>
                      </Link>
                    )}
                  </div>
                )}

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <RelatedPosts posts={relatedPosts} />
                )}

                {/* Newsletter CTA */}
                <NewsletterCTA />
              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <TableOfContents />
              </aside>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
