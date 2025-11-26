import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const DeansPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Board of Deans</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            The Board of Deans is an academic core unit of the University established as per the Maharashtra University Act 1994. We believe in imparting education that is at once academically, socially and morally oriented. Our teaching is for reaching and reaching for enriching.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We propose to conduct research contributing to empirical richness, interpretation, theorization and application. The purpose of our evaluation is not to prove, but to improve. Our social commitment is reflected through our extension activities. We are 'glocal', interdisciplinary and quality conscious in our approach.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Deans of Faculties</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600 flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-40 bg-gray-200 rounded flex items-center justify-center">
                  <img src="public\ParagKalkar_2023.jpg" alt="Dr. Parag Kalkar" className="w-full h-full object-cover rounded" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Dr. Parag Kalkar</h3>
                <p className="text-gray-700 font-semibold mb-2">Pro Vice Chancellor & Chairman, Board of Deans</p>
                <p className="text-gray-700">Office no – 020 25621201</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600 flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-40 bg-gray-200 rounded flex items-center justify-center">
                  <img src="public\Devidas_Golhar.jpg" alt="Prof. (Dr.) Devidas Golhar" className="w-full h-full object-cover rounded" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Prof. (Dr.) Devidas Golhar</h3>
                <p className="text-gray-700 font-semibold mb-2">Director, Innovation, Incubation & Linkages & Member Secretary, Board of Deans</p>
                <p className="text-gray-700">Office no – 020-25622484</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600 flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-40 bg-gray-200 rounded flex items-center justify-center">
                  <img src="public\Dr._Pramod_Patil.jpeg" alt="Dr. Pramod Patil" className="w-full h-full object-cover rounded" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Dr. Pramod Patil</h3>
                <p className="text-gray-700 font-semibold mb-2">Dean - Faculty of Science & Technology</p>
                <p className="text-gray-700 mb-1">Office no – 020 25621201</p>
                <p className="text-gray-700"><span className="font-semibold">E-Mail:</span> dean.st@unipune.ac.in</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600 flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-40 bg-gray-200 rounded flex items-center justify-center">
                  <img src="public\Tamabt_Sir.jpeg" alt="Dr. Sanjay Tambat" className="w-full h-full object-cover rounded" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Dr. Sanjay Tambat</h3>
                <p className="text-gray-700 font-semibold mb-2">Dean, Faculty of Inter-Disciplinary Studies</p>
                <p className="text-gray-700 mb-1">Office no – 020 25621200</p>
                <p className="text-gray-700"><span className="font-semibold">E-Mail:</span> dean.ids@unipune.ac.in</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600 flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-40 bg-gray-200 rounded flex items-center justify-center">
                  <img src="public\Dr. Vijay Khare.jpg" alt="Prof. (Dr.) Vijay Khare" className="w-full h-full object-cover rounded" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Prof. (Dr.) Vijay Khare</h3>
                <p className="text-gray-700 font-semibold mb-2">Dean, Faculty of Humanities</p>
                <p className="text-gray-700 mb-1">Mobile - +91 – 9423210314</p>
                <p className="text-gray-700 mb-1">Office no – 020 25621202</p>
                <p className="text-gray-700"><span className="font-semibold">E-Mail:</span> dean.hum@unipune.ac.in</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600 flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-40 bg-gray-200 rounded flex items-center justify-center">
                  <img src="public\Dr. S. Patil.jpg" alt="Prof. Supriya Patil" className="w-full h-full object-cover rounded" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Prof. Supriya Patil</h3>
                <p className="text-gray-700 font-semibold mb-2">Dean, Faculty of Commerce & Management</p>
                <p className="text-gray-700 mb-1">Office no – 020 25621203</p>
                <p className="text-gray-700"><span className="font-semibold">E-Mail:</span> dean.cm@unipune.ac.in</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-700 font-semibold mb-1">Dean Office</p>
              <p className="text-gray-700"><span className="font-semibold">E-Mail:</span> dean.office@unipune.ac.in</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Strategic Goals</h2>
          <p className="text-gray-700 mb-4">The Board of Deans has set up the following goals to be achieved in a focused manner:</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">To revise syllabi of all the courses</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">To make the courses internationally competitive, application oriented with Vocational Bias</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">To enable teachers at University and College level by creating opportunities to undertake research</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">To provide students opportunities to undertake research projects through Avishkar - Research Project Competition Scheme</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">To bring in transparency and efficiency in administrative aspects</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">To establish liaison with nationally and internationally reputed educational organizations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">To create learning atmosphere for Indian and Foreign students</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">To implement recommendations of National Knowledge Commission</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">To establish Triple Connectivity with the Colleges and Institutes and develop Web based courses</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">To promote Distance Education and e-learning</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">To undertake research in front line areas and establish University in first hundred institutes in the world</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default DeansPage;
