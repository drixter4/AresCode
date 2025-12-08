export default function AboutAresCode() {
    return (
        <section className="pb-8 md-pb-17 xs-pb-28">
            <div className="container">
                <div className="row align-items-center justify-content-center">

                    {/* Texto */}
                    <div
                        className="col-xl-5 col-lg-6 col-md-9 md-mb-50px text-center text-lg-start"
                        data-anime='{"el":"childs","translateY":[50,0],"opacity":[0,1],"duration":600,"delay":0,"staggervalue":300,"easing":"easeOutQuad"}'
                    >
                        <span className="bg-solitude-blue text-uppercase fs-20 alt-font fw-600 text-base-color lh-40 sm-lh-55 border-radius-100px d-inline-block mb-25px">
                            Sobre AresCode
                        </span>

                        <h3 className="alt-font text-dark-gray fw-600 ls-minus-1px mb-20px sm-w-85 xs-w-100 mx-auto">
                            Soluciones digitales inteligentes y a medida.
                        </h3>

                        <p>
                            En AresCode desarrollamos plataformas modernas, rápidas y seguras.
                            Creamos experiencias digitales que impulsan negocios y transforman
                            ideas en proyectos reales. Nuestra visión es construir tecnología
                            que marque la diferencia.
                        </p>

                        <div className="d-flex flex-row justify-content-center justify-content-lg-start align-items-center mt-35px">
                            <div className="w-120px me-25px flex-shrink-0">
                                <div className="chart-percent">
                                    {/* Este componente requiere tu plugin de pie chart */}
                                    <span
                                        className="pie-chart-style-01 d-flex align-items-center justify-content-center text-center"
                                        data-line-width="7"
                                        data-percent="95"
                                        data-size="120"
                                        data-track-color="#ededed"
                                        data-start-color="#4A63FF"
                                        data-end-color="#4A63FF"
                                    >
                                        <span className="percent d-flex align-items-center justify-content-center alt-font fs-26 text-dark-gray fw-600 ls-minus-1px"></span>
                                    </span>
                                </div>
                            </div>

                            <div className="text-start">
                                <span className="fs-20 lh-28 text-dark-gray alt-font fw-500 d-inline-block w-70 xs-w-100">
                                    Crecimiento de clientes en los
                                    <span className="text-decoration-line-bottom-medium fw-600 text-base-color">
                                        {" "}últimos 2 años.
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                 <div class="col-xl-6 col-lg-6 offset-xl-1 position-relative">
                        <div class="text-end w-80 md-w-75 ms-auto" data-animation-delay="500" data-shadow-animation="true" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                            <img src="images\representaciones-de-ui-y-ux-con-laptop.webp" alt="" class="border-radius-5px"/>
                        </div>
                        <div class="w-60 md-w-50 xs-w-55 overflow-hidden position-absolute left-15px bottom-minus-50px" data-shadow-animation="true" data-animation-delay="500" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                            <img src="images\collage-de-fondo-de-programacion.webp" alt="" class="border-radius-5px box-shadow-quadruple-large" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
