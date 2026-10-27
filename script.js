document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideCounters = document.getElementById('slideCounters');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // قاعدة بيانات التفاعلات الكاملة
    const reactions = {
        water: {
            title: "تكوين جزيء الماء النقي",
            formula: "2H₂ + O₂ ➔ 2H₂O",
            bond: "رابطة تساهمية أحادية قطبية",
            desc: "يتحد غاز الهيدروجين الشديد الاشتعال مع الأكسجين لإنتاج سائل يطفئ النار ويروي الحياة!"
        },
        co2: {
            title: "تكوين ثاني أكسيد الكربون",
            formula: "C + O₂ ➔ CO₂",
            bond: "رابطة تساهمية ثنائية",
            desc: "ترتبط ذرة كربون مركزية بذرتي أكسجين بتشارك زوجين من الإلكترونات لتغذية النبات بالبناء الضوئي."
        },
        salt: {
            title: "تكوين ملح الطعام (كلوريد الصوديوم)",
            formula: "2Na + Cl₂ ➔ 2NaCl",
            bond: "رابطة أيونية قوية",
            desc: "يفقد الصوديوم الفلزي إلكتروناً ليكتسبه الكلور الغازي، فيتحولان لملح أبيض بلوري نافع."
        },
        rust: {
            title: "تفاعل أكسدة الحديد (صدأ الحديد)",
            formula: "4Fe + 3O₂ ➔ 2Fe₂O₃",
            bond: "رابطة أيونية معدنية",
            desc: "يتفاعل الحديد الصلب مع أكسجين الرطوبة ببطء ليتكون أكسيد الحديد الهش ذو اللون البني الأحمر."
        },
        volcano: {
            title: "تفاعل البركان المطبخي (حامض وقاعدة)",
            formula: "CH₃COOH + NaHCO₃ ➔ CH₃COONa + H₂O + CO₂↑",
            bond: "تفاعل تفكك وحمضي متعادل",
            desc: "يتفاعل الخل مع بيكربونات الصوديوم لينتج فورة غازية مدهشة من ثاني أكسيد الكربون!"
        }
    };

    function renderReaction(rxnKey) {
        const data = reactions[rxnKey];
        const displayBox = document.getElementById('reactionDisplay');
        if (!displayBox || !data) return;

        displayBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="color: var(--primary); font-size: 1.1rem;">${data.title}</h3>
                <span style="background: var(--primary-light); color: var(--primary); padding: 2px 8px; border-radius: 8px; font-weight: bold; font-size: 0.8rem;">${data.bond}</span>
            </div>
            <div style="font-size: 1.3rem; font-weight: 900; color: #059669; margin: 8px 0; direction: ltr; text-align: right;">${data.formula}</div>
            <p style="font-size: 0.85rem; color: var(--text-main); font-weight: 500;">${data.desc}</p>
        `;
    }

    // إعداد أزرار التفاعل
    const rxnBtns = document.querySelectorAll('.rxn-btn');
    rxnBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            rxnBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderReaction(btn.dataset.rxn);
        });
    });

    // العرض الأولي لأول تفاعل
    renderReaction('water');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;

        slides[currentSlide].classList.add('active');
        slideCounters.innerText = `الشريحة ${currentSlide + 1} من ${totalSlides}`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'PageDown') nextSlide();
        if (e.key === 'ArrowRight' || e.key === 'PageUp') prevSlide();
    });
});
