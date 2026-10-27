const elementRecords = `
H|Hydrogen|1.008|diatomic nonmetal|Gas
He|Helium|4.0026022|noble gas|Gas
Li|Lithium|6.94|alkali metal|Solid
Be|Beryllium|9.01218315|alkaline earth metal|Solid
B|Boron|10.81|metalloid|Solid
C|Carbon|12.011|polyatomic nonmetal|Solid
N|Nitrogen|14.007|diatomic nonmetal|Gas
O|Oxygen|15.999|diatomic nonmetal|Gas
F|Fluorine|18.9984031636|diatomic nonmetal|Gas
Ne|Neon|20.17976|noble gas|Gas
Na|Sodium|22.989769282|alkali metal|Solid
Mg|Magnesium|24.305|alkaline earth metal|Solid
Al|Aluminium|26.98153857|post-transition metal|Solid
Si|Silicon|28.085|metalloid|Solid
P|Phosphorus|30.9737619985|polyatomic nonmetal|Solid
S|Sulfur|32.06|polyatomic nonmetal|Solid
Cl|Chlorine|35.45|diatomic nonmetal|Gas
Ar|Argon|39.9481|noble gas|Gas
K|Potassium|39.09831|alkali metal|Solid
Ca|Calcium|40.0784|alkaline earth metal|Solid
Sc|Scandium|44.9559085|transition metal|Solid
Ti|Titanium|47.8671|transition metal|Solid
V|Vanadium|50.94151|transition metal|Solid
Cr|Chromium|51.99616|transition metal|Solid
Mn|Manganese|54.9380443|transition metal|Solid
Fe|Iron|55.8452|transition metal|Solid
Co|Cobalt|58.9331944|transition metal|Solid
Ni|Nickel|58.69344|transition metal|Solid
Cu|Copper|63.5463|transition metal|Solid
Zn|Zinc|65.382|transition metal|Solid
Ga|Gallium|69.7231|post-transition metal|Solid
Ge|Germanium|72.6308|metalloid|Solid
As|Arsenic|74.9215956|metalloid|Solid
Se|Selenium|78.9718|polyatomic nonmetal|Solid
Br|Bromine|79.904|diatomic nonmetal|Liquid
Kr|Krypton|83.7982|noble gas|Gas
Rb|Rubidium|85.46783|alkali metal|Solid
Sr|Strontium|87.621|alkaline earth metal|Solid
Y|Yttrium|88.905842|transition metal|Solid
Zr|Zirconium|91.2242|transition metal|Solid
Nb|Niobium|92.906372|transition metal|Solid
Mo|Molybdenum|95.951|transition metal|Solid
Tc|Technetium|98|transition metal|Solid
Ru|Ruthenium|101.072|transition metal|Solid
Rh|Rhodium|102.905502|transition metal|Solid
Pd|Palladium|106.421|transition metal|Solid
Ag|Silver|107.86822|transition metal|Solid
Cd|Cadmium|112.4144|transition metal|Solid
In|Indium|114.8181|post-transition metal|Solid
Sn|Tin|118.7107|post-transition metal|Solid
Sb|Antimony|121.7601|metalloid|Solid
Te|Tellurium|127.603|metalloid|Solid
I|Iodine|126.904473|diatomic nonmetal|Solid
Xe|Xenon|131.2936|noble gas|Gas
Cs|Cesium|132.905451966|alkali metal|Solid
Ba|Barium|137.3277|alkaline earth metal|Solid
La|Lanthanum|138.905477|lanthanide|Solid
Ce|Cerium|140.1161|lanthanide|Solid
Pr|Praseodymium|140.907662|lanthanide|Solid
Nd|Neodymium|144.2423|lanthanide|Solid
Pm|Promethium|145|lanthanide|Solid
Sm|Samarium|150.362|lanthanide|Solid
Eu|Europium|151.9641|lanthanide|Solid
Gd|Gadolinium|157.253|lanthanide|Solid
Tb|Terbium|158.925352|lanthanide|Solid
Dy|Dysprosium|162.5001|lanthanide|Solid
Ho|Holmium|164.930332|lanthanide|Solid
Er|Erbium|167.2593|lanthanide|Solid
Tm|Thulium|168.934222|lanthanide|Solid
Yb|Ytterbium|173.0451|lanthanide|Solid
Lu|Lutetium|174.96681|lanthanide|Solid
Hf|Hafnium|178.492|transition metal|Solid
Ta|Tantalum|180.947882|transition metal|Solid
W|Tungsten|183.841|transition metal|Solid
Re|Rhenium|186.2071|transition metal|Solid
Os|Osmium|190.233|transition metal|Solid
Ir|Iridium|192.2173|transition metal|Solid
Pt|Platinum|195.0849|transition metal|Solid
Au|Gold|196.9665695|transition metal|Solid
Hg|Mercury|200.5923|transition metal|Liquid
Tl|Thallium|204.38|post-transition metal|Solid
Pb|Lead|207.21|post-transition metal|Solid
Bi|Bismuth|208.980401|post-transition metal|Solid
Po|Polonium|209|post-transition metal|Solid
At|Astatine|210|metalloid|Solid
Rn|Radon|222|noble gas|Gas
Fr|Francium|223|alkali metal|Solid
Ra|Radium|226|alkaline earth metal|Solid
Ac|Actinium|227|actinide|Solid
Th|Thorium|232.03774|actinide|Solid
Pa|Protactinium|231.035882|actinide|Solid
U|Uranium|238.028913|actinide|Solid
Np|Neptunium|237|actinide|Solid
Pu|Plutonium|244|actinide|Solid
Am|Americium|243|actinide|Solid
Cm|Curium|247|actinide|Solid
Bk|Berkelium|247|actinide|Solid
Cf|Californium|251|actinide|Solid
Es|Einsteinium|252|actinide|Solid
Fm|Fermium|257|actinide|Solid
Md|Mendelevium|258|actinide|Solid
No|Nobelium|259|actinide|Solid
Lr|Lawrencium|266|actinide|Solid
Rf|Rutherfordium|267|transition metal|Solid
Db|Dubnium|268|transition metal|Solid
Sg|Seaborgium|269|transition metal|Solid
Bh|Bohrium|270|transition metal|Solid
Hs|Hassium|269|transition metal|Solid
Mt|Meitnerium|278|unknown, probably transition metal|Solid
Ds|Darmstadtium|281|unknown, probably transition metal|Solid
Rg|Roentgenium|282|unknown, probably transition metal|Solid
Cn|Copernicium|285|transition metal|Liquid
Nh|Nihonium|286|unknown, probably post-transition metal|Solid
Fl|Flerovium|289|post-transition metal|Solid
Mc|Moscovium|289|unknown, probably post-transition metal|Solid
Lv|Livermorium|293|unknown, probably post-transition metal|Solid
Ts|Tennessine|294|unknown, probably metalloid|Solid
Og|Oganesson|294|unknown, predicted to be noble gas|Solid
`.trim().split("\n").map(line => {
  const [symbol, latin, mass, category, state] = line.split("|");
  return { symbol, latin, mass: Number(mass), category, state };
});

