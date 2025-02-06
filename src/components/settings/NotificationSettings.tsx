import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function NotificationSettings() {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState({
    applicationUpdates: true,
    newJobs: true,
    networkUpdates: false,
    marketingEmails: false,
  });

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => {
      const newSettings = { ...prev, [key]: !prev[key] };
      toast({
        title: "Notification settings updated",
        description: "Your notification preferences have been saved.",
      });
      return newSettings;
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notification Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Choose what notifications you want to receive.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="application-updates" className="flex flex-col space-y-1">
            <span>Application Updates</span>
            <span className="font-normal text-sm text-muted-foreground">
              Get notified about your job application status changes.
            </span>
          </Label>
          <Switch
            id="application-updates"
            checked={notifications.applicationUpdates}
            onCheckedChange={() => handleToggle("applicationUpdates")}
          />
        </div>

        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="new-jobs" className="flex flex-col space-y-1">
            <span>New Job Matches</span>
            <span className="font-normal text-sm text-muted-foreground">
              Receive alerts for new jobs matching your preferences.
            </span>
          </Label>
          <Switch
            id="new-jobs"
            checked={notifications.newJobs}
            onCheckedChange={() => handleToggle("newJobs")}
          />
        </div>

        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="network-updates" className="flex flex-col space-y-1">
            <span>Network Updates</span>
            <span className="font-normal text-sm text-muted-foreground">
              Get notified about your network's activity.
            </span>
          </Label>
          <Switch
            id="network-updates"
            checked={notifications.networkUpdates}
            onCheckedChange={() => handleToggle("networkUpdates")}
          />
        </div>

        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="marketing-emails" className="flex flex-col space-y-1">
            <span>Marketing Emails</span>
            <span className="font-normal text-sm text-muted-foreground">
              Receive news, tips, and product updates.
            </span>
          </Label>
          <Switch
            id="marketing-emails"
            checked={notifications.marketingEmails}
            onCheckedChange={() => handleToggle("marketingEmails")}
          />
        </div>
      </div>
    </div>
  );
}