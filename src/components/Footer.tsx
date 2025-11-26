const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4">
          <div className="flex items-center gap-4">
            <span>Savitribai Phule Pune University. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Website Maintained By :</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">IT</span>
              </div>
              <div className="text-xs">
                <div className="font-medium">IT DEPARTMENT</div>
                <div>UNIVERSITY</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary hover:underline transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform">Copyright</a>
              <span>|</span>
              <a href="#" className="hover:text-primary hover:underline transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform">Disclaimer</a>
              <span>|</span>
              <a href="#" className="hover:text-primary hover:underline transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform">Privacy Statement</a>
              <span>|</span>
            </div>
            <div>
              Trade Marks used in this website (other than Savitribai Phule Pune University and its Departments) belong to the respective owners.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;