const arabicElementNames = `الهيدروجين|الهيليوم|الليثيوم|البيريليوم|البورون|الكربون|النيتروجين|الأكسجين|الفلور|النيون|الصوديوم|المغنيسيوم|الألومنيوم|السيليكون|الفوسفور|الكبريت|الكلور|الأرجون|البوتاسيوم|الكالسيوم|السكانديوم|التيتانيوم|الفاناديوم|الكروم|المنغنيز|الحديد|الكوبالت|النيكل|النحاس|الزنك|الغاليوم|الجرمانيوم|الزرنيخ|السيلينيوم|البروم|الكريبتون|الروبيديوم|السترونشيوم|الإيتريوم|الزركونيوم|النيوبيوم|الموليبدينوم|التكنيشيوم|الروثينيوم|الروديوم|البلاديوم|الفضة|الكادميوم|الإنديوم|القصدير|الأنتيمون|التيلوريوم|اليود|الزينون|السيزيوم|الباريوم|اللانثانوم|السيريوم|البراسيوديميوم|النيوديميوم|البروميثيوم|الساماريوم|اليوروبيوم|الغادولينيوم|التيربيوم|الديسبروسيوم|الهولميوم|الإربيوم|الثوليوم|الإيتربيوم|اللوتيتيوم|الهافنيوم|التنتالوم|التنغستن|الرينيوم|الأوزميوم|الإيريديوم|البلاتين|الذهب|الزئبق|الثاليوم|الرصاص|البزموت|البولونيوم|الأستاتين|الرادون|الفرانسيوم|الراديوم|الأكتينيوم|الثوريوم|البروتكتينيوم|اليورانيوم|النبتونيوم|البلوتونيوم|الأمريسيوم|الكوريوم|البركيليوم|الكاليفورنيوم|الأينشتاينيوم|الفرميوم|المندليفيوم|النوبليوم|اللورنسيوم|الرذرفورديوم|الدوبنيوم|السيبورغيوم|البوهريوم|الهاسيوم|المايتنريوم|الدارمشتاتيوم|الرونتجينيوم|الكوبرنيسيوم|النيهونيوم|الفليروفيوم|الموسكوفيوم|الليفرموريوم|التينيسين|الأوغانيسون`.split("|");

const elementTypes = {
  "diatomic nonmetal": "لافلز",
  "polyatomic nonmetal": "لافلز",
  "noble gas": "غاز نبيل",
  "alkali metal": "فلز قلوي",
  "alkaline earth metal": "فلز قلوي ترابي",
  "transition metal": "فلز انتقالي",
  "post-transition metal": "فلز بعد انتقالي",
  metalloid: "شبه فلز",
  lanthanide: "لانثانيد",
  actinide: "أكتينيد",
  "unknown, probably transition metal": "فلز انتقالي (متوقع)",
  "unknown, probably post-transition metal": "فلز بعد انتقالي (متوقع)",
  "unknown, probably metalloid": "شبه فلز (متوقع)",
  "unknown, predicted to be noble gas": "غاز نبيل (متوقع)"
};

const elementDetails = {
  H: ["أخف العناصر وأكثرها وفرة في الكون. يدخل في تركيب الماء والنجوم.", "يوجد في الماء (H₂O) وفي جزيئات كثيرة داخل أجسامنا."],
  He: ["غاز خفيف وخامل كيميائياً، اكتُشف أولاً عند رصده في ضوء الشمس.", "يُستخدم في ملء البالونات وفي تبريد بعض أجهزة التصوير الطبي."],
  C: ["عنصر أساسي في الكيمياء العضوية، وله صور متعددة مثل الغرافيت والألماس.", "يشكّل أساس المركبات العضوية الموجودة في جميع الكائنات الحية."],
  N: ["غاز عديم اللون والرائحة يشكّل معظم الغلاف الجوي للأرض.", "يشكّل نحو 78٪ من الهواء، ويدخل في تركيب البروتينات."],
  O: ["عنصر نشط كيميائياً تحتاج إليه معظم الكائنات الحية في التنفس.", "يوجد في الهواء والماء، وتحتاج إليه خلايا الجسم لإنتاج الطاقة."],
  Na: ["فلز قلوي لين ونشط جداً؛ لذلك لا يوجد حراً في الطبيعة عادةً.", "أيوناته جزء من ملح الطعام، ولها دور مهم في عمل الأعصاب."],
  Mg: ["فلز خفيف ولامع، وهو من العناصر المهمة للكائنات الحية.", "يوجد في الكلوروفيل الذي يساعد النباتات على التقاط ضوء الشمس."],
  Si: ["شبه فلز وفير في القشرة الأرضية، وله خصائص كهربائية مميزة.", "المادة الأساسية في الشرائح الإلكترونية والألواح الشمسية."],
  Cl: ["هالوجين نشط يوجد في الطبيعة غالباً ضمن مركبات، لا منفرداً.", "توجد أيوناته في ملح الطعام، وتُستخدم مركباته لمعالجة المياه."],
  Ca: ["فلز قلوي ترابي ضروري لبناء العظام ووظائف الجسم الحيوية.", "يدخل في تركيب العظام والأسنان، ويوجد في منتجات الألبان."],
  Fe: ["فلز قوي ومغناطيسي، ومن أكثر العناصر استخداماً في الصناعة.", "يدخل في صناعة الفولاذ، كما يساعد الدم على نقل الأكسجين."],
  Cu: ["فلز أحمر اللون وموصل ممتاز للحرارة والكهرباء.", "تُصنع منه الأسلاك الكهربائية وبعض العملات والأدوات."]
};

const historicalFacts = {
  H: "اكتشفه هنري كافنديش عام 1766 وسماه «الهواء القابل للاشتعال».",
  He: "اكتُشف أولاً في طيف الشمس عام 1868 بواسطة بيير جانسين وجوم لوكير قبل العثور عليه على الأرض.",
  C: "معروف منذ القدم بصورته في الفحم والغرافيت، والألماس الذي عُرف في الهند القديمة.",
  N: "اكتشفه دانيال رذرفورد عام 1772 وسماه الهواء السام أو الفاسد.",
  O: "اكتشفه كارل فيلهلم شيلي وجوزيف بريستلي بشكل مستقل عام 1774.",
  Na: "فصله همفري ديفي عام 1807 باستخدام التحليل الكهربائي للصودا الكاوية.",
  Mg: "عزله همفري ديفي لأول مرة عام 1808 من المغنيسيا.",
  Si: "عزله العالم السويدي يونس ياكوب برزيليوس عام 1824 باختزال فلوروسيليكات البوتاسيوم بفلز البوتاسيوم.",
  Cl: "اكتشفه كارل فيلهلم شيلي عام 1774 وأثبت همفري ديفي لاحقاً أنه عنصر.",
  Ca: "عزله همفري ديفي عام 1808 بالتحليل الكهربائي لخليط من الجير وأكسيد الزئبق.",
  Fe: "عُرفت صناعة واستخدام الحديد منذ العصر الحديدي (قبل حوالي 1200 سنة ق.م).",
  Cu: "من أقدم المعادن التي استخدمها الإنسان، وعُرفت في حضارات الرافدين ومصر القديمة.",
  Ag: "عُرف منذ العصور القديمة وكان يُستخدم في صناعة الحلي والعملات.",
  Au: "عُرف منذ فجر التاريخ لبريقه الفريد وعدم تأكسده.",
  Hg: "عُرف لدى المصريين القدماء والصينيين قبل 1500 سنة ق.م."
};

