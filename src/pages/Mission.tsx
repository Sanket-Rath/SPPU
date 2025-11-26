import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const MissionPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Mission</h1>

        <section className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
          <blockquote className="italic text-lg text-gray-700">
            <p>
              "The Mission of Savitribai Phule Pune University is to be a global, socially conscious Center of Excellence in the conservation, creation, Advancement and dissemination of knowledge, equipped to take up challenges of the enormous change taking place all around and committed to empower its faculty and students to contribute meaningfully to economic, technological and social development and progress."
            </p>
          </blockquote>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">In Accordance With This Mission</h2>
          <p className="mb-4 text-gray-700">
            Savitribai Phule Pune University aims at:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Becoming a vibrant Knowledge Center and a Center of Excellence in teaching, research and extension activities;</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Bringing about conservation, creation, advancement and dissemination of knowledge;</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Creating technologically equipped thought and action leaders in a wide range of spheres by providing value based and high quality education, generating cutting-edge research and innovations, and enabling empowerment through social and regional inclusion;</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Increasing global linkages by attracting international students and establishing collaborative Programmes with educational institutions of repute.</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default MissionPage;
