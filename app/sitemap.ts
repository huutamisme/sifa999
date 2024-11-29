import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://sifa999.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
    {
      url: 'http://sifa999.vercel.app/gioi-thieu',
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
    {
      url: 'http://sifa999.vercel.app/san-pham',
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
    {
      url: 'http://sifa999.vercel.app/nha-phan-phoi',
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
    {
      url: 'http://sifa999.vercel.app/tuyen-dung',
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
    {
      url: 'http://sifa999.vercel.app/lien-he',
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
  ]
}