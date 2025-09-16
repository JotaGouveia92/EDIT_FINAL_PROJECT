import { useState } from "react";
import CtaLink from "./CtaLink";

export default function ContactForm() {
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setMensagem("O seu formulário foi enviado com sucesso!");
    document.querySelector(".form").reset();
  };

  return (
    <div>
      <form
        className="form"
        data-margin-top="m"
        data-margin-bottom="m"
        onSubmit={handleSubmit}
      >
        <div className="form__field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your full name" required />
        </div>

        <div className="form__field">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Write your e-mail"
            required
          />
        </div>

        <div className="form__field">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Your phone number"
            required
          />
        </div>

        <div className="form__field">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" placeholder="Which company" />
        </div>

        <div className="form__field">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Tell me more" />
        </div>

        <div onClick={handleSubmit}>
          <CtaLink
            text="Submit"
            to="/contactPage"
            variant="cta-01"
            icon="fa-arrow-right"
          />
        </div>
      </form>

      {mensagem && (
        <p style={{ color: $main - color, marginTop: "24px" }}>{mensagem}</p>
      )}
    </div>
  );
}
