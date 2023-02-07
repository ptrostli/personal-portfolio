import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, deployURL }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <a href={deployURL}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <a href={deployURL}/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
