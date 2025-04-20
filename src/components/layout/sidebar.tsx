
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  Package,
  BarChart3,
  Settings,
  Users,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <div
      className={cn(
        "bg-sidebar h-screen flex-col flex-shrink-0 border-r border-sidebar-border transition-all duration-300 ease-in-out overflow-hidden fixed lg:relative z-50",
        open ? "w-64" : "w-0 lg:w-20"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4">
        {open ? (
          <div className="flex items-center">
            <span className="text-xl font-bold text-sidebar-foreground">
              FMRP
            </span>
            <span className="ml-2 text-xs text-sidebar-foreground/70">
              Compras Públicas
            </span>
          </div>
        ) : (
          <span className="mx-auto text-xl font-bold text-sidebar-foreground">
            CP
          </span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="text-sidebar-foreground hidden lg:flex"
          onClick={() => setOpen(!open)}
        >
          <ChevronLeft
            className={cn(
              "h-5 w-5 transition-transform",
              !open && "rotate-180"
            )}
          />
        </Button>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-2">
          <NavItem
            to="/"
            label="Dashboard"
            icon={LayoutDashboard}
            expanded={open}
          />
          <NavItem
            to="/requisicoes"
            label="Requisições"
            icon={FileText}
            expanded={open}
          />
          <NavItem
            to="/pedidos"
            label="Pedidos"
            icon={ClipboardCheck}
            expanded={open}
          />
          <NavItem
            to="/entregas"
            label="Entregas"
            icon={Package}
            expanded={open}
          />
          <NavItem
            to="/relatorios"
            label="Relatórios"
            icon={BarChart3}
            expanded={open}
          />
          <NavItem
            to="/cadastros"
            label="Cadastros"
            icon={Users}
            expanded={open}
          />
          <NavItem
            to="/calendario"
            label="Calendário"
            icon={Calendar}
            expanded={open}
          />
          <NavItem
            to="/configuracoes"
            label="Configurações"
            icon={Settings}
            expanded={open}
          />
        </nav>
      </ScrollArea>

      <div className="p-4">
        <div
          className={cn(
            "p-3 bg-sidebar-accent rounded-md text-sidebar-accent-foreground",
            !open && "p-2"
          )}
        >
          {open ? (
            <div className="text-xs">
              <p className="font-medium">Próximo Prazo</p>
              <p>Requisições: 30/04/2025</p>
            </div>
          ) : (
            <Calendar className="h-4 w-4 mx-auto" />
          )}
        </div>
      </div>
    </div>
  );
}

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ElementType;
  expanded: boolean;
}

function NavItem({ to, label, icon: Icon, expanded }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center p-2 rounded-md text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors",
          isActive && "bg-sidebar-accent text-sidebar-foreground"
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className={cn(
              "h-5 w-5",
              isActive ? "text-sidebar-foreground" : "text-sidebar-foreground/70",
              !expanded && "mx-auto"
            )}
          />
          {expanded && <span className="ml-3 text-sm">{label}</span>}
        </>
      )}
    </NavLink>
  );
}
