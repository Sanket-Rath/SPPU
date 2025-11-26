import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const EBooksPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">E-Books</h1>
        <p className="mb-4">List of SPPU-recommended e-books, department-wise digital book links and access to the library portal.</p>
        <ul className="list-disc pl-6">
          <li>List of SPPU-recommended e-books</li>
          <li>Department-wise digital book links</li>
          <li>Library portal access</li>
        </ul>
      </main>
    </div>
    <Footer />
  </div>
);

export default EBooksPage;
