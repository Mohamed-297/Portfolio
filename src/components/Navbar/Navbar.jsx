import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../images/logo.jpg"
export default function Navbar() {
    return (
        <nav className=" navbar navbar-expand-lg bg-body-tertiary nav">
        <div className="container">
            <a className="navbar-brand " href="#home"><img className="logo" src={logo} alt=""/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ml-0 ">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#contact">Contact-me</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>       
    )
}
