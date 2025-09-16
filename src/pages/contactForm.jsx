import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import SimpleHeader from "../components/SimpleHeader";

export default function Contact() {
  return (
    <>
      <Nav />
      <SimpleHeader
        label=""
        title="Say Hi! and tell me about your idea"
        text="Do you want help? Reach out and let's chat."
        date=""
      />
      <ContactForm />
      <Footer />
    </>
  );
}
