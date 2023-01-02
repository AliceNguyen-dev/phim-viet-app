import Logo from "../assets/images/logo.jpg"

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


      </div>
  )
  
} 