const elements = elementRecords.map((record, index) => {
  const number = index + 1;
  const isHalogen = [9, 17, 35, 53, 85, 117].includes(number);
  const [description, life] = elementDetails[record.symbol] || [
    `${arabicElementNames[index]} عنصر رمزه ${record.symbol}، وعدده الذري ${number}، وينتمي إلى فئة ${elementTypes[record.category] || "عنصر كيميائي"}.`,
    number >= 104
      ? "عنصر فائق الثقل أُنتجت منه كميات ضئيلة في المختبر، وخصائصه المدروسة لا تعني أنه مادة للاستخدام المنزلي."
      : number === 43 || number === 61 || number >= 84
        ? "عنصر مشع أو نادر؛ يُدرس في سياقات علمية متخصصة، ولا يُستخدم في الأنشطة المنزلية."
        : `تساعد معرفة خصائص ${arabicElementNames[index]} على فهم تنوّع المواد وتصنيفها في الجدول الدوري.`
  ];
  return {
    number,
    symbol: record.symbol,
    name: arabicElementNames[index],
    latin: record.latin,
    type: number === 117 ? "هالوجين (متوقع)" : isHalogen ? "هالوجين" : elementTypes[record.category] || "غير مصنف",
    mass: record.mass.toFixed(3).replace(/\.?0+$/, ""),
    state: number >= 104 ? "غير مؤكد" : record.state === "Gas" ? "غاز" : record.state === "Liquid" ? "سائل" : "صلب",
    description,
    life,
    history: historicalFacts[record.symbol] || `اكتُشف هذا العنصر وتم إدراجه في الجدول الدوري عبر الأبحاث الكيميائية المتقدمة.`
  };
});

const reactions = {
  vinegar: {
    names: [{ symbol: "CH₃COOH", name: "حمض الخليك", detail: "يوجد في الخل المنزلي" }, { symbol: "NaHCO₃", name: "بيكربونات الصوديوم", detail: "مركّب قلوي شائع" }],
    equation: "CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑",
    explanation: "يتفاعل حمض الخليك مع بيكربونات الصوديوم، وينتج عن ذلك غاز ثاني أكسيد الكربون الذي يكوّن الفقاعات."
  },
  rust: {
    names: [{ symbol: "Fe", name: "الحديد", detail: "فلز شائع في الأدوات" }, { symbol: "O₂", name: "الأكسجين", detail: "غاز في الهواء" }],
    equation: "4Fe + 3O₂ → 2Fe₂O₃",
    explanation: "يتحد الحديد تدريجياً مع الأكسجين بوجود الرطوبة، مكوّناً أكسيد الحديد المعروف بالصدأ."
  },
  water: {
    names: [{ symbol: "H₂", name: "الهيدروجين", detail: "أخف الغازات" }, { symbol: "O₂", name: "الأكسجين", detail: "يدعم الاحتراق" }],
    equation: "2H₂ + O₂ → 2H₂O",
    explanation: "تتحد جزيئات الهيدروجين والأكسجين لتكوين الماء. هذا تفاعل طارد للطاقة وعرضه هنا نظرياً."
  },
  sodium: {
    names: [{ symbol: "Na", name: "الصوديوم", detail: "فلز قلوي نشط" }, { symbol: "H₂O", name: "الماء", detail: "مذيب الحياة" }],
    equation: "2Na + 2H₂O → 2NaOH + H₂↑",
    explanation: "يتفاعل الصوديوم بقوة مع الماء وينتج هيدروكسيد الصوديوم وغاز الهيدروجين مع إطلاق حرارة."
  },
  magnesium: {
    names: [{ symbol: "Mg", name: "المغنيسيوم", detail: "فلز خفيف لامع" }, { symbol: "O₂", name: "الأكسجين", detail: "غاز في الهواء" }],
    equation: "2Mg + O₂ → 2MgO",
    explanation: "يحترق المغنيسيوم بضوء أبيض ساطع متحداً مع الأكسجين لإنتاج أكسيد المغنيسيوم."
  },
  zinc: {
    names: [{ symbol: "Zn", name: "الزنك", detail: "فلز صلب مقاوم" }, { symbol: "HCl", name: "حمض الهيدروكلوريك", detail: "حمض قوي" }],
    equation: "Zn + 2HCl → ZnCl₂ + H₂↑",
    explanation: "يتفاعل الزنك مع حمض الهيدروكلوريك لينتج كلوريد الزنك وغاز الهيدروجين الفوار."
  },
  calcium: {
    names: [{ symbol: "Ca", name: "الكالسيوم", detail: "فلز قلوي ترابي" }, { symbol: "H₂O", name: "الماء", detail: "مذيب تفاعلي" }],
    equation: "Ca + 2H₂O → Ca(OH)₂ + H₂↑",
    explanation: "يتفاعل الكالسيوم مع الماء ببطء أكثر من الصوديوم لينتج هيدروكسيد الكالسيوم وغاز الهيدروجين."
  },
  carbon: {
    names: [{ symbol: "C", name: "الكربون", detail: "أساس الكيمياء العضوية" }, { symbol: "O₂", name: "الأكسجين", detail: "غاز في الهواء" }],
    equation: "C + O₂ → CO₂",
    explanation: "يحترق الكربون بوجود الأكسجين لإنتاج غاز ثاني أكسيد الكربون."
  },
  copper: {
    names: [{ symbol: "Cu", name: "النحاس", detail: "فلز انتقالي أحمر" }, { symbol: "HNO₃", name: "حمض النيتريك", detail: "حمض مؤكسد قوي" }],
    equation: "Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O",
    explanation: "يتفاعل النحاس مع حمض النيتريك المركز منتجاً نترات النحاس وغاز ثاني أكسيد النيتروجين البني السام."
  },
  sulfur: {
    names: [{ symbol: "S", name: "الكبريت", detail: "لافلز أصفر" }, { symbol: "O₂", name: "الأكسجين", detail: "غاز حيوي" }],
    equation: "S + O₂ → SO₂",
    explanation: "يحترق الكبريت في الهواء لإنتاج غاز ثاني أكسيد الكبريت ذي الرائحة النفاذة."
  },
  copperOxide: {
    names: [{ symbol: "Cu", name: "النحاس", detail: "فلز أحمر" }, { symbol: "O₂", name: "الأكسجين", detail: "غاز حيوي" }],
    equation: "2Cu + O₂ → 2CuO",
    explanation: "يتأكسد النحاس عند تسخينه في الهواء ليتكون أكسيد النحاس الأسود."
  }
};

