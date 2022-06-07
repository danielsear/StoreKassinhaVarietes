import './styles.css'

function FormLogin() {
  return (
    <div className="form_container">
      <div className="form_header">Kassinha Variedades</div>
      <h2>Login:</h2>
      <form className="form_Cadastro">
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="name" name="name" placeholder="Digite seu nome" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Digite seu email" />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Você não possui cadastro?{' '}
        <a href="/form/create-login">Criar cadastro</a>
      </p>
    </div>
  )
}

export default FormLogin
