import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6y8koib",   // from EmailJS service ID
        "template_ecu8tl8",  // from EmailJS template ID
        form.current,
        "UfRxekF95nKWqgcGd"    // from EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          <button
            type="submit"
        className="bg-blue-900 text-white rounded-md px-4 py-2 hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Status message */}
        {status && (
          <p className="mt-4 text-center text-sm text-gray-300">{status}</p>
        )}
     </>
  );
};

export default ContactForm;
