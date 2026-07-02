import { useState, useEffect, type FC } from "react";
import { prepSteps } from "../data/prepSteps";
import { CheckCircle2, Circle, AlertCircle, RotateCcw, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Prep: FC = () => {
  useDocumentTitle("Course Prep");
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>(() => {
    const saved = localStorage.getItem("gnm_prep_checklist");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse prep checklist items: ", e);
      }
    }
    return { 1: false, 2: false, 3: false, 4: false };
  });

  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: false,
    4: false
  });

  useEffect(() => {
    localStorage.setItem("gnm_prep_checklist", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleAccordion = (id: number) => {
    setExpandedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleReset = () => {
    setCheckedItems({ 1: false, 2: false, 3: false, 4: false });
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = prepSteps.length;
  const progressPercent = Math.round((checkedCount / totalCount) * 100);

  return (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto text-slate-700">
      {/* Page Header */}
      <section className="text-center space-y-3">
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Before starting the masterclass, please do the following:
        </h1>
      </section>

      {/* Progress Dashboard */}
      <section className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Prerequisite Progress</span>
            <div className="text-xl font-bold font-display text-slate-900">
              Completed {checkedCount} of {totalCount} ({progressPercent}%)
            </div>
          </div>
          {checkedCount > 0 && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200 relative">
          <div
            className="h-full bg-gradient-to-r from-brand-cyan to-brand-indigo transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {progressPercent === 100 ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex gap-3 items-center">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
            <div className="text-xs text-emerald-800 font-medium">
              All tasks checked. Ready for the class.
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex gap-3 items-center">
            <AlertCircle className="h-5 w-5 text-brand-indigo shrink-0" />
            <div className="text-xs text-slate-600 font-medium">
              Please review and check off requirements as you complete them.
            </div>
          </div>
        )}
      </section>

      {/* Checklist steps */}
      <section className="space-y-4">
        {prepSteps.map((step) => {
          const isChecked = checkedItems[step.id];
          const isExpanded = expandedSteps[step.id];

          return (
            <div
              key={step.id}
              className={`glass-panel rounded-xl overflow-hidden transition-all duration-200 border ${
                isChecked ? "border-emerald-300/60 bg-emerald-50/10" : "border-slate-200"
              }`}
            >
              {/* Accordion Toggle Header */}
              <div
                onClick={() => toggleAccordion(step.id)}
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <button
                    onClick={(e) => toggleCheck(step.id, e)}
                    className="focus-visible:outline-2 focus-visible:outline-brand-indigo focus:outline-none shrink-0"
                    aria-label={isChecked ? "Uncheck" : "Check"}
                  >
                    {isChecked ? (
                      <CheckCircle2 className="h-5.5 w-5.5 text-emerald-600 transition-all" />
                    ) : (
                      <Circle className="h-5.5 w-5.5 text-slate-400 hover:text-brand-indigo transition-colors" />
                    )}
                  </button>

                  <div className="text-left">
                    <h3 className={`font-display font-bold text-base transition-colors ${
                      isChecked ? "text-slate-400 line-through" : "text-slate-800"
                    }`}>
                      {step.id}. {step.title}
                    </h3>
                  </div>
                </div>
                <div className="text-slate-400 hover:text-slate-600 pl-4">
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </div>

              {/* Accordion Details */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-slate-100 bg-slate-50/30 text-sm text-slate-600 space-y-3 text-left">
                  <p className="leading-relaxed">
                    {step.fullDetails}
                  </p>

                  {/* Render Links */}
                  {step.links && step.links.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-2.5">
                      {step.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-indigo hover:underline"
                        >
                          <span>{link.label}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};
