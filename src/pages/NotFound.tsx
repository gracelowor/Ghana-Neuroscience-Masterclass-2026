import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const NotFound = () => {
  useDocumentTitle("Page Not Found");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="text-8xl font-display font-extrabold text-slate-200 select-none">
        404
      </div>
      <h1 className="font-display text-2xl font-bold text-slate-900">
        Page Not Found
      </h1>
      <p className="text-sm text-slate-500 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo px-6 py-3 text-sm font-semibold text-white hover:opacity-95 transition-all duration-300 shadow-md"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all duration-300 shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
};
