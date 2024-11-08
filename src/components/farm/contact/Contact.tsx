import Form from "./Form";
import ContactInformation from "./ContactInformation";

const Contact = () => {
  return (
    <section className="w-full flex flex-col my-8 px-4 lg:px-12 lg:flex-row gap-4">
      <ContactInformation />
      <Form />
    </section>
  );
};

export default Contact;
