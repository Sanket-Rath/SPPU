import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import ImprovedMainContent from "@/components/ImprovedMainContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ImprovedHeader />
      <div className="flex flex-1">
        <Sidebar />
        <ImprovedMainContent />
      </div>
      <Footer />
    </div>
  );
};

export default Index;