
import {
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  Package,
  BarChart3,
  Settings,
  Users,
  Calendar,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/" },
  { icon: FileText, label: "Requisições", to: "/requisicoes" },
  { icon: ClipboardCheck, label: "Pedidos", to: "/pedidos" },
  { icon: Package, label: "Entregas", to: "/entregas" },
  { icon: BarChart3, label: "Relatórios", to: "/relatorios" },
  { icon: Users, label: "Cadastros", to: "/cadastros" },
  { icon: Calendar, label: "Calendário", to: "/calendario" },
  { icon: Settings, label: "Configurações", to: "/configuracoes" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center">
          <span className="text-xl font-bold text-sidebar-foreground">FMRP</span>
          <span className="ml-2 text-xs text-sidebar-foreground/70">
            Compras Públicas
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.label}
                    isActive={location.pathname === item.to}
                  >
                    <NavLink to={item.to}>
                      <item.icon />
                      <span>{item.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
