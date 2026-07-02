import type React from "react";
import { Link } from "react-router-dom";
import { homeData } from "../data/homeData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import {
  Brain,
  Network,
  Activity,
  Cpu,
  Binary,
  FileText,
  Compass,
  ArrowRight,
  Target
} from "lucide-react";

type LucideIcon = React.ComponentType<{ className?: string }>;

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Network,
  Activity,
  Cpu,
  Binary,
  FileText,
  Compass
};

export const Home: React.FC = () => {
  useDocumentTitle("Home");
  return (
    <div className="space-y-12 animate-fade-in text-slate-700">
      {/* Hero Header Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-4">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {homeData.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {homeData.paragraphs[0]}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScmKzDv_bC4TJ5mpgXc_FKKV_cPrlGJHNXuuCNLzS9qJOTg7g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo px-6 py-3.5 text-sm font-semibold text-white hover:opacity-95 transition-all duration-300 shadow-md shadow-brand-indigo/10"
              aria-label="Register Now (opens in new tab)"
            >
              <span>Register Now</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/prep"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 shadow-sm"
            >
              <span>Course Prep</span>
            </Link>
            <Link
              to="/git"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 shadow-sm"
            >
              <span>Git Guide</span>
            </Link>
          </div>
        </div>

        {/* Logo Banner */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-brand-cyan to-brand-indigo opacity-15 blur-xl group-hover:opacity-25 transition duration-1000" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-4 shadow-lg">
              <img
                src={homeData.logoUrl}
                alt="Ghana Neuroscience Masterclass Logo"
                className="w-72 h-72 sm:w-96 sm:h-96 object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Burden & Recruitment Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-200/60">
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
          <p className="text-sm text-slate-600 leading-relaxed">
            {homeData.paragraphs[1]}
          </p>
        </div>
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
          <p className="text-sm text-slate-600 leading-relaxed">
            {homeData.paragraphs[2]}
          </p>
        </div>
      </section>

      {/* Masterclass details & Core Topics */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm text-slate-600 leading-relaxed">
            {homeData.paragraphs[3]}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeData.coreTopics.map((topic, index) => {
            const IconComponent = iconMap[topic.iconName] || Brain;
            return (
              <div
                key={topic.id}
                className="glass-panel glass-panel-hover rounded-xl p-5 flex items-start space-x-4 shadow-sm"
              >
                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-brand-indigo">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-mono font-bold text-slate-400 block mb-1">Topic 0{index + 1}</span>
                  <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base leading-snug">
                    {topic.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Registration Call to Action */}
      <section className="rounded-2xl bg-gradient-to-r from-brand-indigo/10 via-brand-purple/5 to-brand-cyan/10 border border-brand-indigo/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 max-w-2xl text-center md:text-left">
          <h3 className="font-display text-2xl font-bold text-slate-900">
            Ready to Join the Masterclass?
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Register now to secure your spot for the Ghana Neuroscience Masterclass 2026. Admission is highly competitive.
          </p>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScmKzDv_bC4TJ5mpgXc_FKKV_cPrlGJHNXuuCNLzS9qJOTg7g/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo px-6 py-3.5 text-sm font-semibold text-white hover:opacity-95 transition-all duration-300 shadow-md shadow-brand-indigo/10 whitespace-nowrap"
          aria-label="Register Now (opens in new tab)"
        >
          <span>Register Now</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </section>

      {/* Capstones & Mentorship */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-200/60">
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
          <p className="text-sm text-slate-600 leading-relaxed">
            {homeData.paragraphs[4]}
          </p>
        </div>
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
          <p className="text-sm text-slate-600 leading-relaxed">
            {homeData.paragraphs[5]}
          </p>
        </div>
      </section>

      {/* Expected Outcomes & Long term vision */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4 border-t border-slate-200/60">
        <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:col-span-2 space-y-6 flex flex-col justify-between shadow-sm">
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-bold text-slate-950 flex items-center gap-2">
              <Target className="h-6 w-6 text-brand-indigo" />
              <span>Long-term Expected Outcomes</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {homeData.expectedOutcomes.map((outcome, idx) => (
              <div key={idx} className="flex gap-3 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-cyan mt-0.5 text-xs font-bold font-mono">
                  {idx + 1}
                </div>
                <p className="text-slate-600 text-xs leading-normal">{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-brand-indigo/10 bg-gradient-to-b from-brand-indigo/5 to-slate-50 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold text-slate-800">Long-term Vision</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              {homeData.paragraphs[6]}
            </p>
          </div>
          <div className="border-t border-slate-200/60 pt-4 flex items-center justify-between text-xs text-slate-400">
            <span>Capacity Capacity Initiative</span>
            <Brain className="h-4 w-4 text-brand-indigo" />
          </div>
        </div>
      </section>
    </div>
  );
};
