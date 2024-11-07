import Form from "./Form";
import ContactInformation from "./ContactInformation";

const Contact = () => {
  return (
    <section className="w-full flex flex-col py-8 px-4">
      <ContactInformation />
      <Form />
    </section>
  );
};

export default Contact;
