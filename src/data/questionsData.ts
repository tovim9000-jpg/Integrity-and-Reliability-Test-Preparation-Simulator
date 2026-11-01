export interface QuestionOption {
  id: string;
  text: string;
  scoreImpact: {
    integrity: number; // 0 to 100
    lieScaleRisk: 'none' | 'low' | 'medium' | 'high'; // high means trying too hard to look perfect
    isRecommended: boolean;
  };
}

export interface Question {
  id: number;
  pairId?: number; // for consistency tracking
  category: 'lie_scale' | 'theft_attitudes' | 'reporting_loyalty' | 'work_ethics' | 'rules_compliance' | 'confidentiality_security' | 'past_conduct';
  categoryTitle: string;
  question: string;
  type: 'yes_no' | 'scale' | 'multiple';
  options: QuestionOption[];
  explanation: {
    whatItTests: string;
    theTrap: string;
    recommendedApproach: string;
    midotInsight: string;
  };
}

export const questionsData: Question[] = [
  {
    id: 1,
    pairId: 101,
    category: 'lie_scale',
    categoryTitle: 'סולם שקר ורצייה חברתית',
    question: 'האם שיקרת אי פעם בחייך, אפילו שקר לבן קטן?',
    type: 'yes_no',
    options: [
      {
        id: '1a',
        text: 'כן, קרה ששיקרתי שקר לבן קטן או לא מהותי בעבר.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '1b',
        text: 'לא, מעולם לא הוצאתי שקר מפי, אפילו לא שקר קטן.',
        scoreImpact: { integrity: 20, lieScaleRisk: 'high', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'סולם שקר (Lie Scale / Social Desirability) - בדיקת אמינות הנבדק מול עצמו.',
      theTrap: 'אנשים ישרים חושבים בטעות: "אם אגיד ששיקרתי, יחשבו שאני שקרן!". בפועל, אין אדם בוגר שלא אמר שקר לבן בחייו ("אני בדרך", "החולצה יפה"). תשובה של "לעולם לא" מסמנת למערכת שאתה מזייף תוצאות ומנסה להצטייר כמלאך, וזה פוסל את המבחן!',
      recommendedApproach: 'להודות בחולשות אנושיות אוניברסליות קלות. להשיב "כן". אדם ישר מכיר במציאות.',
      midotInsight: 'במבחני מידות, ציון גבוה מדי בסולם שקר פוסל את כל המבחן כ"בלתי אמין עקב ניסיון להטיה חיובית".'
    }
  },
  {
    id: 2,
    pairId: 102,
    category: 'theft_attitudes',
    categoryTitle: 'עמדות כלפי יושרה וגניבה',
    question: 'האם אתה מאמין שרוב האנשים יקחו כסף מהעבודה אם הם בטוחים ב-100% שלעולם לא ייתפסו?',
    type: 'scale',
    options: [
      {
        id: '2a',
        text: 'ממש לא מסכים - רוב האנשים ישרים מעצם טבעם ולא יגנבו.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '2b',
        text: 'נוטה לא להסכים - יש אנשים שיפתו, אך רוב הנורמטיביים לא יעשו זאת.',
        scoreImpact: { integrity: 85, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '2c',
        text: 'מסכים במידה מסוימת - הפיתוי קיים אצל רבים.',
        scoreImpact: { integrity: 45, lieScaleRisk: 'low', isRecommended: false }
      },
      {
        id: '2d',
        text: 'מסכים בהחלט - כל אדם היה לוקח אם היה בטוח שלא ייתפס.',
        scoreImpact: { integrity: 15, lieScaleRisk: 'low', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'השלכה פסיכולוגית ועמדות כלפי נורמות חברתיות של יושרה.',
      theTrap: 'אנשים חושבים לפעמים שלהיות "ציני" או "מציאותי" מעיד על פתיחות. בפסיכולוגיה תעסוקתית, מי שמאמין ש"כולם גנבים" נתפס כמי שנותן לעצמו הכשר מוסרי לגנוב ("אם כולם לוקחים, למה לא אני?").',
      recommendedApproach: 'לבטא אמונה שנורמת הבסיס האנושית במקום העבודה היא יושרה ולא מעילה.',
      midotInsight: 'מבחן מידות מזהה עמדות סלחניות כלפי גניבה כנורת אזהרה קריטית לסיכון מועמד.'
    }
  },
  {
    id: 3,
    pairId: 103,
    category: 'reporting_loyalty',
    categoryTitle: 'נאמנות לצוות מול דיווח על עבירה',
    question: 'גילית שחבר טוב שלך בעבודה מעביר כרטיס נוכחות עבור עובד אחר שלא הגיע. מה תעשה?',
    type: 'multiple',
    options: [
      {
        id: '3a',
        text: 'אדבר איתו קודם באופן אישי, אבהיר לו שזה פסול ואדרוש שיפסיק מייד. אם ימשיך, אדווח להנהלה.',
        scoreImpact: { integrity: 80, lieScaleRisk: 'low', isRecommended: false }
      },
      {
        id: '3b',
        text: 'אדווח לממונה הישיר או למחלקת משאבי אנוש, כי מדובר ברישום כוזב ופגיעה בארגון.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '3c',
        text: 'לא אתערב, זה לא ענייני ואני לא רוצה להרוס חברות או להלשין על קולגות.',
        scoreImpact: { integrity: 20, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '3d',
        text: 'אתעלם, כולם עושים את זה לפעמים בין חברים.',
        scoreImpact: { integrity: 10, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'נאמנות ארגונית מול "סולידריות חברית" בעבירות משמעת ושכר.',
      theTrap: 'מועמדים חוששים להיראות "מלשינים" ובוחרים באפשרות של התעלמות או פתרון בינאישי בלבד. עבור המעסיק, עובד שיודע על רמאות בשעות ומסתיר אותה מסייע לגזל כספי החברה.',
      recommendedApproach: 'הארגון מצפה לדיווח ולשמירה על החוק והנהלים. בדילמות מובהקות של גניבה, דיווח הוא התשובה המצופה.',
      midotInsight: 'בסעיפי "דיווח ומניעת אובדן" (Loss Prevention), התעלמות מעבירה נחשבת כשותפות פסיבית.'
    }
  },
  {
    id: 4,
    pairId: 104,
    category: 'lie_scale',
    categoryTitle: 'סולם שקר ורצייה חברתית',
    question: 'האם קרה שהתעצבנת או כעסת על מישהו בעבודה או בלימודים בעבר?',
    type: 'yes_no',
    options: [
      {
        id: '4a',
        text: 'כן, היו מקרים שהרגשתי כעס או תסכול, אך השתדלתי להתמודד בצורה מקצועית.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '4b',
        text: 'לא, אני אדם רגוע שתמיד מחייך ואף פעם לא הרגשתי כעס על אף אחד.',
        scoreImpact: { integrity: 15, lieScaleRisk: 'high', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'שאלת מלכודת מובהקת בסולם שקר ובקרת אמינות.',
      theTrap: 'הניסיון להציג אישיות ללא רגשות שליליים כלל. כל אדם חווה כעס מתישהו. תשובה של "אף פעם" אינה אמינה.',
      recommendedApproach: 'להודות ברגש הטבעי (כעס), תוך הדגשת ויסות ושליטה בהתנהגות.',
      midotInsight: 'אל תפחד מלהודות ברגשות אנושיים - המבחן בודק התנהגות ויושרה, לא קדושה.'
    }
  },
  {
    id: 5,
    pairId: 105,
    category: 'theft_attitudes',
    categoryTitle: 'עמדות כלפי יושרה וגניבה',
    question: 'עובד לקח הביתה חבילת דפים וכמה עטים ממשרד החברה לשימוש ילדיו בבית הספר. כיצד תגדיר זאת?',
    type: 'multiple',
    options: [
      {
        id: '5a',
        text: 'מעשה חמור ובלתי תקין המהווה שימוש בלתי מורשה ברכוש החברה.',
        scoreImpact: { integrity: 90, lieScaleRisk: 'low', isRecommended: true }
      },
      {
        id: '5b',
        text: 'דבר שגרתי שרוב העובדים עושים ומעסיקים מעלימים ממנו עין.',
        scoreImpact: { integrity: 30, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '5c',
        text: 'זכות לגיטימית של העובד כחלק מההטבות של מקום העבודה.',
        scoreImpact: { integrity: 10, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'גבולות רכוש החברה וגניבות קטנות ("ציוד משרדי").',
      theTrap: 'מועמדים רבים מקלים ראש בציוד משרדי. מבחני אמינות בודקים אם יש לך גבול ברור בין רכוש אישי לרכוש המעסיק.',
      recommendedApproach: 'הגדרה ברורה שציוד החברה שייך לחברה ואינו מיועד לחלוקה פרטית ללא רשות.',
      midotInsight: 'מדד ה"גניבות הקטנות" במבחן מנבא זליגת רכוש וקלות דעת בנוהלי מלאי.'
    }
  },
  {
    id: 6,
    pairId: 101, // pair with question 1!
    category: 'work_ethics',
    categoryTitle: 'עקביות ואימות תשובות',
    question: 'במהלך חייך הבוגרים, האם תמיד אמרת אך ורק את האמת בכל מצב ובכל שיחה?',
    type: 'yes_no',
    options: [
      {
        id: '6a',
        text: 'השתדלתי ככל יכולתי להיות ישר, אך היו מקרים שנאלצתי להגיד שקר לבן או לעגל פינה.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '6b',
        text: 'כן, ב-100% מהמקרים אמרתי תמיד אך ורק את האמת המוחלטת ללא יוצא מן הכלל.',
        scoreImpact: { integrity: 20, lieScaleRisk: 'high', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'בדיקת עקביות (Consistency Check) מול שאלה 1.',
      theTrap: 'שאלות אלו חוזרות בניסוח שונה בהפרש של עשרות שאלות. מי שמנסה לזייף תשובות מתבלבל וסותר את עצמו. סתירה כאן מורידה דרסטית את ציון העקביות.',
      recommendedApproach: 'לשמור על עקביות מוחלטת עם התשובה לשאלה 1 - להודות באנושיות.',
      midotInsight: 'אלגוריתם מידות מחשב מדד "חוסר עקביות" (Inconsistency Index). פער בין שאלות דומות מקפיץ התראה למגייס.'
    }
  },
  {
    id: 7,
    pairId: 107,
    category: 'rules_compliance',
    categoryTitle: 'ציות לנהלים ומשמעת',
    question: 'אם נוהל עבודה מסוים נראה לך מיותר ומאט את קצב העבודה שלך, מה הנכון לעשות?',
    type: 'multiple',
    options: [
      {
        id: '7a',
        text: 'להמשיך לפעול לפי הנוהל הקיים, ובמקביל לפנות למנהל ולהציע לייעל אותו בצורה מסודרת.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '7b',
        text: 'לעקוף את הנוהל על דעת עצמי כל עוד העבודה מתבצעת מהר יותר.',
        scoreImpact: { integrity: 25, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '7c',
        text: 'להתעלם מהנוהל אם אף אחד לא בודק.',
        scoreImpact: { integrity: 10, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'משמעת עצמית וקבלת מרות מול עצמאות מזיקה.',
      theTrap: 'מועמדים שרוצים להציג "ראש גדול" טוענים שהם עוקפים נהלים כדי להספיק יותר. מעסיקים רואים בזה סיכון בטיחותי ומשמעתי.',
      recommendedApproach: 'שמירה על הנהלים כבסיס, ושינויים רק בערוצים מוסמכים ובאישור מנהל.',
      midotInsight: 'עקיפת נהלים מיוחסת לחוסר ציות (Non-compliance), מדד שנבדק בקפידה בתפקידי אמון.'
    }
  },
  {
    id: 8,
    pairId: 108,
    category: 'lie_scale',
    categoryTitle: 'סולם שקר ורצייה חברתית',
    question: 'האם קרה שאיחרת לפגישה או לעבודה, או דחית משימה לרגע האחרון?',
    type: 'yes_no',
    options: [
      {
        id: '8a',
        text: 'כן, היו מקרים נדירים שבהם איחרתי או התעכבתי בגלל נסיבות שונות.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '8b',
        text: 'לעולם לא. אני מדייק תמיד בכל שנייה ומעולם לא דחיתי דבר.',
        scoreImpact: { integrity: 15, lieScaleRisk: 'high', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'סולם אמינות עצמית ומודעות עצמית.',
      theTrap: 'ההנחה שחובה להיראות "רובוט מושלם". פקקים, בעיות בלתי צפויות ועיכובים קורים לכל אדם.',
      recommendedApproach: 'להודות שקרה בעבר, מתוך אחריות בוגרת ולא מתוך זיוף שלמות.',
      midotInsight: 'תשובות מוחלטות כמו "לעולם לא" על שאלות אנושיות מקפיצות את סולם השקר לרמה אדומה.'
    }
  },
  {
    id: 9,
    pairId: 109,
    category: 'theft_attitudes',
    categoryTitle: 'עמדות כלפי יושרה וגניבה',
    question: 'אם קופאי בחנות החזיר לך בטעות 50 שקלים עודף יותר ממה שהגיע לך, מה תעשה?',
    type: 'multiple',
    options: [
      {
        id: '9a',
        text: 'אחזיר מייד את הכסף לקופאי ואסב את תשומת לבו לטעות.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '9b',
        text: 'אשמור את הכסף, זו טעות שלו ולא בעיה שלי.',
        scoreImpact: { integrity: 10, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '9c',
        text: 'תלוי אם אני ממהר או כמה כסף יש לי באותו רגע.',
        scoreImpact: { integrity: 25, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'יושרה בסיסית בהזדמנות אנונימית (Integrity in opportunity).',
      theTrap: 'אין כאן מלכודת שקר - אדם ישר באמת מחזיר עודף שגוי ולא רואה בו "רווח קל".',
      recommendedApproach: 'להחזיר את הכסף. יושרה נמדדת במקומות שבהם קל לקחת בלי שאיש ידע.',
      midotInsight: 'שאלות יושרה ישירות דורשות עמדה חד-משמעית וחדה, ללא גמגום או ספק.'
    }
  },
  {
    id: 10,
    pairId: 110,
    category: 'reporting_loyalty',
    categoryTitle: 'נאמנות לצוות מול דיווח על עבירה',
    question: 'האם היית מסכים לחתום על מסמך המאשר בדיקה או קבלת סחורה שטרם בדקת בפועל, רק כי הממונה ביקש בדחיפות?',
    type: 'yes_no',
    options: [
      {
        id: '10a',
        text: 'לא, חתימתי היא אישור אישי שלי. אבדוק את הסחורה קודם או אסביר שאני לא יכול לאשר ללא בדיקה.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '10b',
        text: 'כן, אם הממונה לוקח על כך אחריות מלאה ומבקש זאת במפורש.',
        scoreImpact: { integrity: 40, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'עמידה בלחץ סמכותי וסירוב לפעולה לא חוקית / כוזבת.',
      theTrap: 'מועמדים חושבים ש"ציות עיוור" לממונה הוא מה שמחפשים. אך חתימה על דבר שקרי מסכנת את הארגון בהונאה.',
      recommendedApproach: 'סירוב מנומס ועמידה על העיקרון: לא חותמים על דבר שלא אומת.',
      midotInsight: 'אחריות אישית לחתימה היא קריטית במיוחד בתפקידי פיננסים, מלאי וניהול.'
    }
  },
  {
    id: 11,
    pairId: 111,
    category: 'lie_scale',
    categoryTitle: 'סולם שקר ורצייה חברתית',
    question: 'האם קרה שדיברת על מישהו מאחורי גבו או שיתפת רכילות קלה בעבר?',
    type: 'yes_no',
    options: [
      {
        id: '11a',
        text: 'כן, קרה שדיברתי על מישהו או הייתי שותף לשיחת רכילות בעבר, למרות שאני משתדל להימנע מכך.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '11b',
        text: 'מעולם לא. מעולם לא אמרתי מילה אחת על אדם שלא בנוכחותו.',
        scoreImpact: { integrity: 15, lieScaleRisk: 'high', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'שאלת מלכודת סולם שקר קלאסית בפסיכולוגיה תעסוקתית.',
      theTrap: 'ההנחה שאם תודה ברכילות יחשבו שאתה סכסכן. ההפך הוא הנכון: אין אדם בעולם שלא דיבר אי פעם על אדם אחר. תשובה של "מעולם לא" מובילה לפסילת אמינות.',
      recommendedApproach: 'להודות שזה קרה בעבר, מתוך מודעות עצמית ורצון לצמצם התנהגות זו.',
      midotInsight: 'שאלות על רכילות וכעס הן מדדים מהימנים לזיהוי זיוף תשובות מכוון.'
    }
  },
  {
    id: 12,
    pairId: 112,
    category: 'rules_compliance',
    categoryTitle: 'ציות לנהלים ואבטחת מידע',
    question: 'עמית לעבודה מבקש ממך את הסיסמה האישית שלך למערכת הארגונית כדי להוציא דו"ח דחוף בזמן שאתה יוצא להפסקת צהריים. כיצד תגיב?',
    type: 'multiple',
    options: [
      {
        id: '12a',
        text: 'אסרב למסור את הסיסמה. אציע להוציא את הדו"ח בעצמי לפני היציאה להפסקה או שאדריך אותו כיצד לקבל הרשאה מתאימה.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '12b',
        text: 'אמסור לו את הסיסמה באופן חד פעמי בלבד, מתוך הנחה שהוא קולגה שאפשר לסמוך עליו.',
        scoreImpact: { integrity: 35, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '12c',
        text: 'אשאיר את המחשב שלי פתוח ומחובר כדי שיוכל לעבוד מבלי שידע את הסיסמה.',
        scoreImpact: { integrity: 25, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'הקפדה על אבטחת מידע ואחריות אישית להרשאות גישה.',
      theTrap: 'מועמדים רבים רוצים להיראות "חבריים ועוזרים" ולכן מתפתים למסור סיסמה. מבחינת אבטחת מידע וניהול סיכונים, מסירת סיסמה היא הפרת משמעת חמורה שמוחקת את שרשרת האחריות.',
      recommendedApproach: 'עמידה על עקרון אבטחת המידע: סיסמה אישית אינה מועברת לאף אדם, גם לא לקולגה קרוב.',
      midotInsight: 'בתפקידי טכנולוגיה, פיננסים ומשרד, שאלות אבטחת מידע מהוות תנאי סף למעבר.'
    }
  },
  {
    id: 13,
    pairId: 113,
    category: 'theft_attitudes',
    categoryTitle: 'שוחד, מתנות וניגוד עניינים',
    question: 'ספק חיצוני שעובד מולך שולח לביתך הפרטי לקראת החגים מארז שי יוקרתי (בקבוק יין משובח ושוקולדים בשווי 500 ש"ח) ללא ידיעת המנהל שלך. מה תעשה?',
    type: 'multiple',
    options: [
      {
        id: '13a',
        text: 'אדווח מייד למנהל ולמחלקת משאבי אנוש ואפעל בהתאם לנוהל קבלת מתנות בארגון (החזרה או העברה לרווחת כלל העובדים).',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '13b',
        text: 'אקבל את השי בתודה ואשמור אותו בבית, הרי מדובר במחווה נחמדה לחג שאינה משפיעה על שיקול דעתי המקצועי.',
        scoreImpact: { integrity: 20, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '13c',
        text: 'אקח את השי אך ארמוז לספק שלא ישלח שוב בעתיד כדי למנוע אי נעימות.',
        scoreImpact: { integrity: 40, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'טוהר מידות, מניעת שוחד וקבלת טובות הנאה מספקים.',
      theTrap: 'מועמדים חושבים ש"זו רק מתנת חג סמלית" ושדחייתה תהיה חסרת נימוס. עבור מעסיקים, קבלת מתנה יקרה לבית יוצרת ניגוד עניינים ופתח לשוחד סמוי.',
      recommendedApproach: 'שקיפות מלאה מול הארגון: דיווח לממונה ופעולה לפי נוהל המתנות הארגוני.',
      midotInsight: 'עבירות קבלת טובות הנאה מדורגות במידות באותה חומרה כמו גניבה ישירה.'
    }
  },
  {
    id: 14,
    pairId: 114,
    category: 'theft_attitudes',
    categoryTitle: 'עמדות כלפי יושרה ורכוש החברה',
    question: 'בסוף היום במחסן, נותר פריט פגום שנרשם כ"בלאי להשמדה" ועומד להיזרק לפח. חבר לעבודה מציע: "במקום שייזרק, בוא ניקח אותו הביתה". מה עמדתך?',
    type: 'multiple',
    options: [
      {
        id: '14a',
        text: 'אסור לקחת ללא אישור מפורש בכתב מההנהלה. גם פריט בלאי הוא רכוש החברה.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '14b',
        text: 'אין בזה שום פסול כי החברה ממילא זורקת את זה לפח ולא נגרם שום נזק כספי.',
        scoreImpact: { integrity: 25, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '14c',
        text: 'אם אף אחד לא רואה זה בסדר, חבל שייזרק סתם.',
        scoreImpact: { integrity: 10, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'רציונליזציה של גניבה וטשטוש גבולות רכוש.',
      theTrap: 'רבים מנמקים ש"זה ממילא לפח". בפועל, זוהי שיטת מעילה ידועה שבה עובדים מסמנים פריטים תקינים כ"בלאי" כדי לקחתם הביתה.',
      recommendedApproach: 'קו ברור: רכוש הארגון שייך לארגון. לקיחה ללא אישור רשמי מוגדרת כגניבה.',
      midotInsight: 'בדיקת "בלאי וגרוטאות" היא אחד ממבחני המפתח לקבלה לעבודה ברשתות קמעונאות ולוגיסטיקה.'
    }
  },
  {
    id: 15,
    pairId: 115,
    category: 'work_ethics',
    categoryTitle: 'מוסר עבודה ושימוש בזמן החברה',
    question: 'האם קרה שבמהלך שעות העבודה השתמשת בטלפון הנייד להודעות פרטיות או שגלשת באינטרנט לצרכים אישיים?',
    type: 'yes_no',
    options: [
      {
        id: '15a',
        text: 'כן, היו מקרים ששלחתי הודעה דחופה או ביצעתי פעולה אישית קצרה, תוך שמירה על רצף המשימות בעבודה.',
        scoreImpact: { integrity: 90, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '15b',
        text: 'לעולם לא. במשך כל שעות העבודה שלי הטלפון נשאר בכיס ואני אף פעם לא עושה שום דבר אישי.',
        scoreImpact: { integrity: 25, lieScaleRisk: 'high', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'שילוב של סולם שקר (אותנטיות) ומוסר עבודה בסיסי.',
      theTrap: 'הטענה שמעולם לא הצצת בטלפון לאורך שנים של עבודה אינה אמינה בעולם המודרני ומעידה על ניסיון להציג שלמות פיקטיבית.',
      recommendedApproach: 'להודות בכנות שקורה שמשתמשים לצרכים קלים, תוך הדגשת אחריות שזה לא פוגע במטלות העבודה.',
      midotInsight: 'אלגוריתם המבחן יודע להתאים נורמות התנהגות מודרניות ואינו מצפה להתנזרות מוחלטת אלא לכנות ומידתיות.'
    }
  },
  {
    id: 16,
    pairId: 116,
    category: 'reporting_loyalty',
    categoryTitle: 'שמועות מול בדיקה עובדתית',
    question: 'שמעת שמועה בלתי מבוססת בקרב העובדים שאחד מאנשי הצוות מתכנן לגנוב ציוד יקר מהחברה בסוף השבוע. כיצד תפעל?',
    type: 'multiple',
    options: [
      {
        id: '16a',
        text: 'אעדכן בדיסקרטיות את קצין הביטחון או המנהל על המידע שנשמע, כדי שיוכלו לבדוק זאת בצינורות המקצועיים ללא האשמות שווא.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '16b',
        text: 'אתעלם לחלוטין מכיוון שזו שמועה ואינני מעוניין לעסוק ברכילות.',
        scoreImpact: { integrity: 40, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '16c',
        text: 'אנסה לעקוב אחרי העובד בעצמי כדי לתפוס אותו על חם.',
        scoreImpact: { integrity: 50, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'ערנות לאובדן ארגוני ופנייה לגורמים המוסמכים לעומת אדישות.',
      theTrap: 'ההתלבטות בין לא להפיץ רכילות לבין מניעת גניבה קונקרטית. הפתרון הנכון הוא לא לנהל חקירה פרטית ולא לשתוק, אלא להעביר את המידע למי שאחראי על הביטחון.',
      recommendedApproach: 'עדכון דיסקרטי של הממונה או הביטחון כדי לאפשר בדיקה מוסמכת ושקטה.',
      midotInsight: 'מעסיקים בוחנים האם המועמד מגלה אכפתיות וערנות לנזקים אפשריים לארגון.'
    }
  },
  {
    id: 17,
    pairId: 104, // paired with question 4!
    category: 'lie_scale',
    categoryTitle: 'עקביות וסולם שקר',
    question: 'האם הרגשת אי פעם בחייך קנאה בהצלחתו של אדם אחר?',
    type: 'yes_no',
    options: [
      {
        id: '17a',
        text: 'כן, זו תחושה אנושית טבעית שחוויתי בעבר, אם כי אני משתדל לפרגן ולהתמקד בהתקדמות האישית שלי.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '17b',
        text: 'לא, מעולם לא חלפה בי אפילו שמץ של קנאה כלפי שום אדם.',
        scoreImpact: { integrity: 15, lieScaleRisk: 'high', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'בדיקת סולם שקר (Social Desirability) ברגשות אנושיים עמוקים.',
      theTrap: 'קנאה היא רגש שנחשב "לא יפה", ולכן אנשים נרתעים מלהודות בו ומשיבים "לעולם לא". תשובה כזו מעלה חשד מיידי לחוסר כנות.',
      recommendedApproach: 'להודות בבגרות ברגש הטבעי תוך הדגשת הדרך הבוגרת שבה אתה מנתב אותו לפרגון ולצמיחה.',
      midotInsight: 'מי שמודה ברגשות אנושיים מקבל ציוני מהימנות גבוהים משמעותית ממי שמציג עצמו כנטול רגשות.'
    }
  },
  {
    id: 18,
    pairId: 118,
    category: 'rules_compliance',
    categoryTitle: 'לחץ לעמידה ביעדים מול שמירה על הנהלים',
    question: 'אתה עובד על פרויקט דחוף מאוד. המנהל אומר: "תדלג על בדיקת האיכות/בטיחות האחרונה כדי שנספיק לשלוח את זה בזמן ללקוח". כיצד תנהג?',
    type: 'multiple',
    options: [
      {
        id: '18a',
        text: 'אסביר למנהל שדילוג על בדיקת האיכות עלול לגרום לתקלה חמורה שתפגע במוניטין החברה ובלקוח, ואציע פתרון חלופי מזורז מבלי לוותר על הבטיחות.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '18b',
        text: 'אציית מיד ואדלג על הבדיקה, כי הוראת המנהל קודמת לנהלים.',
        scoreImpact: { integrity: 30, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '18c',
        text: 'אסרב בצעקות ואפסיק את העבודה על הפרויקט.',
        scoreImpact: { integrity: 20, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'עמידה בלחץ ביצועים, מקצועיות ושמירה על סטנדרטים ארגוניים.',
      theTrap: 'מועמדים חושבים ש"ציות עיוור" למנהל הוא מה שנדרש. בפועל, דילוג על בטיחות ואיכות עלול לגרום לתביעות ענק ולנזק קטסטרופלי לארגון.',
      recommendedApproach: 'שמירה על מקצועיות, הסברת הסיכון למנהל בצורה עניינית ומציאת פתרון מזורז שאינו פוגע בנהלים הקריטיים.',
      midotInsight: 'מבחני מידות בוחנים שיקול דעת מקצועי תחת לחץ (Stress Resilience & Integrity).'
    }
  },
  {
    id: 19,
    pairId: 119,
    category: 'past_conduct',
    categoryTitle: 'אלכוהול, סמים ומשמעת עבודה',
    question: 'האם שתית אי פעם משקה אלכוהולי במהלך יום העבודה (כולל בהפסקת צהריים) או הגעת לעבודה תחת השפעה?',
    type: 'multiple',
    options: [
      {
        id: '19a',
        text: 'לא, מעולם לא שתיתי אלכוהול בשעות העבודה או לפני משמרת, למעט הרמת כוסית רשמית באירוע חברה.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '19b',
        text: 'קרה ששתיתי בירה בהפסקת צהריים עם חברים, זה לא פגע בתפקודי.',
        scoreImpact: { integrity: 40, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '19c',
        text: 'אין בזה שום בעיה כל עוד מסיימים את המשימות.',
        scoreImpact: { integrity: 15, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'שמירה על צלילות, בטיחות ואחריות במקום העבודה (IntegriTEST Substance & Safety Module).',
      theTrap: 'ההבחנה הדקה בין סולם שקר להודאה בעבירה משמעתית. זו אינה שאלת סולם שקר! אי-שתיית אלכוהול בעבודה היא נורמה מוחלטת.',
      recommendedApproach: 'להבהיר שלא שותים אלכוהול במהלך יום עבודה (למעט כוסית סמלית בהרמת כוסית רשמית באישור ההנהלה).',
      midotInsight: 'הודאה בצריכת אלכוהול/חומרים בשעות עבודה מציבה את המועמד מיידית בקטגוריית "סיכון גבוה".'
    }
  },
  {
    id: 20,
    pairId: 120,
    category: 'theft_attitudes',
    categoryTitle: 'רציונליזציה וצידוק עבירות',
    question: 'היגד: "עובד ששכרו נמוך ומרגיש שהמעסיק מקפח אותו, רשאי לקחת לעצמו פיצוי קל מרכוש החברה". מהי מידת הסכמתך?',
    type: 'scale',
    options: [
      {
        id: '20a',
        text: 'ממש לא מסכים - קיפוח או שכר אינם מצדיקים גניבה בשום מצב.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '20b',
        text: 'נוטה לא להסכים - זה לא תקין, למרות שאפשר להבין את התסכול.',
        scoreImpact: { integrity: 65, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '20c',
        text: 'מסכים במידה מסוימת - אם המעסיק גוזל את העובד, העובד יחזיר לעצמו.',
        scoreImpact: { integrity: 20, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '20d',
        text: 'מסכים בהחלט - זהו פיצוי הוגן ומקובל.',
        scoreImpact: { integrity: 10, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'צידוק מוסרי לגניבה (Theft Rationalization) - בחינת רמת הסיכון של המועמד.',
      theTrap: 'הזדהות יתר עם "העובד המקופח". מועמדים חושבים שזה מעיד על אמפתיה. עבור מעסיק, אדם שמצדיק גניבה כפיצוי הוא סיכון מיידי למעילה כשיחווה תסכול.',
      recommendedApproach: 'התנגדות מוחלטת ("ממש לא מסכים"). מחלוקות שכר פותרים בהידברות או בעזיבה, לעולם לא בגניבה.',
      midotInsight: 'זהו היגד קלאסי מתוך מאגרי השאלות של מכון אקסלנס ומידות המודד נורמות של טוהר מידות.'
    }
  },
  {
    id: 21,
    pairId: 121,
    category: 'confidentiality_security',
    categoryTitle: 'סודיות מסחרית ומידע פנים',
    question: 'בשיחה בלתי פורמלית עם חבר קרוב שעובד בחברה מתחרה, הוא מתעניין ושואל אותך על מחירון הלקוחות או תוכניות ההתרחבות של החברה שלך. כיצד תגיב?',
    type: 'multiple',
    options: [
      {
        id: '21a',
        text: 'אסביר לו בצורה נעימה אך נחרצת שמדובר במידע סודי של החברה ושאינני משתף מידע עסקי עם אף גורם חיצוני.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '21b',
        text: 'אתן לו פרטים כלליים ומעורפלים מבלי לחשוף מספרים מדויקים כדי לשמור על החברות.',
        scoreImpact: { integrity: 40, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '21c',
        text: 'אשתף אותו באופן גלוי תמורת מידע מקביל שהוא ימסור לי על החברה שלו.',
        scoreImpact: { integrity: 15, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'שמירה על סודיות מסחרית, אבטחת מידע ונאמנות לארגון מול לחץ חברתי.',
      theTrap: 'הניסיון "לרצות את החבר" או "לסחור במידע". דליפת מידע עסקי גורמת נזק כבד לחברה.',
      recommendedApproach: 'הצבת גבול ברור: סודות החברה אינם נושא לשיחה עם גורמים חיצוניים, גם לא עם חברים קרובים.',
      midotInsight: 'בתפקידי ניהול, מכירות ופיתוח, שאלות ריגול תעשייתי ודליפת מידע זוכות למשקל מכריע בדוח.'
    }
  },
  {
    id: 22,
    pairId: 122,
    category: 'theft_attitudes',
    categoryTitle: 'שאלות סולם והיגדים כלליים',
    question: 'היגד: "רוב האנשים היו מעגלים שעות בדיווח הנוכחות אם המערכת הייתה מאפשרת זאת ללא פיקוח". מהי עמדתך?',
    type: 'scale',
    options: [
      {
        id: '22a',
        text: 'ממש לא מסכים - יושר בדיווח נובע ממצפון אישי ולא רק מפחד מפיקוח.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '22b',
        text: 'נוטה לא להסכים - רוב האנשים לא ישקרו בדיווח גם ללא מצלמות.',
        scoreImpact: { integrity: 85, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '22c',
        text: 'נוטה להסכים - אנשים נוטים לעגל פינות כשאין מי שבודק.',
        scoreImpact: { integrity: 40, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '22d',
        text: 'מסכים בהחלט - כולם מרמים כשאיש לא רואה.',
        scoreImpact: { integrity: 15, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'השלכה פסיכולוגית (Projective Integrity Assessment).',
      theTrap: 'תשובה צינית שמשקפת אמונה ש"רק פיקוח חיצוני מחזיק בני אדם ישרים". אדם בעל יושרה פנימית מאמין שיושרה קיימת גם בלי שוטר מעל הראש.',
      recommendedApproach: 'לבטא אמונה שיושרה היא ערך פנימי עצמאי ולא רק תוצר של פיקוח ופחד מעונש.',
      midotInsight: 'הימנע מלבחור באפשרויות ניטרליות או ציניות בשאלות השלכה – הן מורידות את ציון האמינות.'
    }
  },
  {
    id: 23,
    pairId: 123,
    category: 'confidentiality_security',
    categoryTitle: 'הונאות מסחריות ויושרה מול לקוחות',
    question: 'לקוח קבוע ורווחי של החברה מבקש שתוציא לו חשבונית עם תיאור מוצר שונה או תפצל עסקה כדי שיוכל לקבל החזר מלא ממעסיקו. מה תעשה?',
    type: 'multiple',
    options: [
      {
        id: '23a',
        text: 'אסרב בנימוס ואסביר שהחשבונית חייבת לשקף במדויק את העסקה שבוצעה על פי חוק ונהלי החברה.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '23b',
        text: 'אעשה זאת למענו כדי לא לאבד לקוח חשוב שמכניס רווחים רבים לחברה.',
        scoreImpact: { integrity: 20, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '23c',
        text: 'אפנה את הבקשה למנהל ואמליץ לו לאשר את הבקשה כדי לסגור את העסקה.',
        scoreImpact: { integrity: 40, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'יושרה פיסקלית ומניעת זיוף מסמכים מסחריים.',
      theTrap: 'הרצון להפגין "תודעת שירות גבוהה" או "הגדלת הכנסות". זיוף חשבונית או פיצול פיקטיבי הם עבירה פלילית של רישום כוזב במסמכי תאגיד.',
      recommendedApproach: 'סירוב מנומס ועמידה על עקרון החוק: מסמכי הנהלת חשבונות משקפים אך ורק את המציאות המדויקת.',
      midotInsight: 'בתפקידי שירות לקוחות, קופה ומכירות, שאלות אלו בודקות האם המועמד מוכן לשקר עבור הלקוח.'
    }
  },
  {
    id: 24,
    pairId: 124,
    category: 'past_conduct',
    categoryTitle: 'עבר תעסוקתי וסיום עבודה',
    question: 'האם קרה שפוטרת אי פעם ממקום עבודה קודם או שעזבת על רקע חילוקי דעות מקצועיים עם הממונה?',
    type: 'yes_no',
    options: [
      {
        id: '24a',
        text: 'כן, היו מקרים בעבר שבהם הסתיימה העסקה עקב צמצומים, אי-התאמה או חילוקי דעות, ולמדתי מכך רבות להמשך.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '24b',
        text: 'מעולם לא. תמיד בכל מקום העריכו אותי במאה אחוז ועזבתי אך ורק מיוזמתי ללא שום מחלוקת מעולם.',
        scoreImpact: { integrity: 40, lieScaleRisk: 'medium', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'בגרות, כנות והתמודדות עם קשיים בעבר התעסוקתי.',
      theTrap: 'החשש שאם תודה בפיטורין או באי-התאמה ייפסל מועמדותך. המציאות היא שמעסיקים יודעים שפיטורין קורים. ניסיון להציג קריירה מושלמת ללא שום משבר מעלה סימני שאלה.',
      recommendedApproach: 'להודות בכנות אם זה קרה, תוך הצגת הדברים בצורה בוגרת ומלמדת.',
      midotInsight: 'במבחן מידות ובריאיון ההמשך, כנות לגבי העבר בונה אמינות מוצקה יותר מניסיון להסתיר.'
    }
  },
  {
    id: 25,
    pairId: 125,
    category: 'past_conduct',
    categoryTitle: 'הימורים וסיכונים כלכליים',
    question: 'האם השתתפת אי פעם בהימורים בלתי חוקיים או הימרת על סכומי כסף שפגעו ביציבותך הכלכלית?',
    type: 'yes_no',
    options: [
      {
        id: '25a',
        text: 'לא. מעולם לא השתתפתי בהימורים בלתי חוקיים או הימרתי על סכומים שסיכנו אותי כלכלית (למעט כרטיס לוטו/טוטו חוקי לעיתים רחוקות).',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '25b',
        text: 'כן, הימרתי בעבר בסכומים משמעותיים או בהימורים לא מוסדרים.',
        scoreImpact: { integrity: 25, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'גורמי סיכון פיננסיים (Financial Risk & Vulnerability to Bribery/Theft).',
      theTrap: 'בלבול בין שאלת סולם שקר לשאלת סיכון אמיתית. הימורים בלתי חוקיים הם גורם סיכון ממשי לסחיטה ומעילה בכספי החברה.',
      recommendedApproach: 'להשיב "לא" בביטחון (במידה ואכן כך). שליחת לוטו חוקי אינה נחשבת הימורים פליליים.',
      midotInsight: 'במבחן IntegriTEST, סעיף הימורים וחובות מקבל משקל גבוה במיוחד בתפקידים הכוללים מגע עם כספים ומלאי.'
    }
  },
  {
    id: 26,
    pairId: 126,
    category: 'reporting_loyalty',
    categoryTitle: 'ערוצי דיווח ומוסר ארגוני',
    question: 'גילית אי סדרים כספיים חמורים במחלקה שלך שבה מעורב מנהל ישיר. מהו ערוץ הפעולה הנכון?',
    type: 'multiple',
    options: [
      {
        id: '26a',
        text: 'אפנה למבקר הפנים של החברה, לקו הדיווח החם האנונימי או למנהל הבכיר מעליו.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '26b',
        text: 'אפנה קודם ישירות למנהל המעורב ואבקש ממנו להסביר לי את מעשיו.',
        scoreImpact: { integrity: 45, lieScaleRisk: 'none', isRecommended: false }
      },
      {
        id: '26c',
        text: 'אחכה שמישהו אחר יגלה את זה כדי לא להסתבך עם הממונים.',
        scoreImpact: { integrity: 15, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'הבנת מנגנוני ביקורת פנים ומניעת ניגוד עניינים בדיווח.',
      theTrap: 'פנייה למנהל שבעצמו מעורב בעבירה עלולה להוביל לשיבוש ראיות וטיוח. המתנה שמישהו אחר יגלה מעידה על חוסר אחריות.',
      recommendedApproach: 'פנייה לגורם ביקורת עצמאי בארגון (מבקר פנים, משאבי אנוש בכירים או קו דיווח ייעודי).',
      midotInsight: 'הכרת מנגנוני דיווח תקינים מסמנת מועמד בעל מודעות ארגונית ויושרה מקצועית גבוהה.'
    }
  },
  {
    id: 27,
    pairId: 108, // paired with question 8 (lie scale)
    category: 'lie_scale',
    categoryTitle: 'סולם שקר ונורמות ציבוריות',
    question: 'האם קרה שחצית אי פעם כביש כהולך רגל באור אדום או שלא במעבר חצייה, כשהרחוב היה שומם לחלוטין?',
    type: 'yes_no',
    options: [
      {
        id: '27a',
        text: 'כן, קרה שחציתי כביש ריק שלא במעבר חצייה או באור אדום, למרות שאני מקפיד על זהירות.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '27b',
        text: 'לא, מעולם בחיי לא עשיתי צעד אחד בכביש אלא אך ורק באור ירוק מלא ובמעבר חצייה.',
        scoreImpact: { integrity: 15, lieScaleRisk: 'high', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'שאלת בדיקה מובהקת של סולם שקר (Social Desirability).',
      theTrap: 'ההנחה שחובה להוכיח "ציות עיוור של 100% לחוק בכל שבריר שנייה בחיים". כל אדם בוגר בישראל חצה מתישהו כביש שומם. תשובת "מעולם לא" מפעילה את מנגנון הפסילה של המבחן.',
      recommendedApproach: 'להודות בכנות שזה קרה בעבר. אמינות פירושה אמירת אמת גם על חולשות קטנות.',
      midotInsight: 'שאלה זו לקוחה ישירות מהמאגר של מכון אקסלנס ומיועדת לבודד נבדקים שמזייפים פרופיל.'
    }
  },
  {
    id: 28,
    pairId: 128,
    category: 'work_ethics',
    categoryTitle: 'דילמת תפוקה מול יושרה',
    question: 'אם עליך לבחור עמית לצוות, מה עדיף בעיניך לארגון?',
    type: 'multiple',
    options: [
      {
        id: '28a',
        text: 'עובד ישר ואמין לחלוטין ששומר בקפדנות על הנהלים, גם אם תפוקתו ממוצעת.',
        scoreImpact: { integrity: 95, lieScaleRisk: 'none', isRecommended: true }
      },
      {
        id: '28b',
        text: 'עובד בעל ביצועים יוצאי דופן שמביא רווחים גדולים, גם אם הוא מעגל פינות ומפר נהלים לפעמים.',
        scoreImpact: { integrity: 25, lieScaleRisk: 'none', isRecommended: false }
      }
    ],
    explanation: {
      whatItTests: 'סולם ערכים ארגוני - מה חשוב יותר לארגון לטווח ארוך: יושרה או תוצאות מהירות.',
      theTrap: 'מועמדים חושבים ש"תוצאות ורווחים הם הדבר היחיד שקובע בעסקים". מעסיקים מודעים לכך שעובד שמעגל פינות עלול למוטט חברה בגלל תביעה אחת או שערוריית הונאה.',
      recommendedApproach: 'יושרה ואמינות הן תנאי סף שאינו נתון לפשרה תמורת ביצועים.',
      midotInsight: 'מבחן מידות מבוסס על התפיסה שיושרה היא הבסיס לכל ביצועים ארוכי טווח בארגון.'
    }
  }
];
