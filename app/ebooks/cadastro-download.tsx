'use client';

import { useState } from 'react';
import { X, LockKeyhole, Mail } from 'lucide-react';

type Props = { material: string; onClose: () => void };

export default function CadastroDownload({ material, onClose }: Props) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [privacidade, setPrivacidade] = useState(false);
  const [marketing, setMarketing] = useState(false);

  return <div className="download-overlay" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="download-dialog" role="dialog" aria-modal="true" aria-labelledby="download-title">
      <button className="download-close" type="button" onClick={onClose} aria-label="Fechar formulário"><X size={20}/></button>
      <div className="eyebrow">MATERIAL GRATUITO</div>
      <h2 id="download-title">Cadastro para <em>download</em></h2>
      <p className="download-description">Material selecionado: <strong>{material}</strong></p>
      <form onSubmit={event => event.preventDefault()}>
        <label htmlFor="download-nome">Nome completo</label>
        <input id="download-nome" autoComplete="name" required minLength={3} maxLength={120} value={nome} onChange={e=>setNome(e.target.value)} placeholder="Seu nome completo"/>
        <label htmlFor="download-email">E-mail</label>
        <input id="download-email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={e=>setEmail(e.target.value)} placeholder="voce@exemplo.com"/>
        <label htmlFor="download-telefone">Telefone com DDD</label>
        <input id="download-telefone" type="tel" autoComplete="tel" required maxLength={20} value={telefone} onChange={e=>setTelefone(e.target.value)} placeholder="(21) 99999-9999"/>
        <label className="download-check"><input type="checkbox" checked={privacidade} onChange={e=>setPrivacidade(e.target.checked)}/><span>Li as informações sobre a finalidade do cadastro e concordo com o uso dos meus dados para disponibilização do material solicitado. *</span></label>
        <label className="download-check"><input type="checkbox" checked={marketing} onChange={e=>setMarketing(e.target.checked)}/><span>Quero receber novidades e conteúdos da Mentoria para o Sucesso por e-mail ou WhatsApp (opcional).</span></label>
        <div className="download-notice"><LockKeyhole size={17}/> O cadastro ainda não está habilitado: estamos preparando o armazenamento seguro dos dados e a política de privacidade. Nenhuma informação deste formulário é enviada ou salva.</div>
        <button className="button gold download-submit" type="submit" disabled aria-disabled="true">Download disponível em breve</button>
      </form>
      <p className="download-support"><Mail size={15}/> Dúvidas? <a href="mailto:mentoriaparaosucesso.portal@gmail.com">Entre em contato</a>.</p>
    </section>
  </div>;
}
