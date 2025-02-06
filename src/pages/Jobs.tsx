import { AppSidebar } from "@/components/AppSidebar";

const Jobs = () => {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
        <div className="grid gap-4">
          {/* Job listings content will be added here */}
          <p className="text-muted-foreground">Coming soon: Job listings will appear here</p>
        </div>
      </main>
    </div>
  );
};

export default Jobs;