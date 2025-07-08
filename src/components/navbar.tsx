import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../public/logo_white.png";

export function Navbar() {
  return (
    <header className="flex bg-primary text-accent h-full">
      <div className="flex">
        <Link href="/">
          <Image
            src={LogoImage}
            alt="logo"
            className="h-full w-auto self-center"
          />
        </Link>
        <h2 className="self-center ml-4 scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
          Framer Motion
        </h2>
      </div>
    </header>
  );
}
