import { useContext, useState, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/themeContext";
import { FiMenu, FiX } from "react-icons/fi";
import { FaSun, FaMoon } from "react-icons/fa";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const themeContext = useContext(ThemeContext);
  const backdropRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Show sidebar and backdrop
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        display: "block",
      });
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      // Hide sidebar and backdrop
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(backdropRef.current, { display: "none" });
        },
      });
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Work", href: "work" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "py-4 bg-background/80 backdrop-blur-lg" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="text-2xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {"<Dev />"}
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              {/* <button
                onClick={themeContext.toggleTheme}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Toggle theme"
              >
                {themeContext.theme === "dark" ? (
                  <FaSun className="text-primary" size={20} />
                ) : (
                  <FaMoon className="text-primary" size={20} />
                )}
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu className="text-primary" size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden opacity-0"
        style={{ display: "none" }}
        onClick={() => setIsOpen(false)}
      />

      <div
        ref={sidebarRef}
        className="fixed right-0 top-0 h-full w-[300px] bg-surface z-50 md:hidden"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Close menu"
            >
              <FiX className="text-primary" size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={() => setIsOpen(false)}
                className="text-lg text-text-secondary hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            {/* <button
              onClick={() => {
                themeContext.toggleTheme();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 text-lg text-text-secondary hover:text-primary transition-colors"
            >
              {themeContext.theme === "dark" ? (
                <>
                  <FaSun size={20} />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FaMoon size={20} />
                  <span>Dark Mode</span>
                </>
              )}
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
