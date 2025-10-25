import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, MapPin, Star, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for demonstration
const mockUsers = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Brooklyn, NY",
    distance: "0.5 mi",
    rating: 4.9,
    reviews: 28,
    skills: ["Web Design", "UI/UX", "Figma"],
    bio: "Passionate designer helping local businesses grow",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Brooklyn, NY",
    distance: "1.2 mi",
    rating: 4.8,
    reviews: 45,
    skills: ["Guitar", "Music Theory", "Piano"],
    bio: "Music teacher with 10 years experience",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Brooklyn, NY",
    distance: "0.8 mi",
    rating: 5.0,
    reviews: 32,
    skills: ["Spanish", "Portuguese", "Translation"],
    bio: "Native Spanish speaker offering language lessons",
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Park",
    location: "Brooklyn, NY",
    distance: "1.5 mi",
    rating: 4.7,
    reviews: 19,
    skills: ["Gardening", "Composting", "Landscaping"],
    bio: "Urban gardening enthusiast sharing green thumb tips",
    avatar: "DP"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    location: "Brooklyn, NY",
    distance: "2.0 mi",
    rating: 4.9,
    reviews: 41,
    skills: ["Yoga", "Meditation", "Wellness"],
    bio: "Certified yoga instructor promoting mindful living",
    avatar: "LT"
  },
  {
    id: 6,
    name: "James Wilson",
    location: "Brooklyn, NY",
    distance: "1.8 mi",
    rating: 4.6,
    reviews: 23,
    skills: ["Photography", "Photo Editing", "Lightroom"],
    bio: "Professional photographer teaching composition basics",
    avatar: "JW"
  }
];

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [radius, setRadius] = useState("5");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Discover Skills Near You</h1>
            <p className="text-xl text-muted-foreground">
              Connect with talented neighbors and exchange skills in your community
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search for skills... (e.g., Guitar, Coding, Gardening)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              
              <div className="flex gap-2">
                <Select value={radius} onValueChange={setRadius}>
                  <SelectTrigger className="w-[150px] h-12">
                    <SelectValue placeholder="Radius" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 mile</SelectItem>
                    <SelectItem value="5">5 miles</SelectItem>
                    <SelectItem value="10">10 miles</SelectItem>
                    <SelectItem value="25">25 miles</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="lg">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockUsers.map((user) => (
              <Card 
                key={user.id}
                className="group hover:shadow-soft transition-smooth cursor-pointer border-2"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16 border-2 border-primary/20">
                      <AvatarFallback className="text-lg gradient-hero text-primary-foreground">
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-smooth">
                        {user.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{user.distance} away</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="font-semibold">{user.rating}</span>
                        <span className="text-sm text-muted-foreground">({user.reviews})</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {user.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className="transition-smooth hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Discover;
