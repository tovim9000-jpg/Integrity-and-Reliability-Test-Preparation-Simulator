import React, { useState } from 'react';
import { Question, QuestionOption, questionsData } from '../data/questionsData';
import { 
  CheckCircle, 
  AlertCircle, 
  HelpCircle, 
  ArrowLeft, 
  RotateCcw, 
  Sparkles, 
  ShieldAlert, 
  Clock, 
  Filter, 
  Award,
  BookOpen
} from 'lucide-react';

interface SimulatorProps {
  onComplete: (userAnswers: Record<number, QuestionOption>) => void;
  savedAnswers: Record<number, QuestionOption>;
}

export const Simulator: React.FC<SimulatorProps> = ({ onComplete, savedAnswers }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, QuestionOption>>(savedAnswers);
  const [mode, setMode] = useState<'learning' | 'exam'>('learning');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [showExplanation, setShowExplanation] = useState<boolean>(true);

  // Filter questions based on category
  const filteredQuestions = categoryFilter === 'all'
    ? questionsData
    : questionsData.filter(q => q.category === categoryFilter);

  // Safety clamp index
  const safeIdx = Math.min(currentIdx, Math.max(0, filteredQuestions.length - 1));
  const currentQ: Question | undefined = filteredQuestions[safeIdx];
  const selectedOption: QuestionOption | undefined = currentQ ? selectedAnswers[currentQ.id] : undefined;

  const handleSelectOption = (option: QuestionOption) => {
    if (!currentQ) return;
    const updated = {
      ...selectedAnswers,
      [currentQ.id]: option
    };
    setSelectedAnswers(updated);

    // If all questions are answered in exam mode
    if (Object.keys(updated).length === questionsData.length) {
      onComplete(updated);
    }
  };

  const handleNext = () => {
    if (safeIdx < filteredQuestions.length - 1) {
      setCurrentIdx(safeIdx + 1);
    } else {
      // Completed current filtered set
      onComplete(selectedAnswers);
    }
  };

  const handlePrev = () => {
    if (safeIdx > 0) {
      setCurrentIdx(safeIdx - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const progressPercent = Math.round((answeredCount / questionsData.length) * 100);

  if (!currentQ) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h3 className="text-lg font-bold text-slate-800">לא נמצאו שאלות בקטגוריה שנבחרה</h3>
        <button
          onClick={() => { setCategoryFilter('all'); setCurrentIdx(0); }}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700"
        >
          חזרה לכל השאלות
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Banner / Mode Controls */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl w-full lg:w-auto justify-center">
            <button
              onClick={() => setMode('learning')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                mode === 'learning'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>מצב למידה והסבר מיידי (מומלץ)</span>
            </button>
            <button
              onClick={() => setMode('exam')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                mode === 'exam'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>מצב הדמיית מבחן רציף</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 text-xs">
            <span className="text-slate-400 flex items-center gap-1 ml-1 font-medium">
              <Filter className="w-3.5 h-3.5" /> סינון:
            </span>
            {[
              { id: 'all', label: 'כל הנושאים' },
              { id: 'lie_scale', label: 'סולם שקר' },
              { id: 'theft_attitudes', label: 'עמדות גניבה' },
              { id: 'reporting_loyalty', label: 'דילמות דיווח' },
              { id: 'rules_compliance', label: 'ציות לנהלים' },
              { id: 'confidentiality_security', label: 'סודיות וטוהר מידות' },
              { id: 'past_conduct', label: 'עבר משמעתי והרגלים' },
              { id: 'work_ethics', label: 'מוסר עבודה' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => { setCategoryFilter(cat.id); setCurrentIdx(0); }}
                className={`px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap font-medium ${
                  categoryFilter === cat.id
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Reset button */}
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-rose-600 transition-colors"
            title="איפוס תשובות"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>איפוס</span>
          </button>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">התקדמות במאגר:</span>
            <span>{answeredCount} מתוך {questionsData.length} שאלות נענו</span>
          </div>
          <span className="font-bold text-indigo-600">{progressPercent}%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm border border-slate-200">
        {/* Header of question */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
              שאלה {safeIdx + 1} מתוך {filteredQuestions.length}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
              {currentQ.categoryTitle}
            </span>
            {currentQ.category === 'lie_scale' && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-xs border border-amber-200 font-semibold">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                שאלת מלכודת סולם שקר!
              </span>
            )}
          </div>

          {mode === 'learning' && (
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              {showExplanation ? 'הסתר ניתוח' : 'הצג ניתוח ומלכודת'}
            </button>
          )}
        </div>

        {/* The Question Text */}
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed mb-6">
          {currentQ.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((opt) => {
            const isSelected = selectedOption?.id === opt.id;
            const isAnswered = !!selectedOption;

            let borderStyle = 'border-slate-200 hover:border-indigo-300 bg-white hover:bg-slate-50/50';
            if (isSelected) {
              borderStyle = 'border-indigo-600 bg-indigo-50/40 ring-2 ring-indigo-500/20';
            }

            // In learning mode, show guidance highlight if answered
            let badgeComponent = null;
            if (isAnswered && mode === 'learning') {
              if (opt.scoreImpact.isRecommended) {
                badgeComponent = (
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    הגישה המומלצת
                  </span>
                );
              } else if (opt.scoreImpact.lieScaleRisk === 'high') {
                badgeComponent = (
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold border border-rose-200">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                    מלכודת סולם שקר!
                  </span>
                );
              } else {
                badgeComponent = (
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-medium border border-amber-200">
                    ציון סיכון נמוך/בינוני
                  </span>
                );
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt)}
                className={`w-full text-right p-4 rounded-xl border transition-all flex items-start justify-between gap-3 ${borderStyle}`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-600 text-white'
                        : 'border-slate-300'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <span className={`text-sm sm:text-base ${isSelected ? 'font-semibold text-indigo-950' : 'text-slate-700'}`}>
                    {opt.text}
                  </span>
                </div>

                {badgeComponent && <div className="shrink-0">{badgeComponent}</div>}
              </button>
            );
          })}
        </div>

        {/* Explanation Card (In Learning Mode or if Answered) */}
        {mode === 'learning' && showExplanation && selectedOption && (
          <div className="mt-6 pt-6 border-t border-slate-100 space-y-4 animate-in fade-in duration-300">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                <span>ניתוח פסיכולוגי של השאלה:</span>
              </div>

              {/* What it tests */}
              <div>
                <span className="text-xs font-bold text-slate-500 block">מה השאלה בודקת:</span>
                <p className="text-sm text-slate-700 mt-0.5 font-medium">
                  {currentQ.explanation.whatItTests}
                </p>
              </div>

              {/* The Trap */}
              <div className="p-3 bg-amber-50/70 border border-amber-200/70 rounded-lg">
                <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>המלכודת שבה נופלים אנשים ישרים:</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950 mt-1 leading-relaxed">
                  {currentQ.explanation.theTrap}
                </p>
              </div>

              {/* Recommended Approach */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-200/70 rounded-lg">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>הגישה הנכונה:</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 mt-1 leading-relaxed">
                  {currentQ.explanation.recommendedApproach}
                </p>
              </div>

              {/* Midot specific tip */}
              <div className="flex items-start gap-2 text-xs text-slate-600 pt-1">
                <span className="font-bold text-indigo-700 shrink-0">תובנת מידות:</span>
                <span>{currentQ.explanation.midotInsight}</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center justify-between gap-3 mt-8 pt-4 border-t border-slate-100">
          <button
            onClick={handlePrev}
            disabled={safeIdx === 0}
            className={`px-4 py-2 rounded-xl text-sm font-medium border border-slate-200 transition-colors ${
              safeIdx === 0
                ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-50'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            שאלה קודמת
          </button>

          <div className="flex items-center gap-2">
            {answeredCount === questionsData.length && (
              <button
                onClick={() => onComplete(selectedAnswers)}
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-sm transition-all"
              >
                <Award className="w-4 h-4" />
                <span>צפה בדוח האבחון המסכם</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-sm transition-all"
            >
              <span>{safeIdx === filteredQuestions.length - 1 ? 'סיכום' : 'שאלה הבאה'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
