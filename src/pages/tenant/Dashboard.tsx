import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, BookOpen, TrendingUp, Award, Plus, UserPlus } from "lucide-react";
import MainLayout from "@/components/shared/MainLayout";

const mockData = {
  activeStudents: 89,
  totalCourses: 12,
  avgProgress: 67,
  completions: 234
};

const topCourses = [
  { name: "React Fundamentals", enrolled: 45, avgProgress: 78, completionRate: 89 },
  { name: "JavaScript Advanced", enrolled: 38, avgProgress: 65, completionRate: 72 },
  { name: "UI/UX Design", enrolled: 32, avgProgress: 82, completionRate: 94 },
  { name: "Project Management", enrolled: 28, avgProgress: 55, completionRate: 64 },
];

const recentStudents = [
  { name: "Alice Johnson", email: "alice@company.com", joinedAt: "2 days ago", progress: 25 },
  { name: "Bob Smith", email: "bob@company.com", joinedAt: "3 days ago", progress: 45 },
  { name: "Carol Davis", email: "carol@company.com", joinedAt: "1 week ago", progress: 78 },
  { name: "David Wilson", email: "david@company.com", joinedAt: "1 week ago", progress: 92 },
];

export default function TenantDashboard() {
  return (
    <MainLayout role="tenant_admin">
      <PageHeader 
        title="Tenant Dashboard" 
        subtitle="Monitor your organization's learning progress"
        right={
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Users className="w-4 h-4" />
              Manage Students
            </Button>
            <Button variant="gradient" size="sm">
              <UserPlus className="w-4 h-4" />
              Invite Students
            </Button>
          </div>
        }
      />

      {/* Stats Grid */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Active Students"
          value={mockData.activeStudents}
          icon={Users}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatCard
          label="Available Courses"
          value={mockData.totalCourses}
          icon={BookOpen}
          trend={{ value: 8.3, isPositive: true }}
        />
        <StatCard
          label="Avg Progress"
          value={`${mockData.avgProgress}%`}
          icon={TrendingUp}
          trend={{ value: 5.2, isPositive: true }}
        />
        <StatCard
          label="Completions"
          value={mockData.completions}
          icon={Award}
          trend={{ value: 18.7, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Courses */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Top Performing Courses
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCourses.map((course, index) => (
              <div key={course.name} className="p-4 rounded-lg border border-border/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{course.name}</h4>
                  <span className="text-sm text-muted-foreground">{course.enrolled} enrolled</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Avg Progress</span>
                    <span>{course.avgProgress}%</span>
                  </div>
                  <Progress value={course.avgProgress} className="h-2" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Completion Rate</span>
                  <span className="font-medium text-success">{course.completionRate}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Students */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Recent Student Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentStudents.map((student) => (
              <div key={student.email} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-smooth">
                <div className="space-y-1">
                  <p className="font-medium">{student.name}</p>
                  <p className="text-sm text-muted-foreground">{student.email}</p>
                  <p className="text-xs text-muted-foreground">Joined {student.joinedAt}</p>
                </div>
                <div className="text-right space-y-1">
                  <div className="text-sm font-medium">{student.progress}%</div>
                  <Progress value={student.progress} className="h-1 w-16" />
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Plus className="w-4 h-4" />
              View All Students
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}