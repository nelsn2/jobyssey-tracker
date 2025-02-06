import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppSidebar } from "@/components/AppSidebar";
import { Book, Code, Briefcase, Trophy } from "lucide-react";

const LearningHub = () => {
  const courses = [
    {
      title: "React Advanced Patterns",
      progress: 65,
      category: "Technical",
      duration: "4 hours",
    },
    {
      title: "System Design Fundamentals",
      progress: 30,
      category: "Technical",
      duration: "6 hours",
    },
    {
      title: "Technical Interview Prep",
      progress: 80,
      category: "Interview",
      duration: "3 hours",
    },
    {
      title: "Behavioral Interview Skills",
      progress: 45,
      category: "Interview",
      duration: "2 hours",
    },
  ];

  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <main className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Learning Hub</h1>
          <p className="text-muted-foreground mt-2">
            Enhance your skills and prepare for interviews
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Courses in Progress
                </CardTitle>
                <Book className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Skills Mastered
                </CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Practice Problems
                </CardTitle>
                <Code className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
              </CardContent>
            </Card>
          </div>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Your Learning Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="all">All Courses</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="interview">Interview Prep</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                  {courses.map((course, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {course.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {course.category} • {course.duration}
                        </p>
                      </div>
                      <div className="w-[200px]">
                        <Progress value={course.progress} />
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="technical" className="space-y-4">
                  {courses
                    .filter((course) => course.category === "Technical")
                    .map((course, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {course.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {course.category} • {course.duration}
                          </p>
                        </div>
                        <div className="w-[200px]">
                          <Progress value={course.progress} />
                        </div>
                      </div>
                    ))}
                </TabsContent>
                <TabsContent value="interview" className="space-y-4">
                  {courses
                    .filter((course) => course.category === "Interview")
                    .map((course, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {course.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {course.category} • {course.duration}
                          </p>
                        </div>
                        <div className="w-[200px]">
                          <Progress value={course.progress} />
                        </div>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default LearningHub;