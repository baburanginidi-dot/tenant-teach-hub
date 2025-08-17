"use client";

import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Building2, 
  BookOpen, 
  Inbox, 
  GraduationCap, 
  Users,
  User,
  Home,
  Settings,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ROLE_NAVIGATION = {
  platform_owner: [
    { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Tenants', href: '/admin/tenants', icon: Building2 },
    { label: 'Courses', href: '/admin/courses', icon: BookOpen },
    { label: 'Requests', href: '/admin/requests', icon: Inbox },
  ],
  tenant_admin: [
    { label: 'Dashboard', href: '/tenant-admin/dashboard', icon: LayoutDashboard },
    { label: 'Students', href: '/tenant-admin/students', icon: Users },
  ],
  student: [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'My Learning', href: '/learning', icon: GraduationCap },
  ]
} as const;

interface SidebarProps {
  role?: 'platform_owner' | 'tenant_admin' | 'student';
}

export default function Sidebar({ role = 'student' }: SidebarProps) {
  const location = useLocation();
  const navigation = ROLE_NAVIGATION[role];

  return (
    <aside className="w-64 shrink-0 bg-sidebar border-r border-sidebar-border hidden md:flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-sidebar-foreground">EduFlow</h1>
            <p className="text-xs text-sidebar-foreground/60 capitalize">{role.replace('_', ' ')}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link key={item.href} to={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 h-11 transition-smooth",
                  isActive 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-custom-sm" 
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Button>
            </Link>
          );
        })}
      </nav>

      <Separator className="mx-4 bg-sidebar-border" />

      {/* Bottom Actions */}
      <div className="p-4 space-y-2">
        <Link to="/profile">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-11 text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-smooth"
          >
            <User className="w-5 h-5" />
            <span className="font-medium">Profile</span>
          </Button>
        </Link>
        
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-11 text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-smooth"
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </Button>
        
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-11 text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-smooth"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </Button>
      </div>
    </aside>
  );
}