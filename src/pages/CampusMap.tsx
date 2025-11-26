import { useState, useEffect } from "react";
import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const CampusMapPage = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          setLocationError("Unable to retrieve your location. Please enable location services.");
          console.error("Geolocation error:", error);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser.");
    }
  }, []);

  const userMapUrl = userLocation
    ? `https://www.google.com/maps?q=${userLocation.lat},${userLocation.lng}&hl=en&z=15&output=embed`
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ImprovedHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6">
          <h2 className="text-3xl font-bold mb-4">Campus Map</h2>
          <p className="mb-4">Find your way around SPPU with our detailed campus map. Locate academic buildings, hostels, sports complexes, and more.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Interactive campus map available online</li>
            <li>Guides for new students and visitors</li>
          </ul>
          
          {/* User Current Location Map */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">Your Current Location</h3>
            {locationError ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800">
                <p>{locationError}</p>
              </div>
            ) : userMapUrl ? (
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={userMapUrl}
                ></iframe>
              </div>
            ) : (
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-border bg-gray-100 flex items-center justify-center">
                <p className="text-gray-600">Loading your location...</p>
              </div>
            )}
          </section>

          {/* Campus Map Image Section */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">Campus Map</h3>
            <div className="w-full rounded-lg overflow-hidden shadow-lg border border-border">
              <img
                src="/sppu-map.jpg"
                alt="SPPU Campus Map"
                className="w-full h-auto object-cover"
                onError={(event) => {
                  if (event.currentTarget.src.includes("sppu-map.jpg")) {
                    event.currentTarget.src = "/sppu-map.png";
                  }
                }}
              />
            </div>
          </section>

          <p>Plan your visit and explore the campus with ease.</p>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CampusMapPage;
