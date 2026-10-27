// دالة فتح وإغلاق البطاقة بسلاسة (تنزل وتطلع)
function toggleCard(cardElement) {
    cardElement.classList.toggle('expanded');
}

document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideCounters = document.getElementById('slideCounters');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const reactions = {
        water: {
            title: "تكوين جزيء الماء النقي",
            formula: "2H₂ + O₂ ➔ 2H₂O",
            bond: "رابطة تساهمية أحادية",
            desc: "يتحد الهيدروجين مع الأكسجين لإنتاج سائل يطفئ النار ويروي الحياة!"
        },
        co2: {
            title: "تكوين ثاني أكسيد الكربون",
            formula: "C + O₂ ➔ CO₂",
            bond: "رابطة تساهمية ثنائية",
            desc: "ترتبط ذرة كربون مركزية بذرتي أكسجين لتغذية النبات بالبناء الضوئي."
        },
        salt: {
            title: "تكوين ملح الطعام (NaCl)",
            formula: "2Na + Cl₂ ➔ 2NaCl",
            bond: "رابطة أيونية قوية",
            desc: "يفقد الصوديوم إلكتروناً ليكتسبه الكلور، فيتحولان لملح أبيض بلوري."
        },
        volcano: {
            title: "البركان المطبخي",
            formula: "CH₃COOH + NaHCO₃ ➔ CO₂↑",
            bond: "تفاعل حمض وقاعدة",
            desc: "يتفاعل الخل مع بيكربونات الصوديوم لينتج فورة غازية مدهشة!"
        }
    };

    function renderReaction(rxnKey) {
        const data = reactions[rxnKey];
        const displayBox = document.getElementById('reactionDisplay');
        if (!displayBox || !data) return;

        displayBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="color: var(--primary); font-size: 1rem;">${data.title}</h3>
                <span style="background: var(--primary-light); color: var(--primary); padding: 2px 6px; border-radius: 6px; font-weight: bold; font-size: 0.7rem;">${data.bond}</span>
            </div>
            <div style="font-size: 1.15rem; font-weight: 900; color: #059669; margin: 4px 0; direction: ltr; text-align: right;">${data.formula}</div>
            <p style="font-size: 0.8rem; color: var(--text-main); font-weight: 500;">${data.desc}</p>
        `;
    }

    const rxnBtns = document.querySelectorAll('.rxn-btn');
    rxnBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            rxnBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderReaction(btn.dataset.rxn);
        });
    });

    renderReaction('water');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;

        slides[currentSlide].classList.add('active');
        slideCounters.innerText = `الشريحة ${currentSlide + 1} من ${totalSlides}`;
    }

    function nextSlide() { showSlide(currentSlide + 1); }
    function prevSlide() { showSlide(currentSlide - 1); }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'PageDown') nextSlide();
        if (e.key === 'ArrowRight' || e.key === 'PageUp') prevSlide();
    });
});
