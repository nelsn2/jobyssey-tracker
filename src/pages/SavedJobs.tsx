import { AppSidebar } from "@/components/AppSidebar";

const SavedJobs = () => {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Saved Jobs</h1>
        <div className="grid gap-4">
          {/* Saved jobs content will be added here */}
          <p className="text-muted-foreground">Coming soon: Your saved jobs will appear here</p>
        </div>
      </main>
    </div>
  );
};

export default SavedJobs;