import './styles.css'

import Search from '../../assets/images/search_icon.svg'
import userMenu from '../../assets/images/user-enter1.svg'

import { useState } from 'react'

function Header() {
  const [user, setUser] = useState('')
  return (
    <div id="header_container">
      <section className="logo">Kassinha Variedades</section>
      <section className="pesquisa">
        <div className="search">
          <input type="text" placeholder="  o que você esta procurando?" />
          <button>
            <img src={Search} alt="pesquisa" />
          </button>
        </div>
      </section>
      <section className="user_menu">
        <div className="show_user_info">
          {user ? (
            <div>
              <img src={'#'} alt={'foto do usuario'} />
              <div>
                <strong>Name do usuario</strong>
                <br />
                <p> 'Olá, seja bem vindo!'</p>
              </div>
            </div>
          ) : (
            <a href="/form/login">
              <i>
                <img src={userMenu} alt="Menu do usuário" />
              </i>
              Entrar
            </a>
          )}
        </div>
      </section>
    </div>
  )
}

export default Header
