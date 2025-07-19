import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";

export default async function sitemap() {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const works = getPosts(["src", "app", "work", "documentation"]).map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route as keyof typeof routesConfig]);

  const routes = activeRoutes.map((route) => {
    let priority = 0.5;
    let changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';
    
    if (route === '/') {
      priority = 1.0;
      changeFreq = 'daily';
    } else if (route === '/work') {
      priority = 0.9;
      changeFreq = 'weekly';
    } else if (route === '/about') {
      priority = 0.6;
      changeFreq = 'monthly';
    } else if (route === '/blog') {
      priority = 0.8;
      changeFreq = 'weekly';
    }

    return {
      url: `${baseURL}${route !== "/" ? route : ""}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: changeFreq,
      priority: priority,
    };
  });

  return [...routes, ...blogs, ...works];
}
