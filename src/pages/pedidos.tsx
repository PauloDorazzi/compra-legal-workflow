
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pedidos = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <p className="text-muted-foreground">
          Gerencie e acompanhe pedidos consolidados
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pedidos Consolidados</CardTitle>
          <CardDescription>
            Visualize pedidos gerados a partir das requisições aprovadas
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <p className="mb-2">Conteúdo dos pedidos será exibido aqui</p>
            <p className="text-sm">Incluindo consolidação, status de aprovação e nota fiscal</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pedidos;
