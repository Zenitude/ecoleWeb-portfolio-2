

export default function Header() {
  return (
    <header className="container-fluid position-sticky top-0 border-bottom">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler ms-auto me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex-lg justify-content-lg-center align-items-lg-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active ps-2 ps-lg-0" href="#home">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-2 ps-lg-0" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-2 ps-lg-0" href="#about">À propos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-2 ps-lg-0" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-2 ps-lg-0" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
