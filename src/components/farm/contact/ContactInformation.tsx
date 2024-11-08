const ContactInformation = () => {
  return (
    <section className="flex flex-col justify-start items-start gap-4 my-8 w-full">
      <div>
        <h3 className="font-medium text-base mb-3 uppercase md:text-lg lg:text-2xl opacity-75">
          Contact Now
        </h3>
        <h1 className="font-bold text-3xl mb-3 md:text-4xl lg:text-5xl">
          Get in touch now
        </h1>
      </div>
      <p className="text-sm w-full lg:text-base">
        Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea
        dictumst. Duis porta,quam ut finibus ultrices.
      </p>
      <div>
        <h5 className="font-bold text-lg lg:text-xl">Phone</h5>
        <p>+880123456789</p>
      </div>
      <div>
        <h5 className="font-bold text-lg lg:text-xl">Email</h5>
        <p>needhelp@company.com</p>
      </div>
      <div>
        <h5 className="font-bold text-lg lg:text-xl">Adress</h5>
        <p>Road No. 8, Orion, Marte, Via Lactea</p>
      </div>
    </section>
  );
};

export default ContactInformation;
