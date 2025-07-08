import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "@/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Framer Motion Examples</title>
      </Head>
      <SidebarProvider>
        <div className="grid grid-cols-[auto_1fr] grid-rows-[3.5rem_1fr] h-screen w-screen">
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
        </div>
      </SidebarProvider>
    </>
  );
}
export default MyApp;
