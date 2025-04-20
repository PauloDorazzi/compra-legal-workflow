
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FileText, MoreHorizontal, Plus, Search } from "lucide-react";

const StatusBadge = ({ status }: { status: string }) => {
  const statusMap: Record<
    string,
    { label: string; className: string; variant: "default" | "outline" | "secondary" | "destructive" }
  > = {
    pendente: {
      label: "Pendente",
      className: "status-pending",
      variant: "outline",
    },
    aprovada: {
      label: "Aprovada",
      className: "status-approved",
      variant: "secondary",
    },
    rejeitada: {
      label: "Rejeitada",
      className: "status-rejected",
      variant: "destructive",
    },
    processando: {
      label: "Processando",
      className: "status-processing",
      variant: "default",
    },
  };

  const config = statusMap[status] || statusMap.pendente;

  return (
    <Badge variant={config.variant} className={config.className}>
      {config.label}
    </Badge>
  );
};

const requisicoesMock = [
  {
    id: "REQ-2025-001",
    solicitante: "Ana Silva",
    departamento: "Departamento de Biologia",
    dataRequisicao: "10/03/2025",
    status: "aprovada",
    valorTotal: "R$ 2.450,00",
    itens: 5,
  },
  {
    id: "REQ-2025-002",
    solicitante: "Carlos Santos",
    departamento: "Laboratório de Química",
    dataRequisicao: "15/03/2025",
    status: "pendente",
    valorTotal: "R$ 8.720,50",
    itens: 12,
  },
  {
    id: "REQ-2025-003",
    solicitante: "Marcela Oliveira",
    departamento: "Departamento de Física",
    dataRequisicao: "18/03/2025",
    status: "rejeitada",
    valorTotal: "R$ 1.870,00",
    itens: 3,
  },
  {
    id: "REQ-2025-004",
    solicitante: "Roberto Alves",
    departamento: "Administração",
    dataRequisicao: "22/03/2025",
    status: "processando",
    valorTotal: "R$ 5.120,75",
    itens: 8,
  },
  {
    id: "REQ-2025-005",
    solicitante: "Juliana Pereira",
    departamento: "Departamento de Biologia",
    dataRequisicao: "24/03/2025",
    status: "pendente",
    valorTotal: "R$ 3.450,00",
    itens: 6,
  },
];

const Requisicoes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");

  const filteredRequisicoes = requisicoesMock.filter((req) => {
    const matchesSearch =
      searchTerm === "" ||
      Object.values(req).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesStatus =
      statusFilter === "todos" || req.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Requisições</h1>
          <p className="text-muted-foreground">
            Gerenciar requisições de compras
          </p>
        </div>
        <Button className="sm:w-auto">
          <Plus className="mr-2 h-4 w-4" /> Nova Requisição
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Minhas Requisições</CardTitle>
          <CardDescription>
            Gerencie suas requisições de materiais e acompanhe o status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar requisições..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select
              value={statusFilter}
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os status</SelectItem>
                <SelectItem value="pendente">Pendente</SelectItem>
                <SelectItem value="aprovada">Aprovada</SelectItem>
                <SelectItem value="rejeitada">Rejeitada</SelectItem>
                <SelectItem value="processando">Processando</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Solicitante</TableHead>
                  <TableHead className="hidden md:table-cell">Departamento</TableHead>
                  <TableHead className="hidden md:table-cell">Data</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden sm:table-cell">Valor</TableHead>
                  <TableHead className="hidden sm:table-cell">Itens</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequisicoes.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={8}
                      className="h-24 text-center"
                    >
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <FileText className="h-10 w-10 mb-2" />
                        <p>Nenhuma requisição encontrada</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredRequisicoes.map((req) => (
                    <TableRow key={req.id}>
                      <TableCell className="font-medium">{req.id}</TableCell>
                      <TableCell>{req.solicitante}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {req.departamento}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {req.dataRequisicao}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={req.status} />
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {req.valorTotal}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {req.itens}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Visualizar</DropdownMenuItem>
                            <DropdownMenuItem>Editar</DropdownMenuItem>
                            <DropdownMenuItem>Duplicar</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Requisicoes;
