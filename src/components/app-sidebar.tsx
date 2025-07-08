import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/model";
import Link from "next/link";

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar();

  return (
    <Sidebar className="inset-y-auto">
      <SidebarHeader />
      <SidebarContent>
        {sidebarItems.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>
              <item.icon />
              <span className="ml-1">{item.title}</span>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.children.map((child) => (
                  <SidebarMenuItem
                    key={child.title}
                    onClick={() => isMobile && setOpenMobile(false)}
                  >
                    <SidebarMenuButton asChild>
                      <Link href={child.url}>
                        <span>{child.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
