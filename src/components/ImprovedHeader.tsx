import { Search, Home, Menu, X } from "lucide-react";
import { useState } from "react";

const ImprovedHeader = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Organized navigation - Issue #3: Navigation Bar Overcrowding
  const primaryNavItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "About University", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Research", href: "/research" },
    { label: "Administration", href: "/administration" },
    { label: "Students", href: "/students" },
    { label: "E-Learning", href: "/elearning" }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Issue #14: Effective Search Bar Functionality
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Implement search functionality here
    }
  };

  return (
    <header className="bg-primary text-primary-foreground">
      {/* Simplified top header - Issue #8: Removed unnecessary auxiliary buttons */}
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/sppu-logo.png"
              alt="Savitribai Phule Pune University Logo"
              className="w-16 h-16 object-contain bg-white rounded-full border border-primary shadow-md p-1"
              style={{ background: 'white' }}
            />
            <div>
              <h1 className="text-2xl font-bold leading-tight">SAVITRIBAI PHULE PUNE UNIVERSITY</h1>
              <p className="text-sm opacity-90">सावित्रीबाई फुले पुणे विद्यापीठ</p>
            </div>
          </div>
          
          {/* Improved search bar placement - Issue #7 */}
          <div className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className={`flex items-center bg-white rounded-lg transition-all duration-200 ${
                isSearchFocused ? 'ring-2 ring-primary-light shadow-lg' : ''
              }`}>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="px-4 py-2 text-black text-sm w-64 rounded-l-lg outline-none"
                  placeholder="Search courses, results, announcements..."
                />
                <button 
                  type="submit"
                  className="bg-secondary text-secondary-foreground px-3 py-2 rounded-r-lg hover:bg-accent transition-colors"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Streamlined main navigation - Issue #3 */}
      <nav className="bg-primary-dark border-t border-primary-light">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-2">
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-2">
              {primaryNavItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg hover:bg-primary-light hover:text-white transition-all duration-200 group shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
                  >
                    {item.icon && <item.icon size={16} className="group-hover:scale-110 transition-transform" />}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary-light transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Quick actions */}
            <div className="hidden lg:flex items-center gap-2">
              <a 
                href="/results" 
                className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-primary transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
              >
                View Results
              </a>
              <a 
                href="/admissions" 
                className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-light hover:text-white transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
              >
                Admissions
              </a>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-primary-dark border-t border-primary-light animate-in slide-in-from-top duration-200">
              <div className="py-4 space-y-2">
                {primaryNavItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary-light rounded-lg mx-2 transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon && <item.icon size={16} />}
                    {item.label}
                  </a>
                ))}
                <div className="px-4 py-2">
                  <form onSubmit={handleSearch} className="flex gap-2">
                    <input 
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 px-3 py-2 text-black text-sm rounded outline-none"
                      placeholder="Search..."
                    />
                    <button 
                      type="submit"
                      className="bg-secondary text-secondary-foreground px-3 py-2 rounded hover:bg-accent transition-colors"
                    >
                      <Search size={16} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default ImprovedHeader;