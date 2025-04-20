
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Cadastros = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Cadastros</h1>
        <p className="text-muted-foreground">
          Gerencie usuários e dados cadastrais
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cadastro de Usuários</CardTitle>
          <CardDescription>
            Importe e gerencie usuários através de CSV
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <p className="mb-2">Formulários de cadastro serão exibidos aqui</p>
            <p className="text-sm">Com upload de CSV e gerenciamento de perfis</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cadastros;
