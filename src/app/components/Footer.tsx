import { Github, Twitter } from "lucide-react";


export function Footer() {
  return (
    <footer className="border-t border-black/5 mt-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl mb-3 font-serif text-foreground tracking-tight">Adral</h3>
              <p className="text-muted-foreground leading-relaxed font-light text-sm max-w-sm">
                Building the agent‑native control room for developers.
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-muted-foreground font-medium">
              Community
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 font-light text-sm"
                >
                  <Twitter className="w-4 h-4" />
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 font-light text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors font-light text-sm"
                >
                  Discord / Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-muted-foreground font-medium">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors font-light text-sm"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors font-light text-sm"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors font-light text-sm"
                >
                  AI Usage
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5">
          <p className="text-xs text-muted-foreground font-light">
            © 2026 ADRAL.
          </p>
        </div>
      </div>
    </footer>
  );
}
