import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const StudentSupportPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 space-y-8">
        <h2 className="text-3xl font-bold">Student Support Facilities</h2>

        <section className="flex flex-col md:flex-row gap-6 items-start">
          <div className="space-y-4 flex-1">
            <h3 className="text-2xl font-semibold">Health Center</h3>
            <p>
              Round the clock medical facilities are available on the Campus for the resident staff and students, providing routine
              medical facilities. E C G, eye checkups and dental treatments as well as special medical consultancy are available.
              Services of a Resident Doctor and an ambulance for emergency cases ensure quick assistance.
            </p>
            <p>
              Comprehensive information is provided on various diseases and health related issues like AIDS, cancer, smoking,
              alcoholism immunization and blood donation through mass release of pamphlets and posters. The University of Pune "Help
              Line" (telephone counseling), was put into operation in 1999, and has been providing guidance on issues related to STD /
              HIV / AIDS, and Sexuality. A Fitness and Health checkup Center was established in 2002 to promote a life style that would
              result in prevention of diseases and promotion of greater longevity. Yoga Education Center was established in the year
              2002 with a grant from the UGC.
            </p>
            <p className="text-primary underline">Click Here to View the Expert Medical Consultants Timetable</p>
            <p className="text-primary underline">Online Health Center</p>
          </div>
          <img
            src="/health_center.jpg"
            alt="SPPU health center"
            className="w-full md:w-1/3 rounded object-cover"
            onError={(event) => {
              if (event.currentTarget.src.includes("health_center.jpg")) {
                event.currentTarget.src = "/health_center.png";
              }
            }}
          />
        </section>

        <section className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src="/walking_track.jpg"
            alt="Campus walking track"
            className="w-full md:w-1/3 rounded object-cover"
            onError={(event) => {
              if (event.currentTarget.src.includes("walking_track.jpg")) {
                event.currentTarget.src = "/walking_track.png";
              }
            }}
          />
          <div className="space-y-4 flex-1">
            <h3 className="text-2xl font-semibold">Walking Track</h3>
            <p>
              As a part of the Golden Jubilee celebrations in 1999, a long closed loop walking-track was laid near the Main Gate of the
              University around the statue of Chhatrapati Shivaji Maharaj. At every dawn and dusk there are a large number of people
              jogging on this track.
            </p>
            <h4 className="text-xl font-semibold">Bus Service</h4>
            <p>There is a regular local bus service connecting the University to all the landmark places in Pune city.</p>
            <h4 className="text-xl font-semibold">Banking and Postal Services</h4>
            <p>
              The Extension Counter of Bank of Maharashtra is located in the Administrative Bhavan and provides financial services on
              the Campus. There is a full-fledged Post Office on the campus, which provides both traditional and modern mailing
              services. At various strategic points, telephones and reprographic facilities are available.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Employment Information and Guidance Bureau</h3>
          <p>
            Promotes employment schemes for assisting students in securing gainful employment. It also provides entrepreneurial
            guidance to the students to start their own business under the self-employment scheme. Further, comprehensive information
            is provided on employment opportunities, scholarships and fellowships both in India and abroad.
          </p>
        </section>

        <section className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src="/isc.jpg"
            alt="International Students' Center"
            className="w-full md:w-1/3 rounded object-cover"
            onError={(event) => {
              if (event.currentTarget.src.includes("isc.jpg")) {
                event.currentTarget.src = "/isc.png";
              }
            }}
          />
          <div className="space-y-4 flex-1">
            <h3 className="text-2xl font-semibold">International Students' Center (ISC)</h3>
            <p>
              The International Students' Center operates the International Transit House, and the International Students' Hostel. Work
              has begun to construct an International Research Center.
            </p>
            <p className="text-primary underline">Click here to know more &gt;&gt;</p>
            <h4 className="text-xl font-semibold">Other Facilities</h4>
            <p>
              Information and Technology Parks, Internet facility with wireless connectivity, public telephones (STD/ISD), photocopy and
              scanning, linear and non-linear video editing facilities are made available on the campus.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Students Facilitation Center</h3>
          <p>
            Located at the main entrance of the University, Students Facilitation Center aims at providing important services under one
            roof to the students of University of Pune. Presently, the services on offer include applying for and receiving various
            documents/certificates related to Examination section and BCUD section.
          </p>
          <p>The services are categorized under four broader areas:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Examination related</li>
            <li>BCUD related</li>
            <li>External related</li>
            <li>General services</li>
          </ul>
          <p>
            Applying for various documents/certificates is easier now. A student can apply online and auto-generate a challan to be
            paid in any branch of Bank of Maharashtra or HDFC Bank. Payments for certain applications can also be made by credit/debit
            cards. The completed and duly signed applications along with the payment proof and necessary documents can be submitted at
            Students Facilitation Center. The required documents can be collected from the center on the due date.
          </p>
        </section>

        <section className="flex flex-col md:flex-row gap-6 items-start">
          <div className="space-y-4 flex-1">
            <h3 className="text-2xl font-semibold">Printing Press</h3>
            <p>
              The University has its own Printing Press and takes care of the printing and publication requirements. The Press was
              established in 1950 with machinery and staff provided by the erstwhile Phaltan State. The Press has acquired new machines
              and technology from time to time and renovations are underway to make the University Press fully modernized.
            </p>
          </div>
          <img
            src="/press.jpg"
            alt="University printing press"
            className="w-full md:w-1/3 rounded object-cover"
            onError={(event) => {
              if (event.currentTarget.src.includes("press.jpg")) {
                event.currentTarget.src = "/press.png";
              }
            }}
          />
        </section>

        <section className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src="/karyashala.jpg"
            alt="Central workshop"
            className="w-full md:w-1/3 rounded object-cover"
            onError={(event) => {
              if (event.currentTarget.src.includes("karyashala.jpg")) {
                event.currentTarget.src = "/karyashala.png";
              }
            }}
          />
          <div className="space-y-4 flex-1">
            <h3 className="text-2xl font-semibold">Central Workshop</h3>
            <p>
              The University Central Workshop was established in 1962, and has the following sections: Mechanical Section, Glass Blowing
              Section, Air Conditioning and Refrigeration repair Section, Carpentry Section, and Photography facilities.
            </p>
          </div>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default StudentSupportPage;
