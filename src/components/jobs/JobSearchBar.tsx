import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JobSearchBarProps } from "@/types/jobs";

export const JobSearchBar = ({ searchTerm, onSearch }: JobSearchBarProps) => {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search saved jobs..."
          className="pl-10 w-[300px]"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <Button variant="outline">
        <Filter className="mr-2 h-4 w-4" />
        Filter
      </Button>
    </div>
  );
};