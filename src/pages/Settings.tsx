import { AppSidebar } from "@/components/AppSidebar";
import { ApplicationSettings } from "@/components/settings/ApplicationSettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-4xl py-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
              <p className="text-muted-foreground">
                Manage your account settings and preferences.
              </p>
            </div>

            <Separator />

            <div className="space-y-8">
              <ProfileSettings />
              <Separator />
              <NotificationSettings />
              <Separator />
              <ApplicationSettings />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;