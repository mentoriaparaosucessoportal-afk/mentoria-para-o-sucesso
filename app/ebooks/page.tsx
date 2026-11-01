import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Download, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'E-books gratuitos',
  description: 'Biblioteca de e-books gratuitos da Mentoria para o Sucesso — Artur Andrade. Conteúdos de comunicação, vendas, liderança e desenvolvimento profissional.'
};

const livros = [
  { categoria: 'COMUNICAÇÃO', titulo: 'A Arte da Comunicação Intencional', descricao: 'Guia para novos consultores: postura, clareza, escuta e comunicação com propósito.' },
  { categoria: 'CARREIRA E VENDAS', titulo: 'Águias Não Caçam Moscas', descricao: 'Reflexões sobre carreira comercial, construção de carteira e desenvolvimento de equipes.' },
  { categoria: 'DESENVOLVIMENTO', titulo: 'Cinco Passos para Resultados Extraordinários', descricao: 'Cinco hábitos para aprender, conectar, agir, resolver e compartilhar resultados todos os dias.' }
];

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
      <p className="section-intro">Um espaço para compartilhar conhecimento sobre comunicação, vendas, liderança e desenvolvimento profissional. Os materiais serão disponibilizados gratuitamente à medida que forem finalizados.</p>
      <div className="courses ebooks-grid">
        {livros.map((livro, i) => <article className="course" key={livro.titulo}>
          <BookOpen size={35} color="#d8b56b" aria-hidden="true"/>
          <span className="course-tag">{livro.categoria}</span>
          <h3>{livro.titulo}</h3>
          <p>{livro.descricao}</p>
          <span className="soon"><Download size={14} style={{verticalAlign:'middle',marginRight:7}}/>PDF EM PREPARAÇÃO</span>
        </article>)}
      </div>
      <div className="ebooks-note">
        <h2 style={{fontSize:30,letterSpacing:-1}}>Em breve, downloads gratuitos.</h2>
        <p>Os arquivos ainda não estão publicados. Enquanto isso, entre em contato para saber mais sobre os materiais.</p>
        <a className="button gold" href="mailto:mentoriaparaosucesso.portal@gmail.com?subject=Interesse%20nos%20e-books%20gratuitos"><Mail size={17}/> Quero saber mais</a>
      </div>
    </section>
    <footer className="footer wrap"><span>MENTORIA PARA O SUCESSO — ARTUR ANDRADE</span><span>© 2026 Artur Andrade. Todos os direitos reservados.</span></footer>
  </main>;
}
