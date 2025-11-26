import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const HistoryPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">History</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Savitribai Phule Pune University</h2>
          <h3 className="text-xl font-semibold mb-4">UOP History</h3>
          <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
            <img src="/university-historic-building.png" alt="Savitribai Phule Pune University Historic Building" className="w-full h-auto object-cover" />
          </div>
        </section>

        <section className="mb-8 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <blockquote className="italic text-lg text-gray-700">
            <p className="mb-2">
              "The University stands for humanism and tolerance, for reason, for adventure of ideas and for the search of truth. It stands for the forward march of the human race towards even higher objectives. If the universities discharge their duties adequately then it is well with the nation and the people."
            </p>
            <footer className="text-right font-semibold">- Pt. Jawaharlal Nehru<br />First Prime Minister of India</footer>
          </blockquote>
        </section>

        <section className="mb-8">
          <p className="mb-4 text-gray-700">
            These words of Jawaharlal Nehru embody in them the guiding principle of Savitribai Phule Pune University. Established in 1949, the University has since become one of the leading centers for research and teaching in the country. The 411 acre campus is located in the North Western part of Pune. The placid environs and state of the art facilities provide its numerous students with an ideal atmosphere to pursue research in various areas of Science, Arts, Commerce and Languages. The University houses 40 departments which provide a wide array of academic programs. Though a young centre, the University has made a significant impact in various areas of research and teaching, and continues to strive for excellence.
          </p>
          <p className="mb-4 text-gray-700">
            The Savitribai Phule Pune University (formerly known as University of Poona) was established on 10th February 1949 under the Poona University Act, passed by the Bombay Legislature in 1948. In the same year, Dr. M. R. Jayakar assumed office as the first vice chancellor of the University.
          </p>
          <p className="mb-4 text-gray-700">
            Shri B.G.Kher, Chief Minister and Education Minister, Govt. of Bombay, took a keen interest in setting apart a beautiful campus for the University. As a result of his efforts, a campus extending over 411 acres was allocated to the University in early 1949, on lease of 999 years without any premium and payment of nominal lease rent of ₹ One per annum. Payment of certain taxes such as N.A. Tax etc have also been waived.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Expansion and Growth</h3>
          <p className="mb-4 text-gray-700">
            Initially the University had a jurisdiction extending over 12 districts of Western Maharashtra. However, with the establishment of the Shivaji University, Kolhapur, in 1964, the jurisdiction of the University was restricted to 5 districts, namely Pune, Ahmednagar, Nasik, Dhule and Jalgaon. Out of these, two districts - Dhule and Jalgaon are attached to the North Maharashtra University established in August 1990.
          </p>
          <p className="mb-4 text-gray-700">
            During the year 1949, there were only 18 colleges affiliated to the University, with an enrollment of over 8000 students. Thereafter, the number of colleges increased, and in 1994-95, the University had 41 post-graduate departments, 209 affiliated colleges and 118 recognized research institutions, with an enrollment of 1,70,000 students for both the under-graduate and post-graduate courses in different faculties.
          </p>
          <p className="mb-4 text-gray-700">
            70 research institutions have been recognized by the University for research. These include institutions of national importance like the National Chemical Laboratory (NCL), MACS, CWPRS, NIV, Gokhale Institute of Politics and Economics, Deccan College among others.
          </p>
          <p className="text-gray-700">
            Since its inception, the progress of the Savitribai Phule Pune University has been inextricably linked with the efforts of an illustrious list of Vice Chancellors.
          </p>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default HistoryPage;
