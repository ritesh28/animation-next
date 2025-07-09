import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "@/globals.css";
import { ThemeProvider } from "@/theme-provider";
import Head from "next/head";
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Framer Motion Examples</title>
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <div className="grid grid-cols-[auto_1fr] grid-rows-[3.5rem_1fr_auto] h-screen w-screen">
            <div className="col-span-full sticky top-0">
              <Navbar />
            </div>
            <div className="flex">
              <AppSidebar />
              <SidebarTrigger className="sticky top-[3.5rem]" />
            </div>
            <div className="grid place-content-center">
              <Component {...pageProps} />
            </div>
            <div className="col-span-full justify-self-center mb-4">
              <p className="text-sm leading-none font-medium">
                Build by{" "}
                <Link
                  href={process.env.NEXT_PUBLIC_PORTFOLIO_LINK || "#"}
                  target="_blank"
                  className="underline hover:text-link-hover-foreground"
                >
                  Ritesh
                </Link>
                . Check out my other{" "}
                <Link
                  href={process.env.NEXT_PUBLIC_GITHUB_REPO_LINK || "#"}
                  target="_blank"
                  className="underline hover:text-link-hover-foreground"
                >
                  Github Codes
                </Link>
                .
              </p>
            </div>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
