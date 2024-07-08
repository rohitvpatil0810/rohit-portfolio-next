import { Metadata } from "next";

const pageDetails = {
  title: "Rohit Patil | Software Engineer",
  description:
    "Rohit Patil is a software engineer specializing in full-stack development, creating robust, scalable solutions across software products.",
  name: "Rohit Patil",
  twitterUsername: "@rohitvpatil0810",
};

export const metaData: Metadata = {
  title: pageDetails.title,
  description: pageDetails.description,
  authors: [{ name: pageDetails.name }],
  creator: pageDetails.name,
  keywords: [pageDetails.name, "Software Engineer", "Full-Stack Developer"],
  publisher: pageDetails.name,
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
  },
  openGraph: {
    type: "website",
    title: pageDetails.title,
    description: pageDetails.description,
    locale: "en_US",
    siteName: pageDetails.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: pageDetails.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: pageDetails.name,
    creator: pageDetails.twitterUsername,
    creatorId: pageDetails.twitterUsername,
    title: pageDetails.title,
    description: pageDetails.description,
    images: [
      {
        url: "/og.png",
        alt: pageDetails.title,
        width: 1200,
        height: 630,
      },
    ],
  },
};
