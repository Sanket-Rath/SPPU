import { Home, Download, Book, Search, Filter } from "lucide-react";
import { useState } from "react";

const EBooksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Issue #15: Updated E-Books Page Content with current resources
  const books = [
    {
      id: 1,
      title: "Dr Bhalachandra Phadke and Social Education",
      author: "Prof. Dr. P. Vishwanadha Gupta",
      category: "Social Sciences",
      language: "Marathi",
      size: "2.3 MB",
      pages: 245,
      year: 2024
    },
    {
      id: 2,
      title: "Swayamsevi Sanstha",
      author: "Prof. Dr. Dhananjay Lokhande",
      category: "Management",
      language: "Marathi",
      size: "1.8 MB",
      pages: 189,
      year: 2024
    },
    {
      id: 3,
      title: "Rashtriya Ekatmata",
      author: "Prof. Tej Nivalikar",
      category: "Political Science",
      language: "Marathi",
      size: "3.1 MB",
      pages: 312,
      year: 2024
    },
    {
      id: 4,
      title: "Asanghatit Kamgar",
      author: "Dr. Satish Shirsath",
      category: "Economics",
      language: "Marathi",
      size: "2.7 MB",
      pages: 278,
      year: 2024
    },
    {
      id: 5,
      title: "Mahila Sabalikaran",
      author: "Dr. Vilas Adhav",
      category: "Social Sciences",
      language: "Marathi",
      size: "2.9 MB",
      pages: 298,
      year: 2024
    },
    {
      id: 6,
      title: "Jeshtha Nagarik: Vastav ani Samasya",
      author: "Dr. Navanath Tupe",
      category: "Sociology",
      language: "Marathi",
      size: "2.1 MB",
      pages: 234,
      year: 2024
    },
    {
      id: 7,
      title: "Vasundhareche Avishakar",
      author: "Mrs. Suhasini Chorghade, Prof. S. L. Chorghade",
      category: "Environmental Science",
      language: "Marathi",
      size: "4.2 MB",
      pages: 387,
      year: 2024
    },
    {
      id: 8,
      title: "Mahatma Jyotiba Phule",
      author: "Adv. Ram Kandge",
      category: "Biography",
      language: "Marathi",
      size: "3.5 MB",
      pages: 356,
      year: 2024
    },
    {
      id: 9,
      title: "Pune City: History, Growth and Development (758 to 2024 A.D.)",
      author: "Dr. S.G. Mahajan",
      category: "History",
      language: "English",
      size: "8.7 MB",
      pages: 758,
      year: 2024
    },
    {
      id: 10,
      title: "Dnyaneshwari Shabda Ovi Suchi",
      author: "Shri P.V. Kulkarni and Shri A.V. Atre",
      category: "Literature",
      language: "Marathi",
      size: "5.1 MB",
      pages: 445,
      year: 2024
    }
  ];

  const categories = ["all", "Social Sciences", "Management", "Political Science", "Economics", "Sociology", "Environmental Science", "Biography", "History", "Literature"];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Home Button - Issue #5 */}
      <div className="bg-primary text-primary-foreground py-3">
        <div className="container mx-auto flex items-center gap-4">
          <a 
            href="/" 
            className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary-light hover:text-white transition-colors"
          >
            <Home size={18} />
            Back to Home
          </a>
          <div className="text-sm opacity-90">
            <span>Home</span> <span className="mx-2">›</span> <span>Digital Library</span> <span className="mx-2">›</span> <span>E-Books</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Book className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Digital Library - E-Books</h1>
                <p className="text-muted-foreground">Access our comprehensive collection of digital resources</p>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Search size={16} className="inline mr-2" />
                  Search Books
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title or author..."
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Filter size={16} className="inline mr-2" />
                  Category
                </label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary">{books.length}</div>
              <div className="text-sm text-muted-foreground">Total Books</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary">{categories.length - 1}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary">{filteredBooks.length}</div>
              <div className="text-sm text-muted-foreground">Showing</div>
            </div>
          </div>

          {/* Books Grid - Issue #13: Responsive Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Book className="text-primary-foreground" size={20} />
                    </div>
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                      {book.language}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    by {book.author}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-medium">{book.category}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Pages:</span>
                      <span className="font-medium">{book.pages}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Size:</span>
                      <span className="font-medium">{book.size}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Year:</span>
                      <span className="font-medium">{book.year}</span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="text-muted-foreground" size={32} />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No books found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or category filter.</p>
            </div>
          )}

          {/* Additional Resources */}
          <div className="mt-12 bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="/journals" className="block p-4 border border-border rounded-lg hover:bg-accent transition-colors">
                <h3 className="font-medium text-foreground mb-2">Research Journals</h3>
                <p className="text-sm text-muted-foreground">Access academic journals and publications</p>
              </a>
              <a href="/thesis" className="block p-4 border border-border rounded-lg hover:bg-accent transition-colors">
                <h3 className="font-medium text-foreground mb-2">Thesis Repository</h3>
                <p className="text-sm text-muted-foreground">Browse doctoral and master's theses</p>
              </a>
              <a href="/databases" className="block p-4 border border-border rounded-lg hover:bg-accent transition-colors">
                <h3 className="font-medium text-foreground mb-2">Online Databases</h3>
                <p className="text-sm text-muted-foreground">Access subscribed academic databases</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EBooksPage;