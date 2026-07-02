import { useState, useRef, useEffect, type FC } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Brain, ExternalLink } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Course Prep", path: "/prep" },
  { name: "Git Guide", path: "/git" },
  { name: "People", path: "/people" },
];

const registerUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScmKzDv_bC4TJ5mpgXc_FKKV_cPrlGJHNXuuCNLzS9qJOTg7g/viewform";

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      const drawer = drawerRef.current;
      if (drawer) {
        const focusable = drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length > 0) {
          focusable[0].focus();
        }
      }
    } else {
      hamburgerRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const handleDrawerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" aria-label="Main navigation">
      {/* Top bar */}
      <div className="border-b border-slate-200 bg-white/85 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo + Brand */}
            <NavLink to="/" className="flex items-center space-x-2 group" end>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo p-1.5 shadow-sm">
                <Brain className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="hidden sm:inline font-display text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-brand-indigo transition-colors duration-200">
                Ghana Neuroscience Masterclass 2026
              </span>
              <span className="sm:hidden font-display text-base font-bold tracking-tight text-slate-900">
                GNM 2026
              </span>
            </NavLink>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `relative px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-brand-indigo"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              <a
                href={registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-indigo px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-all duration-300 shadow-sm"
                aria-label="Register (opens in new tab)"
              >
                <span>Register</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              ref={hamburgerRef}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-brand-indigo focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              {isOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile drawer panel */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-menu"
        role="dialog"
        aria-modal={isOpen ? "true" : undefined}
        aria-label="Navigation menu"
        aria-hidden={!isOpen}
        onKeyDown={handleDrawerKeyDown}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <div className="flex items-center space-x-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo p-1 shadow-sm">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <span className="font-display font-bold text-slate-900 text-sm">GNM 2026</span>
          </div>
          <button
            onClick={close}
            className="rounded-md p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer links */}
        <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={close}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 text-base font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-brand-indigo bg-brand-indigo/5"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Drawer footer CTA */}
        <div className="px-5 py-4 border-t border-slate-200">
          <a
            href={registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-indigo px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-all duration-300 shadow-sm"
            aria-label="Register (opens in new tab)"
          >
            <span>Register Now</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
};
