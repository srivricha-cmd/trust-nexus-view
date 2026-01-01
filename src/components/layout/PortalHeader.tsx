import { Building2 } from 'lucide-react';

interface PortalHeaderProps {
  title: string;
  subtitle?: string;
}

export const PortalHeader = ({ title, subtitle }: PortalHeaderProps) => {
  return (
    <div className="page-header mb-6 animate-fade-in">
      <div className="flex items-center gap-4">
        <div className="widget-icon bg-primary-foreground/20">
          <Building2 className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold">{title}</h1>
          {subtitle && <p className="text-primary-foreground/80 mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};
