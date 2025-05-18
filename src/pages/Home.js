import React from 'react';

function Home() {
  return (
    <div className="row align-items-center innerMyportfolio p-5">
      {/* Profile Image Column */}
      <div className="col-lg-3 col-md-4 col-sm-12 mb-md-0 profileImage">
        <div className="d-flex justify-content-center">
          <img
            src="images/pro.jpg"
            alt="Profile picture"
            className="img-fluid rounded"
          />
        </div>

        {/* Social Icons */}
        <div className="socialID d-flex justify-content-center gap-3 m-3">
          <a
            href="https://github.com/hasdajustin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-4"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/justin.hasda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-4"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/justin.hasdak/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-4"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.youtube.com/@bandatkar4140"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-4"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Profile Info Column */}
      <div className="col-lg-9 col-md-8 col-sm-12 profileInfo">
        {/* Name */}
        <h1 className="fw-bold">Matheus Justin Hasda</h1>

        {/* Role */}
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

        {/* Download Resume Button */}
        <a
          href="docs/Cv of Matheus Justin Hasda.pdf"
          className="btn btn-outline-dark btn-sm"
          download
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
}

export default Home;

