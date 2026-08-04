import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import { Tilt3DCard } from "../../components/Tilt3DCard";
import { User, Briefcase, Cpu, ShieldCheck, Server, Bot, Layout } from "lucide-react";

export const AboutSection = ({ compact = false }) => {
  const serviceIcons = [<Server size={24} />, <Bot size={24} />, <Layout size={24} />];

  return (
    <section id="about" className="page-section">
      <Container className="about-section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Developer Journey</span>
          </div>
          <h2 className="section-title">About & Experience</h2>
          <p className="section-subtitle">
            Passionate computer engineering student specializing in scalable back-end infrastructure, RESTful APIs, and intelligent automation.
          </p>
        </div>

        {/* Bio Overview */}
        <div className="about-bio-card">
          <p className="about-bio-text">{dataabout.aboutme}</p>
        </div>

        {/* Work Timeline */}
        <div className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-4">
            <Briefcase color="var(--accent-cyan)" size={22} />
            <h3 className="m-0" style={{ fontSize: "1.6rem", fontWeight: "700" }}>
              Work Experience
            </h3>
          </div>

          <div className="timeline-container">
            {worktimeline.map((data, i) => (
              <div className="timeline-item" key={i}>
                <Tilt3DCard maxTilt={8} depth={15}>
                  <div className="timeline-glass-card">
                    <h4 className="timeline-title">{data.jobtitle}</h4>
                    <div className="timeline-meta">
                      {data.link ? (
                        <a
                          href={data.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="company-link"
                        >
                          @{data.where}
                        </a>
                      ) : (
                        <span className="company-link">@{data.where}</span>
                      )}
                      <span className="timeline-date">{data.date}</span>
                    </div>
                    <p className="timeline-description">{data.description}</p>
                  </div>
                </Tilt3DCard>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Tech Stack */}
        <div className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-4">
            <Cpu color="var(--accent-amber)" size={22} />
            <h3 className="m-0" style={{ fontSize: "1.6rem", fontWeight: "700" }}>
              Core Technical Skills
            </h3>
          </div>

          <div className="skills-grid">
            {skills.map((data, i) => (
              <div className="skill-card" key={i}>
                <div className="skill-header">
                  <span className="skill-name">{data.name}</span>
                  <span className="skill-percentage">{data.value}%</span>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${data.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Provided */}
        <div>
          <div className="d-flex align-items-center gap-2 mb-4">
            <ShieldCheck color="var(--accent-cyan)" size={22} />
            <h3 className="m-0" style={{ fontSize: "1.6rem", fontWeight: "700" }}>
              Specialized Services
            </h3>
          </div>

          <div className="services-grid">
            {services.map((data, i) => (
              <Tilt3DCard key={i} maxTilt={10} depth={20}>
                <div className="service-glass-card">
                  <div className="service-icon-box">
                    {serviceIcons[i % serviceIcons.length]}
                  </div>
                  <h4 className="service-title">{data.title}</h4>
                  <p className="service-description">{data.description}</p>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <AboutSection />
    </HelmetProvider>
  );
};
