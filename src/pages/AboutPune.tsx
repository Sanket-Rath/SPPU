import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AboutPunePage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">About Pune</h2>
        <img
          src="/pune.jpg"
          alt="Pune city montage"
          className="w-full rounded mb-6"
          onError={(event) => {
            if (event.currentTarget.src.includes("pune.jpg")) {
              event.currentTarget.src = "/pune.png";
            }
          }}
        />
        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-3">Latitude of Pune</h3>
          <ul className="space-y-2">
            <li>Area of Pune City: 450.69 square kilometers</li>
            <li>Green Cover: 40 per cent of area</li>
            <li>Population: 4 million</li>
            <li>Language: Marathi/ Hindi/ English</li>
            <li>Local Transport: Black-and-yellow auto-rickshaws, buses, and private taxis</li>
          </ul>
        </section>
        <section className="space-y-4">
          <p>
            The earliest evidence found is that of copper plates belonging to 758 A.D. and of 768 A.D. The city's historical
            associations are fast woven with Shivaji Maharaj, the Peshwas and Lokmanya Tilak. When Bajirao-I became the
            Peshwa, he made Pune the headquarters of the army and the Shaniwar Wada was built. In 1818 the Peshwas were
            dethroned and the British established a permanent Army Cantonment. Since then it has moved gracefully from the past
            into the present.
          </p>
          <p>
            Peace and Prosperity are two words synonymous with Pune city, which is internationally acclaimed for its educational
            traditions and communal harmony. Students come here not only from all over India but from all over the world.
            Apart from students, a large number of foreigners are drawn to the BKS Iyengar Yoga Institute, and the Osho Center.
            Pune is, in fact, a potpourri of the old and the new. What makes it tick is a harmonious blend between the two.
            This growing metropolis brings to the mind a myriad of images - ancient forts, ornate palaces, shopping arcades,
            educational institutions, temples, mosques, and churches and rolling hills. The Ganapati festival celebrated yearly,
            called the Pune Festival, has made its mark on the tourist map of India.
          </p>
          <p>
            The socio-economic profile of Pune is also being transformed with its fast-growing urban area and growth in industry
            and technology. It has also become the nerve center for IT-BT, automobiles and real estate among other things. The
            city is a cultural centre for theatre, music, dance and film; and represents a synthesis of modern science and ancient
            wisdom, a dynamic hub of educational, technological and industrial activities. No wonder then that it is the Cultural
            and intellectual capital of Maharashtra. Pune is also home to well known giants of the Indian software industry like
            Wipro, Infosys, Satyam, Tata Technologies, TCS, Kanbay, Veritas, Cognizant, PCS and Mahindra British Telecom. The city
            boasts of the National Defense Academy, Institute of Military Engineering, the Film and Television Institute, Armed
            Forces Medical College, and College of Archaeological studies.
          </p>
          <p>
            Pune is definitely marching toward achieving international stature and repute, and developing into a globally
            recognized, vibrant and dynamic education and industry based economy.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-3">Where to stay</h3>
          <p>Pune has several hotels to suit varying budgets from luxurious 5-star accommodation and moderate hotels to humble lodgings motels.</p>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default AboutPunePage;
