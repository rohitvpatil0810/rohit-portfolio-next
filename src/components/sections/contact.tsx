"use client";
import React from "react";
import SectionHeader from "../ui/section-header";
import ContactForm from "../ui/contact-form";
import { socialLinks } from "@/lib/social-links";
import SocialIcon from "../ui/social-icon";

type Props = {};

function Contact({}: Props) {
  return (
    <div
      id="contact"
      className="w-full py-10 flex flex-col justify-center items-center scroll-mt-10"
    >
      <SectionHeader>Contact</SectionHeader>
      <h1 className="py-4 md:py-8 text-2xl sm:text-3xl md:text-4xl text-gray-200 font-bold text-center">
        Get in Touch 📬
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-end md:space-x-32">
        <div className="pt-10 md:pt-0 flex flex-wrap md:flex-col justify-start md:space-y-2">
          {socialLinks.map((social) => (
            <SocialIcon
              key={social.username + social.sociallink}
              icon={social.icon}
              sociallink={social.sociallink}
              username={social.username}
              className="mx-2"
            />
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
