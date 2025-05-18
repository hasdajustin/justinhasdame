import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './AboutPage.css'; // Make sure this path is correct

function AboutPage() {
  const skillMap = {
    HTML5: 'skill-html',
    CSS3: 'skill-css',
    JavaScript: 'skill-js',
    jQuery: 'skill-jquery',
    Bootstrap: 'skill-bootstrap',
    Python: 'skill-python',
    Django: 'skill-django',
    PostgreSQL: 'skill-postgresql',
    Git: 'skill-git',
    Github: 'skill-github',
  };

  return (
    <div className="mainContainer blog">
      <Container className="my-5">
        {/* Profile Section */}
        <Row className="align-items-center p-5">
          <Col lg={3} md={4} sm={12} className="text-center mb-4 mb-md-0">
            <Image src="images/pro.jpg" alt="Profile" rounded fluid />
          </Col>

          <Col lg={9} md={8}>
            <h1 className="fw-bold">Hi, I'm Justin</h1>
            <h4>
              Web <strong>designer</strong> & <strong>developer</strong> with <strong>1+ years of experience</strong>.
            </h4>
            <p>
              I'm a dedicated web developer experienced in HTML, CSS, JavaScript, jQuery, and Bootstrap. On the backend, I work with Python and Django to build scalable applications and REST APIs. I'm also proficient in PostgreSQL, Git, and Github. My goal is clean, maintainable code and user-focused solutions.
            </p>
          </Col>
        </Row>

        {/* Education & Skills */}
        <Row>
          {/* Education */}
          <Col lg={6}>
            <h2><i className="fa-solid fa-book-open-reader me-2"></i>Educational Qualification</h2>
            <hr className="w-75" />
            
            <Card className="my-3 p-3 shadow-sm">
              <Card.Body>
                <Card.Title><i className="fa-solid fa-user-graduate me-2"></i>BSc in CSE</Card.Title>
                <Card.Subtitle>Dhaka International University</Card.Subtitle>
                <ul className="list-unstyled">
                  <li><strong>Department:</strong> CSE</li>
                  <li><strong>Result:</strong> Studying</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="my-3 p-3 shadow-sm">
              <Card.Body>
                <Card.Title><i className="fa-solid fa-user-graduate me-2"></i>Diploma Engineering</Card.Title>
                <Card.Subtitle>Aptouch Polytechnic Institute</Card.Subtitle>
                <ul className="list-unstyled">
                  <li><strong>Department:</strong> Computer Science</li>
                  <li><strong>CGPA:</strong> 3.68/4.00</li>
                  <li><strong>Year:</strong> 2021</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="my-3 p-3 shadow-sm">
              <Card.Body>
                <Card.Title><i className="fa-solid fa-user-graduate me-2"></i>SSC</Card.Title>
                <Card.Subtitle>Birampur Pilot High School</Card.Subtitle>
                <ul className="list-unstyled">
                  <li><strong>Department:</strong> Science</li>
                  <li><strong>GPA:</strong> 4.50/5.00</li>
                  <li><strong>Year:</strong> 2017</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Skills */}
          <Col lg={6}>
            <h2><i className="fa-solid fa-terminal me-2"></i>Expertise</h2>
            <hr className="w-50" />
            <Row className="text-center g-3">
              {Object.entries(skillMap).map(([skill, className]) => (
                <Col xs={6} md={4} key={skill}>
                  <div className={`skill-card ${className}`}>{skill}</div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
