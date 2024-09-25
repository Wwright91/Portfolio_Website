import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [submission, setSubmission] = useState(false);
  const [error, setError] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        () => setSubmission(true),
        (error) => {
          console.error(error);
          setError(true);
        }
      )
      .then(() => {
        setShowToast(true);
        toast("Thank you! Your message has been sent successfully.", { type: "success" });
        setTimeout(() => window.location.href = "/", 3000);
      });

    e.target.reset();
  };

  return (
    <section>
      <div className="Contact" id="contact">
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
          <div className="button-wrapper">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <ToastContainer
        className={`confirmation ${submission ? "visible" : "hidden"}`}
        position="top-center"
        autoClose={2000}
        theme="colored"
        transition="Flip"
      ></ToastContainer>
      <div className={`error ${error ? "visible" : "hidden"}`}>
        <h2>Error</h2>
        <p>Please try again.</p>
      </div>
    </section>
  );
};

export default Contact;
