
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Package,
  CheckCircle,
  Clock,
  AlertTriangle,
  CreditCard,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Bem-vindo ao sistema de Compras Públicas FMRP
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Requisições Abertas
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              Próximo prazo: 30/04/2025
            </p>
            <Progress value={45} className="h-1 mt-3" />
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Entregas Pendentes
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              3 com entrega atrasada
            </p>
            <Progress value={75} className="h-1 mt-3" />
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Processos Concluídos
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">287</div>
            <p className="text-xs text-muted-foreground">
              Desde Janeiro/2025
            </p>
            <Progress value={92} className="h-1 mt-3" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2 card-hover">
          <CardHeader>
            <CardTitle>Situação das Requisições</CardTitle>
            <CardDescription>
              Visão geral do status de todas as requisições
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-secondary mr-2" />
                <div className="flex-1">
                  <div className="text-sm">Aprovadas</div>
                  <Progress value={68} className="h-2" />
                </div>
                <div className="font-medium ml-4">68%</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent mr-2" />
                <div className="flex-1">
                  <div className="text-sm">Em processamento</div>
                  <Progress value={25} className="h-2" />
                </div>
                <div className="font-medium ml-4">25%</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-destructive mr-2" />
                <div className="flex-1">
                  <div className="text-sm">Rejeitadas</div>
                  <Progress value={7} className="h-2" />
                </div>
                <div className="font-medium ml-4">7%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>Últimas 24 horas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Nova requisição
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Departamento de Biologia
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Há 35 minutos
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex h-9 w-9 items-center justify-center rounded-full bg-success/10">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Pedido aprovado
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Laboratório Química
                  </p>
                  <p className="text-xs text-muted-foreground">Há 2 horas</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex h-9 w-9 items-center justify-center rounded-full bg-warning/10">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Pendência identificada
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Departamento Física
                  </p>
                  <p className="text-xs text-muted-foreground">Há 3 horas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Notas Fiscais Pendentes
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Patrimônios Novos
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16</div>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Usuários Ativos
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Tempo Médio de Processo
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18d</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
