// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";

const BASE_URL = "https://flownine.lovable.app";

const SUPABASE_URL = "https://gjgfevzzonppzxftaxgh.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqZ2Zldnp6b25wcHp4ZnRheGdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5NjMyMzIsImV4cCI6MjA4NDUzOTIzMn0.2mkQizGIpuEY6BWVE7crpXf9Zz6k5t2GqFKmzD3LHF0";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: string;
}

async function collectEntries(): Promise<SitemapEntry[]> {
  const entries: SitemapEntry[] = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/blog", changefreq: "daily", priority: "0.9" },
  ];

  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("slug, updated_at")
      .eq("published", true)
      .order("published_at", { ascending: false });

    if (error) {
      console.warn("sitemap: could not fetch blog posts:", error.message);
    } else if (data) {
      for (const post of data) {
        entries.push({
          path: `/blog/${post.slug}`,
          lastmod: post.updated_at
            ? new Date(post.updated_at).toISOString().split("T")[0]
            : undefined,
          changefreq: "monthly",
          priority: "0.7",
        });
      }
    }
  } catch (err) {
    console.warn(
      "sitemap: unexpected error fetching posts:",
      (err as Error).message,
    );
  }

  return entries;
}

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

(async () => {
  const entries = await collectEntries();
  writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
  console.log(`sitemap.xml written (${entries.length} entries)`);
})();
