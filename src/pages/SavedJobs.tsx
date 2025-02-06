import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { AddJobDialog } from "@/components/jobs/AddJobDialog";
import { JobSearchBar } from "@/components/jobs/JobSearchBar";
import { SavedJobsTable } from "@/components/jobs/SavedJobsTable";
import type { SavedJob } from "@/types/jobs";

// Mock data for demonstration
const initialSavedJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc",
    location: "San Francisco, CA",
    savedDate: "2024-02-15",
    status: "Applied",
    rating: 5,
    salary: "$120k - $150k"
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "Remote",
    savedDate: "2024-02-14",
    status: "Saved",
    rating: 4,
    salary: "$100k - $130k"
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "New York, NY",
    savedDate: "2024-02-13",
    status: "Interview",
    rating: 3,
    salary: "$130k - $160k"
  }
];

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>(initialSavedJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = initialSavedJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(value.toLowerCase()) ||
        job.company.toLowerCase().includes(value.toLowerCase()) ||
        job.location.toLowerCase().includes(value.toLowerCase())
    );
    setSavedJobs(filtered);
  };

  const handleAddJob = (newJob: SavedJob) => {
    setSavedJobs([newJob, ...savedJobs]);
  };

  const handleRemoveJob = (jobId: number) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== jobId));
    toast({
      title: "Job removed from saved list",
      description: "The job has been removed from your saved jobs.",
    });
  };

  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Saved Jobs</h1>
              <p className="text-muted-foreground mt-1">
                Track and manage your saved job opportunities
              </p>
            </div>
            <div className="flex gap-4">
              <JobSearchBar searchTerm={searchTerm} onSearch={handleSearch} />
              <AddJobDialog onAddJob={handleAddJob} />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Your Saved Positions ({savedJobs.length})</span>
                <Badge variant="secondary">
                  {savedJobs.filter(job => job.status === 'Applied').length} Applied
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SavedJobsTable jobs={savedJobs} onRemoveJob={handleRemoveJob} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SavedJobs;
