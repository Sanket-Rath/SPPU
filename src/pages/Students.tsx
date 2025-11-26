import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const StudentsPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Students</h2>
        <p className="mb-4">SPPU offers a vibrant campus life with a wide range of student services, clubs, and support systems. From admissions to graduation, we are dedicated to supporting our students' academic and personal growth.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Student support and counseling</li>
          <li>Clubs, sports, and cultural activities</li>
          <li>Scholarships and financial aid</li>
          <li>Career guidance and placement cell</li>
        </ul>
        <p>Explore resources and opportunities for students at SPPU.</p>

        <section className="mb-8">
          <div className="max-w-xs space-y-4">
            <a href="/students/hostel" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Hostel Office</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
            <a href="/students/alumni" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Alumni</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
            <a href="/students/student-helpline" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Student Helpline</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
          </div>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default StudentsPage;
