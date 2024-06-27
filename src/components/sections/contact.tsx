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
      id="experience"
      className="w-full py-10 flex flex-col justify-center items-center"
    >
      <SectionHeader>Contact</SectionHeader>
      <h1 className="py-8 text-4xl text-gray-200 font-bold">Get in Touch 📬</h1>
      <div className="flex justify-center items-end space-x-32">
        <div className="flex flex-col justify-start space-y-2">
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
