import { use, useState } from 'react'
import { DefaultInput } from './DefaultInput'
import './assets/css/formulario.css'

// criando o estado de login





function Login() {
        
  const [email, setEmail] = useState('')
  const [senha,setSenha]  = useState('')
  
  async function handleLogin() {
    const resposta = await fetch('http://localhost:3000/login',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({email,senha})
      
    })
    const dados = await  resposta.json()
    console.log(dados)    
  } 
  
  {/* essao do banner */}
  return (
    <div id="paginaLogin">
      <section id="sessaoBanner">
        <span id='nomeBranch'>Pizzaria Plaza</span>
        <div id="textoBanners">
          <h1>Aqui vou colocar o texto do banner</h1>
          <hr />
          <p>frase da pizzaria em geral</p>
          <span id="footerBanner">footer o banner</span>
        </div>
      </section>

      <section id="sessaoFormulario">
        <h2>Bem Vindo de Volta</h2>
        <p><b>Entre com seu Email e Senha para Continuar</b></p>
        <label>EMAIL</label> 
        

        <input type="email" placeholder='seu@email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Senha <a href="#">Esqueci Minha Senha</a></label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='********'/>
        <button onClick={handleLogin} id='btnEntrar'>Entrar</button>
        <span>ou</span>
        <button id='btnConvidado'>Continuar como Convidado</button>
        <p>Não possui conta ? <a href="">Criar Conta</a></p>
      </section>
    </div>
  )
}

export default Login
