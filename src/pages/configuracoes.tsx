
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Configuracoes = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">
          Configure parâmetros do sistema
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configurações do Sistema</CardTitle>
          <CardDescription>
            Defina parâmetros e regras de funcionamento
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <p className="mb-2">Formulários de configuração serão exibidos aqui</p>
            <p className="text-sm">Incluindo backups, integrações e parâmetros</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Configuracoes;
