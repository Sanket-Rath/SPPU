import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const ExaminationPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Examination Section</h1>

        <section className="mb-8">
          <p className="text-gray-700 mb-4">Dr. Prabhakar Desai</p>
          <p className="text-gray-700 mb-4">Officiating Director, Board of Examinations and Evaluation</p>
          <p className="text-gray-700 mb-4">Phone :25601201/02</p>
          <p className="text-gray-700 mb-4">Email: <a href="mailto:coe@unipune.ac.in" className="text-blue-600 hover:underline">coe@unipune.ac.in</a></p>

          <h2 className="text-2xl font-bold mb-4">CoE SPPU</h2>
          <p className="text-gray-700 mb-4">We, at Examination Section, Savitribai Phule Pune University, envisage the need for radical reforms in traditional examination and assessment system and are working towards evolving a credible, valid, effective and transparent evaluation system that responds confidently to the challenges and newer demands of a knowledge society.</p>
          <p className="text-gray-700 mb-4">We have set ourselves for adopting technology to facilitate easy interface for exchange of information.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Devise and monitor strategies and implementation of useful examination practices at colleges/institutes.</li>
            <li>Online mode of examination form filling that will help generate student summary &amp; Hall Tickets to optimize time and eliminate errors.</li>
            <li>Provide guidelines for creating and including questions in the banks which then can act as the sole source for question paper generation.</li>
            <li>Create question banks for various subjects and courses to facilitate random selection of question papers.</li>
            <li>Inform and train teaching and non-teaching faculty members about the conduct and organization of examination and examination material.</li>
            <li>Strengthen Student Facilitation Centre for prompt response and delivery of student queries.</li>
            <li>Coordinate with all other higher and regulatory agencies to ensure credibility and stability to examination system.</li>
            <li>Respect autonomy, promote excellence and inclusiveness where they exist and are due.</li>
          </ul>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default ExaminationPage;
