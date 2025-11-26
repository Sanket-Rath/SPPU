import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AboutPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About University</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Pune</h2>
          <p className="mb-4 text-gray-700">
            UniversityPune is the main educational center of Maharashtra. Numerous students from every corner of India and the world come to Pune. It is quite safe and peaceful city as compared to other educational centers in India. The climate of Pune is pleasant and good for health. The city of Pune houses many well-known, established institutes and colleges. Savitribai Phule Pune University is one of the finest and most popular educational centers in the city. It offers excellent programs in various areas including Science, Commerce, Arts, Languages and Management Studies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Savitribai Phule Pune University</h2>
          <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
            <img src="/university-building.png" alt="Savitribai Phule Pune University Building" className="w-full h-auto object-cover" />
          </div>
          <p className="mb-4 text-gray-700">
            Savitribai Phule Pune University, one of the premier universities in India, is positioned in the North-western part of Pune city. It occupies an area of about 411 acres. It was established on 10th February, 1949 under the Poona University Act. The university houses 46 academic departments. It is popularly known as the 'Oxford of the East'. It has about 307 recognized research institutes and 612 affiliated colleges offering graduate and under-graduate courses.
          </p>
          <p className="mb-4 text-gray-700">
            The university attracts many foreign students due to its excellent facilities. It offers good accommodation facility. There is a provision of hostel for the students. There is a well-stocked library containing plenty of books regarding various subjects. The university offers different scholarships to the students. The university conducts seminars and conferences for the students.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">University at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold w-1/3">Date of Establishment</td>
                  <td className="border border-gray-300 p-3">10th February, 1949</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Location</td>
                  <td className="border border-gray-300 p-3">Ganeshkhind Road, Pune, Maharashtra, India</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">Website Address</td>
                  <td className="border border-gray-300 p-3"><a href="http://www.unipune.ac.in" className="text-blue-600 hover:underline">http://www.unipune.ac.in</a></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Total Area of Campus</td>
                  <td className="border border-gray-300 p-3">411 Acres</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">First Vice-Chancellor</td>
                  <td className="border border-gray-300 p-3">Dr. M. R. Jayakar</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Chancellor</td>
                  <td className="border border-gray-300 p-3">Shri C. P. Radhakrishnan</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">Vice-Chancellor</td>
                  <td className="border border-gray-300 p-3">Prof. (Dr.) Suresh Gosavi</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Officiating Registrar</td>
                  <td className="border border-gray-300 p-3">Dr. Prof. (Dr.) Jyoti Bhakare</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">Number of Academic Departments</td>
                  <td className="border border-gray-300 p-3">46</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Jurisdiction</td>
                  <td className="border border-gray-300 p-3">AhilyaNagar, Nasik, Pune</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">Number of Colleges Affiliated</td>
                  <td className="border border-gray-300 p-3">705</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Recognized Institutes</td>
                  <td className="border border-gray-300 p-3">234</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">Research Institutes</td>
                  <td className="border border-gray-300 p-3">71</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Teachers in University Departments</td>
                  <td className="border border-gray-300 p-3">293</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 p-3 font-semibold">Faculties</td>
                  <td className="border border-gray-300 p-3">04</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Books & Journals in Jayakar Library</td>
                  <td className="border border-gray-300 p-3">4,22,000 approx. (Includes books, periodicals and other material)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">University Video</h2>
          <div className="aspect-video w-full max-w-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TGxFGklnroA"
              title="Savitribai Phule Pune University"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