const questions = [
  { category: "أساسيات العناصر", question: "ما الرقم الذي يحدد هوية العنصر الكيميائي؟", choices: ["عدد النيوترونات", "العدد الذري", "الكتلة الذرية", "عدد مستويات الطاقة"], answer: 1, hint: "ابحث عن الرقم الذي يساوي عدد البروتونات في نواة الذرة.", explanation: "العدد الذري هو عدد البروتونات في النواة، وهو ما يميّز كل عنصر عن غيره." },
  { category: "كيمياء من حولنا", question: "ما الصيغة الكيميائية للماء؟", choices: ["CO₂", "O₂", "H₂O", "NaCl"], answer: 2, hint: "يتكوّن جزيء الماء من ذرتي عنصر واحد وذرة واحدة من عنصر آخر.", explanation: "يتكوّن جزيء الماء H₂O من ذرتي هيدروجين وذرة أكسجين واحدة." },
  { category: "عناصر الحياة", question: "أي عنصر يشكّل أساس المركبات العضوية؟", choices: ["الحديد", "الهيليوم", "الكربون", "الصوديوم"], answer: 2, hint: "رمزه الكيميائي C، وتحتوي أجسام الكائنات الحية على مركباته.", explanation: "الكربون قادر على تكوين روابط متنوعة ومستقرة، لذلك يشكّل أساس الكيمياء العضوية." },
  { category: "الهواء والغلاف الجوي", question: "ما الغاز الأكثر وفرة في الغلاف الجوي للأرض؟", choices: ["الأكسجين", "النيتروجين", "ثاني أكسيد الكربون", "الهيدروجين"], answer: 1, hint: "يشكّل قرابة 78٪ من الهواء الذي يحيط بنا.", explanation: "النيتروجين هو المكوّن الأكبر للغلاف الجوي، بنسبة تقارب 78٪ من حجمه." },
  { category: "تفاعلات كيميائية", question: "ما الغاز الذي ينتج الفقاعات عند تفاعل الخل مع بيكربونات الصوديوم؟", choices: ["الهيدروجين", "الأكسجين", "النيتروجين", "ثاني أكسيد الكربون"], answer: 3, hint: "صيغته CO₂، وهو الغاز نفسه الذي يوجد في المشروبات الفوارة.", explanation: "ينتج غاز ثاني أكسيد الكربون (CO₂) عن تفاعل حمض الخليك مع بيكربونات الصوديوم." },
  { category: "العناصر والتقنية", question: "أي عنصر يُستخدم على نطاق واسع في صناعة الشرائح الإلكترونية؟", choices: ["الكالسيوم", "السيليكون", "الكلور", "الهيليوم"], answer: 1, hint: "شبه فلز اسمه يشبه كلمة «السليكا»، ورمزه Si.", explanation: "يُستخدم السيليكون في أشباه الموصلات، وهي أساس الشرائح الإلكترونية والخلايا الشمسية." },
  { category: "خصائص المواد", question: "ما العنصر الأكثر وفرة في قشرة الأرض من حيث الوزن؟", choices: ["السيليكون", "الأكسجين", "الحديد", "الألومنيوم"], answer: 1, hint: "غاز حيوي يشكل مع السيليكون معظم الصخور والمعادن.", explanation: "الأكسجين هو العنصر الأكثر وفرة وزناً في القشرة الأرضية (نحو 46.6%)." },
  { category: "حالات المادة", question: "ماذا يُسمى تحول المادة مباشرة من الحالة الصلبة إلى الغازية دون مرور بالحالة السائلة؟", choices: ["التكثف", "التبخر", "التسامي", "الانصهار"], answer: 2, hint: "تحدث هذه الظاهرة مع الجليد الجاف (ثاني أكسيد الكربون الصلب).", explanation: "التسامي هو انتقال المادة مباشرة من الصلب إلى الغاز (مثل الثلج الجاف واليود)." },
  { category: "الجدول الدوري", question: "ما اسم المجموعة التي ينتمي إليها الهيليوم والنيون والأرجون؟", choices: ["الفلزات القلوية", "الغازات النبيلة", "الهالوجينات", "أشباه الفلزات"], answer: 1, hint: "تتميز بأنها غازات خاملة نادراً ما تتفاعل كيميائياً.", explanation: "الغازات النبيلة عناصر خاملة تمتلك غلافاً إلكترونياً ممتلئاً تماماً." },
  { category: "كيمياء المنزل", question: "ما الصيغة الكيميائية لملح الطعام العادي؟", choices: ["NaOH", "HCl", "NaCl", "NaHCO₃"], answer: 2, hint: "يتكوّن من اتحاد فلز الصوديوم النشط مع غاز الكلور السام، فينتج مركب مستقر نتناوله بأمان.", explanation: "ملح الطعام يتكون من الصوديوم والكلور وصيغته الكيميائية NaCl." },
  { category: "الجو والبيئة", question: "ما الغاز الذي يمتص الأشعة فوق البنفسجية الضارة في طبقات الجو العليا؟", choices: ["الأكسجين (O₂)", "الأوزون (O₃)", "النيتروجين", "الميثان"], answer: 1, hint: "يتكون من ثلاث ذرات أكسجين ويحمي الحياة على الأرض.", explanation: "طبقة الأوزون (O₃) تحمي كوكب الأرض من الأشعة فوق البنفسجية الضارة القادمة من الشمس." },
  { category: "الكيمياء الحيوية", question: "ما العنصر الأساسي الموجود في جزيء الكلوروفيل المسؤول عن اللون الأخضر في النباتات؟", choices: ["الحديد", "المغنيسيوم", "النحاس", "الكالسيوم"], answer: 1, hint: "فلز قلوي ترابي يقع في وسط تركيب جزيء الكلوروفيل.", explanation: "المغنيسيوم هو الذرة المركزية في جزيء الكلوروفيل وتلتقط طاقة ضوء الشمس." },
  { category: "الروابط الكيميائية", question: "ما نوع الرابطة التي تنشأ بين الأيونات الموجبة والسالبة؟", choices: ["رابطة تساهمية", "رابطة أيونية", "رابطة هيدروجينية", "رابطة فلزية"], answer: 1, hint: "تنتج عن انتقال الإلكترونات بين الذرات وليست مشاركتها.", explanation: "الرابطة الأيونية تنشأ نتيجة التجاذب الكهربائي بين أيون موجب وأيون سالب." },
  { category: "الأحماض والقواعد", question: "ما لون ورق تباع الشمس (المؤشر) عند غمسه في محلول حمضي؟", choices: ["أزرق", "أخضر", "أحمر", "أصفر"], answer: 2, hint: "الأحمر يدل على الحموضة والأزرق يدل على القاعدية.", explanation: "الأحماض تحول لون ورقة تباع الشمس إلى اللون الأحمر." },
  { category: "الجدول الدوري الحديث", question: "من هو العالم الذي وضع حجر الأساس للجدول الدوري وترتيب العناصر حسب الأعداد الذرية؟", choices: ["ديميتري مندلييف", "هنري موزلي", "أنطوان لافوازييه", "جون دالتون"], answer: 1, hint: "اكتشف طيف الأشعة السينية للعناصر ورتبها تصاعدياً حسب أعدادها الذرية.", explanation: "هنري موزلي هو من رتب الجدول الدوري الحديث بناءً على العدد الذري (البروتونات)." },
  { category: "الكيمياء العضوية", question: "ما أبسط الهيدروكربونات وأكثرها انتشاراً في الغاز الطبيعي؟", choices: ["البروبان", "الإيثان", "الميثان", "البيوتان"], answer: 2, hint: "صيغته CH₄، وهو المكون الرئيسي للغاز الطبيعي.", explanation: "الميثان (CH₄) هو أبسط مركب هيدروكربوني ألكاني." },
  { category: "السوائل والمحلول", question: "لماذا يُسمى الماء غالباً بـ «المذيب العام»؟", choices: ["لأنه يذيب معظم المواد بسبب قطبيته", "لأنه المادة الوحيدة السائلة", "لأنه لا يتفاعل أبداً", "لأنه غاز في الأصل"], answer: 0, hint: "جزيء الماء قطبي وله قدرة عالية على إذابة العديد من المركبات الأيونية والقطبية.", explanation: "بسبب قطبية جزيء الماء العالية، يستطيع إذابة عدد هائل من المواد أكثر من أي سائل آخر." },
  { category: "طاقة التفاعل", question: "ماذا يُسمى التفاعل الكيميائي الذي يمتص الحرارة من الوسط المحيط؟", choices: ["تفاعل طارد للطاقة", "تفاعل ماص للحرارة", "تفاعل تعادل", "تفاعل احتراق"], answer: 1, hint: "تحتاج المواد المتفاعلة إلى امتصاص طاقة لتستمر.", explanation: "التفاعل الماص للحرارة ينقص فيه حرارة الوسط المحيط لأنه يمتص الطاقة." },
  { category: "الغازات", question: "ما القانون الذي يربط بين حجم الغاز ودرجة حرارته عند ثبات الضغط؟", choices: ["قانون بويل", "قانون شارل", "قانون دالتون", "قانون أفوكادرو"], answer: 1, hint: "ينص على أن حجم كمية محددة من الغاز يتناسب طردياً مع درجات حرارته المطلقة.", explanation: "قانون شارل يوضح العلاقة الطردية بين حجم الغاز ودرجات حرارته المطلقة (عند ثبات الضغط)." },
  { category: "العناصر المشعة", question: "من هي العالمة التي اكتشفت عنصري الراديوم والبولونيوم وحازت جائزة نوبل مرتين؟", choices: ["روزاليند فرانكلين", "ماري كوري", "آدا لوفلايس", "ليز مايتنر"], answer: 1, hint: "عالمة بولندية فرنسية رائدة في أبحاث النشاط الإشعاعي.", explanation: "ماري كوري هي العالمة الشهيرة التي اكتشفت الراديوم والبولونيوم وحازت نوبل في الفيزياء والكيمياء." }
];

