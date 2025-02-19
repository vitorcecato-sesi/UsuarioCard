import "./Header.css"
import logoG3 from "../assets/logoG3.png"

function Header() {
    return (
        <header className="Header"> 
            <h1> DESAFIO 1 de PROPS - REACT </h1>
            <img className="imagem" src={logoG3} />
        </header>
    )
}

export default Header