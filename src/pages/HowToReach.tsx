import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const HowToReachPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <section>
          <h2 className="text-3xl font-bold mb-4">How to Reach University?</h2>
          <p>
            Pune city is known as the cultural capital of Maharashtra State, and also the city of intellectuals. It is one of
            the fast growing metropolitan cities and is among the green urban areas in India with a population of about 4 million.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3">Reaching Pune</h3>
          <p>
            Pune can be reached from any major city by air, rail, or road. The nearest city by air is Mumbai, only half an hour
            away. Distance from Pune airport to the city is approximately 10 km (6 miles).
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3">From the Airport to SPPU</h3>
          <p>
            Prepaid taxis are available at the airport to reach Savitribai Phule Pune University. Regular taxis and rickshaws
            also operate from the airport, and bus services run by ex-army personnel provide another option.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3">Traveling within Pune</h3>
          <p>
            From Pune railway station you can take rickshaws or buses. Pune Municipal Transport buses cover the city, but
            first-time visitors will find auto rickshaws the most convenient option since they are metered.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3">General Information</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Office Hours</p>
              <p>
                Administrative offices operate from 10:25 a.m. to 6:00 p.m., with lunch from 1:45 p.m. to 2:15 p.m. Offices are
                closed on the 1st and 3rd Saturday along with other holidays.
              </p>
            </div>
            <div>
              <p className="font-semibold">Bank Hours</p>
              <p>
                The on-campus bank, located in the Administrative Building, is open from 11:00 a.m. to 3:00 p.m.
              </p>
            </div>
          </div>
        </section>

        {/* SPPU Location Map */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">SPPU Location</h3>
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg border border-border relative group cursor-pointer">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Savitribai+Phule+Pune+University&hl=en&z=15&output=embed"
            ></iframe>
            <a
              href="https://www.google.com/maps/place/Savitribai+Phule+Pune+University/@18.5529,73.8267,15z/data=!4m6!3m5!1s0x3bc2c6c0b8c0b8c1:0x8c0b8c0b8c0b8c0b8!8m2!3d18.5529!4d73.8267!16s%2Fm%2F0h3q5x5"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"
              aria-label="Open SPPU location in Google Maps"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.google.com/maps/place/Savitribai+Phule+Pune+University/@18.5529,73.8267,15z/data=!4m6!3m5!1s0x3bc2bf0eed1beca7:0xf07ab6b613c2af51!8m2!3d18.5529684!4d73.8265425!16zL20vMDNreWdo?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <span className="opacity-0 group-hover:opacity-100 bg-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm transition-opacity">
                Click to open in Google Maps
              </span>
            </a>
          </div>
          <p className="text-sm text-gray-600">Click on the map to open SPPU location in Google Maps</p>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default HowToReachPage;