const badges = [
  { id: "first-element", icon: "◈", name: "أول اكتشاف", description: "اكتشف عنصرك الأول", achieved: state => state.discovered.length >= 1 },
  { id: "element-explorer", icon: "✧", name: "مستكشف العناصر", description: "اكتشف 5 عناصر مختلفة", achieved: state => state.discovered.length >= 5 },
  { id: "curious-scientist", icon: "⚗", name: "فضول علمي", description: "أجرِ 3 محاكاة افتراضية", achieved: state => state.experiments >= 3 },
  { id: "quiz-master", icon: "✳", name: "خبير التحدّي", description: "أكمل تحدّي المعرفة", achieved: state => state.quizCompleted }
];

const STORAGE_KEY = "shaghaf-chemistry-progress-v1";
const defaultState = () => ({ xp: 0, discovered: [], experiments: 0, quizCompleted: false, bestQuiz: 0, activities: [] });
let state = defaultState();
let activeFilter = "الكل";
let quizIndex = 0;
let quizSet = [];
let viewMode = "cards";
let quizCorrect = 0;
let quizAnswered = false;
let toastTimer;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const QUIZ_LENGTH = 10;
const baseType = element => element.type.replace(/\s*\(متوقع\)$/, "");
const normalizeAr = value => String(value).toLocaleLowerCase("ar").replace(/[\u064B-\u065F\u0640]/g, "").replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").trim();
const shuffle = list => { const a = [...list]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function buildQuizSet() {
  return shuffle(questions).slice(0, QUIZ_LENGTH).map(q => {
    const order = shuffle(q.choices.map((choice, index) => ({ choice, index })));
    return { ...q, choices: order.map(o => o.choice), answer: order.findIndex(o => o.index === q.answer) };
  });
}
const catClass = { "فلز قلوي": "alkali", "فلز قلوي ترابي": "earth", "فلز انتقالي": "trans", "فلز بعد انتقالي": "post", "شبه فلز": "metalloid", "لافلز": "nonmetal", "هالوجين": "halogen", "غاز نبيل": "noble", "لانثانيد": "lanth", "أكتينيد": "actin" };
function tablePosition(n) {
  if (n === 1) return [1, 1]; if (n === 2) return [1, 18];
  if (n <= 4) return [2, n - 2]; if (n <= 10) return [2, n + 8];
  if (n <= 12) return [3, n - 10]; if (n <= 18) return [3, n];
  if (n <= 36) return [4, n - 18]; if (n <= 54) return [5, n - 36];
  if (n <= 56) return [6, n - 54]; if (n <= 71) return [9, n - 54];
  if (n <= 86) return [6, n - 68]; if (n <= 88) return [7, n - 86];
  if (n <= 103) return [10, n - 86]; return [7, n - 100];
}
function renderTable(filtered) {
  const table = $("#periodicTable");
  if (!table) return;
  const shown = new Set(filtered.map(element => element.number));
  table.innerHTML = elements.map(element => {
    const [row, col] = tablePosition(element.number);
    const found = state.discovered.includes(element.number);
    return `<button class="pt-cell cat-${catClass[baseType(element)] || "other"}${shown.has(element.number) ? "" : " dim"}${found ? " found" : ""}" style="grid-row:${row};grid-column:${col}" data-element="${element.number}" aria-label="${element.name}"><small>${element.number}</small><b>${element.symbol}</b><span>${element.name}</span></button>`;
  }).join("");
}
function applyViewMode() {
  $("#elementGrid")?.classList.toggle("hidden", viewMode !== "cards");
  $("#periodicWrap")?.classList.toggle("hidden", viewMode !== "table");
}

let audioContext;
function playSound(type) {
  try {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    const audioCtx = audioContext;
    if (audioCtx.state === "suspended") audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    if (type === 'bubble') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(250, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(500, audioCtx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, audioCtx.currentTime);
      osc.frequency.setValueAtTime(520, audioCtx.currentTime + 0.12);
      osc.frequency.setValueAtTime(660, audioCtx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.5);
    }
  } catch (e) {}
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultState();
    const data = JSON.parse(saved);
    if (!data || !Array.isArray(data.discovered) || !Array.isArray(data.activities) ||
        !Number.isFinite(data.xp) || !Number.isFinite(data.experiments)) {
      throw new Error("Saved progress has an invalid shape");
    }
    return {
      xp: Math.max(0, data.xp),
      discovered: [...new Set(data.discovered.filter(number => elements.some(element => element.number === number)))],
      experiments: Math.max(0, data.experiments),
      quizCompleted: Boolean(data.quizCompleted),
      bestQuiz: Number.isFinite(data.bestQuiz) ? Math.min(QUIZ_LENGTH * 10, Math.max(0, data.bestQuiz)) : 0,
      activities: data.activities.filter(item => item && typeof item.title === "string" && typeof item.detail === "string" && typeof item.icon === "string" && Number.isFinite(item.xp)).slice(0, 30)
    };
  } catch (error) {
    console.error("Unable to load saved progress:", error);
    return defaultState();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error("Unable to save progress:", error);
    return false;
  }
}

