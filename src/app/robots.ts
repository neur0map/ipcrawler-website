import { baseURL } from "@/resources";

export default function robots() {
  return {
    rules: [
      // Default rules for all bots
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/blog",
          "/work",
          "/blog/*",
          "/work/*",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/_vercel/",
          "/admin/",
          "/private/",
          "/*.json$",
          "/temp/",
          "/cache/",
          "/*?*",  // Block query parameters
          "/404",
          "/500",
        ],
        crawlDelay: 1,
      },
      // Google-specific rules
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/about",
          "/blog",
          "/work",
          "/blog/*",
          "/work/*",
          "/sitemap.xml",
          "/robots.txt",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/_vercel/",
          "/admin/",
          "/private/",
          "/*.json$",
          "/temp/",
          "/cache/",
        ],
      },
      // Bing-specific rules
      {
        userAgent: "Bingbot",
        allow: [
          "/",
          "/about", 
          "/blog",
          "/work",
          "/blog/*",
          "/work/*",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/_vercel/",
          "/admin/",
          "/private/",
          "/*.json$",
          "/temp/",
          "/cache/",
        ],
        crawlDelay: 2,
      },
      // Social media crawlers
      {
        userAgent: "facebookexternalhit",
        allow: [
          "/",
          "/about",
          "/blog",
          "/work",
          "/blog/*", 
          "/work/*",
        ],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Twitterbot",
        allow: [
          "/",
          "/about",
          "/blog", 
          "/work",
          "/blog/*",
          "/work/*",
        ],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "LinkedInBot",
        allow: [
          "/",
          "/about",
          "/blog",
          "/work", 
          "/blog/*",
          "/work/*",
        ],
        disallow: ["/api/", "/_next/"],
      },
      // Security research bots (allow but with limits)
      {
        userAgent: "Slackbot-LinkExpanding",
        allow: ["/", "/about", "/blog", "/work"],
        disallow: ["/api/", "/_next/", "/blog/*", "/work/*"],
        crawlDelay: 5,
      },
      // Block aggressive/unwanted bots
      {
        userAgent: [
          "CCBot",
          "ChatGPT-User",
          "GPTBot", 
          "AdsBot-Google",
          "YandexBot",
          "Baiduspider",
          "SemrushBot",
          "AhrefsBot",
          "MJ12bot",
          "DotBot",
          "AspiegelBot",
          "DataForSeoBot",
        ],
        disallow: ["/"],
      },
      // AI training bots - block completely
      {
        userAgent: [
          "Claude-Web",
          "anthropic-ai", 
          "Claude*",
          "ChatGPT*",
          "OpenAI*",
          "PerplexityBot",
          "YouBot",
        ],
        disallow: ["/"],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
    host: baseURL,
  };
}
