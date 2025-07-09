import { Github, Layers, Lightbulb, Linkedin, MapPinHouse } from "lucide-react";

interface SidebarChildItem {
  title: string;
  url: string;
}
interface SidebarItem {
  title: string;
  icon: React.ComponentType;
  children: SidebarChildItem[];
}

export const sidebarItems: SidebarItem[] = [
  {
    title: "Concept",
    icon: Lightbulb,
    children: [
      {
        title: "Basic",
        url: "/basic-button",
      },
      {
        title: "Basic Card",
        url: "/basic-card",
      },
      {
        title: "Basic Input",
        url: "/basic-input",
      },
    ],
  },
  {
    title: "Components",
    icon: Layers,
    children: [],
  },
];

interface NavbarLink {
  title: string;
  url: string;
  icon: React.ComponentType;
}

export const navbarLinks: NavbarLink[] = [
  {
    title: "Github Code",
    url: process.env.NEXT_PUBLIC_GITHUB_CODE_LINK || "#",
    icon: Github,
  },
  {
    title: "Linkedin",
    url: process.env.NEXT_PUBLIC_LINKEDIN_LINK || "#",
    icon: Linkedin,
  },
  {
    title: "Portfolio",
    url: process.env.NEXT_PUBLIC_PORTFOLIO_LINK || "#",
    icon: MapPinHouse,
  },
];
