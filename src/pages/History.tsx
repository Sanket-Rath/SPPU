import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const HistoryPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">History</h2>
        <p className="mb-4">Savitribai Phule Pune University was established in 1949 and has since grown into one of India's leading universities. The university has played a pivotal role in the development of higher education in Maharashtra and India, nurturing generations of scholars, scientists, and leaders.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Founded in 1949</li>
          <li>Named after social reformer Savitribai Phule</li>
          <li>Significant contributions to education and research</li>
        </ul>
        <p>Today, SPPU stands as a symbol of academic excellence and social progress.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default HistoryPage;
