
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Entregas = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Entregas</h1>
        <p className="text-muted-foreground">
          Gerencie e acompanhe o status das entregas
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Controle de Entregas</CardTitle>
          <CardDescription>
            Acompanhe o recebimento e distribuição dos itens
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <p className="mb-2">Conteúdo de entregas será exibido aqui</p>
            <p className="text-sm">Incluindo recebimento, conferência e distribuição</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Entregas;
