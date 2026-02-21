import { motion } from "motion/react";
import { Link } from "react-router";
import { Mail, Lock, User, Github } from "lucide-react";
import { useState } from "react";

export function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-card border border-border rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extralight tracking-tight mb-2">
              Join Adral
            </h1>
            <p className="text-muted-foreground font-light">
              Start shipping at 10x speed
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button className="w-full px-4 py-3 border border-border rounded-xl hover:bg-secondary transition-colors flex items-center justify-center gap-3 font-light">
              <Github className="w-5 h-5" />
              Continue with GitHub
            </button>
            <button className="w-full px-4 py-3 border border-border rounded-xl hover:bg-secondary transition-colors flex items-center justify-center gap-3 font-light">
              <Mail className="w-5 h-5" />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-card text-muted-foreground font-light">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2 text-muted-foreground font-light">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full pl-11 pr-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-muted-foreground font-light">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-muted-foreground font-light">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-80 transition-opacity mt-6 font-light"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-muted-foreground mt-6 font-light">
            Already have an account?{" "}
            <Link to="/login" className="text-foreground hover:underline">
              Log in
            </Link>
          </p>

          <p className="text-center text-xs text-muted-foreground mt-4 font-light">
            By signing up, you agree to our Terms and Privacy Policy
          </p>
        </div>
      </motion.div>
    </div>
  );
}
