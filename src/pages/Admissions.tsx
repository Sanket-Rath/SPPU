import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AdmissionsPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Admissions</h2>
          <p className="text-muted-foreground">
            Explore admission information for postgraduate, doctoral, online and
            distance learning programmes offered by Savitribai Phule Pune
            University.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-lg border shadow-sm p-4">
              <h3 className="text-lg font-semibold">
                PG Admissions 2025-26
              </h3>
            </div>
            <div className="bg-card rounded-lg border shadow-sm p-4">
              <h3 className="text-lg font-semibold">Ph. D. Admissions</h3>
            </div>
            <div className="bg-card rounded-lg border shadow-sm p-4">
              <h3 className="text-lg font-semibold">
                Admissions (Online Mode) A.Y. 2025-26
              </h3>
            </div>
            <div className="bg-card rounded-lg border shadow-sm p-4">
              <h3 className="text-lg font-semibold">
                Admissions (Distance Learning) A.Y. 2025-26
              </h3>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3">Important Information</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              M.Sc. in Media &amp; Communication Studies Online Entrance
              Exam-2022 Syllabus and Instructions.
            </li>
            <li>Information on the new B.A. Liberal Arts Course.</li>
            <li>Information on the new B.Sc. Blended Course.</li>
            <li>
              M.A. ( Politics) admissions 2016-17, Dept. of Politics &amp;
              Public Administration
            </li>
            <li>
              Integrated M. Tech. - Ph.D. Program in Technology (EETP) - Result
            </li>
            <li>
              Rules for the Degree of Master of Philosophy (M.Phil.)
            </li>
            <li>Application form for M.Phil. Admission</li>
            <li>Lists of Approved Teachers/ Recognized Ph.D Guides</li>
            <li>Revised Rules for Ph.D. (As per UGC Guidelines)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold">
            Post Graduate Admissions
          </h3>
          <p>
            Savitribai Phule Pune University offers under graduate and post
            graduate degrees in more than 52 departments and institutes housed
            on and off campus. Please refer to the admissions section and
            contact each department individually for their specific
            requirements.
          </p>
          <p>
            Each Department has its own set of eligibility requirements
            depending on the specialization of the program/course offered. The
            eligibility requirements are also available at the Registrar&apos;s
            office or online at the University website, for information
            regarding conditions of eligibility for various programs and
            courses, please refer to the Savitribai Phule Pune University
            booklet (Circular No. 283, 2006-07)
          </p>
          <p>
            For queries, please contact PG Admissions Section, BOD, University
            of Pune.
          </p>
          <p>Phone: 020-25601260</p>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold">
            Undergraduate Admissions
          </h3>
          <p>
            Savitribai Phule Pune University Undergraduate courses and programs
            are offered by various affiliated colleges and recognized institutes
            in the three districts of Pune, Ahmednagar and Nashik. Students can
            avail information about the courses offered, fees, eligibility
            criteria, accommodation facilities and other things by contacting
            the individual Colleges and Institutes. Foreign students, please
            refer to the International Students Center section for information
            on admission and eligibility procedure.
          </p>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default AdmissionsPage;


