import { notFound } from "next/navigation";
import Image from "next/image";
import { getPost, getAllPostSlugs } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from "next-sanity";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPostSlugs();
  return posts.map((post: any) => ({
    category: post.categorySlug,
    slug: post.slug,
  }));
}

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata({ params }: PageProps) {
  const { category, slug } = await params;
  const post = await getPost(category, slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || "",
    alternates: {
      canonical: `https://www.pspipes.net/${category}/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      url: `https://www.pspipes.net/${category}/${slug}`,
      siteName: "pspipes.net",
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Patrick Pipes"],
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { category, slug } = await params;
  const post = await getPost(category, slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || '',
    url: `https://www.pspipes.net/${category}/${slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Patrick Pipes',
      url: 'https://www.pspipes.net',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PSPIPES',
      url: 'https://www.pspipes.net',
    },
    image: post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.pspipes.net/${category}/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <li>
              <a href="/" className="hover:text-gray-900 dark:hover:text-gray-100">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a
                href={`/blog/${post.category?.slug}`}
                className="hover:text-gray-900 dark:hover:text-gray-100"
              >
                {post.category?.title}
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-900 dark:text-gray-100">{post.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-rose-500 to-orange-400 rounded-full">
              {post.category?.title}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          {post.publishedAt && (
            <time className="text-gray-600 dark:text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={urlFor(post.mainImage)
                .width(1200)
                .height(675)
                .auto("format")
                .fit("max")
                .url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}

        {/* Body Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <PortableText
            value={post.body}
            components={{
              types: {
                image: ({ value }: any) => (
                  <div className="my-8">
                    <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={urlFor(value)
                          .width(1200)
                          .auto("format")
                          .fit("max")
                          .url()}
                        alt={value.alt || ""}
                        width={1200}
                        height={value.height ? (value.height / value.width) * 1200 : 675}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, 1200px"
                      />
                    </div>
                    {value.alt && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center italic">
                        {value.alt}
                      </p>
                    )}
                  </div>
                ),
              },
            }}
          />
        </div>
      </div>
    </article>
    </>
  );
}
