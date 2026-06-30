import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    setErro('')
    setLoading(true)

    try {
      const resposta = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      })

      if (!resposta.ok) {
        setErro('Email ou senha inválidos.')
        return
      }

      // TODO: const dados = await resposta.json() → salvar token e redirecionar
    } catch {
      setErro('Erro de conexão. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pagina-login">
      <section className="sessao-banner">
        <span className="nome-branch">Pizzaria Plaza</span>
        <div className="texto-banner">
          <h1>Sabor que aquece a alma, direto ao seu coração.</h1>
          <hr />
          <p>Cada fatia é uma história de ingredientes selecionados com amor.</p>
          <span className="footer-banner">© Pizzaria Plaza · Desde 2010</span>
        </div>
      </section>

      <section className="sessao-formulario">
        <h2>Bem-vindo de volta</h2>
        <p className="subtitulo">Entre com seu e-mail e senha para continuar</p>

        <form onSubmit={handleLogin} noValidate>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <label htmlFor="senha">
            Senha <Link to="/recuperar-senha">Esqueci minha senha</Link>
          </label>
          <input
            id="senha"
            type="password"
            placeholder="••••••••"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            autoComplete="current-password"
          />

          {erro && <span className="mensagem-erro">{erro}</span>}

          <button type="submit" className="btn-entrar" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <span className="divisor">ou</span>

        <button type="button" className="btn-convidado">
          Continuar como Convidado
        </button>

        <p className="link-cadastro">
          Não possui conta? <Link to="/cadastro">Criar conta</Link>
        </p>
      </section>
    </div>
  )
}

export default Login
