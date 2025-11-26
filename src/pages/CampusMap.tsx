import { useEffect, useState } from "react";
import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

type UserLocation = {
  lat: number;
  lng: number;
};

const CampusMapPage = () => {
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [status, setStatus] = useState<"idle" | "locating" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setStatus("error");
      setErrorMessage("Location is not supported in this browser.");
      return;
    }

    setStatus("locating");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setStatus("success");
      },
      (error) => {
        setStatus("error");
        setErrorMessage(
          error.message ||
            "We couldn't access your location. Please check your browser permissions.",
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      },
    );
  }, []);

  const mapUrl = location
    ? `https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${location.lat},${location.lng}&zoom=16`
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ImprovedHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6">
          <section>
            <h2 className="text-3xl font-bold mb-4">Campus Map</h2>
            <p className="mb-4">
              Find your way around SPPU with our detailed campus map. Locate
              academic buildings, hostels, sports complexes, and more.
            </p>
            <ul>
              <li>Interactive campus map available</li>
              <li>Guides for new students and visitors</li>
            </ul>
          </section>

          
          <section className="bg-card rounded-lg border shadow-sm p-4 space-y-3">
            <div>
              <h3 className="text-xl font-semibold mb-1">SPPU Campus Plan</h3>
              <p className="text-sm text-muted-foreground">
                Reference map of the Savitribai Phule Pune University campus
                with key buildings and facilities.
              </p>
            </div>
            <div className="w-full overflow-hidden rounded-md border bg-muted">
              <img
                src="/public/sppu-map.jpg"
                alt="Pune University campus plan with numbered buildings and legend"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Original base map courtesy: Kiran Kalamdani
            </p>
          </section>

          <p style={{ fontSize: '36px' }}>Plan your visit and explore the campus with ease.</p>

        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CampusMapPage;
