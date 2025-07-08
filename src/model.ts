import { Layers, Lightbulb } from "lucide-react";

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
