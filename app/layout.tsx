import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mentoria-para-o-sucesso.vercel.app'),
  title: { default: 'Mentoria para o Sucesso — Artur Andrade', template: '%s | Mentoria para o Sucesso — Artur Andrade' },
  description: 'Mentoria para o Sucesso — Artur Andrade. Conhecimento que transforma. Desenvolvimento que gera resultados. Formação em comunicação, vendas e liderança.',
  openGraph: {
    title: 'Mentoria para o Sucesso — Artur Andrade',
    description: 'Conhecimento que transforma. Desenvolvimento que gera resultados.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Mentoria para o Sucesso — Artur Andrade'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
