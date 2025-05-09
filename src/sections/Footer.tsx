import CircumIcon from "@klarr-agency/circum-icons-react";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative z-30">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; {currentYear}. All Rights Reserved
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 relative z-30">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 relative z-30"
              >
                <span className="font-semibold">{link.title}</span>
                <CircumIcon name="linkedin" color="#0a66c2" size="30px" />
              </a>
            ))}
          </nav>
          <div></div>
        </div>
      </div>
    </footer>
  );
};
