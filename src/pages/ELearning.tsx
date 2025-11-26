import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const ELearningPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">E-Learning</h2>
        <p className="mb-4">SPPU's E-Learning platform provides access to online courses, digital resources, and virtual classrooms. The university is committed to leveraging technology for accessible and flexible learning.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Online courses and MOOCs</li>
          <li>Digital library and e-books</li>
          <li>Recorded lectures and webinars</li>
          <li>Learning management system (LMS)</li>
        </ul>
        <p>Start your digital learning journey with SPPU's E-Learning resources.</p>
        <section className="mt-6">
          <div className="max-w-xs space-y-4">
            <a href="/e-learning/ebooks" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-sky-700 to-sky-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">E-Books</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
            <a href="/e-learning/gian" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-sky-700 to-sky-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">GIAN - SPPU</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
            <a href="/e-learning/nptel" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-sky-700 to-sky-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">NPTEL - SPPU</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
            <a href="/e-learning/econtent" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-sky-700 to-sky-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">E-Content Learning Module</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
            <a href="/e-learning/audio-video" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-sky-700 to-sky-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Audio / Video Programs</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
            <a href="/e-learning/portal" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-sky-700 to-sky-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">E-Learning Portal</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
          </div>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default ELearningPage;
