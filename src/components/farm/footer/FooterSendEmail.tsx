"use client";

import { useState } from "react";

const FooterSendEmail = () => {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    console.log(email);
  }

  return (
    <div className="px-4 flex flex-col justify-start items-start gap-3 lg:px-0">
      <h3 className="font-bold text-lg">Newsletter</h3>
      <p className="text-sm opacity-70">
        Subscribe to our weekly Newsletter and receive updates via email.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-[var(--dark-primary-color)] w-full rounded-lg flex flex-row justify-between relative"
      >
        <input
          type="text"
          name="email"
          className="bg-[var(--dark-primary-color)] placeholder:px-2 p-2 rounded-lg w-full lg:w-80"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="button"
          className="absolute top-0 right-0 h-full rounded-lg px-4 bg-[var(--secondary-color)] font-bold text-black"
        >
          GO
        </button>
      </form>
    </div>
  );
};

export default FooterSendEmail;
