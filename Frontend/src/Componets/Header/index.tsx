import './styles.css'

import Search from '../../assets/images/search_icon.svg'

function Header() {
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
          <img src={'#'} alt={'foto do usuario'} />
          <div>
            <strong>Name do usuario</strong>
            <br />
            <p> 'Olá, seja bem vindo!'</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header
