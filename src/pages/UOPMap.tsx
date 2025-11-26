import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const UOPMapPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h2 className="text-3xl font-bold mb-4">UoP Google Map</h2>
        <p className="mb-4">View the location of Savitribai Phule Pune University on Google Maps. Plan your visit and explore the campus virtually.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Interactive map for navigation</li>
          <li>Landmarks and important buildings</li>
        </ul>
        
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

        <p>Access the map online for easy navigation.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default UOPMapPage;
