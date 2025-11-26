import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const ChairsPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">Chairs</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Different Chairs Established by Savitribai Phule Pune University</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 p-3 text-left font-bold">S.No.</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Chair Name</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Head/Coordinator</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">1</td>
                  <td className="border border-gray-300 p-3">Padmashree Vikhe-Patil Chair</td>
                  <td className="border border-gray-300 p-3">Dr. Anil Karanjkar</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">2</td>
                  <td className="border border-gray-300 p-3">Sant Tukaram Maharaj Chair</td>
                  <td className="border border-gray-300 p-3">Dr. Gajanan Ambhore</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">3</td>
                  <td className="border border-gray-300 p-3">Sant Namdeo Chair</td>
                  <td className="border border-gray-300 p-3">Dr. Shyama Ghonase</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">4</td>
                  <td className="border border-gray-300 p-3">Mahatma Phule Chair</td>
                  <td className="border border-gray-300 p-3">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">5</td>
                  <td className="border border-gray-300 p-3">Swatantryaveer Savarkar Chair</td>
                  <td className="border border-gray-300 p-3">--</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">6</td>
                  <td className="border border-gray-300 p-3">Bank of Maharashtra Energy Studies</td>
                  <td className="border border-gray-300 p-3">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">7</td>
                  <td className="border border-gray-300 p-3">Lokmanya Tilak Chair</td>
                  <td className="border border-gray-300 p-3">Dr. Dilip N. Sheth</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">8</td>
                  <td className="border border-gray-300 p-3">Shatanurao Kirloskar Chair</td>
                  <td className="border border-gray-300 p-3">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">9</td>
                  <td className="border border-gray-300 p-3">Dr. Babasaheb Ambedkar Chair</td>
                  <td className="border border-gray-300 p-3">Dr. Sudhakar J. Bokephode</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">10</td>
                  <td className="border border-gray-300 p-3">Air Marshal Arjan Singh DFC Chair</td>
                  <td className="border border-gray-300 p-3">Air Marshal Pandurang N. Pradhan</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">11</td>
                  <td className="border border-gray-300 p-3">Chhatrapati Shivaji Chair</td>
                  <td className="border border-gray-300 p-3">-</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">12</td>
                  <td className="border border-gray-300 p-3">Lokshahir Annabhau Sathe Chair</td>
                  <td className="border border-gray-300 p-3">Dr. Sunil Bhandage</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">13</td>
                  <td className="border border-gray-300 p-3">D. S. Savkar Chair</td>
                  <td className="border border-gray-300 p-3">Dr. Ashok Kamble</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">14</td>
                  <td className="border border-gray-300 p-3">Pandit Bhimsen Joshi Chair</td>
                  <td className="border border-gray-300 p-3">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">15</td>
                  <td className="border border-gray-300 p-3">Seth Hirachand Nemchand Jain Chair</td>
                  <td className="border border-gray-300 p-3">Dr. Kamalkumar Jain</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">16</td>
                  <td className="border border-gray-300 p-3">ISRO Space Chair</td>
                  <td className="border border-gray-300 p-3">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">17</td>
                  <td className="border border-gray-300 p-3">C.S.I.R./I.P.R. Chair</td>
                  <td className="border border-gray-300 p-3">Shri. Vidhyadhar Kulkarni</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">18</td>
                  <td className="border border-gray-300 p-3">Ramkumar Rathi Patanjali Yoga Chair</td>
                  <td className="border border-gray-300 p-3">--</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">19</td>
                  <td className="border border-gray-300 p-3">Sant Dnyandeo Chair</td>
                  <td className="border border-gray-300 p-3">Dr. Aruna Dhere</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6">
          <p className="text-sm text-gray-600 italic">
            These chairs are established to promote research, scholarship, and excellence in various academic disciplines and fields of study.
          </p>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default ChairsPage;
