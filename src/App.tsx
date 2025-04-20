
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import Dashboard from "@/pages/dashboard";
import NotFound from "@/pages/NotFound";
import Requisicoes from "@/pages/requisicoes";
import Pedidos from "@/pages/pedidos";
import Entregas from "@/pages/entregas";
import Relatorios from "@/pages/relatorios";
import Cadastros from "@/pages/cadastros";
import Calendario from "@/pages/calendario";
import Configuracoes from "@/pages/configuracoes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/requisicoes" element={<Requisicoes />} />
              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/entregas" element={<Entregas />} />
              <Route path="/relatorios" element={<Relatorios />} />
              <Route path="/cadastros" element={<Cadastros />} />
              <Route path="/calendario" element={<Calendario />} />
              <Route path="/configuracoes" element={<Configuracoes />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
