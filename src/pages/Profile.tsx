
import { AppSidebar } from "@/components/AppSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { UserRound, Mail, Building, MapPin } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    bio: "Passionate software engineer with 5+ years of experience in full-stack development. Focused on creating intuitive and scalable web applications.",
    avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop",
  });

  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your profile changes have been saved successfully.",
    });
  };

  return (
    <div className="flex h-screen w-full">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-[800px] mx-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
              <p className="text-muted-foreground">
                Manage your personal information and profile settings.
              </p>
            </div>

            <Card>
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback>
                      <UserRound className="h-10 w-10" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-semibold">{profile.name}</h3>
                    <p className="text-muted-foreground">{profile.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <Input
                          id="name"
                          value={profile.name}
                          onChange={(e) =>
                            setProfile({ ...profile, name: e.target.value })
                          }
                        />
                        <UserRound className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) =>
                            setProfile({ ...profile, email: e.target.value })
                          }
                        />
                        <Mail className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <div className="relative">
                        <Input
                          id="company"
                          value={profile.company}
                          onChange={(e) =>
                            setProfile({ ...profile, company: e.target.value })
                          }
                        />
                        <Building className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <Input
                          id="location"
                          value={profile.location}
                          onChange={(e) =>
                            setProfile({ ...profile, location: e.target.value })
                          }
                        />
                        <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      onChange={(e) =>
                        setProfile({ ...profile, bio: e.target.value })
                      }
                      rows={4}
                    />
                  </div>

                  <Separator />

                  <div className="flex justify-end">
                    <Button onClick={handleSave}>Save Changes</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
