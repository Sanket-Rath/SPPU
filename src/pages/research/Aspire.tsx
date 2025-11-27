import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Aspire = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ImprovedHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <h2 className="text-3xl font-bold mb-4">ASPIRE</h2>

          <section className="mb-6">
            <p>
              Savitribai Phule Pune University started a research grant scheme in the year 2006, initially with the name ‘BCUD Research Project Scheme’, with initial budgetary provision of Rs.5 Crore. The scheme was aimed at providing initial seed funding to budding researcher teachers, so as to develop them to apply for larger funding to various funding agencies outside.
            </p>
            <p className="mt-3">
              Subsequent to an overview of the functioning and performance of the scheme over last 12 years, the Hon’ble Vice Chancellor constituted an Advisory Committee under the Chairmanship of Prof. S.Ananthakrishnan to frame the guidelines, monitoring processes and scrutinize the proposals.
            </p>
          </section>

          <div className="max-w-md">
            <img src="/snapshot.png" alt="ASPIRE snapshot" className="w-full rounded shadow" />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Aspire;
