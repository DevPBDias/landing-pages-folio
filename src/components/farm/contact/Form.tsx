"use client";

import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleSubmit() {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full gap-4 lg:mt-10"
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="bg-[var(--dark-primary-color)] placeholder:px-2 p-4 rounded-lg"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="text"
        name="phone"
        placeholder="Your phone"
        className="bg-[var(--dark-primary-color)] placeholder:px-2 p-4 rounded-lg"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />
      <input
        type="text"
        name="email"
        className="bg-[var(--dark-primary-color)] placeholder:px-2 p-4 rounded-lg"
        placeholder="Your email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={data.message}
        className="bg-[var(--dark-primary-color)] placeholder:px-2 p-4 rounded-lg h-40"
        onChange={(e) => setData({ ...data, message: e.target.value })}
      />
      <button
        className="bg-[var(--secondary-color)] py-3 rounded-lg font-bold text-black lg:w-56 lg:text-lg"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
