import { useState } from "react";

import Submit from "../modals/Submit";

export default function Contact() {
  const [SubmitIsOpen, setSubmitIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <textarea cols="30" rows="10" placeholder="Message"></textarea>
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
