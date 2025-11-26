import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import React from "react";

const DepartmentsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ImprovedHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-4">Departments</h1>

          <p className="mb-4 text-sm text-muted-foreground">This page lists all departments and centres under Savitribai Phule Pune University grouped by faculty. If you want descriptions for any department, reply with the department name and the text to add.</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Science & Technology</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Department of Electronic and Instrumentation Science</li>
              <li>Department Of Mathematics</li>
              <li>Department of Environmental Sciences</li>
              <li>Department of Zoology</li>
              <li>Department of Biotechnology</li>
              <li>Department of Geography</li>
              <li>Department of Geology</li>
              <li>Department of Physics</li>
              <li>Department of Chemistry</li>
              <li>Department of Botany</li>
              <li>Department of Atmospheric and Space Sciences</li>
              <li>Department of Statistics</li>
              <li>Department of Computer Science</li>
              <li>Department of Media and Communication Studies</li>
              <li>Department of Microbiology</li>
              <li>Interdisciplinary School of Health Sciences</li>
              <li>School of Energy Studies</li>
              <li>Interdisciplinary School of Scientific Computing</li>
              <li>Institute of Bioinformatics Biotechnology IBB</li>
              <li>Bioinformatics Centre</li>
              <li>Centre for Information and Network Security CINS</li>
              <li>Centre for Modeling and Simulation</li>
              <li>School of Basic Medical Sciences</li>
              <li>Department of Technology</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Commerce & Management</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Department of Commerce & Research Centre</li>
              <li>Department of Management Science</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Humanities</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Department Of Marathi</li>
              <li>Department of Hindi</li>
              <li>Department of English</li>
              <li>Department of Sanskrit and Prakrit Languages</li>
              <li>Department of Pali and Buddhist Studies</li>
              <li>Department of Dr. Babasaheb Ambedkar Studies</li>
              <li>Foreign Language</li>
              <li>Centre for Advanced Studies in Sanskrit</li>
              <li>Department of Economics</li>
              <li>Department of History</li>
              <li>Department of Philosophy</li>
              <li>Department of Anthropology</li>
              <li>Department of Psychology</li>
              <li>Department of Political Science</li>
              <li>Department of Sociology</li>
              <li>Department of Defence & Strategic Studies</li>
              <li>Interdisciplinary School (Humanities and Social Science)</li>
              <li>Krantijyoti Savitribai Phule Women's Studies Centre</li>
              <li>Department of Lifelong Learning & Extension</li>
              <li>Department of Law</li>
              <li>Centre for Social Sciences and Humanities (CSSH)</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Interdisciplinary Studies Faculty</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Department of Education & Extension</li>
              <li>Department of Physical Education</li>
              <li>Centre for Performing Arts</li>
              <li>Jayakar Library of Library & Information Science</li>
              <li>Department of Library & Information Science</li>
              <li>Department of Communication and Journalism</li>
              <li>Skill Development Centre</li>
            </ol>
          </section>

        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DepartmentsPage;
