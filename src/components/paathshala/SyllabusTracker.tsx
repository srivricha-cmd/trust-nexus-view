import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockSyllabusEntries } from '@/data/mockData';
import { BookOpen } from 'lucide-react';

export const SyllabusTracker = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-lg">Syllabus Tracker</h3>
          <p className="text-sm text-muted-foreground">Weekly & Monthly syllabus progress</p>
        </div>
      </div>

      <div className="grid gap-4">
        {mockSyllabusEntries.map((entry) => (
          <Card key={entry.id} className="card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">{entry.teacherName}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {entry.className} • {entry.subject}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary">{entry.completionPercentage}%</span>
                  <p className="text-xs text-muted-foreground">Week {entry.week}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={entry.completionPercentage} className="h-2" />
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-muted-foreground mb-2">Topics Planned:</p>
                    <ul className="space-y-1">
                      {entry.topicsPlanned.map((topic, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-success mb-2">Topics Covered:</p>
                    <ul className="space-y-1">
                      {entry.topicsCovered.map((topic, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-success" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
