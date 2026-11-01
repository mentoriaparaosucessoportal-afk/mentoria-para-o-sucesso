import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return {rules:{userAgent:'*',allow:'/'},sitemap:'https://mentoria-para-o-sucesso.vercel.app/sitemap.xml'}; }
