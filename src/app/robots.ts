import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://rv-react-projects.github.io/ranvijay_portfolio';
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
