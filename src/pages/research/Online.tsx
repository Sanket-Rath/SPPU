import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const ResearchOnline = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ImprovedHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <h2 className="text-3xl font-bold mb-4">Research Online</h2>

          {/* Vice Chancellor Message */}
          <section className="mb-8 grid lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-1 bg-white p-4 rounded shadow">
              <img src="/vc-photo.png" alt="Vice Chancellor" className="w-36 h-36 object-cover rounded-full mx-auto" />
              <h3 className="text-xl font-semibold text-center mt-3">Prof. (Dr.) Suresh Gosavi</h3>
              <p className="text-center text-sm text-gray-600">Vice Chancellor</p>
              <p className="mt-4 text-sm text-gray-700">Higher education challenges of Expansion, Inclusion, and Excellence; serving rising demand; ensuring equity; value-based education inspired by Swami Vivekananda.</p>
              <blockquote className="mt-3 italic text-sm text-gray-600">“Real education is that which enables one to stand on one's own legs.”</blockquote>
              <div className="mt-4 text-center">
                <a className="text-teal-700 underline" href="#">More…</a>
              </div>
            </div>

            {/* Research in Focus Carousel (simple placeholder) */}
            <div className="lg:col-span-2 bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-3">Research in Focus</h3>
              <div className="relative">
                <img src="/university-building.png" alt="Sahasrar HPC (placeholder)" className="w-full h-64 object-cover rounded" />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">Sahasrar High Performance Computing Facility</div>
              </div>
              <p className="mt-3 text-gray-700">The Sahasrar High Performance Computing facility provides advanced compute resources for research across disciplines, enabling large-scale simulations, data analysis and collaborative projects.</p>
              <div className="mt-3 flex gap-2">
                <button className="px-3 py-1 bg-teal-600 text-white rounded">Previous</button>
                <button className="px-3 py-1 bg-teal-600 text-white rounded">Next</button>
              </div>
            </div>
          </section>

          {/* Employee Login Panel */}
          <section className="max-w-sm bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Employee Login</h3>
            <p className="text-sm text-gray-600 mb-4">Note: Login using HR system credentials only.</p>
            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
            <input className="mt-1 w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter Employee ID" />
            <div className="mt-4">
              <button className="px-4 py-2 bg-teal-600 text-white rounded">Login</button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ResearchOnline;
