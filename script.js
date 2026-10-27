const STORAGE_KEY = 'chemistryLabProgress';

const elementCategories = {
  alkali: 'فلز قلوي',
  alkaline: 'فلز قلوي ترابي',
  transition: 'فلز انتقالي',
  'post-transition': 'فلز بعد انتقالي',
  metalloid: 'شبه فلز',
  nonmetal: 'لا فلز',
  halogen: 'هالوجين',
  noble: 'غاز نبيل',
  lanthanide: 'لانثانيدي',
  actinide: 'أكتينيدي'
};

const defaultProgress = {
  points: 0,
  badges: ['مستكشف'],
  seenElements: [],
  discoveredCompounds: [],
  quizScore: 0
};

const elements = [
  { atomicNumber: 1, symbol: 'H', name: 'الهيدروجين', category: 'nonmetal', state: 'غاز', foundIn: 'الماء والنجوم والغازات الكونية', natureTags: ['🌌 الكون', '💧 الماء'], description: 'لا فلز خفيف يدخل في تكوين الماء والعديد من المركبات العضوية.' },
  { atomicNumber: 2, symbol: 'He', name: 'الهيليوم', category: 'noble', state: 'غاز', foundIn: 'النجوم والهواء', natureTags: ['🌌 الكون', '💨 الجو'], description: 'غاز نبيل خفيف يستخدم في التبريد والاختبارات العلمية من خلال خفة ذراته.' },
  { atomicNumber: 3, symbol: 'Li', name: 'الليثيوم', category: 'alkali', state: 'صلب', foundIn: 'صخور الجرانيت والمياه المعدنية', natureTags: ['🏔️ القشرة الأرضية', '💧 المياه'], description: 'فلز قلوي يستخدم في بطاريات الهاتف والهواتف المحمولة.' },
  { atomicNumber: 4, symbol: 'Be', name: 'البرليوم', category: 'alkaline', state: 'صلب', foundIn: 'صخور الجرانيت والمعادن', natureTags: ['🏔️ القشرة الأرضية'], description: 'عنصر صلب مقاوم للحرارة ويستخدم في أغلفة بعض الأجهزة العلمية.' },
  { atomicNumber: 5, symbol: 'B', name: 'البورون', category: 'metalloid', state: 'صلب', foundIn: 'مناجم البوراكس والمعادن', natureTags: ['🏔️ القشرة الأرضية'], description: 'شبه فلز يستخدم في الزجاج والمعدنات ومواد النانو.' },
  { atomicNumber: 6, symbol: 'C', name: 'الكربون', category: 'nonmetal', state: 'صلب', foundIn: 'الكائنات الحية والفحم والرخام', natureTags: ['🌿 الكائنات الحية', '⛏️ الأرض'], description: 'أساس الحياة، يكوّن هياكل الكائنات الحية والمواد العضوية.' },
  { atomicNumber: 7, symbol: 'N', name: 'النيتروجين', category: 'nonmetal', state: 'غاز', foundIn: 'الهواء الجوي', natureTags: ['💨 الجو', '🌱 النبات'], description: 'يُشكل أكثر من 70% من الهواء ويشارك في تكوين البروتينات.' },
  { atomicNumber: 8, symbol: 'O', name: 'الأكسجين', category: 'nonmetal', state: 'غاز', foundIn: 'الهواء والماء', natureTags: ['💨 الجو', '💧 الماء'], description: 'أساس التنفس والحرق، ومكون أساسي للماء والهواء.' },
  { atomicNumber: 9, symbol: 'F', name: 'الفلور', category: 'halogen', state: 'غاز', foundIn: 'المياه المعدنية ومعادن الفلور', natureTags: ['💧 المياه', '🏔️ القشرة الأرضية'], description: 'هالوجين يستخدم في معجون الأسنان وبعض المنتجات الصناعية.' },
  { atomicNumber: 10, symbol: 'Ne', name: 'النيون', category: 'noble', state: 'غاز', foundIn: 'الهواء المعزول في بعض الأنوار', natureTags: ['💨 الجو'], description: 'غاز نبيل يضيء عند تمرير تيار كهربائي، ويستخدم في الإعلانات الضوئية.' },
  { atomicNumber: 11, symbol: 'Na', name: 'الصوديوم', category: 'alkali', state: 'صلب', foundIn: 'ملح الطعام والمياه المالحة', natureTags: ['💧 المحيطات', '🏔️ الأرض'], description: 'عنصر قلوي مهم في توازن السوائل والجسم، ويُستخدم في ملح الطعام.' },
  { atomicNumber: 12, symbol: 'Mg', name: 'المغنيسيوم', category: 'alkaline', state: 'صلب', foundIn: 'الحليب والمياه الجوفية والصخور', natureTags: ['🌿 الكائنات الحية', '💧 المياه'], description: 'يُستخدم في بناء جزيئات النبات والحيوان ويشارك في وظائف الجسم.' },
  { atomicNumber: 13, symbol: 'Al', name: 'الألمنيوم', category: 'post-transition', state: 'صلب', foundIn: 'أكاسيد الألومنيوم في الطين', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز خفيف ومقاوم للتآكل، يُستخدم في العبوات والأبواب والألواح.' },
  { atomicNumber: 14, symbol: 'Si', name: 'السيليكون', category: 'metalloid', state: 'صلب', foundIn: 'الرمل والزجاج', natureTags: ['🏖️ الرمال', '🧊 الزجاج'], description: 'شبه فلز أساسي في صناعة الإلكترونيات والزجاج والسيراميك.' },
  { atomicNumber: 15, symbol: 'P', name: 'الفوسفور', category: 'nonmetal', state: 'صلب', foundIn: 'المعادن والحمض النووي والرسوبيات', natureTags: ['🌿 الكائنات الحية', '🏔️ الأرض'], description: 'يُستخدم في إنتاج الطاقة في الخلايا وفي بعض الأسمدة.' },
  { atomicNumber: 16, symbol: 'S', name: 'الكبريت', category: 'nonmetal', state: 'صلب', foundIn: 'الينابيع والمواد البركانية', natureTags: ['🌋 البراكين', '🏔️ القشرة الأرضية'], description: 'عنصر متعدد الاستخدامات يتواجد في بعض المواد الطبيعية ويُستخدم في الصناعة.' },
  { atomicNumber: 17, symbol: 'Cl', name: 'الكلور', category: 'halogen', state: 'غاز', foundIn: 'ملح الطعام والمحيطات', natureTags: ['💧 المحيطات', '🏔️ الأرض'], description: 'هالوجين مهم في معالجة الماء وصناعة المواد الكيميائية.' },
  { atomicNumber: 18, symbol: 'Ar', name: 'الأرجون', category: 'noble', state: 'غاز', foundIn: 'الهواء', natureTags: ['💨 الجو'], description: 'غاز نبيل يَستخدم في المصابيح الكهربائية والمواد العزل.' },
  { atomicNumber: 19, symbol: 'K', name: 'البوتاسيوم', category: 'alkali', state: 'صلب', foundIn: 'الأرض والفواكه والخضار', natureTags: ['🌿 الكائنات الحية', '💧 التربة'], description: 'مهم لنمو النبات ووظائف الخلايا في جسم الإنسان.' },
  { atomicNumber: 20, symbol: 'Ca', name: 'الكالسيوم', category: 'alkaline', state: 'صلب', foundIn: 'العظام والحليب والرخام', natureTags: ['🌿 الكائنات الحية', '🏔️ الصخور'], description: 'يُشكل العظام والأسنان، ويُستخدم في الأسمنت والرخام.' },
  { atomicNumber: 21, symbol: 'Sc', name: 'السكرينيوم', category: 'transition', state: 'صلب', foundIn: 'اليوثانيوم والمعادن النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز انتقالي نادر، يُستخدم في صناعة بعض المواد المضيئة.' },
  { atomicNumber: 22, symbol: 'Ti', name: 'التيتانيوم', category: 'transition', state: 'صلب', foundIn: 'الركاز والمعدات الفضائية', natureTags: ['🚀 الفضاء', '🏔️ القشرة الأرضية'], description: 'فلز قوي وخفيف يُستخدم في الطائرات وأدوات الجراحة.' },
  { atomicNumber: 23, symbol: 'V', name: 'الفاناديوم', category: 'transition', state: 'صلب', foundIn: 'الفحم والفلزات', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز انتقالي يساعد في صناعة الفولاذ المقاوم للصدأ.' },
  { atomicNumber: 24, symbol: 'Cr', name: 'الكروم', category: 'transition', state: 'صلب', foundIn: 'خام الكروميت', natureTags: ['🏔️ القشرة الأرضية'], description: 'يُستخدم في الطلاء والسبائك وفي صناعة الفولاذ.' },
  { atomicNumber: 25, symbol: 'Mn', name: 'المنغنيز', category: 'transition', state: 'صلب', foundIn: 'المعادن والأرض', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز انتقالي يساهم في صناعة الفولاذ ومركباته في الجسم.' },
  { atomicNumber: 26, symbol: 'Fe', name: 'الحديد', category: 'transition', state: 'صلب', foundIn: 'الأرض والصلب', natureTags: ['🏔️ القشرة الأرضية', '⚙️ الصناعة'], description: 'المكون الرئيسي للصلب، وهو أساسي في صناعة المباني والأدوات.' },
  { atomicNumber: 27, symbol: 'Co', name: 'الكوبالت', category: 'transition', state: 'صلب', foundIn: 'خام الكوبالت', natureTags: ['🏔️ القشرة الأرضية'], description: 'يُستخدم في بطاريات الليثيوم وبعض السبائك الطبية.' },
  { atomicNumber: 28, symbol: 'Ni', name: 'النيكل', category: 'transition', state: 'صلب', foundIn: 'خام النيكل', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز مقاوم للتآكل ويستخدم في العملات والسبائك.' },
  { atomicNumber: 29, symbol: 'Cu', name: 'النحاس', category: 'transition', state: 'صلب', foundIn: 'خام النحاس', natureTags: ['⚙️ الصناعة', '🏔️ القشرة الأرضية'], description: 'معدن موصل جيد للكهرباء ويُستخدم في الأسلاك.' },
  { atomicNumber: 30, symbol: 'Zn', name: 'الزنك', category: 'transition', state: 'صلب', foundIn: 'خام الزنك', natureTags: ['🌿 الكائنات الحية', '🏔️ الأرض'], description: 'يُستخدم في سبائك الحديد وفي الوقاية من الأمراض.' },
  { atomicNumber: 31, symbol: 'Ga', name: 'الغاليوم', category: 'post-transition', state: 'صلب', foundIn: 'خامات البزموت والزنك', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز منخفض نقطة الانصهار يُستخدم في أشباه الموصلات.' },
  { atomicNumber: 32, symbol: 'Ge', name: 'الجرمانيوم', category: 'metalloid', state: 'صلب', foundIn: 'خام الزنك', natureTags: ['🏔️ القشرة الأرضية'], description: 'شبه فلز يستخدم في الإلكترونيات وأجهزة الاستشعار.' },
  { atomicNumber: 33, symbol: 'As', name: 'الزرنيخ', category: 'metalloid', state: 'صلب', foundIn: 'خام النحاس والزنك', natureTags: ['🏔️ القشرة الأرضية'], description: 'شبه فلز له استخدامات صناعية محدودة ويُحذر من سميته.' },
  { atomicNumber: 34, symbol: 'Se', name: 'السيلينيوم', category: 'nonmetal', state: 'صلب', foundIn: 'خام النحاس', natureTags: ['🏔️ القشرة الأرضية'], description: 'معدن لا فلزي يستخدم في الكوارتز وأجهزة الطاقة الشمسية.' },
  { atomicNumber: 35, symbol: 'Br', name: 'البروم', category: 'halogen', state: 'سائل', foundIn: 'مياه البحار والملح', natureTags: ['💧 المحيطات'], description: 'هالوجين سائل في درجة حرارة الغرفة ويُستخدم في صناعة المذيبات.' },
  { atomicNumber: 36, symbol: 'Kr', name: 'الكريبتون', category: 'noble', state: 'غاز', foundIn: 'الهواء', natureTags: ['💨 الجو'], description: 'غاز نبيل يُستخدم في المصابيح الضوئية وبعض الدوائر الدقيقة.' },
  { atomicNumber: 37, symbol: 'Rb', name: 'الروبيديوم', category: 'alkali', state: 'صلب', foundIn: 'المعادن النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز قلوي نادر يستعمل في بعض التطبيقات العلمية.' },
  { atomicNumber: 38, symbol: 'Sr', name: 'السترونشيوم', category: 'alkaline', state: 'صلب', foundIn: 'الصخور والمعادن', natureTags: ['🏔️ القشرة الأرضية'], description: 'يُستخدم في ألوان اللهب وبعض المواد البصرية.' },
  { atomicNumber: 39, symbol: 'Y', name: 'الإتريوم', category: 'transition', state: 'صلب', foundIn: 'المعادن النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز انتقالي يُستخدم في بعض البلورات الإلكترونية.' },
  { atomicNumber: 40, symbol: 'Zr', name: 'الزركونيوم', category: 'transition', state: 'صلب', foundIn: 'خام الزركون', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز مقاوم للحرارة ويستخدم في النوى وفي صناعة العوازل.' },
  { atomicNumber: 41, symbol: 'Nb', name: 'النيوبيوم', category: 'transition', state: 'صلب', foundIn: 'الخام المعدني', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز انتقالي يستخدم في السبائك الحرارية.' },
  { atomicNumber: 42, symbol: 'Mo', name: 'الموليبدينوم', category: 'transition', state: 'صلب', foundIn: 'خام الموليبدينيت', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز شديد المقاومة للحرارة ويستخدم في الصلب.' },
  { atomicNumber: 43, symbol: 'Tc', name: 'التكنيتيوم', category: 'transition', state: 'صلب', foundIn: 'في بعض النوى والأبحاث', natureTags: ['🔬 المختبر'], description: 'فلز مشع يستعمل طبيًا في تصوير الأعضاء داخل الجسم.' },
  { atomicNumber: 44, symbol: 'Ru', name: 'الروثينيوم', category: 'transition', state: 'صلب', foundIn: 'فلزات النبالة', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز انتقالي نادر يستخدم في المحركات والسبائك.' },
  { atomicNumber: 45, symbol: 'Rh', name: 'الروديوم', category: 'transition', state: 'صلب', foundIn: 'المعادن النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز انتقالي يستخدم في المحولات والسبائك المسببة للوهج.' },
  { atomicNumber: 46, symbol: 'Pd', name: 'بالاديوم', category: 'transition', state: 'صلب', foundIn: 'المعادن النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'يستخدم في بعض المحولات والبطاريات ومواد التفاعل الكيميائي.' },
  { atomicNumber: 47, symbol: 'Ag', name: 'الفضة', category: 'transition', state: 'صلب', foundIn: 'خام الفضة', natureTags: ['🏔️ القشرة الأرضية', '💍 الحلي'], description: 'فلز لامع موصل جيد للحرارة والكهرباء ويستعمل في المجوهرات.' },
  { atomicNumber: 48, symbol: 'Cd', name: 'الكادميوم', category: 'transition', state: 'صلب', foundIn: 'خام الزنك', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز سام في بعض التطبيقات الصناعية، ويستخدم في بطاريات معينة.' },
  { atomicNumber: 49, symbol: 'In', name: 'الإنديوم', category: 'post-transition', state: 'صلب', foundIn: 'معادن الزنك', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز يستخدم في شاشات LCD والأجهزة الإلكترونية.' },
  { atomicNumber: 50, symbol: 'Sn', name: 'القصدير', category: 'post-transition', state: 'صلب', foundIn: 'خام القصدير', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز مستعمل في الطلاء وصناعة الحاويات والأواني.' },
  { atomicNumber: 51, symbol: 'Sb', name: 'الأنتيمون', category: 'metalloid', state: 'صلب', foundIn: 'معادن السرب', natureTags: ['🏔️ القشرة الأرضية'], description: 'شبه فلز يستخدم في بعض السبائك والمواد المقاومة للحريق.' },
  { atomicNumber: 52, symbol: 'Te', name: 'التيلوريوم', category: 'metalloid', state: 'صلب', foundIn: 'خام النحاس', natureTags: ['🏔️ القشرة الأرضية'], description: 'شبه فلز يستخدم في بعض الخلايا الشمسية والمحركات.' },
  { atomicNumber: 53, symbol: 'I', name: 'اليود', category: 'halogen', state: 'صلب', foundIn: 'المحيطات والبحار', natureTags: ['💧 المحيطات', '🌿 الكائنات الحية'], description: 'هالوجين مهم في وظيفة الغدة الدرقية ولحفظ الصحة.' },
  { atomicNumber: 54, symbol: 'Xe', name: 'الزينون', category: 'noble', state: 'غاز', foundIn: 'الهواء', natureTags: ['💨 الجو'], description: 'غاز نبيل يستخدم في مصابيح الليزر والأضواء المضيئة.' },
  { atomicNumber: 55, symbol: 'Cs', name: 'السيزيوم', category: 'alkali', state: 'صلب', foundIn: 'الصخور والمعادن', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز قلوي يستخدم في أدوات الساعة الذرية والأبحاث.' },
  { atomicNumber: 56, symbol: 'Ba', name: 'الباريوم', category: 'alkaline', state: 'صلب', foundIn: 'البارايت', natureTags: ['🏔️ القشرة الأرضية'], description: 'يُستخدم في بعض الأدوية والفحص الطبي والتصوير الشعاعي.' },
  { atomicNumber: 57, symbol: 'La', name: 'اللانثانوم', category: 'lanthanide', state: 'صلب', foundIn: 'معادن الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'من عناصر اللانثانيدات، ومع وجوده في فلزات نادرة.' },
  { atomicNumber: 58, symbol: 'Ce', name: 'السيريوم', category: 'lanthanide', state: 'صلب', foundIn: 'الصخور النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'مستخدم في عوازل البترول وبعض مواد الإضاءة.' },
  { atomicNumber: 59, symbol: 'Pr', name: 'البراسيوديميوم', category: 'lanthanide', state: 'صلب', foundIn: 'معادن الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'عنصر نادر في صناعة العدسات والبصريات.' },
  { atomicNumber: 60, symbol: 'Nd', name: 'النيوديميوم', category: 'lanthanide', state: 'صلب', foundIn: 'معادن الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'يستخدم في مغناطيسات قوية وأجهزة الصوت.' },
  { atomicNumber: 61, symbol: 'Pm', name: 'البروميثيوم', category: 'lanthanide', state: 'صلب', foundIn: 'أبحاث نووية', natureTags: ['🔬 المختبر'], description: 'عنصر مشع نادر يستخدم في بعض المصادر الإشعاعية.' },
  { atomicNumber: 62, symbol: 'Sm', name: 'الساماريوم', category: 'lanthanide', state: 'صلب', foundIn: 'معادن الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'يُستخدم في المغناطيسات والمواد الحرارية.' },
  { atomicNumber: 63, symbol: 'Eu', name: 'الأوروبيوم', category: 'lanthanide', state: 'صلب', foundIn: 'خام الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'عنصر مهم في شاشات LED وآلات التصوير.' },
  { atomicNumber: 64, symbol: 'Gd', name: 'الغادولينيوم', category: 'lanthanide', state: 'صلب', foundIn: 'معادن الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'يستخدم في التصوير الطبي والعوازل المغناطيسية.' },
  { atomicNumber: 65, symbol: 'Tb', name: 'التيربيوم', category: 'lanthanide', state: 'صلب', foundIn: 'معادن الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'مستخدم في الإضاءة وأجهزة الحاسوب المتقدمة.' },
  { atomicNumber: 66, symbol: 'Dy', name: 'الديسبروسيوم', category: 'lanthanide', state: 'صلب', foundIn: 'معادن الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'مركباته تستعمل في مواد المغناطيس القوي.' },
  { atomicNumber: 67, symbol: 'Ho', name: 'الهولميوم', category: 'lanthanide', state: 'صلب', foundIn: 'معادن الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'يُستخدم في الأجهزة الإلكترونية وبصريات الليزر.' },
  { atomicNumber: 68, symbol: 'Er', name: 'الإربيوم', category: 'lanthanide', state: 'صلب', foundIn: 'معادن الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'يستخدم في عدسات الليزر ومقويات الإضاءة.' },
  { atomicNumber: 69, symbol: 'Tm', name: 'الثوليوم', category: 'lanthanide', state: 'صلب', foundIn: 'معادن الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز نادر يدخل في بعض تطبيقات الليزر.' },
  { atomicNumber: 70, symbol: 'Yb', name: 'الإتيربيوم', category: 'lanthanide', state: 'صلب', foundIn: 'معادن الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'عنصر مهم في الأجهزة الإلكترونية والإضاءة.' },
  { atomicNumber: 71, symbol: 'Lu', name: 'اللوتيشيوم', category: 'lanthanide', state: 'صلب', foundIn: 'معادن الأرض النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز نادر يُستخدم في بعض التطبيقات الصناعية والبحثية.' },
  { atomicNumber: 72, symbol: 'Hf', name: 'هافنيوم', category: 'transition', state: 'صلب', foundIn: 'زركونيا النادرة', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز ثقيل مقاوم للحرارة ويُستخدم في الصناعة النووية.' },
  { atomicNumber: 73, symbol: 'Ta', name: 'التنتالوم', category: 'transition', state: 'صلب', foundIn: 'خام التنتاليت', natureTags: ['🏔️ القشرة الأرضية'], description: 'مقاوم للتآكل والحرارة، يُستخدم في الإلكترونيات.' },
  { atomicNumber: 74, symbol: 'W', name: 'التنجستن', category: 'transition', state: 'صلب', foundIn: 'خام التنجستن', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز شديد المقاومة للحرارة، يُستخدم في أسلاك المصابيح.' },
  { atomicNumber: 75, symbol: 'Re', name: 'الرينيوم', category: 'transition', state: 'صلب', foundIn: 'معادن النبالة', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز انتقالي نادر يمنح السبائك مقاومة للحرارة.' },
  { atomicNumber: 76, symbol: 'Os', name: 'الأوزميوم', category: 'transition', state: 'صلب', foundIn: 'خام البلاتين', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز شديد الكثافة يُستخدم في بعض الأطراف والسبائك.' },
  { atomicNumber: 77, symbol: 'Ir', name: 'الإيريديوم', category: 'transition', state: 'صلب', foundIn: 'معادن الاستكشاف', natureTags: ['🏔️ القشرة الأرضية'], description: 'مقاوم للحرارة والتآكل ويُستخدم في المواد عالية الأداء.' },
  { atomicNumber: 78, symbol: 'Pt', name: 'البلاتين', category: 'transition', state: 'صلب', foundIn: 'مناجم البلاتين', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز قيم يُستخدم في المحولات الكاتاليكية والمجوهرات.' },
  { atomicNumber: 79, symbol: 'Au', name: 'الذهب', category: 'transition', state: 'صلب', foundIn: 'الودائع المعدنية', natureTags: ['💰 المعادن', '🏔️ القشرة الأرضية'], description: 'فلز لامع وقيم، موصل جيد للتطبيقات الإلكترونية والمجوهرات.' },
  { atomicNumber: 80, symbol: 'Hg', name: 'الزئبق', category: 'transition', state: 'سائل', foundIn: 'خامات الزئبق', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز سائل في درجة حرارة الغرفة، ويستلزم الحذر في التعامل معه.' },
  { atomicNumber: 81, symbol: 'Tl', name: 'الثاليوم', category: 'post-transition', state: 'صلب', foundIn: 'خام الزنك', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز سام في بعض التطبيقات العلمية والتقنية.' },
  { atomicNumber: 82, symbol: 'Pb', name: 'الرصاص', category: 'post-transition', state: 'صلب', foundIn: 'خام الرصاص', natureTags: ['🏔️ القشرة الأرضية'], description: 'معدن ثقيل يستخدم في بعض البطاريات والتسقيف.' },
  { atomicNumber: 83, symbol: 'Bi', name: 'البزموت', category: 'post-transition', state: 'صلب', foundIn: 'خام الرصاص', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز لامع يستخدم في بعض السبائك والمعاجين الطبية.' },
  { atomicNumber: 84, symbol: 'Po', name: 'البولونيوم', category: 'post-transition', state: 'صلب', foundIn: 'الرسوبيات الطبيعية', natureTags: ['🏔️ القشرة الأرضية'], description: 'معدن مشع نادر، ويحتاج إلى التعامل الدقيق.' },
  { atomicNumber: 85, symbol: 'At', name: 'الأستاتين', category: 'halogen', state: 'صلب', foundIn: 'عناصر من أصل مشع', natureTags: ['🔬 المختبر'], description: 'هالوجين مشع نادر جدًا، ويُدَّرس غالبًا في المختبرات.' },
  { atomicNumber: 86, symbol: 'Rn', name: 'الرادون', category: 'noble', state: 'غاز', foundIn: 'الأرض والصخور', natureTags: ['🏔️ القشرة الأرضية', '💨 الجو'], description: 'غاز نبيل مشع، ويتراكم في بعض الأماكن تحت الأرض.' },
  { atomicNumber: 87, symbol: 'Fr', name: 'الفرانسيوم', category: 'alkali', state: 'صلب', foundIn: 'خامات اليورانيوم', natureTags: ['🏔️ القشرة الأرضية'], description: 'فلز قلوي مشع جدًا، نادر جدًا في الطبيعة.' },
  { atomicNumber: 88, symbol: 'Ra', name: 'الراديوم', category: 'alkaline', state: 'صلب', foundIn: 'خام اليورانيوم', natureTags: ['🏔️ القشرة الأرضية'], description: 'عنصر مشع استخدم في الماضي في بعض التطبيقات الطبية.' },
  { atomicNumber: 89, symbol: 'Ac', name: 'الأكتينيوم', category: 'actinide', state: 'صلب', foundIn: 'خام اليورانيوم', natureTags: ['🏔️ القشرة الأرضية'], description: 'عنصر أكتينيوم مشع، يُستخدم في بعض الدراسات النووية.' },
  { atomicNumber: 90, symbol: 'Th', name: 'الثوريوم', category: 'actinide', state: 'صلب', foundIn: 'خام الثوريوم', natureTags: ['🏔️ القشرة الأرضية'], description: 'عنصر نووي مهم للبحوث وتقنيات الطاقة المستقبلية.' },
  { atomicNumber: 91, symbol: 'Pa', name: 'البروتكتينيوم', category: 'actinide', state: 'صلب', foundIn: 'خام اليورانيوم', natureTags: ['🏔️ القشرة الأرضية'], description: 'عنصر أكتينيوم مشع يدخل في دراسة الطاقة النووية.' },
  { atomicNumber: 92, symbol: 'U', name: 'اليورانيوم', category: 'actinide', state: 'صلب', foundIn: 'خام اليورانيوم', natureTags: ['🏔️ القشرة الأرضية', '⚡ الطاقة'], description: 'عنصر نووي أساسي في الطاقة والبحث العلمي.' },
  { atomicNumber: 93, symbol: 'Np', name: 'النبتونيوم', category: 'actinide', state: 'صلب', foundIn: 'التفاعلات النووية', natureTags: ['🔬 المختبر', '⚡ الطاقة'], description: 'عنصر أكتينيوم مشع يستعمل في الدراسات الذرية.' },
  { atomicNumber: 94, symbol: 'Pu', name: 'البوتاسيوم', category: 'actinide', state: 'صلب', foundIn: 'التفاعلات النووية', natureTags: ['⚡ الطاقة'], description: 'عنصر أكتينيوم شديد النشاط ويستخدم في بعض التطبيقات النووية.' },
  { atomicNumber: 95, symbol: 'Am', name: 'الأمريكيوم', category: 'actinide', state: 'صلب', foundIn: 'التفاعلات النووية', natureTags: ['🔬 المختبر'], description: 'عنصر أكتينيوم مشع، يُستخدم في بعض أجهزة القياس.' },
  { atomicNumber: 96, symbol: 'Cm', name: 'الكوريوم', category: 'actinide', state: 'صلب', foundIn: 'اختبارات نووية', natureTags: ['🔬 المختبر'], description: 'عنصر أكتينيوم مشع وموارد بحثية في العلوم الذرية.' },
  { atomicNumber: 97, symbol: 'Bk', name: 'البكريليوم', category: 'actinide', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر أكتينيوم مشع نادر جدًا يُستخدم في البحث العلمي.' },
  { atomicNumber: 98, symbol: 'Cf', name: 'الكاليفورنيوم', category: 'actinide', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر أكتينيوم مشع جدًا يستعمل في الدراسات النووية.' },
  { atomicNumber: 99, symbol: 'Es', name: 'الإينشتينيوم', category: 'actinide', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر أكتينيوم صناعي نادر جدًا في المختبرات.' },
  { atomicNumber: 100, symbol: 'Fm', name: 'الفيرميوم', category: 'actinide', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر أكتينيوم مشع جدًا، يستخدم في الأبحاث النووية.' },
  { atomicNumber: 101, symbol: 'Md', name: 'الميندليفيوم', category: 'actinide', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر أكتينيوم نادر جدًا، يدرسه العلماء في المختبر.' },
  { atomicNumber: 102, symbol: 'No', name: 'النوبليوم', category: 'actinide', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر أكتينيوم مشع يدرس في مختبرات الطاقة النووية.' },
  { atomicNumber: 103, symbol: 'Lr', name: 'لورنسيوم', category: 'actinide', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر أكتينيوم صناعي يُستخدم في البحث النظري والتجريبي.' },
  { atomicNumber: 104, symbol: 'Rf', name: 'رذرفورديوم', category: 'transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر ثقيل صناعي من عناصر المجموعة الانتقالية.' },
  { atomicNumber: 105, symbol: 'Db', name: 'دوبنيوم', category: 'transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر صناعي نادر جدًا في المختبرات.' },
  { atomicNumber: 106, symbol: 'Sg', name: 'سيبورجيوم', category: 'transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر صناعي يُدرس في مختبرات الفيزياء النووية.' },
  { atomicNumber: 107, symbol: 'Bh', name: 'بوهروم', category: 'transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر مصطنع نادر جدًا يُستخدم في الأبحاث النووية.' },
  { atomicNumber: 108, symbol: 'Hs', name: 'هسيوم', category: 'transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر صناعي شديد النشاط، يدرس في مختبرات الأبحاث.' },
  { atomicNumber: 109, symbol: 'Mt', name: 'مايتنريوم', category: 'transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر صناعي يُستخدم في أبحاث التفاعلات الذرية.' },
  { atomicNumber: 110, symbol: 'Ds', name: 'دارمشتات', category: 'transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر صناعي نادر جدًا يصنع في المختبرات.' },
  { atomicNumber: 111, symbol: 'Rg', name: 'رونتجينيوم', category: 'transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر صناعي من الفلزات الثقيلة الدراسية.' },
  { atomicNumber: 112, symbol: 'Cn', name: 'كوبرنيكسيوم', category: 'transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر صناعي مُثبت في الأبحاث النووية الحديثة.' },
  { atomicNumber: 113, symbol: 'Nh', name: 'نيهون', category: 'post-transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر صناعي جديد في المجموعة بعد الانتقالية.' },
  { atomicNumber: 114, symbol: 'Fl', name: 'فليروفيوم', category: 'post-transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر صناعي من الفلزات الثقيلة يُدرَّس في المختبرات.' },
  { atomicNumber: 115, symbol: 'Mc', name: 'موسكوفيوم', category: 'post-transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر صناعي في المجموعة الثقيلة درس في المختبرات.' },
  { atomicNumber: 116, symbol: 'Lv', name: 'ليفرموريوم', category: 'post-transition', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'عنصر ثقيل صناعي يدرس في مختبرات الفيزياء النووية.' },
  { atomicNumber: 117, symbol: 'Ts', name: 'تنسين', category: 'halogen', state: 'صلب', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'هالوجين صناعي شديد النشاط ويُدرَس في الأبحاث الحديثة.' },
  { atomicNumber: 118, symbol: 'Og', name: 'أوغانيسون', category: 'noble', state: 'غاز', foundIn: 'المختبرات', natureTags: ['🔬 المختبر'], description: 'غاز نبيل صناعي في دراسة العناصر الثقيلة.' }
];

const compoundLibrary = {
  'H-O': {
    name: 'الماء',
    formula: 'H₂O',
    kind: 'مركب قطبي',
    description: 'مادة أساسية للحياة، تذيب كثيراً من المواد وتدعم التفاعلات البيولوجية.',
    before: ['الهيدروجين: غاز قابل للاشتعال', 'الأكسجين: غاز يدعم الاحتراق'],
    after: ['ماء: سائل مهم في جميع الكائنات الحية', 'تغير في الخصائص: تبريد، إذابة، وخصائص قطبية'],
    molecule: {
      atoms: ['H', 'O', 'H'],
      connections: [
        { from: 'H1', to: 'O', label: 'رابطة' },
        { from: 'H2', to: 'O', label: 'رابطة' }
      ]
    }
  },
  'C-O': {
    name: 'ثاني أكسيد الكربون',
    formula: 'CO₂',
    kind: 'غاز، مكون أساسي في التنفس',
    description: 'غاز تنتجه الخلايا والحيوانات، ويُستعمل في التمثيل الضوئي للنباتات.',
    before: ['الكربون: صلب أساسي في الحياة', 'الأكسجين: غاز يدعم الاحتراق'],
    after: ['CO₂: غاز بلا لون يساهم في دورة الكربون', 'يشكل الجزيء خطي الشكل مع روابط مزدوجة'],
    molecule: {
      atoms: ['O', 'C', 'O'],
      connections: [
        { from: 'O1', to: 'C', label: 'رابطة مزدوجة' },
        { from: 'O2', to: 'C', label: 'رابطة مزدوجة' }
      ]
    }
  },
  'Na-Cl': {
    name: 'كلوريد الصوديوم',
    formula: 'NaCl',
    kind: 'ملح الطعام',
    description: 'مادة غذائية مهمة، تستخدم في حفظ الطعام وموازنة السوائل في الجسم.',
    before: ['الصوديوم: فلز قلوي سريع التفاعل', 'الكلور: غاز سام عند وجوده وحده'],
    after: ['ملح الطعام: مادة مستقرة تُستخدم يوميًا', 'تشكل شبكة أيونية متراصة في البلورة'],
    molecule: {
      atoms: ['Na', 'Cl'],
      connections: [{ from: 'Na', to: 'Cl', label: 'رابطة أيونية' }]
    }
  },
  'H-N': {
    name: 'الأمونيا',
    formula: 'NH₃',
    kind: 'غاز عضوي/مركب نيتروجيني',
    description: 'مركب مهم في الأسمدة، ويظهر في المركبات الحيوية.',
    before: ['النيتروجين: غاز أساسي في الهواء', 'الهيدروجين: غاز خفيف'],
    after: ['الأمونيا: غاز بتكوين ثلاثي الأبعاد', 'تمتلك رائحة قوية وتستعمل في الأسمدة'],
    molecule: {
      atoms: ['N', 'H', 'H', 'H'],
      connections: [
        { from: 'N', to: 'H1', label: 'رابطة' },
        { from: 'N', to: 'H2', label: 'رابطة' },
        { from: 'N', to: 'H3', label: 'رابطة' }
      ]
    }
  },
  'C-H': {
    name: 'الميثان',
    formula: 'CH₄',
    kind: 'غاز وقود',
    description: 'غاز قابل للاحتراق يدخل في الوقود والطاقة، وهو مثال بسيط على الروابط التساهمية.',
    before: ['الكربون: صلب أساسي في الحياة', 'الهيدروجين: غاز صغير ومرن'],
    after: ['الميثان: غاز قابل للاشتعال', 'بنية رباعي السطوح حول المركز الكربوني'],
    molecule: {
      atoms: ['C', 'H', 'H', 'H', 'H'],
      connections: [
        { from: 'C', to: 'H1', label: 'رابطة' },
        { from: 'C', to: 'H2', label: 'رابطة' },
        { from: 'C', to: 'H3', label: 'رابطة' },
        { from: 'C', to: 'H4', label: 'رابطة' }
      ]
    }
  },
  'Mg-O': {
    name: 'أكسيد المغنيسيوم',
    formula: 'MgO',
    kind: 'مركب أيوني',
    description: 'مادة صلبة قاعدية تستخدم في العزل الحراري وقوام بعض المواد.',
    before: ['المغنيسيوم: فلز أرضي', 'الأكسجين: غاز'],
    after: ['MgO: مركب صلب مستقر', 'تتشكل شبكة أيونية متينة'],
    molecule: {
      atoms: ['Mg', 'O'],
      connections: [{ from: 'Mg', to: 'O', label: 'رابطة أيونية' }]
    }
  },
  'Ca-O': {
    name: 'أكسيد الكالسيوم',
    formula: 'CaO',
    kind: 'مادة أساسية في البناء',
    description: 'مركب صلب يساهم في صناعة الأسمنت والمواد الجيرية.',
    before: ['الكالسيوم: فلز أساسي في العظام', 'الأكسجين: غاز يساهم في الأكسدة'],
    after: ['CaO: مادة قاعدية تستخدم في البناء', 'يُستخدم في معالجة التربة وإنتاج الأسمنت'],
    molecule: {
      atoms: ['Ca', 'O'],
      connections: [{ from: 'Ca', to: 'O', label: 'رابطة أيونية' }]
    }
  },
  'Fe-O': {
    name: 'أكسيد الحديد',
    formula: 'Fe₂O₃',
    kind: 'مركب صدئ',
    description: 'مادة حمراء مغيّرة تُرى في الصدأ، وتستخدم في بعض التفاعلات والمواد.',
    before: ['الحديد: فلز أساسي في الصناعة', 'الأكسجين: غاز مسبب للأكسدة'],
    after: ['أكسيد الحديد: صلب متآكل يغير اللون والهيكل', 'تشكل طبقة سطحية تعكس التفاعل الكيميائي'],
    molecule: {
      atoms: ['Fe', 'Fe', 'O', 'O', 'O'],
      connections: [
        { from: 'Fe1', to: 'O1', label: 'رابطة' },
        { from: 'Fe2', to: 'O2', label: 'رابطة' },
        { from: 'Fe1', to: 'O3', label: 'رابطة' },
        { from: 'Fe2', to: 'O3', label: 'رابطة' }
      ]
    }
  },
  'Si-O': {
    name: 'ثاني أكسيد السيليكون',
    formula: 'SiO₂',
    kind: 'مادة كيميائية في الرمل والزجاج',
    description: 'ماده أساسية في الزجاج والسيراميك، ويظهر في الرمل بنظام شبكي قوي.',
    before: ['السيليكون: شبه فلز مهم في الإلكترونيات', 'الأكسجين: غاز موجود في الهواء'],
    after: ['SiO₂: مركب صلب شبكي', 'يكون الزجاج والسيراميك وخصائصه عالية الاستقرار'],
    molecule: {
      atoms: ['Si', 'O', 'O'],
      connections: [
        { from: 'Si', to: 'O1', label: 'رابطة' },
        { from: 'Si', to: 'O2', label: 'رابطة' }
      ]
    }
  },
  'H-Cl': {
    name: 'حمض الهيدروكلوريك',
    formula: 'HCl',
    kind: 'حمض قوي',
    description: 'حمض قوي يستخدم في تنظيف المعادن والتنظيف الصناعي ومختبرات الكيمياء.',
    before: ['الهيدروجين: غاز أولي', 'الكلور: غاز سام'],
    after: ['HCl: حمض قابل للذوبان', 'يتكون في الماء ويُظهر خصائص حمضية قوية'],
    molecule: {
      atoms: ['H', 'Cl'],
      connections: [{ from: 'H', to: 'Cl', label: 'رابطة تساهمية قطبية' }]
    }
  },
  'Cu-O': {
    name: 'أكسيد النحاس',
    formula: 'CuO',
    kind: 'مركب صلب مزرق',
    description: 'مركب يستخدم في الطلاء الحراري وبعض تطبيقات التحليل الكيميائي.',
    before: ['النحاس: فلز موصل للكهرباء', 'الأكسجين: غاز يدعم الأكسدة'],
    after: ['CuO: مركب صلب متغير اللون', 'يُستخدم في التفاعلات التحليلية والصناعية'],
    molecule: {
      atoms: ['Cu', 'O'],
      connections: [{ from: 'Cu', to: 'O', label: 'رابطة أيونية' }]
    }
  },
  'S-O': {
    name: 'ثاني أكسيد الكبريت',
    formula: 'SO₂',
    kind: 'غاز ملوث في بعض الحالات',
    description: 'غاز يُنتج عند احتراق بعض أنواع الكبريت ويُؤثر على البيئة.',
    before: ['الكبريت: عنصر غير فلزي', 'الأكسجين: غاز أساسي في الهواء'],
    after: ['SO₂: غاز له رائحة قوية', 'يُستخدم في بعض الصناعات الكيميائية'],
    molecule: {
      atoms: ['S', 'O', 'O'],
      connections: [
        { from: 'S', to: 'O1', label: 'رابطة مزدوجة' },
        { from: 'S', to: 'O2', label: 'رابطة مزدوجة' }
      ]
    }
  },
  'N-O': {
    name: 'أكسيد النيتروجين',
    formula: 'NO₂',
    kind: 'غاز ضار في بعض الظروف',
    description: 'أحد أكاسيد النيتروجين المهمة في التلوث الهوائي وبعض التفاعلات الصناعية.',
    before: ['النيتروجين: غاز شائع في الهواء', 'الأكسجين: غاز مهم للتنفس'],
    after: ['NO₂: غاز أحمر مزرق', 'يُظهر تغيرات في اللون والخصائص عند تكوينه'],
    molecule: {
      atoms: ['N', 'O', 'O'],
      connections: [
        { from: 'N', to: 'O1', label: 'رابطة مزدوجة' },
        { from: 'N', to: 'O2', label: 'رابطة' }
      ]
    }
  },
  'K-Cl': {
    name: 'كلوريد البوتاسيوم',
    formula: 'KCl',
    kind: 'مركب معدني مهم',
    description: 'يستخدم في الزراعة وكمادة غذائية للأسمدة والمنشطات.',
    before: ['البوتاسيوم: فلز قلوي', 'الكلور: غاز هالوجيني'],
    after: ['KCl: مركب مستقر ومفيد', 'يُستخدم في أغراض زراعية وصحية ومختبرية'],
    molecule: {
      atoms: ['K', 'Cl'],
      connections: [{ from: 'K', to: 'Cl', label: 'رابطة أيونية' }]
    }
  },
  'Ag-Cl': {
    name: 'كلوريد الفضة',
    formula: 'AgCl',
    kind: 'مركب ضوئي',
    description: 'مادة تُستخدم في التصوير الفوتوغرافي وبعض التطبيقات الضوئية.',
    before: ['الفضة: فلز لامع', 'الكلور: عنصر هالوجيني'],
    after: ['AgCl: مركب أبيض يتغير عند التعرض للضوء', 'يظهر في الصور القديمة والمواد الحساسة للضوء'],
    molecule: {
      atoms: ['Ag', 'Cl'],
      connections: [{ from: 'Ag', to: 'Cl', label: 'رابطة أيونية' }]
    }
  },
  'Al-O': {
    name: 'أكسيد الألمنيوم',
    formula: 'Al₂O₃',
    kind: 'مادة عازلة',
    description: 'مركب صلب مستقر يُستخدم في الزجاج والطوب والعزل الحراري.',
    before: ['الألمنيوم: فلز خفيف', 'الأكسجين: غاز أساسي'],
    after: ['Al₂O₃: مادة صلبة مقاومة للحرارة', 'تُستعمل في العزل والصناعة والتزجيج'],
    molecule: {
      atoms: ['Al', 'Al', 'O', 'O', 'O'],
      connections: [
        { from: 'Al1', to: 'O1', label: 'رابطة' },
        { from: 'Al2', to: 'O2', label: 'رابطة' },
        { from: 'Al1', to: 'O3', label: 'رابطة' },
        { from: 'Al2', to: 'O3', label: 'رابطة' }
      ]
    }
  }
};

const reactionExamples = [
  { label: 'الماء', elements: ['H', 'O'] },
  { label: 'ثاني أكسيد الكربون', elements: ['C', 'O'] },
  { label: 'ملح الطعام', elements: ['Na', 'Cl'] },
  { label: 'الأمونيا', elements: ['H', 'N'] },
  { label: 'الميثان', elements: ['C', 'H'] },
  { label: 'أكسيد الكالسيوم', elements: ['Ca', 'O'] },
  { label: 'أكسيد الحديد', elements: ['Fe', 'O'] },
  { label: 'SiO₂', elements: ['Si', 'O'] },
  { label: 'حمض الهيدروكلوريك', elements: ['H', 'Cl'] },
  { label: 'كلوريد البوتاسيوم', elements: ['K', 'Cl'] }
];

const quizQuestions = [
  {
    question: 'أي عنصر يكوّن معظم الهواء الجوي؟',
    options: ['الأكسجين', 'النيتروجين', 'الكربون', 'الهيدروجين'],
    answer: 'النيتروجين'
  },
  {
    question: 'ما اسم المركب الناتج من دمج الهيدروجين والأكسجين؟',
    options: ['الأمونيا', 'الماء', 'الملح', 'الميثان'],
    answer: 'الماء'
  },
  {
    question: 'أي عنصر يُستخدم غالباً في صناعة النحاس والألواح الكهربائية؟',
    options: ['السيليكون', 'النحاس', 'الحديد', 'الذهب'],
    answer: 'النحاس'
  },
  {
    question: 'أي عنصر يوجد في الرمل ويستخدم في صناعة الزجاج؟',
    options: ['السيليكون', 'النيتروجين', 'المغنيسيوم', 'الكبريت'],
    answer: 'السيليكون'
  },
  {
    question: 'ما الصيغة الكيميائية للماء؟',
    options: ['CO₂', 'H₂O', 'NaCl', 'CH₄'],
    answer: 'H₂O'
  },
  {
    question: 'أي مركب يُعرف باسم ملح الطعام؟',
    options: ['NaCl', 'HCl', 'CO₂', 'NH₃'],
    answer: 'NaCl'
  },
  {
    question: 'ما العنصر الذي يساهم في بناء العظام والأسنان؟',
    options: ['الكالسيوم', 'الحديد', 'الزنك', 'الفرانسيوم'],
    answer: 'الكالسيوم'
  },
  {
    question: 'أي غاز يمد الجسم بالأكسجين أثناء التنفس؟',
    options: ['الأرجون', 'الأكسجين', 'الهيليوم', 'الكلور'],
    answer: 'الأكسجين'
  },
  {
    question: 'ما اسم المركب الناتج عند اتحاد الكربون مع الأكسجين؟',
    options: ['الميثان', 'ثاني أكسيد الكربون', 'الأمونيا', 'حمض الهيدروكلوريك'],
    answer: 'ثاني أكسيد الكربون'
  },
  {
    question: 'أي عنصر يعتبر من الهالوجينات ويُستعمل في معالجة الماء؟',
    options: ['الكلور', 'الذهب', 'الكالسيوم', 'النيون'],
    answer: 'الكلور'
  }
];

let selectedCategory = 'الكل';
let currentQuestion = 0;
let progress = loadProgress();

const elementGrid = document.getElementById('elementGrid');
const elementDetails = document.getElementById('elementDetails');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');
const metricPoints = document.getElementById('metricPoints');
const metricBadges = document.getElementById('metricBadges');
const compoundAlbum = document.getElementById('compoundAlbum');
const badgeList = document.getElementById('badgeList');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizCounter = document.getElementById('quizCounter');
const quizScoreView = document.getElementById('quizScoreView');
const elementA = document.getElementById('elementA');
const elementB = document.getElementById('elementB');
const combineBtn = document.getElementById('combineBtn');
const labResult = document.getElementById('labResult');
const reactionBank = document.getElementById('reactionBank');

function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { ...defaultProgress };

  try {
    const parsed = JSON.parse(raw);
    return {
      ...defaultProgress,
      ...parsed,
      badges: Array.isArray(parsed.badges) ? parsed.badges : [...defaultProgress.badges],
      seenElements: Array.isArray(parsed.seenElements) ? parsed.seenElements : [],
      discoveredCompounds: Array.isArray(parsed.discoveredCompounds) ? parsed.discoveredCompounds : []
    };
  } catch (error) {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function renderReactionBank() {
  reactionBank.innerHTML = reactionExamples
    .map(
      (reaction) => `
        <button type="button" class="reaction-chip" data-elements="${reaction.elements.join(',')}">
          ${reaction.label}
        </button>
      `
    )
    .join('');

  reactionBank.querySelectorAll('.reaction-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      const [first, second] = btn.dataset.elements.split(',');
      elementA.value = first;
      elementB.value = second;
      renderLabResult();
    });
  });
}

function awardPoints(amount, reason) {
  progress.points += amount;
  const badgeSource = {
    element: 'مستكشف العناصر',
    compound: 'مُنشئ الجزيئات',
    quiz: 'محفز الكيمياء'
  };

  if (reason === 'element' && !progress.badges.includes('مستكشف العناصر')) {
    progress.badges.push('مستكشف العناصر');
  }

  if (reason === 'compound' && !progress.badges.includes('مُنشئ الجزيئات')) {
    progress.badges.push('مُنشئ الجزيئات');
  }

  if (reason === 'quiz' && !progress.badges.includes('محفز الكيمياء')) {
    progress.badges.push('محفز الكيمياء');
  }

  if (progress.badges.includes('مستكشف') && !progress.badges.includes('مستكشف العناصر')) {
    progress.badges.push('مستكشف العناصر');
  }

  if (progress.badges.includes('مُنشئ الجزيئات')) {
    const uniqueBadges = [...new Set(progress.badges)];
    progress.badges = uniqueBadges;
  }

  saveProgress();
  renderStats();
  renderBadges();
}

function renderStats() {
  metricPoints.textContent = progress.points;
  metricBadges.textContent = progress.badges.length;
}

function buildFilters() {
  const categories = ['الكل', ...new Set(Object.values(elementCategories))];
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-btn ${selectedCategory === category ? 'active' : ''}" data-category="${category}" type="button">
          ${category}
        </button>
      `
    )
    .join('');

  categoryFilters.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      selectedCategory = button.dataset.category;
      buildFilters();
      renderElements();
    });
  });
}

function renderElements() {
  const target = searchInput.value.trim().toLowerCase();

  const filtered = elements.filter((element) => {
    const matchesCategory = selectedCategory === 'الكل' || elementCategories[element.category] === selectedCategory;
    const matchesQuery = !target || element.name.toLowerCase().includes(target) || element.symbol.toLowerCase().includes(target) || String(element.atomicNumber).includes(target);
    return matchesCategory && matchesQuery;
  });

  elementGrid.innerHTML = filtered
    .map((element) => {
      const stateBg = getStateColor(element.state);
      return `
        <article class="element-card" data-symbol="${element.symbol}" tabindex="0">
          <div class="atomic">#${element.atomicNumber}</div>
          <div class="element-symbol">${element.symbol}</div>
          <div class="element-name">${element.name}</div>
          <span class="state-pill" style="background:${stateBg};">${element.state}</span>
        </article>
      `;
    })
    .join('');

  elementGrid.querySelectorAll('.element-card').forEach((card) => {
    const symbol = card.dataset.symbol;
    const element = elements.find((item) => item.symbol === symbol);
    card.addEventListener('click', () => showElementDetails(element));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showElementDetails(element);
      }
    });
  });
}

function getStateColor(state) {
  const map = {
    'غاز': '#48b7d1',
    'سائل': '#5cb3ff',
    'صلب': '#7ecb5a',
    'صلب / غير متفاعل': '#7ecb5a'
  };
  return map[state] || '#8d9dbd';
}

function showElementDetails(element) {
  const seen = progress.seenElements.includes(element.symbol);
  if (!seen) {
    progress.seenElements.push(element.symbol);
    progress.points += 10;
    if (!progress.badges.includes('مستكشف')) {
      progress.badges.push('مستكشف');
    }
    saveProgress();
    renderStats();
    renderBadges();
  }

  elementDetails.innerHTML = `
    <div class="detail-card">
      <div class="detail-head">
        <div class="detail-symbol">${element.symbol}</div>
        <div>
          <h4>${element.name}</h4>
          <div class="detail-meta">
            <span class="meta-chip">#${element.atomicNumber}</span>
            <span class="meta-chip">${elementCategories[element.category]}</span>
            <span class="meta-chip">${element.state}</span>
          </div>
        </div>
      </div>

      <p>${element.description}</p>

      <ul class="detail-list">
        <li><strong>موجود في الطبيعة:</strong> ${element.foundIn}</li>
        <li><strong>مواضع الوجود:</strong> ${element.natureTags.join(' ')}</li>
        <li><strong>الوظيفة في الحياة:</strong> يشارك في بناء المواد، التفاعلات الحيوية، أو الصناعات اليومية.</li>
      </ul>
    </div>
  `;
}

function populateSelectors() {
  const options = elements
    .map((element) => `<option value="${element.symbol}">${element.name} (${element.symbol})</option>`)
    .join('');

  elementA.innerHTML = options;
  elementB.innerHTML = options;

  elementA.value = 'H';
  elementB.value = 'O';
}

function getCompoundKey(symbolA, symbolB) {
  const pair = [symbolA, symbolB].sort();
  const key = pair.join('-');
  return compoundLibrary[key] ? key : `${pair[0]}-${pair[1]}`;
}

function drawMolecule(molecule) {
  const atomPositions = {
    H1: { x: 40, y: 120 },
    H2: { x: 160, y: 120 },
    O: { x: 100, y: 100 },
    O1: { x: 60, y: 100 },
    O2: { x: 160, y: 100 },
    C: { x: 100, y: 100 },
    Na: { x: 70, y: 100 },
    Cl: { x: 150, y: 100 },
    N: { x: 100, y: 100 },
    H3: { x: 150, y: 70 },
    H4: { x: 150, y: 140 },
    H5: { x: 50, y: 70 },
    H6: { x: 50, y: 140 },
    Mg: { x: 70, y: 100 },
    Ca: { x: 90, y: 100 },
    Fe1: { x: 70, y: 100 },
    Fe2: { x: 150, y: 100 },
    Si: { x: 100, y: 100 }
  };

  const allAtoms = Array.from(new Set(molecule.atoms));
  const atomMap = allAtoms.reduce((acc, atom) => {
    acc[atom] = atomPositions[atom] || { x: 100, y: 100 };
    return acc;
  }, {});

  const lines = molecule.connections
    .map((connection) => {
      const start = atomMap[connection.from];
      const end = atomMap[connection.to];
      return `<line x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" stroke="#4d7cff" stroke-width="4" stroke-linecap="round" />`;
    })
    .join('');

  const circles = allAtoms
    .map((atom) => {
      const pos = atomMap[atom];
      const fill = atom === 'O' || atom === 'O1' || atom === 'O2' ? '#5ecff4' : atom === 'H' || atom === 'H1' || atom === 'H2' || atom === 'H3' || atom === 'H4' || atom === 'H5' || atom === 'H6' ? '#ffb562' : atom === 'Na' ? '#9ad9ff' : atom === 'Cl' ? '#7ae07a' : atom === 'C' ? '#6069ff' : atom === 'Mg' ? '#9ceaaf' : atom === 'Ca' ? '#ffd68a' : atom === 'Fe' || atom === 'Fe1' || atom === 'Fe2' ? '#a5a5a5' : atom === 'Si' ? '#92d5d5' : '#d2d6dd';
      return `<circle cx="${pos.x}" cy="${pos.y}" r="22" fill="${fill}" stroke="#dfe8ff" stroke-width="2" /><text x="${pos.x}" y="${pos.y + 7}" text-anchor="middle" font-size="15" font-weight="700" fill="#12203d">${atom}</text>`;
    })
    .join('');

  return `
    <svg viewBox="0 0 220 180" aria-label="مخطط جزيئي">
      ${lines}
      ${circles}
    </svg>
  `;
}

function renderLabResult() {
  const symbolA = elementA.value;
  const symbolB = elementB.value;
  const pairKey = [symbolA, symbolB].sort().join('-');
  const compound = compoundLibrary[pairKey] || null;

  if (!compound) {
    labResult.innerHTML = `
      <div class="result-placeholder">
        <h4>لا توجد بيانات مركبة لهذا المزيج حالياً</h4>
        <p>جربي تفاعلًا آخر مثل H + O أو Na + Cl أو C + O.</p>
      </div>
    `;
    return;
  }

  const discoveredBefore = progress.discoveredCompounds.includes(compound.name);
  if (!discoveredBefore) {
    progress.discoveredCompounds.push(compound.name);
    progress.points += 20;
    if (!progress.badges.includes('مُنشئ الجزيئات')) {
      progress.badges.push('مُنشئ الجزيئات');
    }
    saveProgress();
    renderStats();
    renderBadges();
    renderAlbum();
  }

  labResult.innerHTML = `
    <div class="combination-card">
      <div class="combination-top">
        <div>
          <p class="section-label">النتيجة</p>
          <h4 class="compound-name">${compound.name}</h4>
        </div>
        <div class="compound-formula">${compound.formula}</div>
      </div>

      <div class="compound-badges">
        <span>${compound.kind}</span>
        <span>${discoveredBefore ? 'تم اكتشافه' : 'جديد في الألبوم'}</span>
      </div>

      <div class="molecule-scene">
        ${drawMolecule(compound.molecule)}
      </div>

      <div class="compare-grid">
        <div class="compare-card">
          <h5>قبل الاندماج</h5>
          <ul>
            ${compound.before.map((item) => `<li>• ${item}</li>`).join('')}
          </ul>
        </div>
        <div class="compare-card">
          <h5>بعد الاندماج</h5>
          <ul>
            ${compound.after.map((item) => `<li>• ${item}</li>`).join('')}
          </ul>
        </div>
      </div>

      <p>${compound.description}</p>
    </div>
  `;
}

function renderAlbum() {
  const compounds = progress.discoveredCompounds.length
    ? progress.discoveredCompounds
    : ['الماء', 'كلوريد الصوديوم', 'ثاني أكسيد الكربون'];

  compoundAlbum.innerHTML = compounds
    .map((compoundName) => {
      const compound = Object.values(compoundLibrary).find((item) => item.name === compoundName) || {
        name: compoundName,
        formula: '—',
        description: 'مركب تم اكتشافه من خلال المختبر التفاعلي.'
      };

      return `
        <article class="compound-item">
          <div class="compound-name">${compound.name}</div>
          <div class="formula">${compound.formula}</div>
          <p>${compound.description}</p>
        </article>
      `;
    })
    .join('');
}

function renderBadges() {
  const badgeCatalog = [
    { name: 'مستكشف', icon: '🔍', description: 'اكتشفت أول عنصر في الموسوعة.' },
    { name: 'مستكشف العناصر', icon: '🧪', description: 'فتحت مجموعة من العناصر وحققت أول تقدم.' },
    { name: 'مُنشئ الجزيئات', icon: '⚛️', description: 'قمت بدمج عنصرين واكتشفت مركباً جديداً.' },
    { name: 'محفز الكيمياء', icon: '🏆', description: 'أكملت تحديات المعرفة بنجاح.' }
  ];

  badgeList.innerHTML = badgeCatalog
    .map((badge) => {
      const unlocked = progress.badges.includes(badge.name);
      return `
        <div class="badge-card ${unlocked ? '' : 'locked'}">
          <div class="badge-icon">${badge.icon}</div>
          <h4>${badge.name}</h4>
          <p>${badge.description}</p>
          <strong>${unlocked ? 'مكتسبة' : 'قيد الاكتشاف'}</strong>
        </div>
      `;
    })
    .join('');
}

function renderQuiz() {
  const current = quizQuestions[currentQuestion];
  quizCounter.textContent = `السؤال ${currentQuestion + 1} من ${quizQuestions.length}`;
  quizScoreView.textContent = `النقاط: ${progress.quizScore}`;
  quizQuestion.textContent = current.question;
  quizOptions.innerHTML = current.options
    .map(
      (option) => `
        <button class="option-btn" type="button" data-option="${option}">${option}</button>
      `
    )
    .join('');

  quizOptions.querySelectorAll('.option-btn').forEach((button) => {
    button.addEventListener('click', () => handleQuizAnswer(button, current.answer, button.dataset.option));
  });
}

function handleQuizAnswer(button, correctAnswer, selectedAnswer) {
  const isCorrect = selectedAnswer === correctAnswer;

  quizOptions.querySelectorAll('.option-btn').forEach((optionButton) => {
    optionButton.disabled = true;
    optionButton.classList.toggle('correct', optionButton.dataset.option === correctAnswer);
    optionButton.classList.toggle('wrong', optionButton.dataset.option === selectedAnswer && !isCorrect);
  });

  if (isCorrect) {
    progress.quizScore += 10;
    if (!progress.badges.includes('محفز الكيمياء')) {
      progress.badges.push('محفز الكيمياء');
    }
    saveProgress();
    renderBadges();
    renderStats();
  }

  setTimeout(() => {
    currentQuestion += 1;
    if (currentQuestion < quizQuestions.length) {
      renderQuiz();
    } else {
      quizQuestion.textContent = 'أحسنت! انتهت الجولة، يمكنك إعادة التحدي في أي وقت.';
      quizOptions.innerHTML = '<button class="primary-btn" type="button" id="restartQuiz">إعادة التحدي</button>';
      const restartBtn = document.getElementById('restartQuiz');
      if (restartBtn) {
        restartBtn.addEventListener('click', () => {
          currentQuestion = 0;
          renderQuiz();
        });
      }
    }
  }, 900);
}

searchInput.addEventListener('input', renderElements);

combineBtn.addEventListener('click', renderLabResult);

document.getElementById('resetProgress').addEventListener('click', () => {
  progress = { ...defaultProgress };
  localStorage.removeItem(STORAGE_KEY);
  renderStats();
  renderBadges();
  renderAlbum();
  renderQuiz();
  populateSelectors();
  renderElements();
  elementDetails.innerHTML = `
    <div class="placeholder-detail">
      <h4>تمت إعادة إعداد الموقع بنجاح</h4>
      <p>يمكنك الآن استكشاف العناصر مرة أخرى ومتابعة رحلتك التعليمية من البداية.</p>
    </div>
  `;
});

buildFilters();
renderElements();
populateSelectors();
renderStats();
renderBadges();
renderAlbum();
renderReactionBank();
renderQuiz();
showElementDetails(elements[0]);
