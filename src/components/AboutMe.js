import { Container, Row, Col } from 'react-bootstrap'
import linkedinIcon from '../assets/img/linkedin.svg';
import githubIcon from '../assets/img/github.svg';

export const AboutMe = () => {

  return (
    <section className='about' >
      <h2>About Me</h2>
      <Container className='details'>
        <Row className='align-items-center'>
          <Col>
            <div>
              <h5>I'm a software engineer based in Massachusetts & Florida!</h5>
              <p>I grew up in São Paulo, Brazil till I was 17 and then moved to Massachusetts where I attended Cushing Academy.</p>
              {/* <p>Originally I wanted to go into psychology and work with developmentally disabled youth, however after a semester I decided to postpone continuing my education.
              </p> */}
              <p>I've worked a wide range of jobs in many industries. Whether its in a store or a restaurant, a warehouse or an office - its allowed me to work and understand many different industries operate.</p>
              <p>I began my journey into programming 2021, eventually and fell in love with coding and decided this was what I wanted to commit myself to doing permanently. In 2022 I completed an immersive 18 week program with <strong>Launch Academy</strong>.</p>
              <p>When I'm not working I love to play video games, discover new music, and watch anime. <strong>Just your average geek..</strong>😅</p>
            </div>
              <div className="social-icon">
                <a href="https://linkedin.com/in/ptrostli"><img src={linkedinIcon} alt="" /></a>
                <a href="https://github.com/ptrostli"><img src={githubIcon} alt="" /></a>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}