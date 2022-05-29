import './styles.css'

import { ChangeEvent, FormEvent, useState } from 'react'

function FormCreateUser() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    file: '',
    admin: false
  })

  function handleUser(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    console.log(user)
  }

  return (
    <div className="form_container">
      <div className="form_header">Kassinha Variedades</div>
      <h2>Create Login:</h2>
      <form className="form_Cadastro" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleUser}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={handleUser}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={handleUser}
          />
        </div>
        <div>
          <label htmlFor="file">Foto:</label>
          <input type="file" name="file" onChange={handleUser} />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default FormCreateUser
