import { useState } from "react";

import Submit from "../modals/Submit";

export default function Contact() {
  const [SubmitIsOpen, setSubmitIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={() => setSubmitIsOpen(true)}>Submit</button>
        </form>
      </div>
      <Submit
        isOpen={SubmitIsOpen}
        closeSubmit={() => setSubmitIsOpen(false)}
      />
    </div>
  );
}
