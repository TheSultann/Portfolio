import React, { Component } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { PortfolioSection } from "../portfolio";
import { AboutSection } from "../about";
import { ContactSection } from "../contact";
import { Hero3DCanvas } from "../../components/Hero3DCanvas";
import { Tilt3DCard } from "../../components/Tilt3DCard";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Hero3DCanvas Error Boundary Caught Exception:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
            background:
              "radial-gradient(circle at 70% 30%, rgba(56, 189, 248, 0.15), transparent 50%), radial-gradient(circle at 30% 70%, rgba(245, 158, 11, 0.12), transparent 50%)",
          }}
        />
      );
    }
    return this.props.children;
  }
}

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="hero-section">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Backend & Full-Stack Developer</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Safe 3D WebGL Canvas Background */}
        <CanvasErrorBoundary>
          <Hero3DCanvas />
        </CanvasErrorBoundary>

        <div className="hero-container">
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Available for Backend & Full-Stack Roles</span>
            </div>

            <div className="hero-title-greeting">{introdata.title}</div>

            <h1 className="hero-title-main">
              <span className="hero-typewriter-text">
                <Typewriter
                  options={{
                    strings: [
                      introdata.animated.first,
                      introdata.animated.second,
                      introdata.animated.third,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              </span>
            </h1>

            <p className="hero-description">{introdata.description}</p>

            <div className="hero-actions">
              <a href="#portfolio" className="btn-primary-3d">
                <span>View Portfolio</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary-glass">
                <span>Contact Me</span>
                <Terminal size={18} />
              </a>
            </div>
          </div>

          {/* Right Floating 3D Showcase Card */}
          <div className="hero-visual-wrapper">
            <Tilt3DCard className="w-100" maxTilt={15} depth={30}>
              <div className="hero-profile-card">
                <div className="hero-avatar-wrapper">
                  <img
                    src={introdata.your_img_url}
                    alt="Sultan Otanazarov"
                    className="hero-avatar-img"
                  />
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="m-0" style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                    Otanazarov Sultan
                  </h3>
                  <Sparkles size={18} color="var(--accent-amber)" />
                </div>
                <p className="m-0 text-muted" style={{ fontSize: "0.88rem" }}>
                  Computer Engineering & Software Architect
                </p>

                <div className="hero-quick-stats">
                  <div className="stat-box">
                    <div className="stat-number">2+</div>
                    <div className="stat-label">Years Exp.</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                </div>

                <div className="hero-tech-pills">
                  <span className="tech-pill">Node.js</span>
                  <span className="tech-pill">Express</span>
                  <span className="tech-pill">MongoDB</span>
                  <span className="tech-pill">TypeScript</span>
                  <span className="tech-pill">React</span>
                </div>
              </div>
            </Tilt3DCard>
          </div>
        </div>
      </section>

      {/* Embedded Portfolio, About, and Contact Sections */}
      <PortfolioSection compact />
      <AboutSection compact />
      <ContactSection compact />
    </HelmetProvider>
  );
};
