import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Calculate reading time based on word count (average 200 words per minute)
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags?: string[];
  category?: string;
  readingTime?: number;
  featured?: boolean;
  author?: string;
}

export function getAllPosts(): BlogPost[] {
  // Ensure directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        content,
        tags: data.tags || [],
        category: data.category || 'General',
        readingTime: calculateReadingTime(content),
        featured: data.featured || false,
        author: data.author || 'AdvancingTechnology Team',
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      // Try .md extension
      const mdPath = path.join(postsDirectory, `${slug}.md`);
      if (!fs.existsSync(mdPath)) {
        return null;
      }
      const fileContents = fs.readFileSync(mdPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        content,
        tags: data.tags || [],
        category: data.category || 'General',
        readingTime: calculateReadingTime(content),
        featured: data.featured || false,
        author: data.author || 'AdvancingTechnology Team',
      };
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      description: data.description || '',
      content,
      tags: data.tags || [],
      category: data.category || 'General',
      readingTime: calculateReadingTime(content),
      featured: data.featured || false,
      author: data.author || 'AdvancingTechnology Team',
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAdjacentPosts(slug: string): { prev: BlogPost | null; next: BlogPost | null } {
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex(post => post.slug === slug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
    next: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
  };
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map(post => post.category || 'General'));
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set(posts.flatMap(post => post.tags || []));
  return Array.from(tags).sort();
}
