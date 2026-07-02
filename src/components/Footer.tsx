import { useState, useEffect, type FC } from "react";
import { Link } from "react-router-dom";
import { Brain, Github, ArrowUp, Mail, Twitter, Linkedin } from "lucide-react";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="w-full bg-white pb-6 text-slate-500 shadow-inner relative">
        {/* Gradient accent top border */}
        <div className="h-1 w-full bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col space-y-4">
              <div className="flex items-center space-x-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo p-1.5 shadow-sm">
                  <Brain className="h-4.5 w-4.5 text-white" />
                </div>
                <span className="font-display font-bold text-slate-800 text-sm leading-tight">
                  Ghana Neuroscience<br />Masterclass
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-500">
                Cultivating a pipeline of future researchers, clinicians, innovators, and leaders equipped to address neurological and mental health challenges facing Africa.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://github.com/gracelowor/Ghana-Neuroscience-Masterclass-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-brand-indigo transition-colors"
                  aria-label="GitHub repository"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>
                <a
                  href="mailto:g.lowor@ufl.edu"
                  className="text-slate-500 hover:text-brand-indigo transition-colors"
                  aria-label="Send email"
                >
                  <Mail className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-brand-indigo transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://linkedin.com/in/gracelowor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-brand-indigo transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-display font-bold text-slate-800 text-sm">Navigation</h3>
              <div className="flex flex-col space-y-2 text-xs">
                <Link to="/" className="hover:text-brand-indigo transition-colors">Home</Link>
                <Link to="/prep" className="hover:text-brand-indigo transition-colors">Course Prep</Link>
                <Link to="/git" className="hover:text-brand-indigo transition-colors">Git Guide</Link>
                <Link to="/people" className="hover:text-brand-indigo transition-colors">People</Link>
              </div>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-display font-bold text-slate-800 text-sm">Contact</h3>
              <div className="flex flex-col space-y-2 text-xs">
                <a
                  href="mailto:g.lowor@ufl.edu"
                  className="inline-flex items-center gap-1.5 hover:text-brand-indigo transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Grace Lowor</span>
                </a>
                <a
                  href="https://github.com/gracelowor/Ghana-Neuroscience-Masterclass-2026/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-brand-indigo transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>Report an issue</span>
                </a>
              </div>
            </div>

            {/* Program Column */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-display font-bold text-slate-800 text-sm">Program</h3>
              <div className="flex flex-col space-y-2 text-xs">
                <a
                  href="https://github.com/gracelowor/Ghana-Neuroscience-Masterclass-2026/wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-indigo transition-colors"
                >
                  Wiki
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScmKzDv_bC4TJ5mpgXc_FKKV_cPrlGJHNXuuCNLzS9qJOTg7g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-indigo transition-colors"
                  aria-label="Registration (opens in new tab)"
                >
                  Registration
                </a>
                <a
                  href="https://github.com/gracelowor/Ghana-Neuroscience-Masterclass-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-brand-indigo transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>Source code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="mt-10 pt-6 border-t border-slate-200 text-xs text-slate-500">
            &copy; {currentYear} Ghana Neuroscience Masterclass. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-brand-cyan to-brand-indigo text-white shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};
