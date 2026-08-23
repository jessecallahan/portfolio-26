// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { blogPosts } from "../blog-post";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Add generateMetadata function
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = blogPosts.find(bp => bp.id === slug);

  // Fallback metadata if post doesn't exist
  if (!post) {
    return { title: "Post Not Found" };
  }

  // Return the metadata object with Open Graph tags
  return {
    title: post.title,
    description: post.content.substring(0, 160), // Short description for SEO
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      type: "article",
      url: `http://localhost:3000/blog/${slug}`,
      images: [
        {
          url: post.image, // Can be a local path in /public or an external absolute URL
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Your existing BlogPostPage component remains below...
export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = blogPosts.find(bp => bp.id === slug);

  if (!post) return <h1>Post Not Found</h1>;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </main>
  );
}