function addActivity(title, detail, icon, points) {
  state.xp += points;
  state.activities.unshift({ title, detail, icon, xp: points, time: Date.now() });
  state.activities = state.activities.slice(0, 30);
  saveProgress();
  renderProgress();
}

function renderProgress() {
  const earned = badges.filter(badge => badge.achieved(state)).length;
  const setSafeText = (selector, text) => { const el = $(selector); if (el) el.textContent = text; };
  setSafeText("#headerXp", state.xp);
  setSafeText("#homeXp", state.xp);
  setSafeText("#homeElements", state.discovered.length);
  setSafeText("#homeExperiments", state.experiments);
  setSafeText("#homeBadges", earned);
  setSafeText("#journalXp", state.xp);
  setSafeText("#journalElements", state.discovered.length);
  setSafeText("#journalExperiments", state.experiments);
  setSafeText("#badgeCount", `${earned} / ${badges.length}`);
  setSafeText("#quizTotalScore", state.xp);
  renderBadges();
  renderActivities();
  renderElements();
}

function renderBadges() {
  const list = $("#badgeList");
  if (!list) return;
  list.innerHTML = badges.map(badge => {
    const achieved = badge.achieved(state);
    return `<div class="badge-item ${achieved ? "earned" : ""}"><span class="badge-emoji">${badge.icon}</span><span><strong>${badge.name}</strong><small>${achieved ? "تم الحصول عليها" : badge.description}</small></span></div>`;
  }).join("");
}

function formatTime(time) {
  if (!time) return "ضمن رحلتك";
  const minutes = Math.max(0, Math.floor((Date.now() - time) / 60000));
  if (minutes < 1) return "الآن";
  if (minutes < 60) return `قبل ${minutes} د`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `قبل ${hours} س`;
  return `قبل ${Math.floor(hours / 24)} يوم`;
}

