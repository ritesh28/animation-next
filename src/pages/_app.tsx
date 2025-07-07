import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "@/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="grid grid-rows-[auto_1fr] h-screen w-full">
        <div>
          {/* todo: banner */}
          <SidebarTrigger />
        </div>
        <div className="grid place-content-center">
          <Component {...pageProps} />
        </div>
      </main>
    </SidebarProvider>
  );
}
export default MyApp;
