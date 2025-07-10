import { Github, Layers, Lightbulb, Linkedin, MapPinHouse } from 'lucide-react';

interface LucidIconProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

interface SidebarChildItem {
  title: string;
  url: string;
}
interface SidebarItem {
  title: string;
  icon: React.ComponentType<LucidIconProps>;
  children: SidebarChildItem[];
}

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Concept',
    icon: Lightbulb,
    children: [
      {
        title: 'Animate prop',
        url: '/concept-animate',
      },
      {
        title: 'Animate SVG',
        url: '/concept-svg',
      },
      {
        title: 'Exit Animation',
        url: '/concept-exit-animation',
      },
      {
        title: 'Keyframe',
        url: '/concept-keyframe',
      },
      {
        title: 'Variant - useState',
        url: '/concept-variant-state',
      },
      {
        title: 'Variant - Propagation',
        url: '/concept-variant-propagation',
      },
      {
        title: 'Variant - Dynamic',
        url: '/concept-variant-dynamic',
      },
      {
        title: 'Animate Content',
        url: '/concept-animate-content',
      },
      {
        title: 'Gesture',
        url: '/concept-gesture',
      },
    ],
  },
  {
    title: 'Components',
    icon: Layers,
    children: [],
  },
];

interface NavbarLink {
  title: string;
  url: string;
  icon: React.ComponentType<LucidIconProps>;
}

export const navbarLinks: NavbarLink[] = [
  {
    title: 'Github Code',
    url: process.env.NEXT_PUBLIC_GITHUB_CODE_LINK || '#',
    icon: Github,
  },
  {
    title: 'Linkedin',
    url: process.env.NEXT_PUBLIC_LINKEDIN_LINK || '#',
    icon: Linkedin,
  },
  {
    title: 'Portfolio',
    url: process.env.NEXT_PUBLIC_PORTFOLIO_LINK || '#',
    icon: MapPinHouse,
  },
];
