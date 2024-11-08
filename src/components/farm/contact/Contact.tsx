import Form from "./Form";
import ContactInformation from "./ContactInformation";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex flex-col my-8 px-4 lg:px-12 lg:flex-row gap-4 lg:my-48"
    >
      <ContactInformation />
      <Form />
    </section>
  );
};

export default Contact;
