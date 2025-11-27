import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Avishkar = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ImprovedHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <h2 className="text-3xl font-bold mb-4">Avishkar</h2>

          <section className="prose max-w-none">
            <h3>Aims and Objectives</h3>
            <ul>
              <li>To inculcate research culture among students.</li>
              <li>To encourage original and novel thinking.</li>
              <li>To provide an opportunity for expression of academic talent.</li>
              <li>To promote interaction among academia, R &amp; D Institutes and Industries.</li>
            </ul>

            <p>
              His Excellency, Governor of Maharashtra, Shri. S.M. Krishna has initiated a novel research project competition named Avishkar in the year 2006. This activity, unique in its nature, is being implemented through Board of College and University Development. Savitribai Phule Pune University has taken special efforts to increase the participation of the talented students from rural and urban areas.
            </p>

            <h4>Guidelines to the Participants</h4>
            <p>Projects can be in the form of live demonstration /models / posters and should be based on innovative ideas, in any given categories.</p>
            <p>Each college/institution can send a maximum of two entries in each category, irrespective of their levels (UG/PG / M.Phil-Ph.D.)</p>

            <h4>Important Instructions</h4>
            <p>
              The entries must be forwarded through Principal/ Head of the Institution. Maximum two entries in each of the following categories from college Categories. Last date of registration FIVE days before the competition.
            </p>

            <h4>Categories for Participation</h4>
            <ul>
              <li>Humanities, Languages, Fine Arts, etc.</li>
              <li>Commerce, Management, Law etc.</li>
              <li>Pure Sciences</li>
              <li>Agriculture and Animal Husbandry</li>
              <li>Engineering &amp; Technology</li>
              <li>Medicine and Pharmacy</li>
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Avishkar;
