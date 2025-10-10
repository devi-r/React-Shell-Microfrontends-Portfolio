import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

export const SOCIAL_LINKS = [
  {
    id: "email",
    href: "mailto:devi.frontend@gmail.com",
    icon: HiMail,
    label: "Email",
    title: "Email",
    external: false,
  },
  {
    id: "github",
    href: "https://github.com/devi-r",
    icon: FaGithub,
    label: "GitHub",
    title: "GitHub",
    external: true,
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/devi-r-06bb94a7/",
    icon: FaLinkedin,
    label: "LinkedIn",
    title: "LinkedIn",
    external: true,
  },
  {
    id: "resume",
    href: "/Devi_R_Senior_Frontend_Engineer_Resume.pdf",
    icon: FaFilePdf,
    label: "View Resume",
    title: "View Resume",
    external: true,
  },
];
