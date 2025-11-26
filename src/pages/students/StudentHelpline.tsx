import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const StudentHelplinePage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Students Facilitation Center</h1>

        <section className="mb-8 text-gray-700">
          <p className="mb-4">Located at the main entrance of the University, Students Facilitation Center aims at providing important services under one roof to the students of University of Pune. Presently, the services on offer include applying for and receiving various documents/certificates related to Examination section and BCUD section.</p>
          <p className="mb-4">The services are categorized under four broader areas: Examination related, BCUD related, External related, General Services.</p>
          <p className="mb-4">Applying for various documents/certificates is easier now. A student can apply online and auto-generate a challan to be paid in any branch of Bank of Maharashtra or HDFC Bank. Payments for certain applications can also be made by credit/debit cards. The completed and duly signed applications along with the payment proof and necessary documents can be submitted at Students Facilitation Center. The required documents can be collected from the center on the due date.</p>
          <p className="mb-4">MAIL ID :- <a href="mailto:sfc@pun.unipune.ac.in" className="text-blue-600 hover:underline">sfc@pun.unipune.ac.in</a></p>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default StudentHelplinePage;
