import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.62560649813!2d73.82208957519332!3d18.55461968254178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0a8a9d9a9f%3A0x1e9c0d9f6d4d9b0!2sSavitribai%20Phule%20Pune%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/place/Savitribai+Phule+Pune+University/@18.5546197,73.8220896,17z/data=!4m6!3m5!1s0x3bc2bf0eed1beca7:0xf07ab6b613c2af51!8m2!3d18.5529684!4d73.8265425!16zL20vMDNreWdo?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D";

const UOPMapPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <section>
          <h2 className="text-3xl font-bold mb-4">UoP Google Map</h2>
          <p className="mb-4">
            View the location of Savitribai Phule Pune University on Google
            Maps. Plan your visit and explore the campus virtually.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Interactive map for navigation</li>
            <li>Landmarks and important buildings</li>
          </ul>
          <p>Access the map online for easy navigation.</p>
        </section>

        <section className="bg-card rounded-lg border shadow-sm p-4 space-y-3">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Savitribai Phule Pune University on Google Maps
            </h3>
            <p className="text-sm text-muted-foreground">
              Use Google Maps to explore the university surroundings and plan
              your route. Click the map preview below to open it in a new tab.
            </p>
          </div>

          <div className="relative w-full max-w-xl aspect-video overflow-hidden rounded-md border bg-muted">
            <iframe
              title="Savitribai Phule Pune University location on Google Maps"
              src={GOOGLE_MAPS_EMBED_SRC}
              loading="lazy"
              className="w-full h-full border-0 pointer-events-none"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Savitribai Phule Pune University location in Google Maps"
              className="absolute inset-0"
            >
              {/* Transparent overlay to make the whole map preview clickable */}
            </a>
          </div>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default UOPMapPage;
