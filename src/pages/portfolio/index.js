import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, githubProjects, meta } from "../../content_option";
import { FaGithub } from "react-icons/fa";

export const PortfolioSection = ({ compact = false }) => {
  return (
    <section id="portfolio" className={compact ? "page-section page-section--portfolio" : undefined}>
      <Container className="About-header">
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 ">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="project">
                <div className="project__img-container">
                  <img
                    className="project__img"
                    src={data.img}
                    alt={data.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="project__content grid-flow">
                  <h3 className="project__title">
                    {data.title}
                    {data.status === 'active' && <span className="status-badge status-badge--active">Server Active</span>}
                    {data.status === 'partial' && <span className="status-badge status-badge--partial">Frontend Only</span>}
                  </h3>
                  <ul className="project__tags flex-group" role="list">
                    <li className="project__tag">{data.tag1}</li>
                    <li className="project__tag">{data.tag2}</li>
                  </ul>
                  <p>{data.description}</p>
                  <a className="project__cta" href={data.link} target="_blank" rel="noopener noreferrer">
                    view project
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="github-more-projects">
          <Row>
            <Col>
              <h2 className="github-section-title">Other Projects</h2>
              <div className="github-grid">
                {githubProjects.map((project) => {
                  return (
                    <article className={`github-card ${project.status ? `github-card--${project.status}` : ''}`} key={project.title}>
                      <FaGithub className="github-card-icon" />
                      <h4 className="github-card-title">
                        {project.title}
                        {project.status === 'active' && <span className="status-badge status-badge--active">Server Active</span>}
                        {project.status === 'partial' && <span className="status-badge status-badge--partial">Frontend Only</span>}
                        {project.status === 'inactive' && <span className="status-badge status-badge--inactive">Server Offline</span>}
                      </h4>
                      <p className="github-card-subtitle">{project.subtitle}</p>
                      <ul className="github-card-tags" role="list">
                        {project.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                      <p className="github-card-description">{project.description}</p>
                      <div className="github-card-actions">
                        {project.repo && (
                          <a href={project.repo} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Live
                          </a>
                        )}
                        {project.telegram && (
                          <a href={project.telegram} target="_blank" rel="noopener noreferrer">
                            Telegram
                          </a>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </Col>
          </Row>
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
        <title> Portfolio | {meta.title} </title>{" "}
        <meta name="description" content={meta.description} />
      </Helmet>
      <PortfolioSection />
    </HelmetProvider>
  );
};
