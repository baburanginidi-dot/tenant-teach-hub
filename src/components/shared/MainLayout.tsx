import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: ReactNode;
  role?: 'platform_owner' | 'tenant_admin' | 'student';
}

export default function MainLayout({ children, role = 'student' }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar role={role} />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}