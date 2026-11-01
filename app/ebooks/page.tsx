import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';
import Catalogo from './catalogo';

export const metadata: Metadata = {
  title: 'E-books gratuitos',
  description: 'Biblioteca de e-books gratuitos da Mentoria para o Sucesso — Artur Andrade. Conteúdos de comunicação, vendas, liderança e desenvolvimento profissional.'
};

export default function EbooksPage() {
  return <main>
    <header className="topbar wrap">
      <Link className="brand" href="/" aria-label="Voltar ao início">
        <span className="brand-mark">M<span>.</span></span>
        <span className="brand-text">MENTORIA <small>PARA O SUCESSO <b>— ARTUR ANDRADE</b></small></span>
      </Link>
      <Link className="top-cta" href="/"><ArrowLeft size={16}/> Página inicial</Link>
    </header>
    <section className="section wrap">
      <div className="eyebrow">CONHECIMENTO ACESSÍVEL</div>
      <h1 style={{maxWidth:850}}>Biblioteca de <em>e-books gratuitos.</em></h1>
      <p className="section-intro">Um espaço para compartilhar conhecimento sobre comunicação, vendas, liderança e desenvolvimento profissional. Os materiais serão disponibilizados gratuitamente mediante cadastro simples, assim que os arquivos e o armazenamento seguro estiverem prontos.</p>
      <Catalogo />
      <div className="ebooks-note">
        <h2 style={{fontSize:30,letterSpacing:-1}}>Em breve, downloads gratuitos.</h2>
        <p>Os arquivos ainda não estão publicados. Enquanto isso, entre em contato para saber mais sobre os materiais.</p>
        <a className="button gold" href="mailto:mentoriaparaosucesso.portal@gmail.com?subject=Interesse%20nos%20e-books%20gratuitos"><Mail size={17}/> Quero saber mais</a>
      </div>
    </section>
    <footer className="footer wrap"><span>MENTORIA PARA O SUCESSO — ARTUR ANDRADE</span><span>© 2026 Artur Andrade. Todos os direitos reservados.</span></footer>
  </main>;
}
