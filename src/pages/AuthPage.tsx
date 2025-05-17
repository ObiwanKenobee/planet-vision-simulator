
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();

    // This is a simulation of authentication without actual backend
    if (email && password) {
      // Simulate successful login
      toast.success(isLogin ? 'Login successful!' : 'Account created successfully!');
      
      // Store authentication status in localStorage
      localStorage.setItem('nef-auth', JSON.stringify({
        isAuthenticated: true,
        user: { email },
        expiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
      }));
      
      // Redirect to dashboard
      navigate('/');
    } else {
      toast.error('Please enter both email and password');
    }
  };

  const handleDemoLogin = () => {
    // Set demo credentials
    setEmail('demo@nef.ai');
    setPassword('demopassword');
    
    // Store authentication status in localStorage
    localStorage.setItem('nef-auth', JSON.stringify({
      isAuthenticated: true,
      user: { email: 'demo@nef.ai' },
      expiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    }));
    
    toast.success('Demo login successful!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-background/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {isLogin ? 'Sign In to Access the Dashboard' : 'Create an Account'}
          </CardTitle>
          <CardDescription>
            Join the mission to build a net-zero, ocean-clean world with NEF and AI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                required 
              />
            </div>
            <Button type="submit" className="w-full bg-energy hover:bg-energy-dark">
              {isLogin ? '🔓 Sign In' : '🔐 Create Account'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center w-full">
            <Button 
              variant="outline" 
              onClick={handleDemoLogin} 
              className="w-full"
            >
              🔓 Demo Login
            </Button>
          </div>
          <div className="text-center w-full text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Button 
              variant="link" 
              onClick={() => setIsLogin(!isLogin)}
              className="p-0 h-auto font-normal"
            >
              {isLogin ? 'Create One' : 'Sign In'}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthPage;
