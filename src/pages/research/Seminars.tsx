import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Seminars = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ImprovedHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <h2 className="text-3xl font-bold mb-4">Seminar &amp; Conferences</h2>
          <p className="mb-4">For upcoming seminars and conferences, visit the events portal below.</p>
          <a className="inline-block px-4 py-2 bg-teal-600 text-white rounded" href="https://events.unipune.ac.in/" target="_blank" rel="noreferrer">Open Events Portal</a>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Seminars;
