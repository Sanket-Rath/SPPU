import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const LawSectionPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Law Section</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Acts</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Maharashtra Public Universities Act, 2016 - English</li>
            <li>Maharashtra Public Universities Act, 2016 - Marathi</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Statutes</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Statutes Circular</li>
            <li>General Statutes</li>
            <li>Uniform Statutes relating to conduct of election</li>
            <li>Teachers' Statutes</li>
            <li>VC Order relating to terms &amp; conditions of service of Teachers</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Ordinances & Regulations</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Ordinances</li>
            <li>V.C. Orders</li>
            <li>Notification relating to Eligibility Conditions for being member of any authority of the University</li>
            <li>Regulations</li>
          </ul>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default LawSectionPage;
