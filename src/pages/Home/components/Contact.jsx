import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import "sweetalert2/dist/sweetalert2.min.css";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSend = async () => {
        // Validación
        if (!formData.name.trim() || !formData.email.trim()) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor completa tu nombre y correo electrónico.",
            });
            return;
        }

        Swal.fire({
            title: "Enviando...",
            text: "Por favor espera",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
        });

        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            Swal.fire({
                icon: "success",
                title: "¡Mensaje enviado!",
                text: "Gracias por contactarnos, te responderemos pronto.",
                confirmButtonText: "Aceptar",
            });

            setFormData({ name: "", email: "", message: "" });

        } catch (error) {
            console.error("EmailJS error:", error);
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: "No se pudo enviar el correo. Intenta más tarde.",
            });
        }
    };

    return (
        <section id="contacto">
            <div className="container-fluid p-0">
                <div className="row g-0">

                    {/* Imagen */}
                    <div className="col-xl-6 col-lg-7 cover-background md-h-500px sm-h-400px md-mb-50px"
                        style={{ backgroundImage: "url('/images/contact.webp')" }}>
                    </div>

                    {/* Formulario */}
                    <div className="col-xxl-4 col-xl-5 col-lg-5 position-relative">
                        <div className="contact-form-style-03 position-relative ps-15 pe-15 xxl-ps-10 xxl-pe-10 lg-ps-5 lg-pe-5 overflow-hidden last-paragraph-no-margin">

                            <div className="mb-10px">
                                <span className="w-25px h-1px d-inline-block bg-base-color me-5px align-middle"></span>
                                <span className="text-gradient-base-color fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                                    Contáctanos
                                </span>
                            </div>

                            <h2 className="text-dark-gray alt-font fw-600 w-90 xxl-w-100 ls-minus-2px">
                                ¡Nos encantaría saber de ti!
                            </h2>

                            <div className="position-relative form-group mb-20px">
                                <span className="form-icon">
                                    <i className="bi bi-person icon-extra-medium text-dark-gray"></i>
                                </span>
                                <input
                                    className="ps-0 border-radius-0px border-color-extra-medium-gray form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Tu nombre*"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="position-relative form-group mb-20px">
                                <span className="form-icon">
                                    <i className="bi bi-envelope icon-extra-medium text-dark-gray"></i>
                                </span>
                                <input
                                    className="ps-0 border-radius-0px border-bottom border-color-extra-medium-gray form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Tu correo electrónico*"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="position-relative form-group form-textarea mt-15px mb-0">
                                <textarea
                                    className="ps-0 border-radius-0px border-bottom border-color-extra-medium-gray form-control"
                                    name="message"
                                    placeholder="Tu mensaje"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <span className="form-icon">
                                    <i className="bi bi-chat-square-dots icon-extra-medium text-dark-gray"></i>
                                </span>
                            </div>

                            <button
                                className="btn btn-medium btn-dark-gray btn-round-edge btn-box-shadow mb-20px mt-25px submit w-100 left-icon"
                                onClick={handleSend}
                            >
                                <i className="fa-regular fa-envelope"></i> Enviar mensaje
                            </button>

                            <p className="fs-14 lh-24 w-100 mb-0 text-center text-lg-start">
                                Nos comprometemos a proteger tu privacidad. Nunca recopilaremos información sin tu consentimiento explícito.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
