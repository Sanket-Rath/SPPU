import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AcademicCouncilPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Academic Council</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            The Academic Council is the Principal Academic Authority of the University and is chaired by the Vice-Chancellor. It comprises typically around 101 members. The Academic Council is responsible for laying down, regulating, and maintaining the standards of teaching, research, extension and examinations in the University.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            The Academic Council shall be responsible for laying down the academic policies in regard to maintenance and improvement of standards of teaching, research, extension collaboration programmes in academic matters and evaluation of work-load of the teachers.
          </p>
          <p className="text-lg text-gray-700">
            The Academic Council shall meet not less than twice a year.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Composition of Academic Council</h2>
          <p className="text-gray-700 mb-4">The Academic Council shall consist of the following members:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Vice-Chancellor, Chairman</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Pro-Vice-Chancellor, if any</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Deans of Faculties</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Chairman of the Board of Studies</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Director of the Board of College and University Development</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Eight principals of conducted, autonomous or affiliated colleges to be elected by the principals from amongst themselves</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">One professor from amongst the professors in the university departments or institutions, nominated by the Vice-Chancellor</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">One teacher representing each faculty to be co-opted by the Academic Council</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">One head of a recognized institution, nominated by the Vice-Chancellor</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">One head or director of an academic services unit of the university, nominated by the Vice-Chancellor</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Two eminent experts in the field of higher education, nominated by the Chancellor</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Director of Higher Education, Maharashtra State or his nominee</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Director of Technical Education, Maharashtra State or his nominee</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">The Chairman of the Maharashtra State Board of Secondary and Higher Secondary Education or his nominee</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Two representatives of the managements, elected by the electoral college</span>
            </li>
          </ul>
          <p className="text-gray-700">
            The Controller of Examinations shall be a permanent invitee and shall have right to speak on matters pertaining to examinations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Powers and Duties</h2>
          <p className="text-gray-700 mb-4">The Academic Council is the principal academic authority of the university and shall exercise the following powers:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Recommend institution of degrees, diplomas, certificates and academic distinctions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Make, amend or repeal Regulations on academic matters</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Make proposals for establishment of departments, institutions and research centers</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Prescribe qualifications and norms for appointment of teachers and academic staff</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Grant affiliation to colleges and recognition to institutions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Recommend autonomous status on university institutions and affiliated colleges</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Appoint committees to review utility and practicability of existing courses</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Institute fellowships, scholarships, medals and prizes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">→</span>
              <span>Advise the university on all academic matters</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default AcademicCouncilPage;
