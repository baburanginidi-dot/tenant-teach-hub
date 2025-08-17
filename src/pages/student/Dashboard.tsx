import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Award, TrendingUp, Play, ArrowRight } from "lucide-react";
import MainLayout from "@/components/shared/MainLayout";

const studentStats = {
  coursesEnrolled: 5,
  hoursLearned: 24,
  certificatesEarned: 3,
  averageProgress: 72
};

const enrolledCourses = [
  { 
    id: 1, 
    title: "React Fundamentals", 
    progress: 85, 
    status: "in_progress", 
    nextLesson: "State Management",
    estimatedTime: "2h 30m",
    instructor: "Sarah Johnson"
  },
  { 
    id: 2, 
    title: "JavaScript Advanced", 
    progress: 45, 
    status: "in_progress", 
    nextLesson: "Async/Await Patterns",
    estimatedTime: "1h 45m",
    instructor: "Mike Chen"
  },
  { 
    id: 3, 
    title: "UI/UX Design", 
    progress: 100, 
    status: "completed", 
    nextLesson: null,
    estimatedTime: null,
    instructor: "Emma Davis"
  },
];

const recommendedCourses = [
  { title: "TypeScript Essentials", difficulty: "Intermediate", duration: "8 hours", rating: 4.8 },
  { title: "Node.js Backend", difficulty: "Advanced", duration: "12 hours", rating: 4.9 },
  { title: "Database Design", difficulty: "Beginner", duration: "6 hours", rating: 4.7 },
];

export default function StudentDashboard() {
  return (
    <MainLayout role="student">
      <PageHeader 
        title="Welcome back, Alex!" 
        subtitle="Continue your learning journey"
        right={
          <Button variant="gradient" size="sm">
            <Play className="w-4 h-4" />
            Continue Learning
          </Button>
        }
      />

      {/* Stats Grid */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Courses Enrolled"
          value={studentStats.coursesEnrolled}
          icon={BookOpen}
        />
        <StatCard
          label="Hours Learned"
          value={studentStats.hoursLearned}
          icon={Clock}
        />
        <StatCard
          label="Certificates"
          value={studentStats.certificatesEarned}
          icon={Award}
        />
        <StatCard
          label="Avg Progress"
          value={`${studentStats.averageProgress}%`}
          icon={TrendingUp}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* My Courses */}
        <Card className="lg:col-span-2 glass border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              My Courses
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="p-6 rounded-xl border border-border/50 hover:bg-muted/30 transition-smooth">
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <h4 className="font-semibold text-lg">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                  </div>
                  <Badge 
                    className={course.status === 'completed' ? 'status-success' : 'status-info'}
                  >
                    {course.status === 'completed' ? 'Completed' : 'In Progress'}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  
                  {course.status === 'in_progress' && (
                    <div className="flex items-center justify-between pt-2">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Next: {course.nextLesson}</p>
                        <p className="text-xs text-muted-foreground">{course.estimatedTime} remaining</p>
                      </div>
                      <Button size="sm" variant="default">
                        <Play className="w-4 h-4" />
                        Continue
                      </Button>
                    </div>
                  )}
                  
                  {course.status === 'completed' && (
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-success" />
                        <span className="text-sm font-medium text-success">Course Completed!</span>
                      </div>
                      <Button size="sm" variant="outline">
                        View Certificate
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recommended Courses */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Recommended for You
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendedCourses.map((course, index) => (
              <div key={index} className="p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-smooth group cursor-pointer">
                <div className="space-y-3">
                  <h4 className="font-semibold group-hover:text-primary transition-smooth">{course.title}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Difficulty</span>
                      <Badge 
                        className={
                          course.difficulty === 'Beginner' ? 'status-success' :
                          course.difficulty === 'Intermediate' ? 'status-warning' :
                          'bg-destructive/10 text-destructive border-destructive/20'
                        }
                      >
                        {course.difficulty}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Rating</span>
                      <span className="flex items-center gap-1">
                        ⭐ {course.rating}
                      </span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-smooth">
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}