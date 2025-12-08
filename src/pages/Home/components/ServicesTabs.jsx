export default function ServicesTabs() {
    return (
        <section className="bg-solitude-blue" id="servicios">
            <div className="container">
                
                {/* Título */}
                <div className="row justify-content-center mb-4">
                    <div className="col-xl-7 col-lg-9 col-md-10 text-center">
                        <h3 
                            className="alt-font text-dark-gray fw-600 ls-minus-1px"
                            data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
                        >
                            Servicios profesionales dedicados al desarrollo
                        </h3>
                    </div>
                </div>

                <div 
                    className="row align-items-center"
                    data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 150, "staggervalue": 300, "easing": "easeOutQuad" }'
                >
                    
                    {/* Tabs */}
                    <div className="col-xl-3 col-lg-4 col-md-12 tab-style-05 md-mb-30px sm-mb-20px">
                        <ul className="nav nav-tabs justify-content-center border-0 text-left fw-500 fs-18 alt-font">
                            <li className="nav-item">
                                <a data-bs-toggle="tab" href="#tab_dev1" className="nav-link d-flex align-items-center active">
                                    <i className="feather icon-feather-code icon-extra-medium text-dark-gray"></i>
                                    <span>Desarrollo web</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a data-bs-toggle="tab" href="#tab_dev2" className="nav-link d-flex align-items-center">
                                    <i className="feather icon-feather-smartphone icon-extra-medium text-dark-gray"></i>
                                    <span>Aplicaciones móviles</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a data-bs-toggle="tab" href="#tab_dev3" className="nav-link d-flex align-items-center">
                                    <i className="feather icon-feather-server icon-extra-medium text-dark-gray"></i>
                                    <span>Backend & APIs</span>
                                </a>
                            </li>

                            
                        </ul>
                    </div>

                    {/* Content */}
                    <div className="col-xl-9 col-lg-8 col-md-12">
                        <div className="tab-content">

                            {/* TAB 1 */}
                            <div className="tab-pane fade show active" id="tab_dev1">
                                <div className="row align-items-center">
                                    <div className="col-md-6 offset-xl-1 sm-mb-30px">
                                        <img src="images\vista-superior-del-pirata-informatico-irreconocible-que-realiza-un-ciberataque-por-la-noche.webp" alt="" className="border-radius-6px w-100" />
                                    </div>

                                    <div className="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                                        <span className="fs-18 fw-600 text-base-color mb-25px d-flex align-items-center justify-content-center justify-content-md-start">
                                            <span className="text-center w-60px h-60px d-flex justify-content-center align-items-center rounded-circle bg-white box-shadow-medium-bottom me-15px">
                                                <i className="feather icon-feather-code fs-22"></i>
                                            </span>
                                            Desarrollo moderno
                                        </span>

                                        <h5 className="alt-font text-dark-gray mb-20px fw-500 ls-minus-1px">
                                            <span className="fw-600">Creamos sitios</span> rápidos y optimizados
                                        </h5>
                                        <p>Especialistas en interfaces atractivas, optimizadas y con el mejor rendimiento.</p>

                                       
                                    </div>
                                </div>
                            </div>

                            {/* TAB 2 */}
                            <div className="tab-pane fade" id="tab_dev2">
                                <div className="row align-items-center">
                                    <div className="col-md-6 offset-xl-1 sm-mb-30px">
                                        <img src="images\tecnologia-y-aplicacion-de-la-luminescencia.webp" alt="" className="border-radius-6px w-100" />
                                    </div>

                                    <div className="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                                        <span className="fs-18 fw-600 text-base-color mb-25px d-flex align-items-center justify-content-center justify-content-md-start">
                                            <span className="text-center w-60px h-60px d-flex justify-content-center align-items-center rounded-circle bg-white box-shadow-medium-bottom me-15px">
                                                <i className="feather icon-feather-smartphone fs-22"></i>
                                            </span>
                                            Apps a la medida
                                        </span>

                                        <h5 className="alt-font text-dark-gray mb-20px fw-500 ls-minus-1px">
                                            <span className="fw-600">Soluciones móviles</span> para tu negocio
                                        </h5>
                                        <p>Aplicaciones eficientes, seguras y disponibles para iOS y Android.</p>

                                        
                                    </div>
                                </div>
                            </div>

                            {/* TAB 3 */}
                            <div className="tab-pane fade" id="tab_dev3">
                                <div className="row align-items-center">
                                    <div className="col-md-6 offset-xl-1 sm-mb-30px">
                                        <img src="images\vista-de-cerca-de-hacker.webp" alt="" className="border-radius-6px w-100" />
                                    </div>

                                    <div className="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                                        <span className="fs-18 fw-600 text-base-color mb-25px d-flex align-items-center justify-content-center justify-content-md-start">
                                            <span className="text-center w-60px h-60px d-flex justify-content-center align-items-center rounded-circle bg-white box-shadow-medium-bottom me-15px">
                                                <i className="feather icon-feather-server fs-22"></i>
                                            </span>
                                            Infraestructura sólida
                                        </span>

                                        <h5 className="alt-font text-dark-gray mb-20px fw-500 ls-minus-1px">
                                            <span className="fw-600">Backends robustos</span> y escalables
                                        </h5>
                                        <p>APIs, servidores y arquitecturas listas para crecer con tu empresa.</p>

                                    </div>
                                </div>
                            </div>

                            

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
