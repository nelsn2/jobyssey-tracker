import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppSidebar } from "@/components/AppSidebar";
import { Book, Code, Briefcase, Trophy, Timer, Target } from "lucide-react";
import { CareerPathAdvisor } from "@/components/learning/CareerPathAdvisor";

const LearningHub = () => {
  const courses = [
    {
      title: "React Advanced Patterns",
      progress: 65,
      category: "Technical",
      duration: "4 hours",
      skills: ["React", "Design Patterns", "Performance"]
    },
    {
      title: "System Design Fundamentals",
      progress: 30,
      category: "Technical",
      duration: "6 hours",
      skills: ["Architecture", "Scalability", "Database Design"]
    },
    {
      title: "Technical Interview Prep",
      progress: 80,
      category: "Interview",
      duration: "3 hours",
      skills: ["Algorithms", "Data Structures", "Problem Solving"]
    },
    {
      title: "Behavioral Interview Skills",
      progress: 45,
      category: "Interview",
      duration: "2 hours",
      skills: ["Communication", "Leadership", "Conflict Resolution"]
    },
  ];

  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <main className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Learning Hub</h1>
          <p className="text-muted-foreground mt-2">
            Enhance your skills and prepare for your dream career
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

            <Card>
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
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <Briefcase className="h-4 w-4 text-muted-foreground" />
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {course.title}
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground gap-4">
                              <span>{course.category}</span>
                              <span className="flex items-center gap-1">
                                <Timer className="h-3 w-3" />
                                {course.duration}
                              </span>
                            </div>
                          </div>
                          <div className="w-[200px]">
                            <Progress value={course.progress} />
                          </div>
                        </div>
                        <div className="flex gap-2 flex-wrap pl-8">
                          {course.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                            >
                              <Target className="mr-1 h-3 w-3" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="technical" className="space-y-4">
                    {courses
                      .filter((course) => course.category === "Technical")
                      .map((course, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium leading-none">
                                {course.title}
                              </p>
                              <div className="flex items-center text-sm text-muted-foreground gap-4">
                                <span>{course.category}</span>
                                <span className="flex items-center gap-1">
                                  <Timer className="h-3 w-3" />
                                  {course.duration}
                                </span>
                              </div>
                            </div>
                            <div className="w-[200px]">
                              <Progress value={course.progress} />
                            </div>
                          </div>
                          <div className="flex gap-2 flex-wrap pl-8">
                            {course.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                              >
                                <Target className="mr-1 h-3 w-3" />
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                  </TabsContent>
                  <TabsContent value="interview" className="space-y-4">
                    {courses
                      .filter((course) => course.category === "Interview")
                      .map((course, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium leading-none">
                                {course.title}
                              </p>
                              <div className="flex items-center text-sm text-muted-foreground gap-4">
                                <span>{course.category}</span>
                                <span className="flex items-center gap-1">
                                  <Timer className="h-3 w-3" />
                                  {course.duration}
                                </span>
                              </div>
                            </div>
                            <div className="w-[200px]">
                              <Progress value={course.progress} />
                            </div>
                          </div>
                          <div className="flex gap-2 flex-wrap pl-8">
                            {course.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                              >
                                <Target className="mr-1 h-3 w-3" />
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <CareerPathAdvisor />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearningHub;