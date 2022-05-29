import './styles.css'

function FormCreateUser() {
  return (
    <div className="form_container">
      <div className="form_header">Kassinha Variedades</div>
      <h2>Create Login:</h2>
      <form className="form_Cadastro">
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" />
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
        <div>
          <label htmlFor="file">Foto:</label>
          <input type="file" name="file" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default FormCreateUser
