export interface Slug {
  current: string,
}
export interface IPost {
  id: string
  title: string,
  mainImage: any,
  author: any,
  slug: Slug,
  publishedAt: string,
  body: any[],
}
