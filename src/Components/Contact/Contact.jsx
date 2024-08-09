import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();
  const [submission, setSubmission] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSubmission(true);
        },
        (error) => {
          console.error;
          setError(true);
        }
      );

    e.target.reset();
  };

  return (
    <section>
      <div className={`Contact ${submission ? "hidden" : "visible"}`}>
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div className={`confirmation ${submission ? "visible" : "hidden"}`}>
        <h1>Thank you!</h1>
        <h2>Your message has been sent successfully.</h2>
        <p>I look forward to connecting with you soon!</p>
      </div>
      <div className={`error ${error ? "visible" : "hidden"}`}>
        <h2>Error</h2>
        <p>Please try again.</p>
      </div>
    </section>
  );
};

export default Contact;
