import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const ManagementCouncilPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Management Council</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            The Management Council is the Principal Executive Authority of the University, and is chaired by the Vice-Chancellor. It typically consists of around 20 members, of which, three are elected by the Academic Council and nine are elected or nominated by the Senate. The Management Council formulates statutes, makes ordinances to be approved by the senate, and administers the affairs of the University.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            The Management Council shall be the principal executive and policy making authority of the university and shall be responsible for administering the affairs of the university and carrying out such duties, which are not specifically assigned to any other authority.
          </p>
          <p className="text-lg text-gray-700">
            There shall be not less than four meetings of the Management Council in a year. The procedure for conduct of business to be followed at a meeting including the quorum at the meeting and such other matters in relation to meetings as may be necessary, shall be such as may be prescribed by the Statutes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Composition of Management Council</h2>
          <p className="text-gray-700 mb-4">The Management Council shall consist of the following members:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Vice-Chancellor - Chairperson</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Pro-Vice-Chancellor</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">One eminent person from the field of education, industry, agriculture, commerce, banking, finance, social, cultural and other allied fields to be nominated by the Chancellor</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Two Deans to be nominated by the Vice-Chancellor for tenure of two and half years</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">One head or Director, nominated by the Vice-Chancellor from amongst the heads or Directors of University Departments or University institutions for a tenure of one year, by rotation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Two principals to be elected by the Senate from amongst the principals who are members of the Senate</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Two teachers who are not principals or directors of recognized institutions to be elected by the Senate</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Two representatives of managements to be elected by Senate from amongst the representatives of management who are members of Senate</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Two registered graduates elected by Senate from amongst elected registered graduate members of Senate</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Two members elected by the Academic Council from amongst its members</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">One eminent-expert from the institute or organization of National repute to be nominated by the Vice-Chancellor in consultation with the Chancellor</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Secretary, Higher Education or his nominee not below the rank of Deputy Secretary or Joint Director of Higher Education</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Director of Higher Education or his nominee, not below the rank of Joint Director of Higher Education</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Director of Technical Education or his nominee not below the rank of Joint Director of Technical Education</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Registrar - Member-Secretary</span>
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            The Finance and Accounts Officer and the Director, Board of Examinations and Evaluation shall be invitees of the Management Council, but they shall have no right to vote. The President of the university students council shall be invitee and shall attend meetings as invited to discuss issues related to students' development, welfare and grievances.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Powers and Duties</h2>
          <p className="text-gray-700 mb-4">The Management Council shall have the following powers and duties:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Review and deliberate on short and long term reforms in academic, research and development activities, finances, management and governance</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Establish departments, colleges, schools, centres, and institutions of higher learning</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Recommend to the senate the draft of statutes or amendments</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Make, amend or repeal ordinances and regulations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Control and arrange for administration of assets and properties of the university</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Approve the annual financial estimates or budget</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Accept donations, gifts and other forms of financial support from alumni, philanthropists and industries</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Create posts of university teachers and non-vacation academic staff</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Confer autonomous status on university departments and affiliated colleges</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Consider and adopt the annual report, annual accounts and audit reports</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Develop and adopt students' charter</span>
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
          <p className="text-gray-700">
            For detailed information about Management Council, please visit: <a href="https://www.unipune.ac.in/university_files/pdf/MC%20List%201_06092023.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Management Council List</a>
          </p>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default ManagementCouncilPage;
