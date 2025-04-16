import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"


const items = [
  {
    title: "About us",
    url: "#",
    icon: Home,
  },
  {
    title: "Services",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Use Cases",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Pricing",
    url: "#",
    icon: Search,
  },
  {
    title: "Blog",
    url: "#",
    icon: Settings,
  },
  {
    title: "Request a quote",
    url: "#",
    icon: Settings,
  },
]

export const MenuMobile = () => {
  return (
    <>
      <SidebarTrigger className="lg:hidden" />
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu List</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default MenuMobile;