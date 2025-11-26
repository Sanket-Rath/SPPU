import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const SenatePage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Senate</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            The Senate, headed by the Vice-Chancellor, typically consists of around 107 members, and is the Principal Authority for all financial estimates; reviewing current and future academic programs, and suggesting changes consistent with societal development. It also suggests measures for improvement of the University.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            The Senate shall be the principal authority for all financial estimates and budgetary appropriations and for providing social feedback to the University on current and future academic programmes.
          </p>
          <p className="text-lg text-gray-700">
            The Senate shall meet at least twice a year on the date to be fixed by the Chancellor. One of the meetings shall be the annual meeting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Composition of Senate</h2>
          <p className="text-gray-700 mb-4">The Senate shall consist of the following members:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Chancellor - Chairperson</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Vice-Chancellor</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Pro-Vice-Chancellor</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Deans of Faculties</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Director of Board of Examinations and Evaluation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Finance and Accounts Officer</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Directors of Sub-campuses of the university</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Ten Principals of affiliated, conducted, autonomous colleges accredited by NAAC or NBA</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Six representatives of Management from affiliated colleges</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The president and the secretary of the University's students Council</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Ten teachers from affiliated colleges to be elected by the collegium of teachers</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Three teachers from University departments to be elected by the collegium of University teachers</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Ten registered graduates to be elected from amongst the collegium of registered graduates</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Ten persons nominated by the Chancellor from various fields</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Two Members of Legislative Assembly</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">One Member of Legislative Council</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Registrar - Member-Secretary</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Functions and Duties of Senate</h2>
          <p className="text-gray-700 mb-4">The Senate shall transact the following business at its annual meeting:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Give suggestions on improvements in academics, research and development, administration and governance</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Review current academic programmes and collaborative programmes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Suggest new academic programmes consistent with societal requirements</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Confer honorary degrees or other academic distinctions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Review and approve the annual financial estimate (budget)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Approve annual report, accounts, and audit reports</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Review students' grievance redressal reports</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Suggest improvements in student welfare and sports activities</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Make, amend or repeal statutes</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default SenatePage;
