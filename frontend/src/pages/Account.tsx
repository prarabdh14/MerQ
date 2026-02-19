import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, ShieldCheck, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

export default function Account() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, simply mark the user as authenticated and send them to the landing page.
    login();
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/60">
      <Navbar />

      <main className="pt-24 pb-16 min-h-[calc(100vh-80px)] flex items-center">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
            {/* Left side: marketing / benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 mb-6">
                <ShoppingBag className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Member access
                </span>
              </div>

              <h1 className="heading-section mb-4">
                Sign in to your account
              </h1>
              <p className="text-body text-muted-foreground max-w-xl mb-8">
                Track orders, save your favorites, and access a personalized shopping experience.
                No backend is connected yet&mdash;this screen is ready for when we plug it in.
              </p>

              <div className="grid gap-4 md:grid-cols-2 max-w-xl">
                <div className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-sm font-semibold mb-1">Secure by design</p>
                  <p className="text-xs text-muted-foreground">
                    Ready to integrate with real authentication and protected routes.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
                    <ShoppingBag className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-sm font-semibold mb-1">Account-first checkout</p>
                  <p className="text-xs text-muted-foreground">
                    Reuse this layout later for order history, addresses, and more.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side: auth card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto w-full max-w-md"
            >
              <Card className="border-border/80 shadow-xl shadow-black/5">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-2xl">
                      {isLogin ? "Welcome back" : "Create your account"}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    {isLogin
                      ? "Sign in to continue. We’ll wire this up to real auth once the backend is ready."
                      : "Sign up with your email. This UI is ready for when we connect your user system."}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-2 space-y-6">
                  {/* Toggle */}
                  <div className="flex bg-muted rounded-lg p-1">
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className={`flex-1 py-2.5 rounded-md text-xs md:text-sm font-medium transition-all ${
                        isLogin
                          ? "bg-background shadow-sm text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Sign In
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className={`flex-1 py-2.5 rounded-md text-xs md:text-sm font-medium transition-all ${
                        !isLogin
                          ? "bg-background shadow-sm text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Create Account
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {!isLogin && (
                      <div className="space-y-2">
                        <Label htmlFor="name">Full name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Alex Doe"
                            className="pl-9"
                            required
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="pl-9"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        {isLogin && (
                          <button
                            type="button"
                            className="text-xs font-medium text-accent hover:underline"
                          >
                            Forgot password?
                          </button>
                        )}
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          placeholder="••••••••"
                          className="pl-9 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <Button type="submit" className="w-full btn-accent group">
                      {isLogin ? "Sign In" : "Create Account"}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>

                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-[10px] uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <Button variant="outline" className="w-full">
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Google
                    </Button>
                  </div>

                  <p className="text-center text-[11px] text-muted-foreground pt-1">
                    By continuing, you agree to your future Terms of Service and Privacy Policy once
                    they&apos;re defined.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}