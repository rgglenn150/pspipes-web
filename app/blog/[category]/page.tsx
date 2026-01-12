import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostsByCategory, getAllCategories } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category: any) => ({
    category: category.slug,
  }));
}

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const categories = await getAllCategories();
  const currentCategory = categories.find(
    (cat: any) => cat.slug === category
  );

  if (!currentCategory) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${currentCategory.title} - Blog`,
    description: `Posts in ${currentCategory.title} category`,
    alternates: {
      canonical: `https://pspipes.net/blog/${category}`,
    },
    openGraph: {
      title: `${currentCategory.title} - Blog`,
      description: `Posts in ${currentCategory.title} category`,
      url: `https://pspipes.net/blog/${category}`,
      siteName: 'pspipes',
      images: ['/og-image.jpg'],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${currentCategory.title} - Blog`,
      description: `Posts in ${currentCategory.title} category`,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const [posts, categories] = await Promise.all([
    getPostsByCategory(category),
    getAllCategories(),
  ]);

  const currentCategory = categories.find((cat: any) => cat.slug === category);

  if (!currentCategory && !posts?.length) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <nav className="mb-4 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-gray-900 dark:hover:text-gray-100">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 dark:text-gray-100">
                {currentCategory?.title || category}
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {currentCategory?.title || category}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {posts?.length || 0} post{posts?.length !== 1 ? "s" : ""} in this category
          </p>
        </header>

        {/* Categories Filter */}
        {categories && categories.length > 0 && (
          <div className="mb-12 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              All Posts
            </Link>
            {categories.map((cat: any) => (
              <Link
                key={cat._id}
                href={`/blog/${cat.slug}`}
                className={`px-4 py-2 rounded-full transition-colors ${
                  cat.slug === category
                    ? "bg-gradient-to-r from-rose-500 to-orange-400 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        )}

        {/* Posts Grid */}
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link
                key={post._id}
                href={`/${post.category?.slug}/${post.slug}`}
                className="group"
              >
                <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  {/* Image */}
                  {post.mainImage && (
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage)
                          .width(600)
                          .height(400)
                          .auto("format")
                          .fit("max")
                          .url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    {post.publishedAt && (
                      <time className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No posts in this category yet.
            </p>
            <Link
              href="/blog"
              className="inline-block mt-4 text-rose-500 hover:text-rose-600"
            >
              ← Back to all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
