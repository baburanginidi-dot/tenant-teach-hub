import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, BookOpen, TrendingUp, Plus, Settings } from "lucide-react";
import MainLayout from "@/components/shared/MainLayout";

// Mock data
const mockStats = {
  totalTenants: 24,
  totalUsers: 1247,
  totalCourses: 45,
  monthlyGrowth: 12.5
};

const recentActivity = [
  { id: 1, action: "New tenant registered", tenant: "TechCorp Inc.", time: "2 hours ago" },
  { id: 2, action: "Course published", course: "Advanced React", time: "4 hours ago" },
  { id: 3, action: "Bulk user enrollment", tenant: "EduSoft", count: 25, time: "6 hours ago" },
  { id: 4, action: "Tenant admin invitation sent", email: "admin@newcompany.com", time: "1 day ago" },
];

export default function AdminDashboard() {
  return (
    <MainLayout role="platform_owner">
      <PageHeader 
        title="Platform Overview" 
        subtitle="Manage your multi-tenant learning platform"
        right={
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
            <Button variant="gradient" size="sm">
              <Plus className="w-4 h-4" />
              New Tenant
            </Button>
          </div>
        }
      />

      {/* Stats Grid */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Tenants"
          value={mockStats.totalTenants}
          icon={Building2}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatCard
          label="Total Users"
          value={mockStats.totalUsers.toLocaleString()}
          icon={Users}
          trend={{ value: 15.3, isPositive: true }}
        />
        <StatCard
          label="Course Catalog"
          value={mockStats.totalCourses}
          icon={BookOpen}
          trend={{ value: 4.1, isPositive: true }}
        />
        <StatCard
          label="Monthly Growth"
          value={`${mockStats.monthlyGrowth}%`}
          icon={TrendingUp}
          trend={{ value: 2.4, isPositive: true }}
        />
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 glass border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Recent Platform Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-smooth">
                <div className="space-y-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.tenant && `Tenant: ${activity.tenant}`}
                    {activity.course && `Course: ${activity.course}`}
                    {activity.email && `Email: ${activity.email}`}
                    {activity.count && `${activity.count} users enrolled`}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass border-0">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Building2 className="w-4 h-4" />
              Create New Tenant
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BookOpen className="w-4 h-4" />
              Add Course to Catalog
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="w-4 h-4" />
              Invite Platform Admin
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="w-4 h-4" />
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}