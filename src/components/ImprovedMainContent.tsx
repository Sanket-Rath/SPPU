import { BookOpen, Calendar, Users, Award, Bell, ChevronRight } from "lucide-react";

const ImprovedMainContent = () => {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Issue #6: Cleaned up homepage layout - organized sections */}
        
        {/* Hero Section with UGC Info and Key Stats */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Recognized by University Grants Commission (UGC)</h2>
              <p className="text-xl mb-2">Savitribai Phule Pune University is recognized by the UGC under Section 2(f) and 12(B) of the UGC Act, 1956.</p>
              <p className="text-lg opacity-90">A premier university in India, fostering excellence in education and research.</p>
              <div className="mt-6">
                <span className="bg-white text-primary px-4 py-2 rounded-lg font-medium">
                  University Grants Commission (UGC)
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">8159</div>
                <div className="text-sm opacity-90">Journal Articles</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">588</div>
                <div className="text-sm opacity-90">Books Published</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">987</div>
                <div className="text-sm opacity-90">Book Chapters</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">1137</div>
                <div className="text-sm opacity-90">Conferences</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Cards - Issue #6: Better organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a 
            href="/results" 
            className="bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all group text-center shadow-sm focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Award className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Examination Results</h3>
            <p className="text-sm text-muted-foreground">View your latest examination results</p>
            <div className="mt-4 text-primary font-medium text-sm flex items-center justify-center gap-1">
              Check Results <ChevronRight size={16} />
            </div>
          </a>

          <a 
            href="/admissions" 
            className="bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all group text-center shadow-sm focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Users className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Admissions</h3>
            <p className="text-sm text-muted-foreground">Apply for various courses and programs</p>
            <div className="mt-4 text-primary font-medium text-sm flex items-center justify-center gap-1">
              Apply Now <ChevronRight size={16} />
            </div>
          </a>

          <a 
            href="/ebooks" 
            className="bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all group text-center shadow-sm focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">E-Books</h3>
            <p className="text-sm text-muted-foreground">Access digital library resources</p>
            <div className="mt-4 text-primary font-medium text-sm flex items-center justify-center gap-1">
              Browse Library <ChevronRight size={16} />
            </div>
          </a>

          <a 
            href="/calendar" 
            className="bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all group text-center shadow-sm focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Academic Calendar</h3>
            <p className="text-sm text-muted-foreground">Important dates and schedules</p>
            <div className="mt-4 text-primary font-medium text-sm flex items-center justify-center gap-1">
              View Calendar <ChevronRight size={16} />
            </div>
          </a>
        </div>

        {/* Research Publications Section */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Research Publications (2011-Onwards)</h2>
            <a 
              href="/research" 
              className="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-1"
            >
              View All <ChevronRight size={16} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Publications</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                  <span className="text-sm font-medium">Journal Articles</span>
                  <span className="text-lg font-bold text-primary">8159</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                  <span className="text-sm font-medium">Books</span>
                  <span className="text-lg font-bold text-primary">588</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                  <span className="text-sm font-medium">Book Chapters</span>
                  <span className="text-lg font-bold text-primary">987</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                  <span className="text-sm font-medium">Conferences</span>
                  <span className="text-lg font-bold text-primary">1137</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Featured Faculty</h3>
              <div className="space-y-3">
                <div className="p-3 border border-border rounded-lg">
                  <div className="font-medium text-sm text-foreground">Khairkar Vijaya Pradip</div>
                  <div className="text-xs text-muted-foreground">Management Sciences</div>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <div className="font-medium text-sm text-foreground">Deshmukh Juhi Shyamkant</div>
                  <div className="text-xs text-muted-foreground">Centre for Advanced Studies in Sanskrit</div>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <div className="font-medium text-sm text-foreground">Satpute Surekha Khandu</div>
                  <div className="text-xs text-muted-foreground">Law</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/scholarships" className="block p-3 border border-border rounded-lg hover:bg-accent transition-colors">
                  <div className="text-sm font-medium text-foreground">Scholarships</div>
                  <div className="text-xs text-muted-foreground">Apply for financial aid</div>
                </a>
                <a href="/library" className="block p-3 border border-border rounded-lg hover:bg-accent transition-colors">
                  <div className="text-sm font-medium text-foreground">Digital Library</div>
                  <div className="text-xs text-muted-foreground">Access online resources</div>
                </a>
                <a href="/international" className="block p-3 border border-border rounded-lg hover:bg-accent transition-colors">
                  <div className="text-sm font-medium text-foreground">International Centre</div>
                  <div className="text-xs text-muted-foreground">Global opportunities</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* News & Announcements */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <Bell className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Latest News & Announcements</h2>
          </div>
          
          <div className="space-y-4">
            <div className="border-l-4 border-primary bg-accent p-4 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">March 15, 2024</div>
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">NEW</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">New admission notifications released for the academic year 2024-25</h3>
              <p className="text-sm text-muted-foreground">Applications are now open for undergraduate and postgraduate programs.</p>
            </div>
            
            <div className="border-l-4 border-primary bg-accent p-4 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">March 10, 2024</div>
                <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium">EXAM</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Examination schedule for semester exams announced</h3>
              <p className="text-sm text-muted-foreground">Check the detailed timetable for all courses and programs.</p>
            </div>
            
            <div className="border-l-4 border-primary bg-accent p-4 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">March 5, 2024</div>
                <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">EVENT</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">International conference on sustainable development</h3>
              <p className="text-sm text-muted-foreground">Join researchers and experts from around the world.</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a 
              href="/announcements" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              View All Announcements
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImprovedMainContent;