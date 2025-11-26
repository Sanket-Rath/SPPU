import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const ResearchPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Research</h2>
        <p className="mb-4">SPPU is a leader in research and innovation, with numerous research centers, funded projects, and international collaborations. The university encourages interdisciplinary research and provides support for faculty and student research initiatives.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Research centers in Science, Technology, Social Sciences, and Humanities</li>
          <li>Funded projects from national and international agencies</li>
          <li>Publication of journals and research papers</li>
          <li>Annual conferences, seminars, and workshops</li>
        </ul>
        <p className="mb-6">Discover our research achievements and opportunities for collaboration.</p>

        {/* Vertical link list for Research submenu */}
        <section className="mb-8">
          <div className="max-w-xs space-y-4">
            <a href="/research/online" className="block px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <div className="font-semibold">Research Online</div>
            </a>

            <a href="/research/guidelines" className="block px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <div className="font-semibold">Guidlines Research</div>
            </a>

            <a href="/research/phd-tracking" className="block px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <div className="font-semibold">Ph.D Tracking</div>
            </a>

            <a href="/research/avishkar" className="block px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <div className="font-semibold">Avishkar</div>
            </a>

            <a href="/research/seminars" className="block px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <div className="font-semibold">Seminar &amp; Conferences</div>
            </a>

            <a href="/research/aspire" className="block px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <div className="font-semibold">ASPIRE</div>
            </a>
          </div>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default ResearchPage;
