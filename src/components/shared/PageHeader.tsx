import { Separator } from "@/components/ui/separator";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}

export function PageHeader({ title, subtitle, right }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          )}
        </div>
        {right && <div className="flex items-center gap-2">{right}</div>}
      </div>
      <Separator className="mt-6" />
    </div>
  );
}