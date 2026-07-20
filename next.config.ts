import type { NextConfig } from "next";

/**
 * Deployed as a static export to GitHub Pages, which serves project sites
 * from a repo-named subpath (https://<user>.github.io/neuratracker-hero/).
 * `basePath` makes Next's own routing and <Image> asset URLs resolve there;
 * raw <video>/<img>/CSS-url references read NEXT_PUBLIC_BASE_PATH to match.
 */
const repo = "neuratracker-hero";
const basePath = process.env.NODE_ENV === "production" ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
