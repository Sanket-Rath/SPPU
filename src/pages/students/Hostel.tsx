import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const HostelPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Hostel Office</h1>

        <section className="mb-8 text-gray-700">
          <p className="mb-4">Hostel Facilities for Students of Indian Nationality</p>
          <p className="mb-4">University of Pune provides hostel facility to both girls and boys. The hostel facility is granted to the students of the University strictly on the basis of merit. The number of seats for each department depends on the department size.</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Hostel Rules &amp; Regulation_2023.</li>
            <li>Hostel Admission Process calendar 2023_24.</li>
            <li>Hostel Quota_departmentwise_2023_2024.</li>
            <li>Hostel Notice for students for the academic year (2023-24).</li>
            <li>Extension of Hostel Facility for NET exam.</li>
            <li>Ph.D. hostel quota departmentwise.</li>
            <li>Allocation of Extra Seat at hostel.</li>
            <li>Hostel Circulars and Notices regarding vacating and fees.</li>
          </ul>
          <p className="mb-4">Click here for the online Hostel admission process.</p>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default HostelPage;
