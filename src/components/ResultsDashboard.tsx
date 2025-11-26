import { Home, Calendar, Search, ExternalLink } from "lucide-react";
import { useState } from "react";

const ResultsDashboard = () => {
  const [selectedSession, setSelectedSession] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Issue #12: Improved Results Dashboard Usability
  const results = [
    {
      id: 1,
      course: "F.E.(2015 CREDIT PAT.) APR-MAY 2025",
      resultDate: "06-August-2025",
      status: "Published"
    },
    {
      id: 2,
      course: "FIRST YEAR M.PHARM(2019 PATTERN) APRIL-2025",
      resultDate: "01-August-2025",
      status: "Published"
    },
    {
      id: 3,
      course: "FIRST YEAR B.PHARMACY(2019 PATTERN) APRIL-2025",
      resultDate: "01-August-2025",
      status: "Published"
    },
    {
      id: 4,
      course: "T.E.2015 PERCENTAGE EXAMINATION APR-MAY 2025",
      resultDate: "18-July-2025",
      status: "Published"
    },
    {
      id: 5,
      course: "T.E.(2015 CREDIT PAT.) APR-MAY 2025",
      resultDate: "18-July-2025",
      status: "Published"
    }
  ];

  const filteredResults = results.filter(result =>
    result.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Issue #5: Added prominent Home redirect button (only one, working) */}
      <div className="bg-primary text-primary-foreground py-3">
        <div className="container mx-auto flex items-center gap-4">
          <a 
            href="/" 
            className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary-light hover:text-white transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
          >
            <Home size={18} />
            Back to Home
          </a>
          <div className="text-sm opacity-90">
            <span>Home</span> <span className="mx-2">›</span> <span>Results Dashboard</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="max-w-6xl mx-auto">
          {/* Dashboard Header */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6 shadow-sm">
            <h1 className="text-3xl font-bold text-foreground mb-2">Online Result Display System</h1>
            <p className="text-muted-foreground">Access your examination results quickly and easily</p>
          </div>

          {/* Filters Section - Issue #13: Responsive Design */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">Filter Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Calendar size={16} className="inline mr-2" />
                  Select Session
                </label>
                <select 
                  value={selectedSession}
                  onChange={(e) => setSelectedSession(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                  <option value="">All Sessions</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Search size={16} className="inline mr-2" />
                  Search Course
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by course name..."
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>

              <div className="flex items-end">
                <button 
                  onClick={() => {
                    setSelectedSession("");
                    setSearchTerm("");
                  }}
                  className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Results Table - Issue #13: Fully Responsive */}
          <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">Examination Results</h2>
              <p className="text-muted-foreground mt-1">
                Showing {filteredResults.length} of {results.length} results
              </p>
            </div>

            {/* Mobile-friendly table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Sr.No.</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Course Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Result Date</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredResults.map((result, index) => (
                    <tr key={result.id} className="hover:bg-accent transition-colors">
                      <td className="px-6 py-4 text-sm text-foreground">{index + 1}</td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{result.course}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{result.resultDate}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                          {result.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform">
                          View Result
                          <ExternalLink size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredResults.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-muted-foreground">No results found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <a 
              href="/result-summary" 
              className="bg-card border border-border rounded-lg p-4 hover:shadow-xl hover:-translate-y-1 transition-all text-center group shadow-sm focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
            >
              <h3 className="font-medium text-foreground mb-2 group-hover:text-primary">Result Summary</h3>
              <p className="text-sm text-muted-foreground">View consolidated results</p>
            </a>
            
            <a 
              href="/revaluation-result" 
              className="bg-card border border-border rounded-lg p-4 hover:shadow-xl hover:-translate-y-1 transition-all text-center group shadow-sm focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
            >
              <h3 className="font-medium text-foreground mb-2 group-hover:text-primary">Revaluation Results</h3>
              <p className="text-sm text-muted-foreground">Check revaluation status</p>
            </a>
            
            <a 
              href="/grade-card" 
              className="bg-card border border-border rounded-lg p-4 hover:shadow-xl hover:-translate-y-1 transition-all text-center group shadow-sm focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
            >
              <h3 className="font-medium text-foreground mb-2 group-hover:text-primary">Download Grade Card</h3>
              <p className="text-sm text-muted-foreground">Get official grade cards</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;