import './navbar.css';

export default function Navbar() {

  // --- FUNCION PARA SCROLL SUAVE ---
  const smoothScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg header-transparent bg-transparent header-reverse"
        data-header-hover="light"
      >
        <div className="container-fluid">

          {/* LOGO */}
          <div className="col-auto col-xxl-3 col-lg-2 me-lg-0 me-auto">
            <a className="navbar-brand" onClick={() => smoothScroll("inicio")} style={{ cursor: "pointer" }}>
              <img src="images/LogoBlanco.png" alt="" className="default-logo" />
              <img src="images/Logo.png" alt="" className="alt-logo" />
              <img src="images/Logo.png" alt="" className="mobile-logo" />
            </a>
          </div>

          {/* MENU */}
          <div className="col-auto menu-order position-static">
            <button
              className="navbar-toggler float-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
            >
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav alt-font">

                <li className="nav-item">
                  <span className="nav-link" onClick={() => smoothScroll("inicio")} style={{ cursor: "pointer" }}>
                    Inicio
                  </span>
                </li>

                <li className="nav-item">
                  <span className="nav-link" onClick={() => smoothScroll("nosotros")} style={{ cursor: "pointer" }}>
                    Nosotros
                  </span>
                </li>

                <li className="nav-item dropdown dropdown-with-icon-style02">
                  <span
                    className="nav-link"
                    onClick={() => smoothScroll("servicios")}
                    style={{ cursor: "pointer" }}
                  >
                    Servicios
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={() => smoothScroll("soluciones")} style={{ cursor: "pointer" }}>
                    Soluciones
                  </span>
                </li>

                <li className="nav-item">
                  <span className="nav-link" onClick={() => smoothScroll("contacto")} style={{ cursor: "pointer" }}>
                    Contacto
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTONES / CONTACTO */}
          <div className="col-auto col-xxl-3 col-lg-2 text-end d-none d-sm-flex">
            <div className="header-icon">
              <div className="d-none d-xxl-inline-block me-25px xxl-me-10px">
                <div className="alt-font fs-15 xl-fs-13 widget-text fw-500">
                  <span className="w-35px h-35px bg-base-color d-inline-block lh-36 me-10px border-radius-100px">
                    <i className="feather icon-feather-phone me-10px"></i>
                  </span>
                  <a className="widget-text text-white-hover" onClick={() => smoothScroll("contacto")} style={{ cursor: "pointer" }}>
                    1 800 222 000
                  </a>
                </div>
              </div>

              <div className="header-button">
                <span
                  onClick={() => smoothScroll("contacto")}
                  className="btn btn-very-small btn-transparent-white-light btn-rounded"
                  style={{ cursor: "pointer" }}
                >
                  Solicitar cotización
                </span>
              </div>

            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}
