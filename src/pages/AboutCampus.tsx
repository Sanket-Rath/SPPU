import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AboutCampusPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h2 className="text-3xl font-bold">About Campus</h2>
        <section className="flex flex-col md:flex-row gap-6 items-start">
          <div className="space-y-4 flex-1">
            <p>
              Spread over a vast area of 411 acres, the University has an exceptionally beautiful and picturesque campus. The lush
              green lawns adorned with beautiful fountains of the British times and the majestic building of the University are a
              constant source of attraction to the aesthetically oriented people of Pune, filmmakers, musicians and celebrities. The
              University campus is covered with a large number of age-old trees, which provide shade and beauty, and the peaceful
              surrounding make for a very invigorating environment for serious studies and research.
            </p>
          </div>
          <img
            src="/university.jpg"
            alt="Savitribai Phule Pune University campus"
            className="w-full md:w-1/3 rounded object-cover"
            onError={(event) => {
              if (event.currentTarget.src.includes("university.jpg")) {
                event.currentTarget.src = "/university.png";
              }
            }}
          />
        </section>
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">The Main Building</h3>
          <p>
            Savitribai Phule Pune University is symbolically identified with the Main Building, it is a monumental building with a
            beautiful architecture, and its tower project high in to the sky bearing the flag of the University. The office of the
            Vice-Chancellor, Dean's Chambers and Records Section are located in the Main Building. Meeting of various academic bodies
            are conducted in the four prestigious halls of the Main Building Viz., Yashwantrao Chavan Sabhagriha, Sant Dnyaneshwar
            Sabhagriha, Shivaji Sabhagriha and the Sant Gadge Maharaj Sabhagriha.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Thus Goes the Legend</h3>
          <p>
            The lofty Main Building of the Savitribai Phule Pune University was once the residence of the governors of Bombay in the
            days of the British Raj. It was built in 1864 when Sir Bartle Frere was the Governor. Designed by James Trubshaw, the
            magnificent edifice was built in Ganeshkhind, on the outskirts of what was then called Poona. Architecturally, it defies
            classification though its spiritual antecedents are Italian and the 80 feet flag tower has been described as an 'Victorian
            rendering of an Italian campanile'. The building was inspired by Prince Albert's Osborne House on the Isle of Wight.
          </p>
          <p>
            The cost of residence was Sterling Pound 175'000 to build, nearly six times the amount raised by the sale of the
            Governor's previous residence. The building of such a palatial house at the aftermath of the cotton crash in Bombay was
            severely criticized and referred by the British Parliament as 'a typical instance of the extravagance and insubordination
            of the Governors of Bombay'. Sir Frere defended his action staunchly, the house was not habitable by the time he left India
            in 1867. His successor, Sir Seymour FitzGerald carried out the furnishing and decoration, and he in turn was criticized for
            being extravagant, especially for the sterling pound 500 chandelier in the ballroom-which still sparkles, adding to the
            grandeur of the Ballroom!
          </p>
          <p>Currently Work is on to restore it to its original glory.</p>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default AboutCampusPage;
