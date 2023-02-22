import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'animate.css';
import linkedinIcon from '../assets/img/linkedin.svg';
import githubIcon from '../assets/img/github.svg';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <h2>Get In Touch</h2>
        <Row>
          <Col size={12} md={12}>
            <Button className="email-me" size="lg" href="mailto:philiptrostli@gmail.com">
              Email me
            </Button>{' '}
            <div className="social-icon">
              {/* <a className="linkedin-icon" href="https://linkedin.com/in/ptrostli"><img src={linkedinIcon} alt="LinkedIn" /></a> */}
              {/* <a className="github-icon" href="https://github.com/ptrostli"><img src={githubIcon} alt="GitHub"/></a> */}
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
