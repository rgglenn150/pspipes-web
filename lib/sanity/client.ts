import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function getPost(categorySlug: string, postSlug: string) {
  return client.fetch(
    `*[_type == "post" && category->slug.current == $categorySlug && slug.current == $postSlug][0]{
      _id,
      title,
      "slug": slug.current,
      mainImage,
      body,
      publishedAt,
      excerpt,
      category->{
        _id,
        title,
        "slug": slug.current
      }
    }`,
    { categorySlug, postSlug }
  );
}

export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      mainImage,
      publishedAt,
      excerpt,
      category->{
        _id,
        title,
        "slug": slug.current
      }
    } | order(publishedAt desc)`
  );
}

export async function getAllCategories() {
  return client.fetch(
    `*[_type == "category"]{
      _id,
      title,
      "slug": slug.current
    } | order(title asc)`
  );
}

export async function getPostsByCategory(categorySlug: string) {
  return client.fetch(
    `*[_type == "post" && category->slug.current == $categorySlug]{
      _id,
      title,
      "slug": slug.current,
      mainImage,
      publishedAt,
      excerpt,
      category->{
        _id,
        title,
        "slug": slug.current
      }
    } | order(publishedAt desc)`,
    { categorySlug }
  );
}

export async function getAllPostSlugs() {
  return client.fetch(
    `*[_type == "post"]{
      "slug": slug.current,
      "categorySlug": category->slug.current
    }`
  );
}
