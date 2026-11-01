import React from 'react';
import { QuestionOption, questionsData } from '../data/questionsData';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Award, 
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface DiagnosticsViewProps {
  userAnswers: Record<number, QuestionOption>;
  onRetake: () => void;
  onGoToTraps: () => void;
}

export const DiagnosticsView: React.FC<DiagnosticsViewProps> = ({ 
  userAnswers, 
  onRetake, 
  onGoToTraps 
}) => {
  const answeredCount = Object.keys(userAnswers).length;

  if (answeredCount === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-slate-200 shadow-sm max-w-xl mx-auto space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
          <Award className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-800">טרם השלמת שאלות בסימולטור</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          כדי לקבל ניתוח פסיכולוגי מדויק של מדד היושרה, סולם השקר והעקביות שלך, עליך לענות על השאלות בסימולטור.
        </p>
        <button
          onClick={onRetake}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 shadow-sm transition-all"
        >
          <span>התחל תרגול בסימולטור עכשיו</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // Calculate scores
  let totalIntegrity = 0;
  let lieScaleViolations = 0;
  let lieScaleTotal = 0;

  Object.entries(userAnswers).forEach(([qIdStr, opt]) => {
    const qId = Number(qIdStr);
    const q = questionsData.find(item => item.id === qId);
    totalIntegrity += opt.scoreImpact.integrity;

    if (q?.category === 'lie_scale') {
      lieScaleTotal++;
      if (opt.scoreImpact.lieScaleRisk === 'high') {
        lieScaleViolations++;
      }
    }
  });

  const avgIntegrity = Math.round(totalIntegrity / answeredCount);

  // Check consistency for paired questions
  let consistencyScore = 100;
  let inconsistenciesFound: string[] = [];

  // Pair 1 & 6 (Honesty / White lies)
  const ans1 = userAnswers[1];
  const ans6 = userAnswers[6];
  if (ans1 && ans6) {
    const q1Admits = ans1.id === '1a';
    const q6Admits = ans6.id === '6a';
    if (q1Admits !== q6Admits) {
      consistencyScore -= 35;
      inconsistenciesFound.push('סתירה בעמדה לגבי אמירת שקרים לבנים בעבר (שאלות 1 ו-6).');
    }
  }

  // Pair 4 & 17 (Human emotions: anger and jealousy)
  const ans4 = userAnswers[4];
  const ans17 = userAnswers[17];
  if (ans4 && ans17) {
    const q4Admits = ans4.id === '4a';
    const q17Admits = ans17.id === '17a';
    if (q4Admits !== q17Admits) {
      consistencyScore -= 30;
      inconsistenciesFound.push('חוסר עקביות בהודאה ברגשות אנושיים טבעיים (שאלות 4 ו-17).');
    }
  }

  consistencyScore = Math.max(20, consistencyScore);

  // Determine Lie Scale status
  let lieScaleStatus: { title: string; desc: string; color: string; badge: string };
  if (lieScaleViolations >= 2) {
    lieScaleStatus = {
      title: 'סכנת פסילה אוטומטית! (מדד שקר חריג)',
      desc: 'ענית שמעולם לא שיקרת או לעולם לא כעסת. במבחן מידות, תוצאה כזו מגדירה את המועמד כ"מניפולטיבי / מנסה להצטייר כמושלם", והמערכת פוסלת את המבחן!',
      color: 'bg-rose-50 border-rose-200 text-rose-900',
      badge: 'סכנת פסילה גבוהה'
    };
  } else if (lieScaleViolations === 1) {
    lieScaleStatus = {
      title: 'מדד שקר גבולי',
      desc: 'באחת השאלות ניסית להציג שלמות יתר. שים לב להודות בחולשות אנושיות אוניברסליות קלות.',
      color: 'bg-amber-50 border-amber-200 text-amber-900',
      badge: 'גבולי - יש לתקן'
    };
  } else {
    lieScaleStatus = {
      title: 'מדד סולם שקר תקין לחלוטין',
      desc: 'הפגנת בגרות, אותנטיות וכנות אנושית. המבחן מזהה אותך כמועמד אמיתי ואמין.',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      badge: 'מצוין ותקין'
    };
  }

  return (
    <div className="space-y-6">
      {/* Top Summary Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-100">
                דוח סיכום מקצועי
              </span>
              <span className="text-xs text-slate-400">
                נענו {answeredCount} מתוך {questionsData.length} שאלות
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              ניתוח פרופיל המהימנות שלך לקראת מבחן מידות
            </h2>
          </div>

          <button
            onClick={onRetake}
            className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs sm:text-sm font-semibold transition-all"
          >
            <RotateCcw className="w-4 h-4 text-slate-500" />
            <span>התחל תרגול מחדש</span>
          </button>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* 1. Integrity Score */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-xs font-bold text-slate-500 uppercase">ציון יושרה וציות</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-black text-indigo-600">{avgIntegrity}%</span>
              <span className="text-xs text-slate-500">
                {avgIntegrity >= 80 ? 'רמה גבוהה' : avgIntegrity >= 60 ? 'רמה סבירה' : 'דרוש שיפור'}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full mt-3 overflow-hidden">
              <div 
                className="h-full bg-indigo-600 transition-all duration-500"
                style={{ width: `${avgIntegrity}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              משקלל עמדות כלפי גניבה, דיווח על חריגות וציות לנהלי מקום העבודה.
            </p>
          </div>

          {/* 2. Lie Scale Indicator */}
          <div className={`p-5 rounded-2xl border ${lieScaleStatus.color}`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase">סולם שקר ורצייה חברתית</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/80 shadow-2xs">
                {lieScaleStatus.badge}
              </span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-2xl font-black">
                {lieScaleViolations === 0 ? 'תקין' : `${lieScaleViolations} מלכודות`}
              </span>
            </div>
            <p className="text-xs mt-2 leading-relaxed font-medium">
              {lieScaleStatus.desc}
            </p>
          </div>

          {/* 3. Consistency */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-xs font-bold text-slate-500 uppercase">מדד עקביות (Consistency)</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className={`text-3xl font-black ${consistencyScore >= 80 ? 'text-emerald-600' : 'text-rose-600'}`}>
                {consistencyScore}%
              </span>
              <span className="text-xs text-slate-500">
                {consistencyScore >= 80 ? 'ללא סתירות פנימיות' : 'אותרו סתירות בין שאלות'}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full mt-3 overflow-hidden">
              <div 
                className={`h-full ${consistencyScore >= 80 ? 'bg-emerald-500' : 'bg-rose-500'} transition-all duration-500`}
                style={{ width: `${consistencyScore}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              בוחן אם שמרת על קו אחיד בשאלות שחזרו על עצמן בהיפוך ניסוח.
            </p>
          </div>
        </div>
      </div>

      {/* Actionable Recommendations Checklist */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <span>המלצות זהב עבורך לקראת המבחן האמיתי במידות</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>הסר חשש: אל תנסה להיראות ללא חטא</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              הפחד להיראות "לא מושלם" הוא הגורם המרכזי לנפילת מועמדים ישרים. זכור: כששואלים אותך אם שיקרת שקר לבן או כעסת, השב בחיוב. זה מה שיוכיח שאתה דובר אמת.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>עמדה חד-משמעית בענייני כספים וציוד</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              בכל הנוגע לנטילת רכוש של החברה, עודף שגוי בחנות, או זיוף שעות – עמדתך צריכה להיות מחמירה, ללא גמגום וללא פשרות.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>קצב מענה רציף וזורם</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              ענה על השאלות בקצב טבעי. אל תשהה דקות ארוכות על שאלה בודדת כדי למנוע ציון היסוס גבוה באלגוריתם של מידות.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>שמירה על קור רוח וביטחון</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              אתה אדם ישר ואמין. המבחן בודק עקביות ויושרה. ברגע שאתה מבין את מבנה המלכודות, אין שום סיבה לחשוש ממנו!
            </p>
          </div>
        </div>

        <div className="pt-4 flex items-center justify-between">
          <button
            onClick={onGoToTraps}
            className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>למד עוד על 4 המלכודות המרכזיות במדריך המלא</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
