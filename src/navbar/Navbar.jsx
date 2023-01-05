import Logo from "../assets/images/logo.jpg"
// import "./Navbar.css"
export default function Navbar() {
  return (
    <div className="nav">
        <a className="logo" href="/"><img className="logo-img" src={Logo} alt="logo" /></a>

          <div className="list">
            <a href="/serie">Series</a>
          </div>
          <div className="list">
            <a href="/film">Films</a>
          </div>
          <div className="list">
            <a href="/about">A Propos</a>
          </div>
          <div className="list">
            <a href="/contact">Contact</a>
          </div>

          {/* <div className="navbar_logo">Logo</div>
          <ul className="navbar_links">
            <li className="navbar_item">
              <a href="/" className="navbar_link">Accueil</a>
            </li>
            <li className="navbar_item">
              <a href="/" className="navbar_link">Accueil</a>
            </li>
            <li className="navbar_item">
              <a href="/" className="navbar_link">Accueil</a>
            </li>
            <li className="navbar_item">
              <a href="/" className="navbar_link">Accueil</a>
            </li>
            <li className="navbar_item">
              <a href="/" className="navbar_link">Accueil</a>
            </li>
            <li className="navbar_item">
              <a href="/" className="navbar_link">Accueil</a>
            </li>
            <li className="navbar_item">
              <a href="/" className="navbar_link">Accueil</a>
            </li>
            <li className="navbar_item">
              <a href="/" className="navbar_link">Accueil</a>
            </li>
          </ul>

          <button className="navbar_burger">
            <span className="burger-bar"></span>
          </button> */}

      </div>
  )
  
} 