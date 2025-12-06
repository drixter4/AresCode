import React from "react";

export default function Footer() {
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
        <footer className="pt-5 pb-5 sm-pt-40px sm-pb-45px footer-dark bg-extra-medium-slate-blue">
            <div className="container">
                <div className="row justify-content-center">
                    {/* start footer column */}
                    <div className="col-lg-3 col-sm-6 last-paragraph-no-margin order-5 order-sm-4 order-lg-1 text-center text-sm-start">
                        <a href="#" className="footer-logo mb-15px d-block d-lg-inline-block">
                            <img
                                src="images/LogoBlanco.png"
                                alt="AresCode Logo"
                            />
                        </a>
                        <p className="w-90 sm-w-100 d-inline-block mb-15px">
                            AresCode, empresa de software enfocada en soluciones innovadoras.
                        </p>
                        <p>
                            &copy; 2025{" "}
                            <span
                                className="text-white text-decoration-line-bottom"
                                onClick={() => smoothScroll("inicio")}
                                style={{ cursor: "pointer" }}
                            >
                                AresCode
                            </span>
                        </p>
                    </div>
                    {/* end footer column */}

                    {/* start footer column */}
                    <div className="col-5 col-lg-2 col-sm-4 md-mb-50px sm-mb-30px order-1 order-lg-2">
                        <span className="alt-font d-block text-white mb-5px">Compañía</span>
                        <ul>
                            <li>
                                <span
                                    onClick={() => smoothScroll("nosotros")}
                                    style={{ cursor: "pointer" }}
                                >
                                    Nosotros
                                </span>
                            </li>
                            <li>
                                <span
                                    onClick={() => smoothScroll("servicios")}
                                    style={{ cursor: "pointer" }}
                                >
                                    Servicios
                                </span>
                            </li>
                            <li>
                                <span
                                    onClick={() => smoothScroll("soluciones")}
                                    style={{ cursor: "pointer" }}
                                >
                                    Soluciones
                                </span>
                            </li>
                            <li>
                                <span
                                    onClick={() => smoothScroll("contacto")}
                                    style={{ cursor: "pointer" }}
                                >
                                    Contacto
                                </span>
                            </li>
                        </ul>
                    </div>
                    {/* end footer column */}

                    {/* start footer column */}
               
                    {/* end footer column */}

                    {/* start footer column */}
                    <div className="col-5 col-lg-2 col-sm-4 md-mb-50px sm-mb-30px order-3 order-lg-4">
                        <span className="alt-font d-block text-white mb-5px">Redes sociales</span>
                        <ul>
                            
                            <li>
                                <a
                                    href="http://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* end footer column */}

                    {/* start footer column */}
                    <div className="col-7 col-lg-3 col-sm-6 xs-mb-30px last-paragraph-no-margin order-4 order-sm-5 order-lg-5">
                        <span className="alt-font d-block text-white mb-5px">Contacto</span>
                        <p className="w-80 lg-w-100 md-w-70 sm-w-100 mb-10px">
                            Guadalajara, Jalisco
                        </p>
                        <div>
                            <i className="feather icon-feather-phone-call icon-very-small text-white me-10px"></i>
                            <span
                                onClick={() => smoothScroll("contacto")}
                                className="text-white"
                                style={{ cursor: "pointer" }}
                            >
                                +52 33 1234 5678
                            </span>
                        </div>
                        <div>
                            <i className="feather icon-feather-mail icon-very-small text-white me-10px"></i>
                            <span
                                onClick={() => smoothScroll("contacto")}
                                className="text-white text-decoration-line-bottom"
                                style={{ cursor: "pointer" }}
                            >
                                info@arescode.com.mx
                            </span>
                        </div>
                    </div>
                    {/* end footer column */}
                </div>
            </div>
        </footer>
    );
}
