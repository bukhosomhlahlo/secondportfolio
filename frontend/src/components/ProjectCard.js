import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, url, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Visit Us
        </a>
      )}
        </div>
      </div>
    </Col>
  )
}
