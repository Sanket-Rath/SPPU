import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AdmissionsPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h2 className="text-3xl font-bold mb-4">Admissions</h2>

        {/* Four boxes in 2x2 grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground mb-2">PG Admissions 2025-26</h3>
            <p className="text-sm text-muted-foreground">Postgraduate admission information for the academic year 2025-26</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground mb-2">Ph. D. Admissions</h3>
            <p className="text-sm text-muted-foreground">Doctoral program admission details and requirements</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground mb-2">Admissions (Online Mode) A.Y. 2025-26</h3>
            <p className="text-sm text-muted-foreground">Online mode admission information for academic year 2025-26</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground mb-2">Admissions (Distance Learning) A.Y. 2025-26</h3>
            <p className="text-sm text-muted-foreground">Distance learning admission details for academic year 2025-26</p>
          </div>
        </section>

        {/* Bullet points section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Important Information</h3>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>M.Sc. in Media & Communication Studies Online Entrance Exam-2022 Syllabus and Instructions.</li>
            <li>Information on the new B.A. Liberal Arts Course.</li>
            <li>Information on the new B.Sc. Blended Course.</li>
            <li>M.A. ( Politics) admissions 2016-17,Dept.of Politics & Public Administration</li>
            <li>Integrated M. Tech. - Ph.D. Program in Technology (EETP) - Result</li>
            <li>Rules for the Degree of Master of Philosophy (M.Phil.)</li>
            <li>Application form for M.Phil. Admission</li>
            <li>Lists of Approved Teachers/ Recognized Ph.D Guides</li>
            <li>Revised Rules for Ph.D. (As per UGC Guidelines)</li>
          </ul>
        </section>

        {/* Post Graduate Admission Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Post Graduate Admission</h3>
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <p className="text-foreground">
              Savitribai Phule Pune University offers under graduate and post graduate degrees in more than 52 departments and institutes housed on and off campus. Please refer to the admissions section and contact each department individually for their specific requirements.
            </p>
            <p className="text-foreground">
              Each Department has its own set of eligibility requirements depending on the specialization of the program/course offered. The eligibility requirements are also available at the Registrar's office or online at the University website, for information regarding conditions of eligibility for various programs and courses, please refer to the Savitribai Phule Pune University booklet (Circular No. 283, 2006-07)
            </p>
            <div className="mt-4 p-4 bg-accent rounded-lg">
              <p className="font-semibold text-foreground mb-2">For queries, please contact PG Admissions Section, BOD, University of Pune.</p>
              <p className="text-foreground">
                <span className="font-semibold">Phone:</span> 020-25601260
              </p>
            </div>
          </div>
        </section>

        {/* Undergraduate Admission Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Undergraduate Admission</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-foreground">
              Savitribai Phule Pune University Undergraduate courses and programs are offered by various affiliated colleges and recognized institutes in the three districts of Pune, Ahmednagar and Nashik. Students can avail information about the courses offered, fees, eligibility criteria, accommodation facilities and other things by contacting the individual Colleges and Institutes. Foreign students, please refer to the International Students Center section for information on admission and eligibility procedure.
            </p>
          </div>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default AdmissionsPage;

