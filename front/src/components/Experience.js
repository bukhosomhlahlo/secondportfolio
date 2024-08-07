// Experience.jsx
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import EducationTimeline from './EducationTimeline';
import TestimonialsCards from './TestimonialsCard';
import projImg1 from '../assets/img/project 1.png';
import projImg2 from '../assets/img/project 2.png';
import projImg3 from '../assets/img/project 3.png';
import projImg4 from '../assets/img/project 4.png';
import projImg5 from '../assets/img/project 5.PNG';
import projImg6 from '../assets/img/project 6.png';
import EngageHUB from '../assets/img/EngageHUB.PNG';
import bankingapp from '../assets/img/bankingapp.PNG';
import LMS from '../assets/img/LMS.PNG';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  const projects = [
    { title: "SneekyKleen", description: "Sneaker cleaning services", url: "https://sneakykleenz.netlify.app/", imgUrl: projImg1 },
    { title: "Techno Champs", description: "Travel Agency", url: "https://technochampstouring.netlify.app/", imgUrl: projImg2 },
    { title: "FindersHub Landing Page", description: "Landing Page", url: "https://findershub.netlify.app/", imgUrl: projImg3 },
    { title: "FindersHub", description: "Lost and Found App", url: "https://findershub.netlify.app/indexes", imgUrl: projImg4 },
    { title: "My Portfolio", description: "HTML, CSS, Javascript Portfolio", url: "https://bukhosomhlahaloportfolio.netlify.app", imgUrl: projImg5 },
    { title: "Python Quiz App", description: "Beginner App", imgUrl: projImg6 },
    { title: "EngageHUB", description: "Hackathon Innaugral with City of Cape Town", imgUrl: EngageHUB, url: "https://engagewithciti.netlify.app/"},
    { title: "Banking App", description: "Mobile Banking App", imgUrl: bankingapp, url: "https://github.com/bukhosomhlahlo/Cap-Digital-Express",},
    { title: "Library Track", description: "Library Management System", imgUrl: LMS, url: "https://github.com/bukhosomhlahlo/LibraryTrack",}
  ];

  // const education = [
  //   { id: 0, year: "2015", title: "Matric", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  //   { id: 1, year: "2018", title: "Junior Degree", description: "Fugit quis eos eligendi corporis doloremque." },
  //   { id: 2, year: "2019", title: "NQF 5 Certificate", description: "Sit velit, porro ullam vero nihil fuga voluptatem." },
  //   { id: 3, year: "2023", title: "Honors Degree", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  //   { id: 4, year: "2024", title: "Hackathon Certificate", description: "Fugit quis eos eligendi corporis doloremque." },
  // ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  <p>Through rigorous education and hands-on projects, I've honed my skills to deliver exceptional results. Testimonials from clients and mentors alike speak to my dedication, creativity, and expertise, affirming my commitment to excellence in every endeavor.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Testimonials</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} 
                            {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {/* {education.map((education, index) => (
                            <EducationTimeline key={index} 
                            {...education} />
                          ))} */}
                          <EducationTimeline />
                          
                        </Row>
                        </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <TestimonialsCards/>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
