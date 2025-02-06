import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AddJobDialogProps {
  onAddJob: (job: any) => void;
}

export const AddJobDialog = ({ onAddJob }: AddJobDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    status: "Saved",
    rating: 0,
    savedDate: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddJob({
      ...jobData,
      id: Date.now()
    });
    setOpen(false);
    toast({
      title: "Job added successfully",
      description: "The job has been added to your saved jobs list.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Job Manually
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Job</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              required
              value={jobData.title}
              onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              required
              value={jobData.company}
              onChange={(e) => setJobData({ ...jobData, company: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              required
              value={jobData.location}
              onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="salary">Salary Range</Label>
            <Input
              id="salary"
              placeholder="e.g. $80k - $100k"
              value={jobData.salary}
              onChange={(e) => setJobData({ ...jobData, salary: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full">Add Job</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};