const ContactInformation = () => {
  return (
    <section className="flex flex-col justify-start items-start gap-4 py-8 w-full">
      <div>
        <h3 className="font-medium text-base mb-3 uppercase">Contact Now</h3>
        <h1 className="font-bold text-3xl mb-3">Get in touch now</h1>
      </div>
      <p className="text-sm w-full">
        Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea
        dictumst. Duis porta,quam ut finibus ultrices.
      </p>
      <div>
        <h5 className="font-bold text-lg">Phone</h5>
        <p>+880123456789</p>
      </div>
      <div>
        <h5 className="font-bold text-lg">Email</h5>
        <p>needhelp@company.com</p>
      </div>
      <div>
        <h5 className="font-bold text-lg">Adress</h5>
        <p>Road No. 8, Orion, Marte, Via Lactea</p>
      </div>
    </section>
  );
};

export default ContactInformation;
