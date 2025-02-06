export interface SavedJob {
  id: number;
  title: string;
  company: string;
  location: string;
  savedDate: string;
  status: string;
  rating: number;
  salary: string;
}

export interface JobSearchBarProps {
  searchTerm: string;
  onSearch: (value: string) => void;
}

export interface JobTableRowProps {
  job: SavedJob;
  onRemove: (id: number) => void;
}