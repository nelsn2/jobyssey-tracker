import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { JobTableRow } from "./JobTableRow";
import type { SavedJob } from "@/types/jobs";

interface SavedJobsTableProps {
  jobs: SavedJob[];
  onRemoveJob: (id: number) => void;
}

export const SavedJobsTable = ({ jobs, onRemoveJob }: SavedJobsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Position</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Salary</TableHead>
          <TableHead>Saved Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job) => (
          <JobTableRow key={job.id} job={job} onRemove={onRemoveJob} />
        ))}
      </TableBody>
    </Table>
  );
};