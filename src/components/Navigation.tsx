import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";
import DownloadCTA from "@/components/DownloadCTA";
import TikTokIcon from "@/components/icons/TikTokIcon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Support", path: "/support" },
    { name: "FAQ", path: "/faq" },
    { name: "Feedback", path: "/feedback" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "glass-nav shadow-glass" 
        : "glass-nav"
    }`}>
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 sm:space-x-3 focus-visible"
            aria-label="Scriptly Home"
          >
            <img 
              src="/Icon.png" 
              alt="Scriptly Logo" 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full"
            />
            <span className="text-lg sm:text-xl font-bold text-glassmorphic-logo">Scriptly</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary focus-visible ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Social Media */}
            <div className="flex items-center space-x-4 ml-2 pl-4 border-l border-border/50">
              <a
                href="https://instagram.com/scriptlyapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-200 focus-visible"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@scriptlyactingapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-200 focus-visible"
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <DownloadCTA location="nav" compact />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden touch-target p-2 rounded-lg hover:bg-muted/50 active:bg-muted transition-colors focus-visible"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>


        {/* Mobile Navigation Menu */}
        <div 
          className="md:hidden overflow-hidden"
          style={{
            maxHeight: isOpen ? "500px" : "0px",
            opacity: isOpen ? 1 : 0,
            transition: isOpen 
              ? "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.05s"
              : "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <div 
            className="border-t border-border/50 glass-card backdrop-glass"
            style={{
              transform: isOpen ? "translateY(0)" : "translateY(-8px)",
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            <div className="py-4 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block touch-target px-4 py-3 text-base font-medium transition-colors rounded-lg focus-visible ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateX(0)" : "translateX(-10px)",
                    transition: isOpen 
                      ? `opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`
                      : "opacity 0.2s ease-out, transform 0.2s ease-out"
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Social Media */}
              <div 
                className="px-4 py-3 border-t border-border/50 mt-2"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(-10px)",
                  transition: isOpen 
                    ? `opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${navItems.length * 0.05}s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${navItems.length * 0.05}s`
                    : "opacity 0.2s ease-out, transform 0.2s ease-out"
                }}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-muted-foreground">Follow Us</span>
                  <a
                    href="https://instagram.com/scriptlyapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors focus-visible"
                    aria-label="Follow us on Instagram"
                    onClick={() => setIsOpen(false)}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@scriptlyactingapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors focus-visible"
                    aria-label="Follow us on TikTok"
                    onClick={() => setIsOpen(false)}
                  >
                    <TikTokIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;