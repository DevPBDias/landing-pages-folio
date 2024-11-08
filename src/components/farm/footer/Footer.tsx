import React from "react";
import Ads from "./Ads";
import FooterMidia from "./FooterMidia";
import FooterLinks from "./FooterLinks";
import FooterSendEmail from "./FooterSendEmail";

const Footer = () => {
  return (
    <footer className="w-full py-6 flex flex-col gap-6">
      <Ads />
      <section className="flex flex-col justify-center items-center w-full gap-4 lg:flex-row lg:p-12 lg:items-start">
        <FooterMidia />
        <FooterLinks />
        <FooterSendEmail />
      </section>
      <span className="w-full flex justify-center items-center text-xs">
        &copy; 2024 DevPBdias
      </span>
    </footer>
  );
};

export default Footer;
