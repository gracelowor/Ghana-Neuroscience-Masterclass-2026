import { useState, type FC } from "react";
import { gitData } from "../data/gitData";
import { CodeBlock } from "../components/CodeBlock";
import { Terminal, Cpu, Info, Mail, Layers } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const GitGuide: FC = () => {
  useDocumentTitle("Git Guide");
  const [activeTab, setActiveTab] = useState("macos");

  return (
    <div className="space-y-10 animate-fade-in max-w-4xl mx-auto text-slate-700">
      {/* Page Title */}
      <section className="text-center space-y-3">
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Installation instructions
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {gitData.introduction}
        </p>
        <p className="text-xs text-slate-500 leading-relaxed max-w-2xl mx-auto border-t border-slate-100 pt-3">
          {gitData.githubDetails}
        </p>
      </section>

      {/* OS tabs selection */}
      <section className="space-y-6">
        <div className="border-b border-slate-200">
          <div className="flex flex-wrap -mb-px gap-1" role="tablist" aria-label="Operating Systems">
            {gitData.installations.map((os) => (
              <button
                key={os.id}
                id={`tab-${os.id}`}
                role="tab"
                aria-selected={activeTab === os.id}
                aria-controls={`tabpanel-${os.id}`}
                onClick={() => setActiveTab(os.id)}
                className={`py-2.5 px-5 text-sm font-semibold border-b-2 transition-all duration-200 ${
                  activeTab === os.id
                    ? "border-brand-indigo text-brand-indigo"
                    : "border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-200"
                }`}
              >
                {os.osName}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content panels */}
        {gitData.installations.map((os) => (
          <div
            key={os.id}
            id={`tabpanel-${os.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${os.id}`}
            hidden={os.id !== activeTab}
            className="glass-panel rounded-xl p-6 space-y-4 shadow-sm animate-fade-in text-left"
          >
            <div className="flex items-center gap-2 text-slate-800">
              <Terminal className="h-5 w-5 text-brand-indigo" />
              <h3 className="font-display text-base font-bold">
                {os.osName} Guidelines
              </h3>
            </div>

              <div className="space-y-2">
                <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                  {os.instructions.map((inst, index) => (
                    <li key={index} className="leading-relaxed">
                      <span>{inst}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {os.links && os.links.map((link, idx) => (
                <div key={idx} className="pt-2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-indigo hover:underline"
                  >
                    {link.label} →
                  </a>
                </div>
              ))}
            </div>
          ))}
      </section>

      {/* Cheat Sheet & Alternative Interfaces */}
      <section className="glass-panel rounded-xl p-6 space-y-4 shadow-sm text-left">
        <h3 className="font-display font-bold text-slate-900 text-lg flex items-center gap-2">
          <Cpu className="h-5 w-5 text-brand-indigo" />
          <span>Alternative Interfaces for Git</span>
        </h3>
        <p className="text-xs text-slate-500">
          <a
            href={gitData.cheatSheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-indigo hover:underline"
          >
            Git Cheat Sheet Link
          </a>
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
          {gitData.interfaces.map((client, idx) => (
            <li key={idx}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-indigo hover:underline"
              >
                {client.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Workflows workflow section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-900 text-left">
          <Layers className="h-5 w-5 text-brand-indigo" />
          <h2 className="font-display text-xl font-bold">
            Basic Git Workflows
          </h2>
        </div>

        <div className="space-y-4">
          {gitData.workflows.map((wf, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-xl p-5 sm:p-6 text-left space-y-3 border border-slate-200 shadow-sm"
            >
              <h3 className="font-display font-bold text-slate-900 text-base">
                {wf.title}
              </h3>
              {wf.description && (
                <p className="text-xs text-slate-500 leading-normal">
                  {wf.description}
                </p>
              )}
              {wf.code && (
                <CodeBlock code={wf.code} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TA Help Footer Contact */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div className="space-y-2 max-w-xl">
          <h4 className="font-display font-bold text-slate-900 text-sm flex items-center gap-1.5">
            <Info className="h-4.5 w-4.5 text-brand-indigo" />
            <span>Questions and Discussion:</span>
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            {gitData.footerContact}
          </p>
        </div>
        <div className="shrink-0">
          <a
            href="mailto:gracelowor@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors shadow-sm"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Contact TA</span>
          </a>
        </div>
      </section>
    </div>
  );
};
