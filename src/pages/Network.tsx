import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Users,
  UserPlus,
  MessageSquare,
  Calendar,
  Building2,
  Briefcase,
  Search,
  Globe,
  Award,
} from "lucide-react";

// Mock data for demonstration
const connections = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    company: "TechCorp Inc",
    mutualConnections: 12,
    skills: ["React", "TypeScript", "UI/UX"],
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Engineering Manager",
    company: "StartupXYZ",
    mutualConnections: 8,
    skills: ["Leadership", "Agile", "System Design"],
  },
  {
    id: 3,
    name: "Emma Watson",
    role: "Product Designer",
    company: "DesignCo",
    mutualConnections: 15,
    skills: ["Figma", "User Research", "Design Systems"],
  },
];

const events = [
  {
    id: 1,
    title: "Tech Meetup 2024",
    date: "2024-03-15",
    type: "In-Person",
    location: "San Francisco, CA",
    attendees: 150,
  },
  {
    id: 2,
    title: "Virtual Networking Coffee",
    date: "2024-03-20",
    type: "Virtual",
    location: "Online",
    attendees: 25,
  },
  {
    id: 3,
    title: "Women in Tech Conference",
    date: "2024-04-01",
    type: "Hybrid",
    location: "New York + Online",
    attendees: 500,
  },
];

const Network = () => {
  const { toast } = useToast();

  const handleConnect = (connectionId: number) => {
    toast({
      title: "Connection request sent",
      description: "They will be notified of your request.",
    });
  };

  const handleEventRSVP = (eventId: number) => {
    toast({
      title: "RSVP confirmed",
      description: "You're all set! Check your email for details.",
    });
  };

  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="connections" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="connections">Connections</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="companies">Companies</TabsTrigger>
            </TabsList>

            <TabsContent value="connections">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold">Professional Network</h1>
                  <div className="flex gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search connections..."
                        className="pl-10 w-[300px]"
                      />
                    </div>
                    <Button>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add Connection
                    </Button>
                  </div>
                </div>

                <ScrollArea className="h-[calc(100vh-250px)]">
                  <div className="grid gap-4">
                    {connections.map((connection) => (
                      <Card key={connection.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                                <Users className="h-6 w-6" />
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold">{connection.name}</h3>
                                <p className="text-muted-foreground">{connection.role}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Building2 className="h-4 w-4" />
                                  <span>{connection.company}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" onClick={() => handleConnect(connection.id)}>
                                <UserPlus className="mr-2 h-4 w-4" />
                                Connect
                              </Button>
                              <Button variant="outline">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex gap-2 mb-2">
                              {connection.skills.map((skill) => (
                                <Badge key={skill} variant="secondary">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              <Users className="inline h-4 w-4 mr-1" />
                              {connection.mutualConnections} mutual connections
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid gap-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Upcoming Events</h2>
                  <Button>
                    <Calendar className="mr-2 h-4 w-4" />
                    Create Event
                  </Button>
                </div>
                <div className="grid gap-4">
                  {events.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold">{event.title}</h3>
                            <div className="flex items-center gap-4 mt-2">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Globe className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>{event.attendees} attendees</span>
                              </div>
                            </div>
                          </div>
                          <Button onClick={() => handleEventRSVP(event.id)}>RSVP</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="companies">
              <div className="grid gap-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Featured Companies</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search companies..."
                      className="pl-10 w-[300px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                            <Building2 className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Company {i}</h3>
                            <p className="text-sm text-muted-foreground">Tech Industry</p>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span className="text-sm">{Math.floor(Math.random() * 20)} open roles</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            <span className="text-sm">4.{Math.floor(Math.random() * 9)} rating</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4" variant="outline">
                          View Profile
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Network;