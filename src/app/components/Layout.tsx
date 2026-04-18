import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { Menu, X, Gauge, ArrowLeft } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Show back button on store detail pages (e.g. /stores/downtown)
  const isStoreDetail = /^\/stores\/[^/]+$/.test(location.pathname);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/collection", label: "Collection" },
    { path: "/stores", label: "Our Stores" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-800">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back button (store detail pages only) */}
            {isStoreDetail && (
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors mr-4"
              >
                <ArrowLeft className="size-5" />
                <span className="text-sm font-medium">Back</span>
              </button>
            )}

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Gauge className="size-8 text-orange-500 transition-transform group-hover:rotate-180 duration-500" />
                <div className="absolute inset-0 bg-orange-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                New Gold Star Tyres
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-orange-500/20 text-orange-500"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-zinc-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-orange-500/20 text-orange-500"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Gauge className="size-8 text-orange-500" />
                <span className="text-xl font-bold">New Gold Star Tyres</span>
              </div>
              <p className="text-zinc-400 max-w-md">
                Your trusted partner for premium tyres. We deliver quality, performance, and safety for every journey.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-zinc-400 hover:text-orange-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>I Vikheshe Sumi Road, Dimapur</li>
                <li>Nagaland - 797112</li>
                <li>Phone: +91-9612154551</li>
                <li>Email: info@tyremax.com</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-400">
            <p>&copy; 2026 New Gold Star Tyres. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
