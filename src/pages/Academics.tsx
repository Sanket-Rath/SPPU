import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AcademicsPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Academics</h2>
        <p className="mb-4">SPPU offers a diverse range of academic programs across Science, Arts, Commerce, Engineering, Management, Law, and more. The university is known for its rigorous curriculum, experienced faculty, and focus on research and innovation.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Undergraduate, Postgraduate, and Doctoral programs</li>
          <li>Choice Based Credit System (CBCS)</li>
          <li>Industry collaborations and internships</li>
          <li>Modern laboratories and research facilities</li>
        </ul>
        <p className="mb-6">Explore our departments and programs to find the right academic path for you.</p>

        {/* Vertical link list (matches attached design) */}
        <section className="mb-8">
          <div className="max-w-xs space-y-4">
            <a href="/academics/departments" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Department</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>

            <a href="/academics/departments" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Schools &amp; Centres</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>

            <a href="/academics/departments" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Affiliated Colleges &amp; Institutions</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>

            <a href="/academics/departments" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Independent Units</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>

            <a href="/academics/departments" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Other Academic &amp; Service Units</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>

            <a href="/academics/departments" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">National/Regional Centres on the UoP Campus</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>

            <a href="/academics/departments" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">International Education Centre</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>

            <a href="/academics/departments" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Academic Programs</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
          </div>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default AcademicsPage;
