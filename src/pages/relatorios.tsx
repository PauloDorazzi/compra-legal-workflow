
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Relatorios = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Relatórios</h1>
        <p className="text-muted-foreground">
          Visualize e exporte relatórios do sistema
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Geração de Relatórios</CardTitle>
          <CardDescription>
            Crie relatórios personalizados por período, departamento e tipo
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <p className="mb-2">Painéis e filtros de relatórios serão exibidos aqui</p>
            <p className="text-sm">Com opções de exportação para PDF e Excel</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Relatorios;
