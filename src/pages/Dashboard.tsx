import { AppSidebar } from "@/components/AppSidebar";
import { ActivityTimeline } from "@/components/dashboard/ActivityTimeline";
import { ApplicationStats } from "@/components/dashboard/ApplicationStats";
import { UpcomingInterviews } from "@/components/dashboard/UpcomingInterviews";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Star } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Applications</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Pending Interviews</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Saved Jobs</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ApplicationStats />
          <ActivityTimeline />
        </div>

        <div className="grid grid-cols-1">
          <UpcomingInterviews />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;