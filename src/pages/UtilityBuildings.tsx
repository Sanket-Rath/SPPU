import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const UtilityBuildingsPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h2 className="text-3xl font-bold">Utility Buildings</h2>
        <section className="space-y-4">
          <p>
            There are a number of buildings on the Campus such as the Administrative Building, Set Bhavan, buildings of various Post
            Graduate Departments, Students Welfare Department, Competitive Examination Center, Jayakar Library, Humanities Building,
            Printing Press, Boys, and Girls Hostels, a number of Canteens, a Health Center and a Refectory. (See the Map of the Campus.)
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src="/library.jpg"
            alt="Jayakar Library"
            className="w-full md:w-1/3 rounded object-cover"
            onError={(event) => {
              if (event.currentTarget.src.includes("library.jpg")) {
                event.currentTarget.src = "/library.png";
              }
            }}
          />
          <div className="space-y-4 flex-1">
            <h3 className="text-2xl font-semibold">Jayakar Library</h3>
            <p>
              Jayakar Library is one of the best centers of reference and information in the country. The library subscribes to Indian
              and foreign research journals, and also receives periodicals on gratis and exchange basis. It has more than 4,50,627
              books and Journals on varied subjects. Inter-library loan facility is extended to many colleges, institutions and
              government agencies. The Jayakar Library has preserved a wealth of ancient Indian texts in the form of manuscripts and
              books. It has computerized all library activities and using RFID Technology and has undertaken a project in digital
              library management.
            </p>
            <p>Important documents and minutes of administrative and governing bodies are scanned and available for access.</p>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Hostels, Guest House and Staff Quarters</h3>
          <p>
            The University has a chain of seven Boys' hostels and six Girls' hostels providing accommodation to more than 1221 students.
            It also has a University Guest House, which is comfortable and well-furnished, and has more than 34 rooms with dining
            facilities. The Set Bhavan Guest House has 16 single rooms and 16 double rooms with an attached kitchenette. Further, the
            University also has residential facility for about 115 teaching faculty and about 294 non-teaching staff on the Campus. All
            the facilities are being restored and renovated in a phased manner.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Cafeteria</h3>
          <p>
            The University Refectory is located amidst the Departments of Sociology, Chemistry, and Physics, and provides meals at
            reasonable prices in a very clean and hygienic environment. Apart from the Cafeteria, there are several Kiosk Canteens
            located all over the Campus providing snacks and beverages from early morning to late evening.
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-6 items-start">
          <div className="space-y-4 flex-1">
            <h3 className="text-2xl font-semibold">Recreational Facilities and Sports Complex</h3>
            <p>
              The University Campus has Basketball Courts, four Auditoriums, and an Amphitheater, sprawling parks and gardens, Volleyball
              Courts, Cricket and Football grounds, Gymnasium and a Sports hostel.
            </p>
            <p>
              The Sports Complex has a large open ground for outdoor Indian and European team-games and athletics. In addition,
              facilities for indoor games are also available. Accommodation for approximately 80 sportsmen and women has been constructed
              and plans for further expansion. Fields for cricket and football have been newly made and natural lawn has been laid. Indoor
              game facilities are being created. A new Olympic size swimming pool is under construction.
            </p>
          </div>
          <img
            src="/sports_smal.jpg"
            alt="Sports complex"
            className="w-full md:w-1/3 rounded object-cover"
            onError={(event) => {
              if (event.currentTarget.src.includes("sports_smal.jpg")) {
                event.currentTarget.src = "/sports_smal.png";
              }
            }}
          />
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default UtilityBuildingsPage;
