import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { 
  Search, MapPin, Building2, DollarSign, Calendar, 
  BookmarkPlus, CheckSquare, Filter, ArrowUpDown,
  TrendingUp, Clock, Brain, Users, MessageSquare
} from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// Mock data for demonstration
const initialJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc",
    location: "San Francisco, CA",
    salary: "$120k - $150k",
    posted: "2 days ago",
    type: "Full-time",
    remote: true,
    description: "We're looking for a Senior Frontend Developer to join our team and help build the next generation of our product.",
    requirements: ["5+ years React experience", "TypeScript expertise", "Strong UI/UX skills"],
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "Remote",
    salary: "$100k - $130k",
    posted: "1 week ago",
    type: "Full-time",
    remote: true,
    description: "Join our fast-growing startup as a Full Stack Engineer and help us scale our platform.",
    requirements: ["3+ years Node.js", "React/Vue.js", "AWS experience"],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "New York, NY",
    salary: "$130k - $160k",
    posted: "3 days ago",
    type: "Full-time",
    remote: false,
    description: "Looking for a DevOps Engineer to help us improve and maintain our cloud infrastructure.",
    requirements: ["Kubernetes", "Docker", "CI/CD pipelines"],
  },
];

const Jobs = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    remote: false,
    fullTime: false,
    entry: false,
  });
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const { toast } = useToast();

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = initialJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(value.toLowerCase()) ||
        job.company.toLowerCase().includes(value.toLowerCase()) ||
        job.location.toLowerCase().includes(value.toLowerCase())
    );
    setJobs(filtered);
  };

  const handleFilter = (key: keyof typeof filters) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [key]: !prev[key] };
      let filtered = [...initialJobs];

      if (newFilters.remote) {
        filtered = filtered.filter((job) => job.remote);
      }
      if (newFilters.fullTime) {
        filtered = filtered.filter((job) => job.type === "Full-time");
      }
      if (newFilters.entry) {
        filtered = filtered.filter((job) => !job.requirements[0].includes("5+"));
      }

      setJobs(filtered);
      return newFilters;
    });
  };

  const handleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter((id) => id !== jobId));
      toast({
        title: "Job removed from saved list",
        description: "You can always save it again later.",
      });
    } else {
      setSavedJobs([...savedJobs, jobId]);
      toast({
        title: "Job saved successfully",
        description: "You can find it in your saved jobs list.",
      });
    }
  };

  const handleApplyToJob = (jobId: number) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
      toast({
        title: "Application submitted",
        description: "Good luck! Track your application status in the dashboard.",
      });
    }
  };

  // New feature: Track application progress
  const getApplicationProgress = (jobId: number) => {
    // Mock progress tracking
    return Math.floor(Math.random() * 100);
  };

  // New feature: Get AI-powered job match score
  const getJobMatchScore = (jobId: number) => {
    // Mock match scoring
    return Math.floor(Math.random() * 100);
  };

  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="listings" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="listings">Job Listings</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
            </TabsList>

            <TabsContent value="listings">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold">Job Listings</h1>
                  <div className="flex gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search jobs..."
                        className="pl-10 w-[300px]"
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                      />
                    </div>
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" />
                      Filters
                    </Button>
                    <Button variant="outline">
                      <ArrowUpDown className="mr-2 h-4 w-4" />
                      Sort
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remote"
                      checked={filters.remote}
                      onCheckedChange={() => handleFilter("remote")}
                    />
                    <label htmlFor="remote">Remote Only</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="fullTime"
                      checked={filters.fullTime}
                      onCheckedChange={() => handleFilter("fullTime")}
                    />
                    <label htmlFor="fullTime">Full Time</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="entry"
                      checked={filters.entry}
                      onCheckedChange={() => handleFilter("entry")}
                    />
                    <label htmlFor="entry">Entry Level</label>
                  </div>
                </div>
              </div>

              <ScrollArea className="h-[calc(100vh-200px)]">
                <div className="grid gap-4">
                  {jobs.map((job) => (
                    <Card key={job.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <p className="text-muted-foreground flex items-center gap-2 mt-1">
                              <Building2 className="h-4 w-4" />
                              {job.company}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleSaveJob(job.id)}
                              className={savedJobs.includes(job.id) ? "text-yellow-500" : ""}
                            >
                              <BookmarkPlus className="h-4 w-4" />
                            </Button>
                            <Button
                              variant={appliedJobs.includes(job.id) ? "secondary" : "default"}
                              onClick={() => handleApplyToJob(job.id)}
                            >
                              <CheckSquare className="mr-2 h-4 w-4" />
                              {appliedJobs.includes(job.id) ? "Applied" : "Apply Now"}
                            </Button>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-6 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {job.posted}
                          </div>
                        </div>
                        <p className="text-sm mb-4">{job.description}</p>
                        <div className="flex gap-2 flex-wrap mb-4">
                          {job.requirements.map((req, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                        {appliedJobs.includes(job.id) && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Application Progress</span>
                              <span>{getApplicationProgress(job.id)}%</span>
                            </div>
                            <Progress value={getApplicationProgress(job.id)} />
                          </div>
                        )}
                        <div className="mt-4 flex items-center gap-2">
                          <Brain className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Match Score: {getJobMatchScore(job.id)}%</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Application Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Application Success Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-8 w-8 text-green-500" />
                          <span className="text-2xl font-bold">75%</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Average Response Time</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2">
                          <Clock className="h-8 w-8 text-blue-500" />
                          <span className="text-2xl font-bold">3.2 days</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Network Growth</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2">
                          <Users className="h-8 w-8 text-purple-500" />
                          <span className="text-2xl font-bold">+15</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline">
              <Card>
                <CardHeader>
                  <CardTitle>Application Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appliedJobs.map((jobId) => {
                      const job = jobs.find((j) => j.id === jobId);
                      return (
                        <Card key={jobId}>
                          <CardContent className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                                <CheckSquare className="h-6 w-6" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{job?.title}</h4>
                                <p className="text-sm text-muted-foreground">{job?.company}</p>
                              </div>
                            </div>
                            <Progress value={getApplicationProgress(jobId)} className="w-[200px]" />
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="network">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Recent Connections</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-full bg-secondary" />
                              <div>
                                <h4 className="font-semibold">Professional {i}</h4>
                                <p className="text-sm text-muted-foreground">Company {i}</p>
                              </div>
                              <Button variant="outline" size="sm" className="ml-auto">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Connect
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Networking Events</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[1, 2, 3].map((i) => (
                            <Card key={i}>
                              <CardContent className="p-4">
                                <h4 className="font-semibold">Tech Meetup {i}</h4>
                                <p className="text-sm text-muted-foreground">Virtual Event</p>
                                <Button variant="outline" size="sm" className="mt-2">
                                  Join Event
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Jobs;
