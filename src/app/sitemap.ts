import { MetadataRoute } from 'next';
import { MASTER_TOURS } from '../data/toursData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tourpublish.com';

  const toursUrls = MASTER_TOURS.map(tour => ({
    url: `${baseUrl}/#${tour.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...toursUrls,
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/thank-you`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}
