import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AlumniPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Alumni</h1>

        <section className="mb-8 text-gray-700">
          <h2 className="text-2xl font-bold mb-4">Notable Alumni</h2>
          <p className="mb-4">Below are some notable alumni and their achievements.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Degree</th>
                  <th className="p-2 border">College</th>
                  <th className="p-2 border">Notability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Khaled Bahah</td>
                  <td className="p-2 border">B.Com.; M.Com.</td>
                  <td className="p-2 border">-</td>
                  <td className="p-2 border">2nd Vice President of Yemen and Prime Minister of Yemen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border">Pratibha Patil</td>
                  <td className="p-2 border">-</td>
                  <td className="p-2 border">Mooljee Jetha</td>
                  <td className="p-2 border">12th President of India</td>
                </tr>
                <tr>
                  <td className="p-2 border">Vishwanath Pratap Singh</td>
                  <td className="p-2 border">-</td>
                  <td className="p-2 border">-</td>
                  <td className="p-2 border">7th Prime Minister of India</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 text-gray-700">
          <h2 className="text-2xl font-bold mb-4">Other Notable Alumni</h2>
          <p className="mb-4">(List includes politicians, scientists, business leaders and others)</p>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default AlumniPage;
