import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Mentoria para o Sucesso | Artur Andrade', description: 'Conhecimento que transforma. Desenvolvimento que gera resultados.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="pt-BR"><body>{children}</body></html>; }
