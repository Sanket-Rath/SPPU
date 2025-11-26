import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const VCDeskPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">From VC's Desk</h1>

        <section className="mb-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-48 rounded-lg overflow-hidden shadow-lg">
                <img src="/vc-photo.png" alt="Prof. (Dr.) Suresh Gosavi, Vice-Chancellor" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Vice-Chancellor's Desk</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Prof. (Dr.) Suresh Gosavi</h3>
                <p className="font-semibold text-gray-700">Vice-Chancellor</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="border-l-4 border-blue-600 pl-6">
            <p className="mb-4 text-gray-700">
              The Savitribai Phule Pune University has been diligently pursuing the mission of the University – Conservation, Creation, Advancement and Dissemination of knowledge through its 18 schools consisting of 58 departments and centres. Referred to as the 'Oxford of the East' the University has been imparting quality education in an inclusive manner in assisting in the growth and development of students belonging to the various strata of the society at a reasonable cost.
            </p>
            <p className="mb-4 text-gray-700">
              The University already has always been the leader in the field of education whilst implementing advanced technology or innovative ideas. The National Education Policy has provided the University with another conduit to excel.
            </p>
            <p className="mb-4 text-gray-700">
              The University has devoted resources to promote research and development culture and encourage innovation, new pedagogy of teaching and learning so as to create globally competent manpower. The presence of eminent alumni, all over the globe – as scholars of their disciplines in academics, creative arts, sports; as leaders of Corporates; as policy makers in State and Central Governments; as a conscientious Human being, stands testimony to the fact that the system has been working relentlessly and thrived beautifully.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Key Initiatives</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Enhance the use of Technology and Digital learning to reach out to and include new learners</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Strengthen the collaboration and utilize the opportunities created by MoU's for contextually-relevant teaching and research relationship that will focus on economic, societal, environmental challenges locally and globally</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Nurture the multi- and inter- disciplinary approach in education to augment the holistic learning environment that enriches the students, without compromising on quality and excellence</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <p className="mb-4 text-gray-700">
            All this persistent effort has resulted in the University receiving accolades nationally and internationally – the presence of University's name in the NIRF Overall Top 20 list of Higher Educational Institutes in India; – In the bracket of 541-550 in the QS Ranking of 2023. There is still room on the top and this University shall strive hard continuously to do better than its best and achieve greater heights in future.
          </p>
          <p className="text-gray-700">
            This University shall assiduously play its fundamental role in sculpting the future of youth of this nation.
          </p>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default VCDeskPage;
