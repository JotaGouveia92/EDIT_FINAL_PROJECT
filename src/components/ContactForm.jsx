import { useState } from "react";
import CtaLink from "./CtaLink";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
        <form
          className="form"
          data-margin-top="m"
          data-margin-bottom="m"
          onSubmit={handleSubmit}
        >
          <div className="form__field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your full name" />
          </div>

          <div className="form__field">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Write your e-mail" />
          </div>

          <div className="form__field">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Your phone number" />
          </div>

          <div className="form__field">
            <label htmlFor="company">Company Name</label>
            <input type="text" id="company" placeholder="Which company" />
          </div>

          <div className="form__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Tell me more" />
          </div>

          <CtaLink
            type="submit"
            text="Submit"
            variant="cta-01"
            icon="fa-arrow-right"
          />
        </form>
      ) : (
        <p className="successMessage">Mensagem submetida com sucesso ✅</p>
      )}
    </div>
  );
}