function renderActivities() {
  const container = $("#activityList");
  if (!container) return;
  if (!state.activities.length) {
    container.innerHTML = '<div class="activity-empty">لم تبدأ رحلتك بعد — اكتشافك الأول ينتظرك ✦</div>';
    return;
  }
  container.innerHTML = state.activities.slice(0, 8).map(activity =>
    `<div class="activity-item"><span class="activity-icon">${escapeHtml(activity.icon)}</span><span class="activity-copy"><strong>${escapeHtml(activity.title)}</strong><small>${escapeHtml(activity.detail)} · ${formatTime(activity.time)}</small></span><span class="activity-xp">+${activity.xp} XP</span></div>`
  ).join("");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function renderElements() {
  const searchInput = $("#elementSearch");
  const search = normalizeAr(searchInput?.value || "");
  const exactMatch = search && elements.find(element =>
    String(element.number) === search ||
    normalizeAr(element.symbol) === search ||
    normalizeAr(element.name) === search ||
    normalizeAr(element.latin) === search
  );
  const filtered = elements.filter(element => {
    const matchesType = activeFilter === "الكل" || baseType(element) === activeFilter;
    const matchesSearch = exactMatch
      ? element === exactMatch
      : normalizeAr(`${element.name} ${element.latin} ${element.symbol} ${element.number}`).includes(search);
    return matchesType && matchesSearch;
  });
  const countEl = $("#elementCount");
  if (countEl) countEl.textContent = filtered.length;
  const gridEl = $("#elementGrid");
  if (gridEl) {
    gridEl.innerHTML = filtered.map(element => {
      const discovered = state.discovered.includes(element.number);
      return `<button class="element-card ${discovered ? "discovered" : ""}" data-element="${element.number}" aria-label="تفاصيل عنصر ${element.name}"><span class="element-top"><span class="element-number">${String(element.number).padStart(3, "0")}</span><span class="element-symbol">${element.symbol}</span></span><span class="element-name">${element.name}</span><span class="element-name-latin">${element.latin}</span><span class="element-meta"><span class="element-type">${element.type}</span><span class="element-discover">${discovered ? "تم اكتشافه ✓" : "اكتشف العنصر ←"}</span></span></button>`;
    }).join("");
  }
  const emptyEl = $("#elementEmpty");
  if (emptyEl) emptyEl.classList.toggle("hidden", filtered.length > 0);
  renderTable(filtered);
}

function renderFeatured() {
  const container = $("#featuredElements");
  if (!container) return;
  container.innerHTML = [elements[4], elements[2], elements[10], elements[7]].map(element =>
    `<button class="featured-card" data-element="${element.number}"><span class="featured-symbol">${element.symbol}</span><span><strong>${element.name}</strong><small>${String(element.number).padStart(2, "0")} · ${element.latin}</small></span></button>`
  ).join("");
}

function openElement(number) {
  const element = elements.find(item => item.number === number);
  if (!element) return;
  const isNew = !state.discovered.includes(element.number);
  if (isNew) {
    state.discovered.push(element.number);
    addActivity(`اكتشاف عنصر ${element.name}`, `العدد الذري ${element.number}`, "◈", 10);
    showToast(`اكتشاف رائع! حصلت على 10 نقاط شغف.`);
  }
  const contentEl = $("#elementDialogContent");
  if (contentEl) {
    contentEl.innerHTML = `
      <div class="dialog-element-head">
        <span class="dialog-symbol">${element.symbol}</span>
        <div><small>${element.latin} · ${element.type}</small><h2>${element.name}</h2></div>
      </div>
      <div class="dialog-facts">
        <div><small>العدد الذري</small><strong>${element.number}</strong></div>
        <div><small>الكتلة الذرية</small><strong>${element.mass} u</strong></div>
        <div><small>الحالة عند درجة حرارة الغرفة</small><strong>${element.state}</strong></div>
        <div><small>الفئة</small><strong>${element.type}</strong></div>
      </div>
      <p class="dialog-description">${element.description}</p>
      <div class="dialog-section-title">🏛️ القصة والاكتشاف التاريخي</div>
      <p class="dialog-description">${element.history}</p>
      <p class="dialog-life"><strong>في حياتنا اليومية:</strong> ${element.life}</p>
    `;
  }
  const dialog = $("#elementDialog");
  if (dialog) dialog.showModal();
}

function initComparison() {
  const options = elements.map(element =>
    `<option value="${element.number}">${String(element.number).padStart(3, "0")} · ${element.symbol} · ${element.name}</option>`
  ).join("");
  const c1 = $("#compareEl1");
  const c2 = $("#compareEl2");
  if (c1) c1.innerHTML = options;
  if (c2) c2.innerHTML = options;
  if (c1) c1.value = "1";
  if (c2) c2.value = "8";
  renderComparisonResults();
}

function renderComparisonResults() {
  const c1 = $("#compareEl1");
  const c2 = $("#compareEl2");
  const results = $("#comparisonResults");
  if (!c1 || !c2 || !results) return;
  const el1 = elements.find(e => e.number === Number(c1.value));
  const el2 = elements.find(e => e.number === Number(c2.value));
  if (!el1 || !el2) return;

  results.innerHTML = `
    <div class="comparison-card">
      <div class="comparison-header">
        <span class="comparison-symbol">${el1.symbol}</span>
        <div><strong>${el1.name}</strong><small>${el1.latin} · ${el1.type}</small></div>
      </div>
      <div class="comparison-rows">
        <div class="comparison-row"><span>العدد الذري</span><span>${el1.number}</span></div>
        <div class="comparison-row"><span>الكتلة الذرية</span><span>${el1.mass} u</span></div>
        <div class="comparison-row"><span>الحالة الفيزيائية</span><span>${el1.state}</span></div>
        <div class="comparison-row"><span>الفئة الكيميائية</span><span>${el1.type}</span></div>
        <div class="comparison-row"><span>الاستخدام اليومي</span><span>${el1.life}</span></div>
      </div>
    </div>
    <div class="comparison-card">
      <div class="comparison-header">
        <span class="comparison-symbol">${el2.symbol}</span>
        <div><strong>${el2.name}</strong><small>${el2.latin} · ${el2.type}</small></div>
      </div>
      <div class="comparison-rows">
        <div class="comparison-row"><span>العدد الذري</span><span>${el2.number}</span></div>
        <div class="comparison-row"><span>الكتلة الذرية</span><span>${el2.mass} u</span></div>
        <div class="comparison-row"><span>الحالة الفيزيائية</span><span>${el2.state}</span></div>
        <div class="comparison-row"><span>الفئة الكيميائية</span><span>${el2.type}</span></div>
        <div class="comparison-row"><span>الاستخدام اليومي</span><span>${el2.life}</span></div>
      </div>
    </div>
  `;
}

function renderReactionPreview() {
  const select = $("#reactionSelect");
  if (!select) return;
  const reaction = reactions[select.value];
  if (!reaction) return;
  const names = reaction.names;
  const runBtn = $("#runExperiment");
  if (runBtn) runBtn.disabled = false;
  const preview = $("#reactantPreview");
  if (preview) {
    preview.innerHTML = `<div class="reactant"><span class="reactant-symbol">${names[0].symbol}</span><span><strong>${names[0].name}</strong><small>${names[0].detail}</small></span></div><div class="reactant-plus">+</div><div class="reactant"><span class="reactant-symbol">${names[1].symbol}</span><span><strong>${names[1].name}</strong><small>${names[1].detail}</small></span></div>`;
  }
  const molLeft = $("#moleculeLeft");
  const molRight = $("#moleculeRight");
  if (molLeft) molLeft.textContent = names[0].symbol;
  if (molRight) molRight.textContent = names[1].symbol;
}

function runExperiment() {
  const button = $("#runExperiment");
  const stage = $("#simulationStage");
  const select = $("#reactionSelect");
  if (!select) return;
  const reaction = reactions[select.value];
  if (!reaction) return;
  const names = reaction.names;
  if (button) button.disabled = true;
  const status = $("#simStatus");
  if (status) {
    status.className = "sim-status running";
    status.innerHTML = "<i></i> جارٍ التفاعل وتصاعد الفقاعات...";
  }
  playSound('bubble');
  const resEl = $("#reactionResult");
  if (resEl) {
    resEl.innerHTML = '<div class="result-placeholder"><span>✧</span><p>تتحرك الجزيئات... راقب ما يحدث.</p></div>';
  }
  if (stage) {
    stage.classList.remove("animating");
    void stage.offsetWidth;
    stage.classList.add("animating");
  }
  setTimeout(() => {
    playSound('success');
    if (stage) stage.classList.remove("animating");
    if (status) {
      status.className = "sim-status done";
      status.innerHTML = "<i></i> اكتمل التفاعل (معادلة موزونة)";
    }
    if (resEl) {
      resEl.innerHTML = `<div class="result-equation">${reaction.equation}</div><div class="result-explanation">${reaction.explanation}</div><div class="result-note">نموذج توضيحي مبسط — تم التحقق من موازنة المعادلة الكيميائية ومبدأ حفظ الكتلة</div>`;
    }
    state.experiments += 1;
    addActivity("إجراء محاكاة افتراضية", names.map(item => item.name).join(" + "), "⚗", 5);
    showToast("أحسنت! أُضيفت 5 نقاط شغف إلى رصيدك.");
    if (button) button.disabled = false;
    renderReactionPreview();
  }, 1700);
}

function renderQuiz() {
  const card = $("#quizCard");
  if (!card) return;
  const progText = $("#quizProgressText");
  const progBar = $("#quizProgressBar");
  if (progText) progText.textContent = `${Math.min(quizIndex, quizSet.length)} / ${quizSet.length}`;
  if (progBar) progBar.style.width = `${Math.min(quizIndex / quizSet.length * 100, 100)}%`;

  if (quizIndex >= quizSet.length) {
    if (progText) progText.textContent = `${quizSet.length} / ${quizSet.length}`;
    if (progBar) progBar.style.width = "100%";
    const points = quizCorrect * 10;
    const previousBest = state.bestQuiz;
    const isBest = points > previousBest;
    if (!state.quizCompleted || isBest) {
      state.quizCompleted = true;
      state.bestQuiz = Math.max(previousBest, points);
      if (points > previousBest) addActivity("إكمال تحدّي المعرفة", `أجبت إجابة صحيحة عن ${quizCorrect} من ${quizSet.length}`, "✳", points - previousBest);
      else { saveProgress(); renderProgress(); }
    }
    card.innerHTML = `<div class="quiz-complete"><span class="complete-icon">✦</span><span class="panel-kicker">اكتمل التحدّي</span><h2>${quizCorrect / quizSet.length >= 0.7 ? "أداء أسطوري يا بروفيسور الكيمياء!" : "رحلة جميلة — تعلّمت شيئاً جديداً!"}</h2><p>أجبت إجابة صحيحة عن ${quizCorrect} من أصل ${quizSet.length} أسئلة.</p><div class="complete-score">${quizCorrect * 10}<small> نقطة في هذا التحدّي</small></div><button class="button button-primary" id="restartQuiz">أعد التحدّي <span>↻</span></button></div>`;
    const restartBtn = $("#restartQuiz");
    if (restartBtn) restartBtn.addEventListener("click", restartQuiz);
    return;
  }
  const question = quizSet[quizIndex];
  const keys = ["أ", "ب", "ج", "د"];
  card.innerHTML = `<div class="quiz-topline"><span>السؤال ${quizIndex + 1} من ${quizSet.length}</span><strong>+10 XP للإجابة الصحيحة</strong></div><div class="quiz-progress"><span style="width:${quizIndex / quizSet.length * 100}%"></span></div><span class="quiz-category">${question.category}</span><h2 class="quiz-question">${question.question}</h2><div class="answer-list">${question.choices.map((choice, index) => `<button class="answer-option" data-answer="${index}"><span class="answer-key">${keys[index]}</span>${choice}</button>`).join("")}</div><div class="quiz-feedback" id="quizFeedback" aria-live="polite"></div><div class="quiz-actions"><button class="hint-button" id="hintButton">✧ أحتاج إلى تلميح</button><button class="button button-primary next-button" id="nextQuestion" disabled>${quizIndex === quizSet.length - 1 ? "النتيجة" : "التالي"} <span>←</span></button></div>`;

  $$("#quizCard [data-answer]").forEach(button => button.addEventListener("click", () => selectAnswer(Number(button.dataset.answer))));
  const hintBtn = $("#hintButton");
  if (hintBtn) {
    hintBtn.addEventListener("click", () => {
      const fb = $("#quizFeedback");
      if (fb) {
        fb.textContent = `تلميح: ${question.hint}`;
        fb.className = "quiz-feedback";
      }
      hintBtn.disabled = true;
      hintBtn.textContent = "✧ ظهر التلميح";
    });
  }
  const nextBtn = $("#nextQuestion");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => { if (!quizAnswered) return; quizIndex += 1; quizAnswered = false; renderQuiz(); });
  }
}

