import React from 'react';
import { ShieldCheck, BookOpen, CheckCircle2, AlertTriangle, Compass } from 'lucide-react';

interface HeaderProps {
  activeTab: 'simulator' | 'guides' | 'traps' | 'report';
  setActiveTab: (tab: 'simulator' | 'guides' | 'traps' | 'report') => void;
  examCompleted: boolean;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, examCompleted }) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  סימולטור הכנה למבחני אמינות
                </h1>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">
                  מידות / פילת / אדם מילוא
                </span>
              </div>
              <p className="text-xs text-slate-400">
                הכנה פסיכולוגית מקיפה, הבנת שאלות המלכודת ומניעת פסילה בסולם השקר
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1.5 p-1 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs sm:text-sm font-medium w-full sm:w-auto justify-center">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'simulator'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>סימולטור ותרגול</span>
            </button>

            <button
              onClick={() => setActiveTab('traps')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'traps'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>4 המלכודות המרכזיות</span>
            </button>

            <button
              onClick={() => setActiveTab('guides')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'guides'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>מדריך המבחן</span>
            </button>

            <button
              onClick={() => setActiveTab('report')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'report'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              } ${!examCompleted ? 'opacity-70' : ''}`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>דוח אבחון אישי</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
