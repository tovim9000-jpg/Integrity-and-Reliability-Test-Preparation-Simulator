import React from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  AlertCircle, 
  Layers, 
  Award,
  Zap,
  FileText,
  AlertTriangle,
  Compass
} from 'lucide-react';

export const GuidesView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-100">
                מדריך מקיף לנבחן
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-100">
                מבוסס IntegriTEST ומכון אקסלנס
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              כל מה שצריך לדעת על מבחן מהימנות במידות (IntegriTEST)
            </h2>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              הכנה יסודית היא המפתח להורדת מפלס החרדה ולהצלחה במבחן. כאן תמצא את פירוט השלבים, הדגשים וצורת ההערכה של מכוני המיון המובילים בישראל.
            </p>
          </div>
        </div>

        {/* 4 Pillars of the exam */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">יושרה אישית ישירה</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              שאלות על גניבה, מעילה בכספים, זיוף מסמכים או קבלת טובות הנאה.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2 font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">דיווח ונאמנות לארגון</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              בדיקת התגובה שלך כשתראה עמית מבצע עבירה - האם תעדיף דיווח או שתיקה.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2 font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">ציות ומשמעת</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              יחס לנהלים, קבלת סמכות, שמירה על סודיות ועמידה בהוראות בטיחות.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center mb-2 font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">סולם שקר ובקרת אמינות</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              אלגוריתם המאתר ניסיונות ייפוי מציאות, שאלות כפולות ומדדי עקביות.
            </p>
          </div>
        </div>
      </div>

      {/* IntegriTEST & Excellence Deep Dive */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-5">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-600" />
          <h3 className="text-lg font-bold text-slate-900">
            דגשים ייחודיים מתוך מודל IntegriTEST של חברת מידות
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-indigo-900">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span>מבנה המבחן וזמנים</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              המבחן מכיל בין <strong>96 ל-194 פריטים</strong> (בהתאם לרגישות התפקיד) ונמשך בדרך כלל כ-20 דקות. הוא מתבצע אונליין ללא אפשרות לחזור אחורה בין מסכים.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-900">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>איך המעסיק קורא את התוצאה?</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              אין "ציון עובר" של 60 או 80. המערכת מפיקה <strong>רמת סיכון</strong>: ירוק (סיכון נמוך ומומלץ להעסקה), צהוב (סיכון בינוני עם שאלות חידוד לראיון), או אדום (סיכון גבוה עקב עמדות מקלות או פסילה בסולם שקר).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-amber-100 bg-amber-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>המלכודת של תשובות ניטרליות ("באמצע")</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              בשאלות סולם (1 עד 4 או 1 עד 5), מועמדים רבים נוטים לבחור באפשרות האמצע ("לא בטוח / ניטרלי"). במבחן מידות, ריבוי תשובות ניטרליות מתפרש כהתחמקות וחשש מחשיפת עמדות, ומוריד את המהימנות.
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-indigo-600" />
          <span>שאלות ותשובות נפוצות (FAQ) לקראת המבחן</span>
        </h3>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-slate-200 space-y-1">
            <h4 className="text-sm font-bold text-slate-800">
              ש: האם המבחן בודק את קצב ההקלדה או זמן המענה שלי?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ת: כן. מבחני מהימנות ממוחשבים עוקבים אחר זמני תגובה. זמן מענה סביר על שאלה הוא בין 3 ל-10 שניות. התלבטות ממושכת מדי עשויה להתפרש כחישוב מניפולטיבי של התשובה. השתדל לענות באופן רציף ובביטחון.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 space-y-1">
            <h4 className="text-sm font-bold text-slate-800">
              ש: מה לעשות אם שואלים אותי על שימוש בסמים קלים או עבירות תנועה בעבר?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ת: לגבי עבירות תנועה קלות (כמו חניה או מהירות קלה) – רוב המועמדים עונים בכנות שקרה שקיבלו דוח בעבר. לגבי סמים או הימורים – רוב החברות מחפשות לוודא שאין שימוש פעיל או התמכרות שעלולה לפגוע בעבודה או להוביל לסיכון ביטחוני/פיננסי.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 space-y-1">
            <h4 className="text-sm font-bold text-slate-800">
              ש: האם אפשר לתקן תשובה אחרי שלחצתי עליה?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ת: ברוב המבחנים של מידות המערכת מתקדמת אוטומטית לשאלה הבאה ואין כפתור "חזור". לכן קרא היטב את נוסח השאלה, שים לב לשלילות כפולות, ולחץ מתוך ריכוז.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 space-y-1">
            <h4 className="text-sm font-bold text-slate-800">
              ש: אני אדם ישר, למה אני כל כך מפחד מהשאלות המכשילות?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ת: חרדת בחינות היא תופעה טבעית לחלוטין. הפחד מגיע מהתחושה שהמבחן מנסה "לתפוס אותך במילה". ברגע שהבנת שהמבחן מחפש אדם נורמטיבי (ולא מלאך נטול פגמים) שמקפיד על יושרה מול רכוש וכספי החברה – אתה מגיע עם ביטחון עצמי מלא.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
