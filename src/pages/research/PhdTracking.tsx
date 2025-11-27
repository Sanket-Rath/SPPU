import Footer from "@/components/Footer";

const PhdTracking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top header */}
      <header className="bg-teal-600 text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-center flex-1">
            <h1 className="text-xl font-bold">Welcome to Ph.D Tracking System</h1>
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <div className="text-sm">phdtracking_support@pun.unipune.ac.in</div>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <div className="text-sm">020-71533633</div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Left dark sidebar */}
        <aside className="w-64 bg-gray-900 text-white min-h-[calc(100vh-64px)] p-4">
          <div className="flex items-center gap-3 mb-6">
            <img src="/sppu-logo.png" alt="SPPU" className="w-12 h-12 object-contain" />
            <div>
              <div className="font-bold">Savitribai Phule Pune University</div>
              <div className="text-sm">सावित्रीबाई फुले पुणे विद्यापीठ</div>
            </div>
          </div>

          <nav className="space-y-2">
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 flex items-center gap-2">☰ Menu</button>
            <a href="/" className="block px-3 py-2 rounded hover:bg-gray-800">SPPU Home</a>
            <a href="/" className="block px-3 py-2 rounded hover:bg-gray-800">BOD Home</a>
          </nav>
        </aside>

        {/* Main content with background image */}
        <main className="flex-1 p-8" style={{backgroundImage: 'url(/university-building.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Login Card */}
            <div className="bg-white/70 backdrop-blur-md p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Log In</h2>
              <label className="block text-sm">Username <span className="text-red-500">*</span></label>
              <input className="w-full mt-1 mb-3 px-3 py-2 border rounded" />
              <label className="block text-sm">Password <span className="text-red-500">*</span></label>
              <input type="password" className="w-full mt-1 mb-3 px-3 py-2 border rounded" />
              <div className="flex items-center justify-between">
                <button className="px-4 py-2 bg-teal-600 text-white rounded">Login</button>
                <a className="text-sm text-teal-700 underline" href="#">Forgot Password</a>
              </div>
            </div>

            {/* Recent Updates Card */}
            <div className="bg-white/40 backdrop-blur-md p-6 rounded shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">📰</span>
                <h3 className="text-lg font-semibold">Recent Updates</h3>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>भारतरत्न ज. आर. डा. राव गणपव स्ताशक याच्या योजने.</li>
                <li>Ph.D. Online Viva Voce Request User Manual</li>
                <li>पीएच. डी . अभ्यासक्रमात प्रवेश घेण्याच्या विद्यार्थ्यांची माहिती ऑनलाइन अध्यायव करणे (Ph.D. Tracking System)</li>
                <li>User Manual For Uploading of Documents of Synopsis and Thesis and Its Approval Process</li>
                <li>Appendix 'K' &amp; 'L'</li>
              </ul>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default PhdTracking;
