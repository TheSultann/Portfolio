import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactConfig, socialprofils } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Tilt3DCard } from "../../components/Tilt3DCard";
import { Mail, Phone, Send, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export const ContactSection = ({ compact = false }) => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata((prev) => ({ ...prev, loading: true }));

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          setFormdata({
            email: "",
            name: "",
            message: "",
            loading: false,
            alertmessage: "Message sent successfully! I will get back to you soon.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          setFormdata({
            loading: false,
            alertmessage: `Failed to send message: ${error.text}`,
            variant: "danger",
            show: true,
          });
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="page-section">
      <Container className="contact-section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a project in mind or interested in collaboration? Feel free to reach out anytime!
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg="11">
            <Tilt3DCard maxTilt={6} depth={15}>
              <div className="contact-glass-card">
                <Row className="g-4">
                  {/* Left Contact Details */}
                  <Col lg="5">
                    <div className="contact-info-box">
                      <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "0.5rem" }}>
                        Contact Channels
                      </h3>
                      <p className="text-muted" style={{ fontSize: "0.95rem" }}>
                        {contactConfig.description}
                      </p>

                      <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="contact-info-item">
                        <div className="contact-icon-wrapper">
                          <Mail size={20} />
                        </div>
                        <div>
                          <p className="contact-info-label">Direct Email</p>
                          <p className="contact-info-value">{contactConfig.YOUR_EMAIL}</p>
                        </div>
                      </a>

                      {contactConfig.YOUR_FONE && (
                        <a href={`tel:${contactConfig.YOUR_FONE}`} className="contact-info-item">
                          <div className="contact-icon-wrapper">
                            <Phone size={20} />
                          </div>
                          <div>
                            <p className="contact-info-label">Phone / Telegram</p>
                            <p className="contact-info-value">{contactConfig.YOUR_FONE}</p>
                          </div>
                        </a>
                      )}

                      <div className="social-links-grid">
                        <a
                          href={socialprofils.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-glass-btn"
                        >
                          <FaGithub size={16} />
                          <span>GitHub</span>
                        </a>
                        <a
                          href={socialprofils.telegram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-glass-btn"
                        >
                          <FaTelegramPlane size={16} />
                          <span>Telegram</span>
                        </a>
                        <a
                          href={socialprofils.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-glass-btn"
                        >
                          <FaLinkedin size={16} />
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </Col>

                  {/* Right Form */}
                  <Col lg="7">
                    {formData.show && (
                      <Alert
                        variant={formData.variant}
                        onClose={() => setFormdata({ ...formData, show: false })}
                        dismissible
                        className="mb-4"
                      >
                        {formData.alertmessage}
                      </Alert>
                    )}

                    <form onSubmit={handleSubmit} className="contact-form-glass">
                      <Row className="g-3">
                        <Col md="6">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input-glass"
                          />
                        </Col>
                        <Col md="6">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input-glass"
                          />
                        </Col>
                      </Row>

                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="form-input-glass"
                      />

                      <div>
                        <button type="submit" className="btn-send-glass" disabled={formData.loading}>
                          <span>{formData.loading ? "Sending Message..." : "Send Message"}</span>
                          <Send size={16} />
                        </button>
                      </div>
                    </form>
                  </Col>
                </Row>
              </div>
            </Tilt3DCard>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title} | Contact</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <ContactSection />
    </HelmetProvider>
  );
};
