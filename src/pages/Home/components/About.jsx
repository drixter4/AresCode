export default function About() {
    return (
        <section className="border-bottom border-color-extra-medium-gray pt-40px pb-40px overflow-hidden" id="nosotros">
            <div className="container">
                <div
                    className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center align-items-center text-center"
                    data-anime='{ "el": "childs", "translateX": [-15, 0], "translateY": [15, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
                >

                    <div className="col mb-30px">
                        <div className="feature-box d-flex flex-column align-items-center justify-content-center text-center">
                            <i className="bi bi-shield-lock icon-very-medium text-base-color mb-10px"></i>
                            <span className="alt-font fw-500 text-dark-gray">Código seguro</span>
                        </div>
                    </div>

                    <div className="col mb-30px">
                        <div className="feature-box d-flex flex-column align-items-center justify-content-center text-center">
                            <i className="bi bi-lightning-charge icon-very-medium text-base-color mb-10px"></i>
                            <span className="alt-font fw-500 text-dark-gray">Desarrollo rápido</span>
                        </div>
                    </div>

                    <div className="col mb-30px">
                        <div className="feature-box d-flex flex-column align-items-center justify-content-center text-center">
                            <i className="bi bi-code-slash icon-very-medium text-base-color mb-10px"></i>
                            <span className="alt-font fw-500 text-dark-gray">Soluciones a medida</span>
                        </div>
                    </div>

                    <div className="col mb-30px">
                        <div className="feature-box d-flex flex-column align-items-center justify-content-center text-center">
                            <i className="bi bi-graph-up-arrow icon-very-medium text-base-color mb-10px"></i>
                            <span className="alt-font fw-500 text-dark-gray">Impulso digital</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
