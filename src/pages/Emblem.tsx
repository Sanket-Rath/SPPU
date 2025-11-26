import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const EmblemPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">University Emblem</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-6">
            At the center of the lotus shaped Emblem of Savitribai Phule Pune University is Shaniwar Wada the palace of Peshwa rulers of the Maratha Empire founded By Chhatrapati Shivaji Maharaj.
          </p>

          <div className="mb-8 flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <img src="/sppu-logo.png" alt="SPPU Emblem Logo" className="w-full h-full object-contain bg-white p-4" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Elements of the Emblem</h2>
          
          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-lg mb-2">Encircled Elements</h3>
              <p className="text-gray-700">
                At each bottom corner of the emblem are:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li><span className="font-semibold">The Raigad Fort:</span> Capital of the Maratha Empire</li>
                <li><span className="font-semibold">The Parvati Hill Temple:</span> The spiritual and historic landmark of Pune</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-lg mb-2">Decorative Elements</h3>
              <p className="text-gray-700">
                Between these circles are two crossed-swords, elephants heads and pens.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-lg mb-2">Horses and Book</h3>
              <p className="text-gray-700">
                On both sides of the Shaniwar Wada, two horses stand upright holding an open book which has the words 'Savitribai Phule Pune University' inscribed on it along with the year of its establishment, 1949 A.D.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-lg mb-2">Sacred Symbols</h3>
              <p className="text-gray-700">
                Two iconic symbols representing the sacred Hindu swastik can also be seen in the corner.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Motto</h2>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <p className="italic text-lg text-gray-700 mb-4">
              "Where Actions Prove Knowledge"
            </p>
            <p className="text-gray-700">
              The motto of the University stresses on 'Kriyavaan' (one who is engrossed in creative action) and maintains that the one who contributes to the well being of the society is the real Pundit (Savant).
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">History and Adoption</h2>
          <p className="text-gray-700 mb-4">
            This emblem is originally designed by Madhav Parshuram Dixit a student of the University and was revised in 2015 in the light of the extension of the name of the university.
          </p>
          <p className="text-gray-700">
            It was formally adopted by the University in May 1950 and revised in 2015.
          </p>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default EmblemPage;
