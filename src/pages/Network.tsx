import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import {
  Users, UserPlus, MessageSquare, Calendar,
  Building2, Briefcase, Search, Globe, Award,
  Mail, Link2, Handshake
} from "lucide-react";

const connections = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    company: "TechCorp Inc",
    mutualConnections: 12,
    skills: ["React", "TypeScript", "UI/UX"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Engineering Manager",
    company: "StartupXYZ",
    mutualConnections: 8,
    skills: ["Leadership", "Agile", "System Design"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 3,
    name: "Emma Watson",
    role: "Product Designer",
    company: "DesignCo",
    mutualConnections: 15,
    skills: ["Figma", "User Research", "Design Systems"],
    image: "https://images.unsplash.com/photo-1502685104226-1c4b1c1c1c1c?w=64&h=64&fit=crop&crop=faces",
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
    description: "Join us for an evening of networking and tech talks.",
    tags: ["Tech", "Networking", "Career"],
  },
  {
    id: 2,
    title: "Virtual Networking Coffee",
    date: "2024-03-20",
    type: "Virtual",
    location: "Online",
    attendees: 25,
    description: "A casual virtual coffee chat to connect with peers.",
    tags: ["Virtual", "Networking"],
  },
  {
    id: 3,
    title: "Women in Tech Conference",
    date: "2024-04-01",
    type: "Hybrid",
    location: "New York + Online",
    attendees: 500,
    description: "A conference celebrating women in technology.",
    tags: ["Women in Tech", "Conference"],
  },
];

const recommendedConnections = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Product Manager",
    company: "InnovateTech",
    commonInterests: ["Product Development", "Agile", "Tech"],
    mutualConnections: 5,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 2,
    name: "Jessica Lee",
    role: "UX Researcher",
    company: "Creative Solutions",
    commonInterests: ["User Experience", "Design Thinking"],
    mutualConnections: 3,
    image: "https://images.unsplash.com/photo-1502685104226-1c4b1c1c1c1c?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 3,
    name: "David Kim",
    role: "Software Engineer",
    company: "Tech Innovations",
    commonInterests: ["Software Development", "AI"],
    mutualConnections: 4,
    image: "https://images.unsplash.com/photo-1502685104226-1c4b1c1c1c1c?w=64&h=64&fit=crop&crop=faces",
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

  const handleMessageSend = (userId: number) => {
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully.",
    });
  };

  const handleShareProfile = () => {
    toast({
      title: "Profile link copied",
      description: "Your profile link has been copied to clipboard.",
    });
  };

  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Professional Network</h1>
              <p className="text-muted-foreground mt-1">Build and manage your professional relationships</p>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search network..." className="pl-10 w-[300px]" />
              </div>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Connection
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Main Connections Feed */}
            <div className="col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="space-y-4">
                      {connections.map((connection) => (
                        <Card key={connection.id} className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div className="flex gap-4">
                                <Avatar className="h-12 w-12">
                                  <AvatarImage src={connection.image} alt={connection.name} />
                                  <AvatarFallback>{connection.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-semibold">{connection.name}</h3>
                                  <p className="text-sm text-muted-foreground">{connection.role}</p>
                                  <p className="text-sm text-muted-foreground">
                                    <Building2 className="inline h-4 w-4 mr-1" />
                                    {connection.company}
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Mail className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Handshake className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Upcoming Events</span>
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.slice(0, 3).map((event) => (
                      <div key={event.id} className="flex items-start gap-4">
                        <div className="bg-muted p-2 rounded">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Connections */}
              <Card>
                <CardHeader>
                  <CardTitle>Recommended</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recommendedConnections.slice(0, 3).map((person) => (
                      <div key={person.id} className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={person.image} alt={person.name} />
                          <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-medium">{person.name}</h4>
                          <p className="text-sm text-muted-foreground">{person.role}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <UserPlus className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Companies Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Featured Companies</h2>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Network;
