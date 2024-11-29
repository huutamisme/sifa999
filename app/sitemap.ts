import type { MetadataRoute } from 'next'
import { convertToSlug } from './lib/Convertor';
import { ProductType } from '@/components/ProductType';
import { Products } from './san-pham/ProductData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
  const staticRoutes: MetadataRoute.Sitemap = [
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

  const productTypeRoutes: MetadataRoute.Sitemap = ProductType.map((type) => ({
    url: `http://sifa999.vercel.app/san-pham/${convertToSlug(type)}`,
    lastModified: new Date(), 
    changeFrequency: 'yearly',
  }));

  const productRoutes: MetadataRoute.Sitemap = Products.map((product) => ({
    url: `http://sifa999.vercel.app/san-pham/${convertToSlug(product.type)}/${convertToSlug(product.name)}`,
    lastModified: new Date(), 
    changeFrequency: 'yearly',
  }));

  return[...staticRoutes, ...productTypeRoutes, ...productRoutes];
}
