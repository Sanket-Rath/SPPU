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
      </main>
    </div>
    <Footer />
  </div>
);

export default HowToReachPage;
