import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { LogOut } from "lucide-react";

export function Header() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extralight tracking-tight hover:opacity-70 transition-opacity">
          Adral
        </Link>

        <nav className="flex items-center gap-6">
          {isLanding ? (
            <>
              <Link
                to="/login"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm hover:opacity-80 transition-opacity font-light"
              >
                Sign up
              </Link>
            </>
          ) : (
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              <LogOut className="w-4 h-4" />
              Back to Home
            </Link>
          )}
        </nav>
      </div>
    </motion.header>
  );
}
