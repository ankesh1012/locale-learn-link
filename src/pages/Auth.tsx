import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Authentication logic will be added later
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-md">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <Card className="shadow-soft border-2">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to SkillShare
            </CardTitle>
            <CardDescription className="text-center">
              Join thousands of community members sharing skills
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signup" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="signin">Sign In</TabsTrigger>
              </TabsList>

              <TabsContent value="signup">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input 
                      id="signup-name" 
                      placeholder="John Doe" 
                      required
                      className="transition-smooth focus:shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input 
                      id="signup-email" 
                      type="email" 
                      placeholder="you@example.com" 
                      required
                      className="transition-smooth focus:shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input 
                      id="signup-password" 
                      type="password" 
                      placeholder="••••••••" 
                      required
                      className="transition-smooth focus:shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-location">Location</Label>
                    <Input 
                      id="signup-location" 
                      placeholder="City, State" 
                      required
                      className="transition-smooth focus:shadow-soft"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </TabsContent>

              <TabsContent value="signin">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email</Label>
                    <Input 
                      id="signin-email" 
                      type="email" 
                      placeholder="you@example.com" 
                      required
                      className="transition-smooth focus:shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="signin-password">Password</Label>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input 
                      id="signin-password" 
                      type="password" 
                      placeholder="••••••••" 
                      required
                      className="transition-smooth focus:shadow-soft"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
