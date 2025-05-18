import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaFileCode,
  FaTerminal,
  FaDatabase,
  FaLaptopCode,
} from 'react-icons/fa';

function Home() {
  return (
    <>
      <div className="row align-items-center innerMyportfolio p-5">
        {/* Profile Image Column */}
        <div className="col-lg-3 col-md-4 col-sm-12 mb-md-0 profileImage">
          <div className="d-flex justify-content-center">
            <img src="images/pro.jpg" alt="Matheus Justin Hasda" className="img-fluid rounded" />
          </div>

          {/* Social Icons */}
          <div className="socialID d-flex justify-content-center gap-3 m-3">
            <a
              href="https://github.com/hasdajustin"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-4 text-secondary"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/justin.hasda"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-4 text-secondary"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/justin.hasdak/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-4 text-secondary"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Profile Info Column */}
        <div className="col-lg-9 col-md-8 col-sm-12 profileInfo">
          <h1 className="fw-bold">Matheus Justin Hasda</h1>
          <h4>
            Web <b>Designer</b> &amp; <b>Developer</b>
          </h4>
          <p>
            <strong>I craft full-stack web solutions with focus on:</strong>
          </p>
          <ul className="list-unstyled ms-2">
            <li>– Scalable backend systems (Django + PostgreSQL).</li>
            <li>– Responsive frontends (Bootstrap + JavaScript).</li>
            <li>– Code that’s maintainable, tested, and production-ready.</li>
            <li>– Always learning. Always shipping.</li>
          </ul>
          <a
            href="docs/Cv of Matheus Justin Hasda.pdf"
            className="btn btn-outline-dark btn-sm"
            download
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>

      {/* Services Section */}
      <Container className="myServices my-5">
        <Row xs={1} md={2} lg={4} className="g-3">
          {/* Frontend Development */}
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>
                  <FaFileCode className="me-2" />
                  Frontend Development
                </Card.Title>
                <hr />
                <ul className="list-unstyled mb-0">
                  <li>- HTML5 & CSS3</li>
                  <li>- JavaScript & jQuery</li>
                  <li>- Bootstrap for responsive design</li>
                  <li>- Cross-browser compatibility</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend Development */}
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>
                  <FaTerminal className="me-2" />
                  Backend Development
                </Card.Title>
                <hr />
                <ul className="list-unstyled mb-0">
                  <li>- Python (Django framework)</li>
                  <li>- Admin panel setup</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Database Management */}
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>
                  <FaDatabase className="me-2" />
                  Database Management
                </Card.Title>
                <hr />
                <ul className="list-unstyled mb-0">
                  <li>- PostgreSQL integration</li>
                  <li>- Data modeling & migrations</li>
                  <li>- Performance optimization</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Full Stack Web Development */}
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>
                  <FaLaptopCode className="me-2" />
                  Full-Stack Development
                </Card.Title>
                <hr />
                <ul className="list-unstyled mb-0">
                  <li>- Full-stack project setup</li>
                  <li>- Clean, maintainable code</li>
                  <li>- Deployment to hosting</li>
                  <li>- Ongoing support & updates</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
