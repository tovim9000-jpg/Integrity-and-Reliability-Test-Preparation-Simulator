import React from 'react';
import { guidesData } from '../data/guidesData';
import { AlertTriangle, CheckCircle2, XCircle, ShieldAlert, Zap, HelpCircle } from 'lucide-react';

export const TrapsGuide: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Intro Hero */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-2xl p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/30">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
              המדריך הקריטי למבחני מידות
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              4 המלכודות הפסיכולוגיות שמכשילות אנשים ישרים
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5 leading-relaxed">
              רוב האנשים שנכשלים במבחן אמינות הם אנשים ישרים ונורמטיביים לחלוטין. הם נכשלים לא בגלל שהם רמאים,
              אלא בגלל שהם לא מבינים איך אלגוריתם המבחן פועל ונופלים למלכודות מתוחכמות של <strong>סולם השקר</strong>, <strong>סתירות עקביות</strong> ו<strong>רצייה חברתית</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Traps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guidesData.map((trap, idx) => (
          <div
            key={trap.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                  {trap.badge}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  מלכודת #{idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {trap.title}
              </h3>
              <p className="text-xs font-medium text-slate-500 mb-4">
                {trap.subtitle}
              </p>

              <div className="space-y-2 mb-4">
                {trap.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Rules List */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                {trap.rules.map((rule, rIdx) => (
                  <div
                    key={rIdx}
                    className={`p-3 rounded-xl border text-xs sm:text-sm ${
                      rule.isDanger
                        ? 'bg-rose-50/70 border-rose-200 text-rose-950'
                        : 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5 mb-0.5">
                      {rule.isDanger ? (
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      )}
                      <span>{rule.title}</span>
                    </div>
                    <p className="text-slate-600 pr-5 leading-normal">{rule.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Example dilemma if available */}
            {trap.exampleDilemma && (
              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>דוגמה מתוך המבחן: "{trap.exampleDilemma.question}"</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-rose-800 bg-rose-50 p-2 rounded-lg border border-rose-100">
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                    <div>
                      <span className="font-bold">תשובה שגויה שמכשילה:</span> "{trap.exampleDilemma.wrongAnswer}"
                      <p className="text-slate-500 mt-0.5">{trap.exampleDilemma.wrongWhy}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-emerald-800 bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                    <div>
                      <span className="font-bold">תשובה נכונה ואמינה:</span> "{trap.exampleDilemma.correctAnswer}"
                      <p className="text-slate-500 mt-0.5">{trap.exampleDilemma.correctWhy}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Practical Midot Summary Box */}
      <div className="bg-indigo-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 mb-3">
          <HelpCircle className="w-5 h-5 text-indigo-300" />
          <span>עקרון הזהב למבחן בחברת מידות</span>
        </h3>
        <p className="text-sm sm:text-base text-indigo-100 leading-relaxed mb-4">
          אל תנסה להתחכם או "לנחש מה המחשב רוצה לשמוע". הכלל הפשוט ביותר:
          <strong> היה אדם נורמטיבי והגון, אך אל תהיה מלאך.</strong>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="bg-indigo-800/60 p-3.5 rounded-xl border border-indigo-700/60">
            <span className="font-bold block text-indigo-200 mb-1">1. הכר בחולשות אנוש</span>
            <span>איחרת פעם? אמרת שקר לבן? כעסת? השב בביטחון "כן". זה מה ששומר עליך בסולם השקר.</span>
          </div>
          <div className="bg-indigo-800/60 p-3.5 rounded-xl border border-indigo-700/60">
            <span className="font-bold block text-indigo-200 mb-1">2. אפס סובלנות לגניבה</span>
            <span>גניבה, זיוף שעות, מעילה, או שוחד - עמדה חד-משמעית וחדה נגד.</span>
          </div>
          <div className="bg-indigo-800/60 p-3.5 rounded-xl border border-indigo-700/60">
            <span className="font-bold block text-indigo-200 mb-1">3. עקביות לאורך כל המבחן</span>
            <span>אותו עיקרון בדיוק צריך להנחות אותך בשאלה 1, בשאלה 50 ובשאלה 120.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
