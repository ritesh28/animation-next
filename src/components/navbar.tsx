import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navbarLinks } from "@/model";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../public/logo_white.png";

export function Navbar() {
  return (
    <header className="flex px-2 bg-navbar text-navbar-foreground h-full">
      <div className="flex gap-4">
        <Link href="/">
          <Image
            src={LogoImage}
            alt="logo"
            priority
            className="h-full w-auto self-center"
          />
        </Link>
        <h2 className="self-center scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
          Framer Motion
        </h2>
      </div>
      <div className="ml-auto self-center">
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
