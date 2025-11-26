import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AcademicCalenderPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <section>
          <h2 className="text-3xl font-bold mb-4">Academic Calendar</h2>
          <p className="text-muted-foreground">
            Overview of the academic schedule for the current academic year at
            Savitribai Phule Pune University.
          </p>
        </section>

        <section className="bg-card rounded-lg border shadow-sm p-4">
          <div className="w-full overflow-hidden rounded-md border bg-muted">
            <img
              src="/public/SPPU-Academic-Calender.webp"
              alt="Savitribai Phule Pune University academic calendar"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default AcademicCalenderPage;


