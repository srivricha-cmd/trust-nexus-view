import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatusBadge } from '@/components/common/StatusBadge';
import { mockProjects } from '@/data/mockData';
import { BookOpen, FolderKanban, Users, Calendar, ClipboardCheck, Award } from 'lucide-react';

const paathshalaItems = [
  { icon: BookOpen, label: 'Academic Duties', description: 'Teacher assignments and responsibilities' },
  { icon: Users, label: 'Teacher Attendance', description: 'Track teacher presence and leaves' },
  { icon: ClipboardCheck, label: 'Student Attendance', description: 'Daily student attendance records' },
  { icon: Calendar, label: 'Syllabus Tracking', description: 'Monitor curriculum progress' },
  { icon: Award, label: 'Exams & Results', description: 'Assessment schedules and outcomes' },
];

export const ResponsibilitiesModule = () => {
  const [activeTab, setActiveTab] = useState('paathshala');

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <FolderKanban className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-lg">Responsibilities (Zimmedari)</h3>
          <p className="text-sm text-muted-foreground">Track duties and project assignments</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-muted/50">
          <TabsTrigger value="paathshala">Paathshala</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="paathshala" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paathshalaItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="card-hover cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.label}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockProjects.map((project) => (
              <Card key={project.id} className="card-hover">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base">{project.name}</CardTitle>
                    <StatusBadge status={project.status} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">Responsibilities:</p>
                      <ul className="space-y-1">
                        {project.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium">Remarks:</span> {project.remarks}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
