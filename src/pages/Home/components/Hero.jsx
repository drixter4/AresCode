import "./stars.css";

export default function HeroAres() {
  return (
    <section
      className="hero-ares-wrapper pt-4 pb-4 lg-pt-6 lg-pb-6"
      data-parallax-background-ratio="0.5"
    >
      {/* Estrellas infinitas */}
      <div className="layer stars1"></div>
      <div className="layer stars2"></div>
      <div className="layer stars3"></div>

      <div className="container z-index-1 position-relative">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 text-center">
            <h4 className="alt-font text-white mb-0 fw-300 fancy-text-style-4">
              Soluciones creativas para{" "}
              <span
                className="fw-600"
                data-fancy-text='{
                  "effect": "wave",
                  "direction": "down",
                  "string": ["negocios!", "marcas!", "proyectos!"],
                  "duration": 3500
                }'
              ></span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
