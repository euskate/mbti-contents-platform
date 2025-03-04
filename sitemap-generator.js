import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { fileURLToPath } from "url";

async function generateSitemap() {
  const hostname = "https://mbti-service.shop";
  const routes = ["/", "/personalColor", "/personalColorEng"];

  const sitemapStream = new SitemapStream({ hostname });

  for (const route of routes) {
    sitemapStream.write({
      url: route,
      changefreq: "weekly",
      priority: 0.8,
    });
  }
  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);

  // const __dirname = path.dirname(new URL(import.meta.url).pathname);
  // console.log(import.meta.dirname)
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // console.log(new URL(import.meta.url).pathname)
  // console.log("__dirname", __dirname)
  const outputPath = path.resolve(__dirname, "dist", "sitemap.xml");
  console.log("outputPath", outputPath)
  fs.writeFileSync(outputPath, sitemap.toString());
  console.log("sitemap.xml generated!");
}

generateSitemap();