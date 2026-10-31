import { useState } from "react";

function Contact(props) {
  // State: are the contact details showing?
  const [show, setShow] = useState(false);

  return (
    <section>
      <h2>📬 Contact</h2>
      <button className="main-btn" onClick={() => setShow(!show)}>
        {show ? "Hide contact details" : "Show contact details"}
      </button>

      {/* && : this part shows only when show is true */}
      {show && (
        <div className="contact-box">
          <p>📧 Email: {props.email}</p>
          <p>📱 Phone: {props.phone}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
