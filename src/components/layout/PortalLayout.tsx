import { ReactNode } from 'react';
import { PortalNav } from './PortalNav';

interface PortalLayoutProps {
  children: ReactNode;
}

export const PortalLayout = ({ children }: PortalLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <PortalNav />
      <main className="md:ml-64 p-4 md:p-8 pt-20 md:pt-8">
        {children}
      </main>
    </div>
  );
};