function selectAnswer(index) {
  if (quizAnswered) return;
  quizAnswered = true;
  const question = quizSet[quizIndex];
  const isCorrect = index === question.answer;
  if (isCorrect) quizCorrect += 1;
  $$("#quizCard [data-answer]").forEach((button, choiceIndex) => {
    button.disabled = true;
    if (choiceIndex === question.answer) button.classList.add("correct");
    else if (choiceIndex === index) button.classList.add("wrong");
  });
  const feedback = $("#quizFeedback");
  if (feedback) {
    feedback.className = `quiz-feedback ${isCorrect ? "good" : "bad"}`;
    feedback.textContent = `${isCorrect ? "إجابة صحيحة! " : "ليست هذه الإجابة الصحيحة. "}${question.explanation}`;
  }
  const nextBtn = $("#nextQuestion");
  if (nextBtn) nextBtn.disabled = false;
}

function restartQuiz() {
  quizSet = buildQuizSet();
  quizIndex = 0;
  quizCorrect = 0;
  quizAnswered = false;
  renderQuiz();
}

function navigate(view) {
  const titles = { home: "الرئيسية", elements: "موسوعة العناصر", lab: "المختبر الافتراضي", quiz: "تحدّي المعرفة", journal: "سجل الاكتشافات" };
  if (!titles[view]) return;
  $$(".view").forEach(section => section.classList.toggle("active", section.id === `view-${view}`));
  $$(".nav-link").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  const pageTitle = $("#pageTitle");
  if (pageTitle) pageTitle.textContent = titles[view];
  const sidebar = $("#sidebar");
  if (sidebar) sidebar.classList.remove("open");
  const menuToggle = $("#menuToggle");
  if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  if (location.hash.slice(1) !== view) location.hash = view;
  if (view === "elements") renderElements();
  if (view === "journal") { renderBadges(); renderActivities(); }
  if (view === "quiz") { renderQuiz(); }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initialize() {
  state = loadProgress();
  const todayLabel = $("#todayLabel");
  if (todayLabel) {
    todayLabel.textContent = new Intl.DateTimeFormat("ar", { weekday: "long", day: "numeric", month: "long" }).format(new Date());
  }
  renderFeatured();
  renderProgress();
  renderReactionPreview();
  restartQuiz();

  $$(".nav-link").forEach(button => button.addEventListener("click", () => navigate(button.dataset.view)));
  $$("[data-go]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.go)));

  document.addEventListener("click", event => {
    const card = event.target.closest("[data-element]");
    if (card) openElement(Number(card.dataset.element));
  });

  const searchInput = $("#elementSearch");
  if (searchInput) searchInput.addEventListener("input", renderElements);

  $$(".filter-chip").forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    $$(".filter-chip").forEach(chip => chip.classList.toggle("active", chip === button));
    renderElements();
  }));

  const dialogClose = $("#dialogClose");
  const elementDialog = $("#elementDialog");
  if (dialogClose && elementDialog) {
    dialogClose.addEventListener("click", () => elementDialog.close());
    elementDialog.addEventListener("click", event => { if (event.target === elementDialog) elementDialog.close(); });
  }

  // Comparison listeners
  const openComp = $("#openComparison");
  const compDialog = $("#comparisonDialog");
  const compClose = $("#comparisonClose");
  const compEl1 = $("#compareEl1");
  const compEl2 = $("#compareEl2");

  if (openComp && compDialog) {
    openComp.addEventListener("click", () => {
      initComparison();
      compDialog.showModal();
    });
  }
  if (compClose && compDialog) {
    compClose.addEventListener("click", () => compDialog.close());
    compDialog.addEventListener("click", event => { if (event.target === compDialog) compDialog.close(); });
  }
  if (compEl1) compEl1.addEventListener("change", renderComparisonResults);
  if (compEl2) compEl2.addEventListener("change", renderComparisonResults);

  const reactionSelect = $("#reactionSelect");
  if (reactionSelect) reactionSelect.addEventListener("change", renderReactionPreview);

  const runExp = $("#runExperiment");
  if (runExp) runExp.addEventListener("click", runExperiment);

  const menuToggle = $("#menuToggle");
  const sidebar = $("#sidebar");
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      const open = sidebar.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
  }

  const resetProg = $("#resetProgress");
  if (resetProg) {
    resetProg.addEventListener("click", () => {
      if (!window.confirm("هل أنت متأكد من بدء رحلة جديدة؟ سيُحذف التقدّم المحفوظ على هذا الجهاز.")) return;
      state = defaultState();
      saveProgress();
      restartQuiz();
      renderProgress();
      showToast("بدأت رحلة جديدة. اكتشافك القادم ينتظرك!");
    });
  }

  const aboutBtn = $("#aboutButton");
  const aboutClose = $("#aboutClose");
  const aboutDone = $("#aboutDone");
  const aboutDialog = $("#aboutDialog");

  if (aboutBtn && aboutDialog) {
    aboutBtn.addEventListener("click", () => aboutDialog.showModal());
  }
  if (aboutClose && aboutDialog) {
    aboutClose.addEventListener("click", () => aboutDialog.close());
  }
  if (aboutDone && aboutDialog) {
    aboutDone.addEventListener("click", () => aboutDialog.close());
  }
  if (aboutDialog) {
    aboutDialog.addEventListener("click", event => { if (event.target === aboutDialog) aboutDialog.close(); });
  }

  $$(".mode-btn").forEach(button => button.addEventListener("click", () => {
    viewMode = button.dataset.mode;
    $$(".mode-btn").forEach(item => item.classList.toggle("active", item === button));
    applyViewMode();
  }));
  applyViewMode();

  window.addEventListener("hashchange", () => {
    const target = location.hash.slice(1);
    if ($(`#view-${target}`) && !$(`#view-${target}`).classList.contains("active")) navigate(target);
  });
  if (location.hash.length > 1) navigate(location.hash.slice(1));
}

initialize();
