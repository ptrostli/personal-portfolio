import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import playlstrLogo from "../assets/img/playlstr.png"
import ruckTrailsLogo from "../assets/img/rucktrails.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Playlstr",
      description: "Bootcamp Project",
      imgUrl: playlstrLogo,
      deployURL: "https://playlstr.onrender.com/"
    },
    {
      title: "Ruck Trails",
      description: "Bootcamp Project",
      imgUrl: ruckTrailsLogo,
      deployURL: "https://ruck-trails.onrender.com/"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <h5>During my time at <strong>Launch Academy</strong>, I worked on two projects that highlight most of the languages, skills, and frameworks I learned.</h5>
                <p>These projects we're made using React.js & Sinatra with a RoR & PostgreSQL backend. I'm excited to expand this list and build upon them even further!</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
