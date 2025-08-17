import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Building2, 
  Shield,
  CheckCircle
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold gradient-hero bg-clip-text text-transparent">
              EduFlow
            </h1>
          </div>
          
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Welcome to EduFlow
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Choose your role to access your personalized dashboard
          </p>
        </div>

        {/* Role Selection */}
        <div className="grid md:grid-cols-3 gap-6">
          {roleCards.map((role) => {
            const Icon = role.icon;
            return (
              <Card key={role.title} className="glass border-0 hover:shadow-custom-lg transition-smooth group cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl ${role.color} flex items-center justify-center shadow-glow`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Badge className="mb-2">{role.badge}</Badge>
                    <CardTitle className="text-xl">{role.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{role.description}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {role.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={role.href} className="block">
                    <Button className="w-full group-hover:shadow-glow transition-smooth">
                      Continue as {role.badge}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            This is a demo interface. In production, authentication will be handled by Clerk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;