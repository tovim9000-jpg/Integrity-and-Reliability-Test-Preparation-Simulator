/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Simulator } from './components/Simulator';
import { TrapsGuide } from './components/TrapsGuide';
import { GuidesView } from './components/GuidesView';
import { DiagnosticsView } from './components/DiagnosticsView';
import { QuestionOption, questionsData } from './data/questionsData';
import { 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  AlertTriangle 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'traps' | 'guides' | 'report'>('simulator');
  const [userAnswers, setUserAnswers] = useState<Record<number, QuestionOption>>({});
  const [hasCompletedExam, setHasCompletedExam] = useState<boolean>(false);

  const handleCompleteExam = (answers: Record<number, QuestionOption>) => {
    setUserAnswers(answers);
    setHasCompletedExam(true);
    setActiveTab('report');
  };

  const handleRetakeExam = () => {
    setUserAnswers({});
    setHasCompletedExam(false);
    setActiveTab('simulator');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-['Heebo',sans-serif]" dir="rtl">
      {/* Top Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        examCompleted={hasCompletedExam} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6 sm:py-8 space-y-6">
        {/* Welcome Notice / Calming Banner */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                מרגיש לחץ לקראת מבחן האמינות במידות?
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                אם אתה אדם ישר, אין לך מה לחשוש. תרגל כאן את השאלות המכשילות, למד לזהות את מלכודות סולם השקר, ותגיע בטוח ומפוקס.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('traps')}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition-colors flex items-center gap-1"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>למד את המלכודות</span>
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span>התחל תרגול</span>
            </button>
          </div>
        </div>

        {/* Tab Views */}
        {activeTab === 'simulator' && (
          <Simulator 
            onComplete={handleCompleteExam} 
            savedAnswers={userAnswers} 
          />
        )}

        {activeTab === 'traps' && (
          <TrapsGuide />
        )}

        {activeTab === 'guides' && (
          <GuidesView />
        )}

        {activeTab === 'report' && (
          <DiagnosticsView 
            userAnswers={userAnswers} 
            onRetake={handleRetakeExam} 
            onGoToTraps={() => setActiveTab('traps')} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-12">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p className="font-medium text-slate-700">
            סימולטור הכנה והדרכה למבחני מהימנות ואמינות תעסוקתיים
          </p>
          <p className="text-slate-400">
            פותח ככלי הדרכה ואימון אישי להבנת שיטות ההערכה של מכוני המיון בישראל (מידות, פילת, אדם מילוא).
          </p>
        </div>
      </footer>
    </div>
  );
}
