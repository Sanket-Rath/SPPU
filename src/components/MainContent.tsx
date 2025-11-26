const MainContent = () => {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-4xl">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-4">
          Savitribai Phule Pune University
        </div>

        {/* Results Section */}
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-6 border-b border-border pb-2">
            Results
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Click here for</span>
              <a 
                href="#" 
                className="text-destructive hover:underline font-medium"
              >
                Online Result
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Click here for</span>
              <a 
                href="#" 
                className="text-destructive hover:underline font-medium"
              >
                Result Summary
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Click here for</span>
              <a 
                href="#" 
                className="text-destructive hover:underline font-medium"
              >
                Revaluation Result
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-foreground mb-2">Admissions</h3>
            <p className="text-sm text-muted-foreground">Information about admission procedures and requirements</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-foreground mb-2">Examinations</h3>
            <p className="text-sm text-muted-foreground">Examination schedules, results, and related information</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-foreground mb-2">Academic Calendar</h3>
            <p className="text-sm text-muted-foreground">Important academic dates and schedules</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-foreground mb-2">Scholarships</h3>
            <p className="text-sm text-muted-foreground">Available scholarships and application procedures</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-foreground mb-2">Library</h3>
            <p className="text-sm text-muted-foreground">Library resources and digital collections</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-foreground mb-2">Research</h3>
            <p className="text-sm text-muted-foreground">Research opportunities and publications</p>
          </div>
        </div>

        {/* News & Announcements */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
            Latest News & Announcements
          </h2>
          
          <div className="space-y-3">
            <div className="border-l-4 border-primary bg-accent p-3 rounded">
              <div className="text-sm text-muted-foreground mb-1">March 15, 2024</div>
              <div className="font-medium text-foreground">New admission notifications released for the academic year 2024-25</div>
            </div>
            
            <div className="border-l-4 border-primary bg-accent p-3 rounded">
              <div className="text-sm text-muted-foreground mb-1">March 10, 2024</div>
              <div className="font-medium text-foreground">Examination schedule for semester exams announced</div>
            </div>
            
            <div className="border-l-4 border-primary bg-accent p-3 rounded">
              <div className="text-sm text-muted-foreground mb-1">March 5, 2024</div>
              <div className="font-medium text-foreground">International conference on sustainable development</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;