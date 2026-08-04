import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { dataportfolio, githubProjects, meta } from "../../content_option";
import { Tilt3DCard } from "../../components/Tilt3DCard";
import { ExternalLink, Send, Layers, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const PortfolioSection = ({ compact = false }) => {
  const [filter, setFilter] = useState("all");

  const allProjects = [
    ...dataportfolio.map((item) => ({ ...item, category: "fullstack", type: "featured" })),
    ...githubProjects.map((item) => ({
      ...item,
      category: item.tags.some((t) => t.toLowerCase().includes("telegram") || t.toLowerCase().includes("bot"))
        ? "telegram"
        : item.tags.some((t) => t.toLowerCase().includes("react"))
        ? "fullstack"
        : "backend",
      type: "github",
    })),
  ];

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="page-section">
      <Container className="portfolio-section-container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Curated Works</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore a collection of high-performance backend systems, AI Telegram bots, and full-stack web applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="portfolio-filter-tabs">
          <button
            className={`filter-tab-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects ({allProjects.length})
          </button>
          <button
            className={`filter-tab-btn ${filter === "backend" ? "active" : ""}`}
            onClick={() => setFilter("backend")}
          >
            Backend & Systems
          </button>
          <button
            className={`filter-tab-btn ${filter === "telegram" ? "active" : ""}`}
            onClick={() => setFilter("telegram")}
          >
            AI & Telegram Bots
          </button>
          <button
            className={`filter-tab-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Full-Stack Apps
          </button>
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <div className="featured-projects-grid">
          {filteredProjects.map((project, index) => {
            const isFeatured = project.type === "featured";
            return (
              <Tilt3DCard key={project.title + index} maxTilt={10} depth={20}>
                <div className="featured-project-card">
                  {isFeatured && (
                    <div className="featured-project-img-wrapper">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="featured-project-img"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="project-card-header">
                    <h3 className="project-card-title">{project.title}</h3>
                    {project.status && (
                      <span className={`status-badge-pill ${project.status}`}>
                        ● {project.status === "active" ? "Active" : project.status === "partial" ? "Frontend" : "Offline"}
                      </span>
                    )}
                  </div>

                  {project.subtitle && (
                    <p className="m-0 text-muted" style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                      {project.subtitle}
                    </p>
                  )}

                  <div className="project-tags-list">
                    {isFeatured ? (
                      <>
                        <span className="project-tag-item">{project.tag1}</span>
                        <span className="project-tag-item">{project.tag2}</span>
                      </>
                    ) : (
                      project.tags?.map((t) => (
                        <span className="project-tag-item" key={t}>
                          {t}
                        </span>
                      ))
                    )}
                  </div>

                  <p className="project-card-desc">{project.description}</p>

                  <div className="project-card-footer">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-card-action">
                        <span>Live App</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-card-action">
                        <span>Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-card-action">
                        <FaGithub size={14} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.telegram && (
                      <a href={project.telegram} target="_blank" rel="noopener noreferrer" className="btn-card-action">
                        <Send size={14} />
                        <span>Bot</span>
                      </a>
                    )}
                  </div>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <PortfolioSection />
    </HelmetProvider>
  );
};
