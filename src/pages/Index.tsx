import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Building2, 
  Users, 
  BookOpen, 
  TrendingUp,
  Shield,
  Award,
  ArrowRight,
  Star,
  Play
} from "lucide-react";

const roleCards = [
  {
    title: "Platform Owner",
    description: "Manage the entire multi-tenant platform",
    icon: Shield,
    href: "/admin/dashboard",
    features: ["Tenant Management", "Global Analytics", "Course Catalog", "Platform Settings"],
    color: "gradient-primary",
    badge: "Admin"
  },
  {
    title: "Tenant Administrator", 
    description: "Oversee your organization's learning",
    icon: Building2,
    href: "/tenant-admin/dashboard",
    features: ["Student Management", "Progress Tracking", "Course Assignment", "Reports"],
    color: "bg-info",
    badge: "Manager"
  },
  {
    title: "Student",
    description: "Learn and grow with personalized courses",
    icon: GraduationCap,
    href: "/dashboard", 
    features: ["Course Enrollment", "Progress Tracking", "Certificates", "Recommendations"],
    color: "bg-success",
    badge: "Learner"
  }
];

const stats = [
  { label: "Active Learners", value: "10,000+", icon: Users },
  { label: "Course Catalog", value: "500+", icon: BookOpen },
  { label: "Organizations", value: "250+", icon: Building2 },
  { label: "Completion Rate", value: "94%", icon: TrendingUp },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold gradient-hero bg-clip-text text-transparent">
                EduFlow
              </h1>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
              The Future of 
              <span className="gradient-hero bg-clip-text text-transparent"> Multi-Tenant</span> Learning
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A production-grade Learning Management System designed for modern organizations. 
              Scalable, secure, and built for the enterprise.
            </p>

            <div className="flex items-center justify-center gap-4 pt-8">
              <Button size="lg" className="gradient-primary text-white shadow-glow">
                <Play className="w-5 h-5" />
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                View Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary mb-2" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Dashboards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Choose Your Experience</h3>
            <p className="text-xl text-muted-foreground">
              Explore different user interfaces tailored for each role
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roleCards.map((role) => {
              const Icon = role.icon;
              return (
                <Card key={role.title} className="glass border-0 hover:shadow-custom-lg transition-smooth group">
                  <CardHeader className="text-center pb-4">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 rounded-2xl ${role.color} flex items-center justify-center shadow-glow`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Badge className="mb-2">{role.badge}</Badge>
                      <CardTitle className="text-xl">{role.title}</CardTitle>
                      <p className="text-muted-foreground">{role.description}</p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {role.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-primary fill-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link to={role.href} className="block">
                      <Button className="w-full group-hover:shadow-glow transition-smooth">
                        View Dashboard
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Production-Grade Features</h3>
            <p className="text-xl text-muted-foreground">
              Built for enterprise scale with modern technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Multi-Tenant Architecture", description: "Isolated tenant data with shared infrastructure", icon: Building2 },
              { title: "Role-Based Access Control", description: "Granular permissions and security policies", icon: Shield },
              { title: "Advanced Analytics", description: "Real-time insights and progress tracking", icon: TrendingUp },
              { title: "Scalable Design", description: "Built to handle thousands of concurrent users", icon: Award },
              { title: "Modern Tech Stack", description: "React, TypeScript, Tailwind, and Supabase", icon: Star },
              { title: "AI-Powered Content", description: "Automated course generation and recommendations", icon: GraduationCap },
            ].map((feature, index) => (
              <Card key={index} className="glass border-0 hover:shadow-custom-md transition-smooth">
                <CardContent className="p-6">
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
