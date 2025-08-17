import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ColumnDef } from "@tanstack/react-table";
import { Building2, Users, Calendar, MoreHorizontal, Plus, Mail } from "lucide-react";
import MainLayout from "@/components/shared/MainLayout";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface Tenant {
  id: string;
  name: string;
  domain: string;
  userCount: number;
  seatLimit: number;
  status: 'active' | 'suspended' | 'trial';
  createdAt: string;
  adminEmail: string;
}

const mockTenants: Tenant[] = [
  { id: '1', name: 'TechCorp Inc.', domain: 'techcorp', userCount: 125, seatLimit: 150, status: 'active', createdAt: '2024-01-15', adminEmail: 'admin@techcorp.com' },
  { id: '2', name: 'EduSoft Solutions', domain: 'edusoft', userCount: 89, seatLimit: 100, status: 'active', createdAt: '2024-02-03', adminEmail: 'admin@edusoft.com' },
  { id: '3', name: 'StartupHub', domain: 'startuphub', userCount: 45, seatLimit: 50, status: 'trial', createdAt: '2024-03-10', adminEmail: 'admin@startuphub.com' },
  { id: '4', name: 'GlobalTech', domain: 'globaltech', userCount: 0, seatLimit: 200, status: 'suspended', createdAt: '2024-01-28', adminEmail: 'admin@globaltech.com' },
];

const columns: ColumnDef<Tenant>[] = [
  {
    accessorKey: "name",
    header: "Tenant Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
          <Building2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-semibold">{row.getValue("name")}</div>
          <div className="text-sm text-muted-foreground">{row.original.domain}.eduflow.com</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge 
          className={
            status === 'active' ? 'status-success' :
            status === 'trial' ? 'status-warning' :
            'bg-destructive/10 text-destructive border-destructive/20'
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "userCount",
    header: "Users",
    cell: ({ row }) => {
      const userCount = row.getValue("userCount") as number;
      const seatLimit = row.original.seatLimit;
      const percentage = (userCount / seatLimit) * 100;
      
      return (
        <div className="space-y-1">
          <div className="text-sm font-medium">{userCount} / {seatLimit}</div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all ${
                percentage > 90 ? 'bg-destructive' : 
                percentage > 70 ? 'bg-warning' : 
                'bg-success'
              }`}
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-muted-foreground" />
        <span>{new Date(row.getValue("createdAt")).toLocaleDateString()}</span>
      </div>
    ),
  },
  {
    accessorKey: "adminEmail",
    header: "Admin Contact",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm">{row.getValue("adminEmail")}</span>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View Details</DropdownMenuItem>
          <DropdownMenuItem>Edit Tenant</DropdownMenuItem>
          <DropdownMenuItem>Invite Admin</DropdownMenuItem>
          <DropdownMenuItem>Manage Seats</DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">Suspend</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default function TenantsPage() {
  return (
    <MainLayout role="platform_owner">
      <PageHeader 
        title="Tenant Management" 
        subtitle="Manage all tenant organizations and their configurations"
        right={
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Mail className="w-4 h-4" />
              Bulk Invite
            </Button>
            <Button variant="gradient" size="sm">
              <Plus className="w-4 h-4" />
              New Tenant
            </Button>
          </div>
        }
      />

      {/* Summary Cards */}
      <div className="grid gap-4 mb-6 md:grid-cols-4">
        <Card className="glass border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Active Tenants</p>
                <p className="text-xl font-bold">{mockTenants.filter(t => t.status === 'active').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-info" />
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-xl font-bold">{mockTenants.reduce((sum, t) => sum + t.userCount, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Badge className="status-warning">Trial</Badge>
              <div>
                <p className="text-sm text-muted-foreground">Trial Tenants</p>
                <p className="text-xl font-bold">{mockTenants.filter(t => t.status === 'trial').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-destructive" />
              <div>
                <p className="text-sm text-muted-foreground">Suspended</p>
                <p className="text-xl font-bold">{mockTenants.filter(t => t.status === 'suspended').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tenants Table */}
      <DataTable 
        columns={columns} 
        data={mockTenants}
        searchKey="name"
        searchPlaceholder="Search tenants..."
      />
    </MainLayout>
  );
}