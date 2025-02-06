import { AppSidebar } from "@/components/AppSidebar";

const Settings = () => {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="grid gap-4">
          {/* Settings content will be added here */}
          <p className="text-muted-foreground">Coming soon: Settings options will appear here</p>
        </div>
      </main>
    </div>
  );
};

export default Settings;