import { Metadata } from "next";

const pageDetails = {
  title: "Rohit Patil | Software Engineer",
  description:
    "Rohit Patil is a software engineer specializing in full-stack development, creating robust, scalable solutions across software products.",
  name: "Rohit Patil",
  twitterUsername: "@rohitvpatil0810",
  imagePath: "/og.png",
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
  metadataBase: new URL(
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/`
  ),
  openGraph: {
    type: "website",
    title: pageDetails.title,
    description: pageDetails.description,
    locale: "en_US",
    siteName: pageDetails.name,
    images: [
      {
        url: pageDetails.imagePath,
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
        url: pageDetails.imagePath,
        alt: pageDetails.title,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const projectPageDetails = {
  ...pageDetails,
  title: "Rohit Patil | Projects",
  imagePath: "/og-projects.png",
};

export const projectPageMetaData: Metadata = {
  title: projectPageDetails.title,
  description: projectPageDetails.description,
  authors: [{ name: projectPageDetails.name }],
  creator: projectPageDetails.name,
  keywords: [
    projectPageDetails.name,
    "Software Engineer",
    "Full-Stack Developer",
    "Projects",
    "Rohit Patil Projects",
  ],
  publisher: projectPageDetails.name,
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
  },
  metadataBase: new URL(
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/`
  ),
  openGraph: {
    type: "website",
    title: projectPageDetails.title,
    description: projectPageDetails.description,
    locale: "en_US",
    siteName: projectPageDetails.name,
    images: [
      {
        url: projectPageDetails.imagePath,
        width: 1200,
        height: 630,
        alt: projectPageDetails.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: projectPageDetails.name,
    creator: projectPageDetails.twitterUsername,
    creatorId: projectPageDetails.twitterUsername,
    title: projectPageDetails.title,
    description: projectPageDetails.description,
    images: [
      {
        url: projectPageDetails.imagePath,
        alt: projectPageDetails.title,
        width: 1200,
        height: 630,
      },
    ],
  },
};
