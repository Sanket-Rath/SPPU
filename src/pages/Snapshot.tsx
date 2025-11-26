import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const SnapshotPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">A Snapshot</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Savitribai Phule Pune University, with the main campus in the heart of Pune City, has jurisdiction over three districts of Maharashtra: Pune, Nashik and Ahmednagar.
          </p>
          <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
            <img src="/snapshot.png" alt="Savitribai Phule Pune University Campus Aerial View" className="w-full h-auto object-cover" />
          </div>
          <p className="text-lg font-semibold text-gray-700 mb-4">
            Highlights of the University are presented below:
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Savitribai Phule Pune University (Abstract)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold w-1/2">Date of Establishment</td>
                  <td className="border border-gray-300 p-3">10th February 1949</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Total Area of Campus</td>
                  <td className="border border-gray-300 p-3">411 acres</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">First Vice Chancellor</td>
                  <td className="border border-gray-300 p-3">Dr. M. R. Jaykar</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Number of University Departments/Centres</td>
                  <td className="border border-gray-300 p-3">61</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">Jurisdiction (Districts)</td>
                  <td className="border border-gray-300 p-3">3</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Affiliated Colleges</td>
                  <td className="border border-gray-300 p-3">629</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">Colleges for Girls Only</td>
                  <td className="border border-gray-300 p-3">20</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Recognised Institutes</td>
                  <td className="border border-gray-300 p-3">185</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">Research Institutes</td>
                  <td className="border border-gray-300 p-3">22</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Teachers/Staff</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold w-1/2">University Departments</td>
                  <td className="border border-gray-300 p-3">334</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Colleges</td>
                  <td className="border border-gray-300 p-3">11018</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">University Non-teaching Staff Class-1</td>
                  <td className="border border-gray-300 p-3">50</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">University Non-teaching Staff Class-2</td>
                  <td className="border border-gray-300 p-3">32</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">University Non-teaching Staff Class-3</td>
                  <td className="border border-gray-300 p-3">557</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">University Non-teaching Staff Class-4</td>
                  <td className="border border-gray-300 p-3">271</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Examinations and Faculties</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold w-1/2">No. of Examinations Conducted in October</td>
                  <td className="border border-gray-300 p-3">282</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">No. of Examinations Conducted in April</td>
                  <td className="border border-gray-300 p-3">396</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">Faculties</td>
                  <td className="border border-gray-300 p-3">13</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Board of Studies</td>
                  <td className="border border-gray-300 p-3">112</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">Ad-hoc Boards</td>
                  <td className="border border-gray-300 p-3">59</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default SnapshotPage;
