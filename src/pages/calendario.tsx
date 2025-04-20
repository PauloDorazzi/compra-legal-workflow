
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Calendario = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calendário</h1>
        <p className="text-muted-foreground">
          Visualize e configure datas importantes
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Calendário de Prazos</CardTitle>
          <CardDescription>
            Configure e visualize datas limites de requisições
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <p className="mb-2">Visualização de calendário será exibida aqui</p>
            <p className="text-sm">Com datas limites e eventos importantes</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calendario;
