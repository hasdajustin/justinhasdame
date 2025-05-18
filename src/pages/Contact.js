import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';

function Contact() {
  const [status, setStatus] = useState("Submit");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;

    const response = await fetch("https://formspree.io/f/mzzrwpke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    if (response.ok) {
      setStatus("Submit");
      setAlertType("success");
      setAlertMessage("✅ Message sent! We'll get back to you soon.");
      setShowAlert(true);
      e.target.reset();
    } else {
      setStatus("Submit");
      setAlertType("danger");
      setAlertMessage("❌ Something went wrong. Please try again later.");
      setShowAlert(true);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center mb-4">Say Hi!!</h2>
          {showAlert && (
            <Alert variant={alertType} onClose={() => setShowAlert(false)} dismissible>
              {alertMessage}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="message" className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={5} placeholder="Your message" required />
            </Form.Group>

            <div className="text-center">
              <Button
                variant="secondary"
                type="submit"
                disabled={status === "Sending..."}
                className="px-5"
              >
                {status === "Sending..." ? (
                  <>
                    <Spinner animation="border" size="sm" /> Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>

          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
