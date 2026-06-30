import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'

const camposIniciais = {
  nome: '',
  email: '',
  telefone: '',
  endereco: '',
  username: '',
  senha: '',
  confirmarSenha: '',
}

function Cadastro() {
  const [formData, setFormData] = useState(camposIniciais)
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  function atualizarCampo(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleCadastro(e) {
    e.preventDefault()
    setErro('')

    if (formData.senha !== formData.confirmarSenha) {
      setErro('As senhas não coincidem.')
      return
    }

    setLoading(true)
    try {
      const resposta = await fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!resposta.ok) {
        setErro('Erro ao criar conta. Tente novamente.')
        return
      }

      // TODO: redirecionar para login após cadastro bem-sucedido
    } catch {
      setErro('Erro de conexão. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pagina-login">
      <section className="sessao-banner sessao-banner--cadastro">
        <span className="nome-branch">Pizzaria Plaza</span>
        <div className="texto-banner">
          <h1>Crie sua conta e peça sua pizza favorita</h1>
          <hr />
          <p>Rápido, fácil e delicioso.</p>
          <span className="footer-banner">© Pizzaria Plaza · Desde 2010</span>
        </div>
      </section>

      <section className="sessao-formulario">
        <h2>Criar Conta</h2>
        <p className="subtitulo">Preencha seus dados para continuar</p>

        <form onSubmit={handleCadastro} noValidate>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            name="nome"
            placeholder="Seu nome completo"
            value={formData.nome}
            onChange={atualizarCampo}
            required
            autoComplete="name"
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={atualizarCampo}
            required
            autoComplete="email"
          />

          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            type="tel"
            name="telefone"
            placeholder="(11) 99999-9999"
            value={formData.telefone}
            onChange={atualizarCampo}
            maxLength={11}
            required
            autoComplete="tel"
          />

          <label htmlFor="endereco">Endereço</label>
          <input
            id="endereco"
            type="text"
            name="endereco"
            placeholder="Rua, número, bairro"
            value={formData.endereco}
            onChange={atualizarCampo}
            required
            autoComplete="street-address"
          />

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Seu username"
            value={formData.username}
            onChange={atualizarCampo}
            required
            autoComplete="username"
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            name="senha"
            placeholder="••••••••"
            value={formData.senha}
            onChange={atualizarCampo}
            maxLength={11}
            required
            autoComplete="new-password"
          />

          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            id="confirmarSenha"
            type="password"
            name="confirmarSenha"
            placeholder="••••••••"
            value={formData.confirmarSenha}
            onChange={atualizarCampo}
            maxLength={11}
            required
            autoComplete="new-password"
          />

          {erro && <span className="mensagem-erro">{erro}</span>}

          <button type="submit" className="btn-entrar" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>

        <p className="link-cadastro">
          Já tem conta? <Link to="/">Entrar</Link>
        </p>
      </section>
    </div>
  )
}

export default Cadastro
