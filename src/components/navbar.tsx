import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import { navbarLinks } from "@/model";
import Image from "next/image";
import Link from "next/link";
import LogoImageSmall from "../../public/logo_white_small.png";

export function Navbar() {
  const isMobile = useIsMobile();
  return (
    <header className="flex items-center px-2 bg-navbar text-navbar-foreground h-full">
      <Link href="/">
        <div className="flex gap-3">
          <div className="h-auto basis-[2.25rem]">
            <Image src={LogoImageSmall} alt="logo" priority />
          </div>
          <h2 className="self-center scroll-m-20 text-xl md:text-4xl font-extrabold tracking-tight text-balance">
            Framer Motion
          </h2>
        </div>
      </Link>
      <div className="ml-auto">
        <div className="flex gap-4"></div>
        {navbarLinks.map((link) => (
          <Tooltip key={link.title}>
            <TooltipTrigger asChild>
              <Link href={link.url} target="_blank">
                <Button
                  size="icon"
                  className="text-navbar-foreground bg-navbar hover:bg-navbar-foreground hover:text-navbar"
                >
                  <link.icon />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <ModeToggle buttonClassName="text-navbar-foreground bg-navbar hover:bg-navbar-foreground hover:text-navbar" />
      </div>
    </header>
  );
}
