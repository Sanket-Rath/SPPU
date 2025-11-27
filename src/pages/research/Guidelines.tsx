import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const GuidelinesResearch = () => {
  const pdfUrl = "https://www.unipune.ac.in/uop_files/Report-Guidelines_20-5-15.pdf";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ImprovedHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <h2 className="text-3xl font-bold mb-4">Guidlines Research</h2>
          <p className="mb-4">Click the document below to view the guidelines PDF.</p>

          <div className="border rounded overflow-hidden" style={{height: '80vh'}}>
            <iframe title="Guidelines PDF" src={pdfUrl} className="w-full h-full" />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default GuidelinesResearch;
