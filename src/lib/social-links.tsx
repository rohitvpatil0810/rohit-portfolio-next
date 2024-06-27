import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export interface SocialLink {
  icon: JSX.Element;
  sociallink: string;
  username: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: <IconBrandGithub />,
    sociallink: "https://github.com/rohitvpatil0810/",
    username: "rohitvpatil0810",
  },
  {
    icon: <IconBrandLinkedin />,
    sociallink: "https://www.linkedin.com/in/rohitvpatil0810/",
    username: "in/rohitvpatil0810",
  },
  {
    icon: <IconBrandInstagram />,
    sociallink: "https://www.instagram.com/rohitvpatil0810/",
    username: "rohitvpatil0810",
  },
  {
    icon: <IconBrandX />,
    sociallink: "https://www.twitter.com/rohitvpatil0810/",
    username: "rohitvpatil0810",
  },
];
