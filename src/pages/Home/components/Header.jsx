export default function Header() {
    return (
        <section className="section-dark p-0 bg-dark-gray" id="inicio">
            <div
                className="swiper lg-no-parallax full-screen md-h-600px sm-h-500px ipad-top-space-margin swiper-light-pagination"
                data-slider-options='{ "slidesPerView": 1, "loop": true, "parallax": true, "speed": 1000, "pagination": { "el": ".swiper-pagination-bullets", "clickable": true }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 4000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
            >
                <div className="swiper-wrapper">

                    {/* SLIDE 1 */}
                    <div className="swiper-slide overflow-hidden">
                        <div
                            className="cover-background position-absolute top-0 start-0 w-100 h-100"
                            data-swiper-parallax="500"
                            style={{
                                backgroundImage: "url('/images/header1.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                        >
                            <div className="opacity-light bg-gradient-sherpa-blue-black"></div>
                            <div className="container h-100" data-swiper-parallax="-500">
                                <div className="row align-items-center h-100">
                                    <div
                                        className="col-xl-7 col-lg-8 col-md-10 position-relative text-white text-center text-md-start"
                                        data-anime='{ "el": "childs", "translateX": [100, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
                                    >
                                        <div>
                                            <span className="fs-20 opacity-6 mb-25px sm-mb-15px d-inline-block fw-300 ">
                                                Soluciones digitales a la medida de tu negocio
                                            </span>
                                        </div>

                                        <h1 className="alt-font w-90 xl-w-100 text-shadow-double-large ls-minus-2px">
                                            Impulsa tu presencia online con <span className="fw-600">Ares Code.</span>
                                        </h1>

                                        
                                    </div>
                                </div>

                                <div
                                    className="position-absolute bottom-minus-45px"
                                    data-anime='{ "translateY": [150, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
                                >
                                    <span className="alt-font number text-base-color opacity-3 fs-190 fw-600 ls-minus-5px">
                                        01
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SLIDE 2 */}
                    <div className="swiper-slide overflow-hidden">
                        <div
                            className="cover-background position-absolute top-0 start-0 w-100 h-100"
                            data-swiper-parallax="500"
                            style={{
                                backgroundImage: "url('https://placehold.co/1920x1100')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                        >
                            <div className="opacity-light bg-gradient-sherpa-blue-black"></div>
                            <div className="container h-100" data-swiper-parallax="-500">
                                <div className="row align-items-center h-100">
                                    <div
                                        className="col-xl-7 col-lg-8 col-md-10 position-relative text-white text-center text-md-start"
                                        data-anime='{ "el": "childs", "translateX": [100, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
                                    >
                                        <div>
                                            <span className="fs-20 opacity-6 mb-25px sm-mb-15px d-inline-block fw-300">
                                                Creamos experiencias digitales modernas y atractivas
                                            </span>
                                        </div>

                                        <h1 className="alt-font w-90 xl-w-100 text-shadow-double-large ls-minus-2px">
                                            Diseño web responsivo para la <span className="fw-600">nueva era digital.</span>
                                        </h1>

                                       
                                    </div>

                                    <div
                                        className="position-absolute bottom-minus-45px"
                                        data-anime='{ "translateY": [150, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
                                    >
                                        <span className="alt-font number text-base-color opacity-3 fs-190 fw-600 ls-minus-5px">
                                            02
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SLIDE 3 */}
                    <div className="swiper-slide overflow-hidden">
                        <div
                            className="cover-background position-absolute top-0 start-0 w-100 h-100"
                            data-swiper-parallax="500"
                            style={{
                                backgroundImage: "url('https://placehold.co/1920x1100')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                        >
                            <div className="opacity-light bg-gradient-sherpa-blue-black"></div>
                            <div className="container h-100" data-swiper-parallax="-500">
                                <div className="row align-items-center h-100">
                                    <div
                                        className="col-xl-7 col-lg-8 col-md-10 position-relative text-white text-center text-md-start"
                                        data-anime='{ "el": "childs", "translateX": [100, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
                                    >
                                        <div>
                                            <span className="fs-20 opacity-6 mb-25px sm-mb-15px d-inline-block fw-300">
                                                Tecnología, estrategia e innovación para tu proyecto
                                            </span>
                                        </div>

                                        <h1 className="alt-font w-90 xl-w-100 text-shadow-double-large ls-minus-2px">
                                            Desarrollo web inteligente para <span className="fw-600">todas las empresas.</span>
                                        </h1>

                                       
                                    </div>

                                    <div
                                        className="position-absolute bottom-minus-45px"
                                        data-anime='{ "translateY": [150, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
                                    >
                                        <span className="alt-font number text-base-color opacity-3 fs-190 fw-600 ls-minus-5px">
                                            03
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>

            </div>
        </section>
    );
}
