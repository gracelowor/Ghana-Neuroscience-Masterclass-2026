import { useState, type FC } from "react";
import { facultyStaff, advisors } from "../data/peopleData";
import { Github, Linkedin, Mail, Award, Globe, Users } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const People: FC = () => {
  useDocumentTitle("People");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const markLoaded = (name: string) => setLoadedImages((prev) => ({ ...prev, [name]: true }));
  return (
    <div className="space-y-12 animate-fade-in max-w-5xl mx-auto text-slate-700">
      {/* Faculty & Staff Header */}
      <section className="text-center space-y-3">
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Faculty/Staff
        </h1>
      </section>

      {/* Grid of Team Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyStaff.map((person) => (
          <div
            key={person.name}
            className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm border border-slate-200"
          >
            {/* Upper cover banner */}
            <div className="h-28 bg-gradient-to-r from-brand-cyan/10 via-brand-indigo/10 to-brand-purple/10 relative" />

            {/* Profile Info Body */}
            <div className="p-5 pt-0 relative flex-grow flex flex-col space-y-5">
              {/* Photo representation */}
              <div className="flex justify-center -mt-16 mb-2">
                <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-md relative">
                  {!loadedImages[person.name] && (
                    <div className="absolute inset-0 rounded-full bg-slate-200 animate-pulse" />
                  )}
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    className={`h-full w-full object-cover transition-opacity duration-300 ${loadedImages[person.name] ? "opacity-100" : "opacity-0"}`}
                    loading="lazy"
                    onLoad={() => markLoaded(person.name)}
                  />
                </div>
              </div>

              {/* Name and title details */}
              <div className="text-center space-y-1">
                <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                  {person.name}
                </h3>
                <p className="text-xs font-semibold text-brand-indigo uppercase tracking-wider font-mono">
                  {person.role}
                </p>
                {person.credentials && (
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-normal whitespace-pre-line">
                    {person.credentials}
                  </p>
                )}
              </div>

              {/* Research Interests (Verbatim String) */}
              {person.researchInterests && (
                <div className="text-left space-y-1 text-xs">
                  <span className="font-bold text-slate-400 uppercase tracking-wider font-mono block">
                    Research Interests:
                  </span>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-150/60">
                    {person.researchInterests}
                  </p>
                </div>
              )}

              {/* Clinical Interests */}
              {person.clinicalInterests && (
                <div className="text-left space-y-1 text-xs">
                  <span className="font-bold text-slate-400 uppercase tracking-wider font-mono block">
                    Clinical Interests:
                  </span>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-150/60">
                    {person.clinicalInterests}
                  </p>
                </div>
              )}

              {/* Fun/Ask Details (Verbatim Strings) */}
              {(person.funActivities || person.askMeAbout) && (
                <div className="text-left space-y-2 text-xs border-t border-slate-100 pt-3">
                  {person.funActivities && (
                    <div>
                      <span className="font-bold text-slate-400 uppercase tracking-wider font-mono block mb-0.5">
                        Fun activities:
                      </span>
                      <p className="text-slate-600 leading-normal">
                        {person.funActivities}
                      </p>
                    </div>
                  )}
                  {person.askMeAbout && (
                    <div>
                      <span className="font-bold text-slate-400 uppercase tracking-wider font-mono block mb-0.5">
                        Ask me about:
                      </span>
                      <p className="text-slate-600 leading-normal">
                        {person.askMeAbout}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Social details bar */}
            <div className="bg-slate-50 px-5 py-3 border-t border-slate-150/60 flex justify-center gap-5">
              {person.emails?.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="text-slate-400 hover:text-brand-indigo transition-colors"
                  title={`Email ${email}`}
                >
                  <Mail className="h-4.5 w-4.5" />
                </a>
              ))}
              {person.github && (
                <a
                  href={`https://github.com/${person.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-indigo transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>
              )}
              {person.linkedin && (
                <a
                  href={`https://linkedin.com/in/${person.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-indigo transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
              )}
              {person.website && (
                <a
                  href={person.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-indigo transition-colors"
                  title={person.websiteLabel || "Website"}
                >
                  <Globe className="h-4.5 w-4.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Advisors Section */}
      <section className="border-t border-slate-200/60 pt-10 space-y-6">
        <h2 className="font-display text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
          <Award className="h-5 w-5 text-brand-indigo" />
          <span>Advisors</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((person) => (
            <div
              key={person.name}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm border border-slate-200"
            >
              {/* Upper cover banner */}
              <div className="h-28 bg-gradient-to-r from-brand-cyan/10 via-brand-indigo/10 to-brand-purple/10 relative" />

              {/* Profile Info Body */}
              <div className="p-5 pt-0 relative flex-grow flex flex-col space-y-5">
                {/* Photo representation */}
                <div className="flex justify-center -mt-16 mb-2">
                  <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-md relative">
                    {!loadedImages[person.name] && (
                      <div className="absolute inset-0 rounded-full bg-slate-200 animate-pulse" />
                    )}
                    <img
                      src={person.imageUrl}
                      alt={person.name}
                      className={`h-full w-full object-cover transition-opacity duration-300 ${loadedImages[person.name] ? "opacity-100" : "opacity-0"}`}
                      loading="lazy"
                      onLoad={() => markLoaded(person.name)}
                    />
                  </div>
                </div>

                {/* Name and title details */}
                <div className="text-center space-y-3">
                  <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                    {person.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-indigo uppercase tracking-wider font-mono">
                    {person.role}
                  </p>
                  {/* Advisor Titles List */}
                  {person.titles && (
                    <ul className="text-xs text-slate-600 text-left space-y-1.5 list-disc list-inside bg-slate-50/55 p-3.5 rounded-lg border border-slate-150/50">
                      {person.titles.map((title, idx) => (
                        <li key={idx} className="leading-relaxed pl-1 -indent-5 ml-5">
                          {title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Social details bar */}
              <div className="bg-slate-50 px-5 py-3 border-t border-slate-150/60 flex justify-center gap-5">
                {person.emails?.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="text-slate-400 hover:text-brand-indigo transition-colors"
                    title={`Email ${email}`}
                  >
                    <Mail className="h-4.5 w-4.5" />
                  </a>
                ))}
                {person.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${person.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-brand-indigo transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="h-4.5 w-4.5" />
                  </a>
                )}
                {person.website && (
                  <a
                    href={person.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-brand-indigo transition-colors"
                    title={person.websiteLabel || "Website"}
                  >
                    <Globe className="h-4.5 w-4.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Students Section */}
      <section className="border-t border-slate-200/60 pt-10 space-y-6">
        <h2 className="font-display text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
          <Award className="h-5 w-5 text-brand-indigo" />
          <span>Students</span>
        </h2>
        <div className="glass-panel rounded-2xl p-10 text-center shadow-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 w-14 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center shadow-sm">
                  <Users className="h-6 w-6 text-slate-300" />
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <p className="text-sm text-slate-500 font-medium">
                Student Directory
              </p>
              <p className="text-xs text-slate-400 max-w-xs">
                Student profiles will appear here once the cohort is selected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
