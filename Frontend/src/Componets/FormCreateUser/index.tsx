import './styles.css'

import { v4 } from 'uuid'

import { useNavigate } from 'react-router-dom'

import { ChangeEvent, FormEvent, useState } from 'react'

import { CreateUser } from '../../services/User'

function FormCreateUser() {
  const navegate = useNavigate()
  const [messageError, setMessageError] = useState('')
  const [user, setUser] = useState({
    userId: '',
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

    const userId = v4()

    if (user) {
      if (user.email && user.name && user.password && user.admin) {
        if (user.name === 'daniel') {
          CreateUser({
            userId: userId,
            name: user.name,
            email: user.email,
            password: user.password,
            admin: true
          })
          navegate(`/${userId}`)
        }
        CreateUser({
          userId: userId,
          name: user.name,
          email: user.email,
          password: user.password,
          admin: user.admin
        })
        navegate(`/${userId}`)
      }
      CreateUser({
        userId: userId,
        name: user.name,
        email: user.email,
        password: user.password
      })
      navegate(`/${userId}`)
    }
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
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={handleUser}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={handleUser}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default FormCreateUser
/*
<form
        method="POST"
        encType="multipart/form-data"
        action="http://localhost:3333/image"
        
      >
        <label htmlFor="file">Foto:</label>
        <input type="file" name="file" />
        <button type="submit">upload</button>
      </form>
*/
