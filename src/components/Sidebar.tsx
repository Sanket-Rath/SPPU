import { ChevronRight } from "lucide-react";

const Sidebar = () => {
  const sidebarSections = [
    {
      title: "About University",
      links: [
        { label: "About University", href: "/about" },
        { label: "History", href: "/history" },
        { label: "Mission", href: "/mission" },
        { label: "From VC's Desk", href: "/vc-desk" },
        { label: "A Snapshot", href: "/snapshot" },
        { label: "The University Emblem", href: "/emblem" },
        { label: "Chairs", href: "/chairs" }
      ]
    },
    {
      title: "Governing Bodies",
      links: [
        { label: "Management Council", href: "/management-council" },
        { label: "Academic Council", href: "/academic-council" },
        { label: "Senate", href: "/senate" },
        { label: "Deans of Faculties", href: "/deans" }
      ]
    },
    {
      title: "University Campus",
      links: [
        { label: "About Campus", href: "/about-campus" },
        { label: "Campus Map", href: "/campus-map" },
        { label: "Utility Buildings", href: "/utility-buildings" },
        { label: "Student Support Facilities", href: "/student-support" }
      ]
    },
    {
      title: "About Pune",
      links: [
        { label: "About Pune", href: "/about-pune" },
        { label: "How to Reach University?", href: "/how-to-reach" },
        { label: "UoP Google Map", href: "/uop-map" },
        { label: "Contact Information", href: "/contact" }
      ]
    }
  ];

  return (
    <aside className="w-80 bg-sidebar-bg border-r border-border min-h-screen max-w-full md:block hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Savitribai Phule Pune University
        </h2>
        <div className="space-y-6">
          {sidebarSections.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-medium text-foreground text-sm border-b border-border pb-1">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent px-2 py-1 rounded transition-colors group shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:shadow-xl focus-visible:-translate-y-1 focus:outline-none transition-transform"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-60"></span>
                      <span className="flex-1">{link.label}</span>
                      <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;