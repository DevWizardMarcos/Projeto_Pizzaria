import { useState } from "react";
import './assets/css/formulario.css'

// criando função para cadastro de clientes
function Cadastro(){
        //pegando      atualizando  //definindo os valores iniciais
    const [formData, setFormData] = useState({
        nome : '',
        email : '',
        telefone : '',
        endereco : '',
        username : '',
        senha : '',
        confirmarSenha : ''
    })

    
function atualizarCampo(e){
    setFormData({...formData, [e.target.name]: e.target.value})
}

return (
    <div id="paginaLogin">
      <section id="sessaoBanner">
        <span id="nomeBranch">Pizzaria Plaza</span>
        <div id="textoBanner">
            <h1>Crie sua conta e peça pizza favorita</h1>
            <hr />
            <p>Rápido, facil e delicioso</p>
            <span id="footerBanner">footer do banner</span>
        </div>
        </section>
    <section id="sessaoFormulario">
        <h2>Criar Conta</h2>
        <p><b>Preencha seus dados para continuar</b></p>
        <label>NOME</label>
        <input type="text" name="nome" placeholder="Seu nome completo" 
        
        value={formData.nome} onChange={atualizarCampo}
        required    />

        <label>EMAIL</label>
        <input type="email" name="email" id="" placeholder="Seu email"
        value={formData.email} onChange={atualizarCampo}

        required/>

        <label htmlFor="">TELEFONE</label>
        <input type="tel" name="telefone" id="" placeholder="Seu telefone" 
        
        value={formData.telefone} onChange={atualizarCampo}
        maxLength={11} required
        />
        
        <label htmlFor="">ENDEREÇO</label>
        <input type="text" name="endereco" placeholder="Seu endereço"
        
        value={formData.endereco} onChange={atualizarCampo}
        required
        />

        <label>USER NAME</label>
        <input type="text" name="username" placeholder="Seu username"
        value={formData.username} onChange={atualizarCampo}
        required 
        />

        <label>SENHA</label>
        <input type="password" name="senha" id="" placeholder="**********"
        value={formData.senha} onChange={atualizarCampo}
        maxLength={11} required
        />

        <label>CONFIRMAR SENHA</label>
        <input type="password" name="confirmarSenha" id="" placeholder="**********"
        value={formData.confirmarSenha} onChange={atualizarCampo}
        maxLength={11} required
        />
        
        <button id="btnEntrar">Cadastrar</button>
        <p>Já tem conta ? <a href="">Entrar</a></p>
        


    </section>

    
    </div>
)

}

export default Cadastro