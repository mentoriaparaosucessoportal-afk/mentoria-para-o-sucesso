'use client';
import { useState } from 'react';
import { BookOpen, Download } from 'lucide-react';
import CadastroDownload from './cadastro-download';

const livros = [
  { categoria: 'COMUNICAÇÃO', titulo: 'A Arte da Comunicação Intencional', descricao: 'Guia para novos consultores: postura, clareza, escuta e comunicação com propósito.' },
  { categoria: 'CARREIRA E VENDAS', titulo: 'Águias Não Caçam Moscas', descricao: 'Reflexões sobre carreira comercial, construção de carteira e desenvolvimento de equipes.' },
  { categoria: 'DESENVOLVIMENTO', titulo: 'Cinco Passos para Resultados Extraordinários', descricao: 'Cinco hábitos para aprender, conectar, agir, resolver e compartilhar resultados todos os dias.' }
];

export default function Catalogo() {
  const [selecionado, setSelecionado] = useState<string|null>(null);
  return <>
    <div className="courses ebooks-grid">
      {livros.map(livro => <article className="course" key={livro.titulo}>
        <BookOpen size={35} color="#d8b56b" aria-hidden="true"/>
        <span className="course-tag">{livro.categoria}</span>
        <h3>{livro.titulo}</h3>
        <p>{livro.descricao}</p>
        <button className="ebook-trigger" type="button" onClick={()=>setSelecionado(livro.titulo)}><Download size={16}/> Ver cadastro para download</button>
        <span className="soon">PDF EM PREPARAÇÃO</span>
      </article>)}
    </div>
    {selecionado && <CadastroDownload material={selecionado} onClose={()=>setSelecionado(null)}/>}
  </>;
}
