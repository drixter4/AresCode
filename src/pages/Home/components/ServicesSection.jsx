import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Landing Page",
      desc: "Tu puerta de entrada digital. Diseñada para captar la atención de forma inmediata y convertir visitantes en clientes.",
      img: "/images/landing.webp",
      link: "#"
    },
    {
      title: "Tienda en línea",
      desc: "Simplifica la experiencia de compra: navegación fluida, productos claros y pagos seguros.",
      img: "/images/shop.webp",
      link: "#"
    },
    {
      title: "Plataforma Web",
      desc: "Versátil, funcional y hecha a la medida. Impulsa tu presencia digital con una plataforma profesional.",
      img: "/images/plataforma.webp",
      link: "#"
    },
    {
      title: "Web Hosting",
      desc: "Alojamiento rápido, seguro y confiable para tu sitio. Rendimiento óptimo y soporte técnico especializado.",
      img: "/images/hosting.webp",
      link: "#"
    },
    {
      title: "Dominio y Mailing",
      desc: "Identidad digital profesional con dominio propio y correo institucional personalizado.",
      img: "/images/mailing.webp",
      link: "#"
    },
  ];

  return (
    <section className="bg-solitude-blue" id="soluciones" >
      <div className="container">

        {/* TITULO PRINCIPAL */}
        <div className="row align-items-center justify-content-center text-center text-lg-start mb-6">
          <div className="col-xl-6 col-lg-7 col-md-9 md-mb-30px sm-mb-20px">
            <h3
              className="alt-font fw-600 text-dark-gray m-0 ls-minus-2px"
              data-anime='{"el": "lines","translateY":[15,0],"opacity":[0,1],"duration":600}'
            >
              Soluciones digitales completas para tu negocio.
            </h3>
          </div>

          <div className="col-xl-5 offset-xl-1 col-lg-5 col-md-9 last-paragraph-no-margin">
            <p
              className="w-90 lg-w-100"
              data-anime='{"el":"lines","translateY":[15,0],"opacity":[0,1],"duration":600}'
            >
              En Ares Code desarrollamos herramientas digitales modernas,
              funcionales y escalables. Todo lo que necesitas para crear o
              fortalecer tu presencia en línea.
            </p>
          </div>
        </div>

        {/* LISTA DE SERVICIOS */}
        <div
          className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center"
          data-anime='{"el":"childs","translateY":[50,0],"opacity":[0,1],"duration":600}'
        >
          {services.map((service, index) => (
            <div className="col" key={index}>
              <div className="box-shadow-quadruple-large services-box-style-01 hover-box mb-30px border-radius-5px overflow-hidden">

                {/* IMAGEN */}
                <div className="position-relative box-image">
                  <img src={service.img} alt={service.title} />
                  <div className="box-overlay"></div>
                </div>

                {/* TEXTO */}
                <div className="p-10 bg-white last-paragraph-no-margin text-center services-text-block">
                  <span className="d-inline-block fs-18 alt-font fw-500 text-dark-gray mb-5px">
                    {service.title}
                  </span>
                  <p>{service.desc}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
