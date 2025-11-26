import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      {/* Top header with logo and university name */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img src="/sppu-logo.png" alt="SPPU logo" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">SAVITRIBAI PHULE PUNE UNIVERSITY</h1>
              <p className="text-sm opacity-90">सावित्रीबाई फुले पुणे विद्यापीठ</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="hover:underline cursor-pointer">Contact 📧</span>
              <span className="hover:underline cursor-pointer">Sitemap 🗺️</span>
              <span className="hover:underline cursor-pointer">A-Z List 📋</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-primary-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <ul className="flex items-center space-x-6 text-sm">
              <li className="bg-primary-light px-3 py-2 rounded hover:bg-white hover:text-primary cursor-pointer transition-colors">
                🏠 Home
              </li>
              <li className="px-3 py-2 hover:bg-primary-light rounded cursor-pointer transition-colors">
                About the University
              </li>
              <li className="px-3 py-2 hover:bg-primary-light rounded cursor-pointer transition-colors">
                Academics
              </li>
              <li className="px-3 py-2 hover:bg-primary-light rounded cursor-pointer transition-colors">
                Research
              </li>
              <li className="px-3 py-2 hover:bg-primary-light rounded cursor-pointer transition-colors">
                Administration
              </li>
              <li className="px-3 py-2 hover:bg-primary-light rounded cursor-pointer transition-colors">
                BOD
              </li>
              <li className="px-3 py-2 hover:bg-primary-light rounded cursor-pointer transition-colors">
                Students Corner
              </li>
              <li className="px-3 py-2 hover:bg-primary-light rounded cursor-pointer transition-colors">
                Useful Links
              </li>
              <li className="px-3 py-2 hover:bg-primary-light rounded cursor-pointer transition-colors">
                E-Learning
              </li>
              <li className="px-3 py-2 hover:bg-primary-light rounded cursor-pointer transition-colors">
                Feedback
              </li>
              <li className="px-3 py-2 hover:bg-primary-light rounded cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
            <div className="flex items-center gap-2">
              <span className="text-sm">Search</span>
              <div className="flex items-center bg-white rounded">
                <input 
                  type="text" 
                  className="px-3 py-1 text-black text-sm w-40 rounded-l outline-none"
                  placeholder=""
                />
                <button className="bg-secondary text-secondary-foreground px-2 py-1 rounded-r hover:bg-accent transition-colors">
                  <Search size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sub navigation */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2">
          <div className="grid grid-cols-4 gap-x-8 text-xs">
            <div className="space-y-1">
              <div className="hover:underline cursor-pointer">● Admissions</div>
              <div className="hover:underline cursor-pointer">● Examination</div>
              <div className="hover:underline cursor-pointer">● Finance & Accounts</div>
              <div className="hover:underline cursor-pointer">● Administration</div>
              <div className="hover:underline cursor-pointer">● Research</div>
            </div>
            <div className="space-y-1">
              <div className="hover:underline cursor-pointer">● Syllabi</div>
              <div className="hover:underline cursor-pointer">● Scholarships</div>
              <div className="hover:underline cursor-pointer">● Sports Section</div>
              <div className="hover:underline cursor-pointer">● Certificate Section</div>
              <div className="hover:underline cursor-pointer">● Library</div>
            </div>
            <div className="space-y-1">
              <div className="hover:underline cursor-pointer">● SET & NET Examination</div>
              <div className="hover:underline cursor-pointer">● Academic Calendar</div>
              <div className="hover:underline cursor-pointer">● Seminar & Conferences</div>
              <div className="hover:underline cursor-pointer">● Tenders</div>
              <div className="hover:underline cursor-pointer">● Circulars</div>
            </div>
            <div className="space-y-1">
              <div className="hover:underline cursor-pointer">● Job Openings</div>
              <div className="hover:underline cursor-pointer">● Vidyavani</div>
              <div className="hover:underline cursor-pointer">● NSS</div>
              <div className="hover:underline cursor-pointer">● International Centre</div>
              <div className="hover:underline cursor-pointer">● Students Welfare</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;