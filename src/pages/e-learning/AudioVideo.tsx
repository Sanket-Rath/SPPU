import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AudioVideoPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Audio / Video Programs</h1>
        <p className="mb-4">Collection of recorded lecture series, webinars, workshops, and educational audio/video programs curated by SPPU.</p>
        <ul className="list-disc pl-6">
          <li>Recorded lecture series</li>
          <li>Webinars & workshops</li>
          <li>Educational podcasts and videos</li>
        </ul>
      </main>
    </div>
    <Footer />
  </div>
);

export default AudioVideoPage;
