const priceTable = {
    'Fine Art Paper': { '30x20': 70, '40x30': 100, '60x40': 180, '70x50': 240, '90x60': 280, '100x70': 350, '120x80': 500, '130x90': 580, '150x100': 750 },
    'Laminated Print': { '30x20': 70, '40x30': 100, '60x40': 180, '70x50': 240, '90x60': 280, '100x70': 350, '120x80': 500, '130x90': 580, '150x100': 750 },
    'Fine Art Cotton Paper': { '30x20': 90, '40x30': 120, '60x40': 220, '70x50': 280, '90x60': 350, '100x70': 430, '120x80': 600, '130x90': 720, '150x100': 900 }
};

const dibondPriceTable = {
    '30x20': 220, '40x30': 250, '60x40': 320, '70x50': 370, '90x60': 450, '100x70': 540, '120x80': 680, '130x90': 820, '120x100': 1000
};

const dibondNoBackFramePriceTable = {
    '30x20': 140, '40x30': 150, '60x40': 190, '70x50': 220, '90x60': 270, '100x70': 330, '120x80': 430, '130x90': 530, '150x100': 670
};

const diasecPriceTable = {
    '30x20': { 'Glossy': 350, 'Matt': 400, 'TruLife': 470 },
    '40x30': { 'Glossy': 460, 'Matt': 530, 'TruLife': 630 },
    '60x40': { 'Glossy': 680, 'Matt': 780, 'TruLife': 1030 },
    '70x50': { 'Glossy': 840, 'Matt': 960, 'TruLife': 1350 },
    '90x60': { 'Glossy': 1120, 'Matt': 1290, 'TruLife': 1910 },
    '100x70': { 'Glossy': 1360, 'Matt': 1550, 'TruLife': 2360 },
    '120x80': { 'Glossy': 1730, 'Matt': 1990, 'TruLife': 3120 },
    '130x90': { 'Glossy': 2040, 'Matt': 2350, 'TruLife': 3720 },
    '150x100': { 'Glossy': 2500, 'Matt': 2870, 'TruLife': 4670 }
};

const kapaPriceTable = {
    '30x20': { 'KAPA White (Line)': 60, 'KAPA Grey (Fix)': 90 },
    '40x30': { 'KAPA White (Line)': 80, 'KAPA Grey (Fix)': 110 },
    '60x40': { 'KAPA White (Line)': 100, 'KAPA Grey (Fix)': 150 },
    '70x50': { 'KAPA White (Line)': 130, 'KAPA Grey (Fix)': 180 },
    '90x60': { 'KAPA White (Line)': 160, 'KAPA Grey (Fix)': 220 },
    '100x70': { 'KAPA White (Line)': 190, 'KAPA Grey (Fix)': 270 },
    '120x80': { 'KAPA White (Line)': 250, 'KAPA Grey (Fix)': 360 },
    '130x90': { 'KAPA White (Line)': 300, 'KAPA Grey (Fix)': 430 },
    '150x100': { 'KAPA White (Line)': 380, 'KAPA Grey (Fix)': 550 }
};

const boxFramePriceTable = {
    '30x20': { 'Natural Wood or Painted': 400, 'Special Wood': 500 },
    '40x30': { 'Natural Wood or Painted': 450, 'Special Wood': 560 },
    '60x40': { 'Natural Wood or Painted': 590, 'Special Wood': 740 },
    '70x50': { 'Natural Wood or Painted': 720, 'Special Wood': 900 },
    '90x60': { 'Natural Wood or Painted': 850, 'Special Wood': 1110 },
    '100x70': { 'Natural Wood or Painted': 980, 'Special Wood': 1350 },
    '120x80': { 'Natural Wood or Painted': 1150, 'Special Wood': 1570 },
    '130x90': { 'Natural Wood or Painted': 1450, 'Special Wood': 1860 },
    '120x100': { 'Natural Wood or Painted': 1580, 'Special Wood': 2000 },
    '150x100': { 'Natural Wood or Painted': 1800, 'Special Wood': 2350 }
};

const floatingFramePriceTable = {
    '30x20': { 'Natural Wood or Painted': 350, 'Special Wood': 460 },
    '40x30': { 'Natural Wood or Painted': 400, 'Special Wood': 530 },
    '60x40': { 'Natural Wood or Painted': 500, 'Special Wood': 690 },
    '70x50': { 'Natural Wood or Painted': 620, 'Special Wood': 810 },
    '90x60': { 'Natural Wood or Painted': 730, 'Special Wood': 980 },
    '100x70': { 'Natural Wood or Painted': 830, 'Special Wood': 1110 },
    '120x80': { 'Natural Wood or Painted': 950, 'Special Wood': 1300 },
    '130x90': { 'Natural Wood or Painted': 1150, 'Special Wood': 1540 },
    '120x100': { 'Natural Wood or Painted': 1150, 'Special Wood': 1540 },
    '150x100': { 'Natural Wood or Painted': 1300, 'Special Wood': 1730 }
};

const aluminiumFramePriceTable = {
    '30x20': { 'Aluminium Profile': 250, 'Aluminum Profile - Wood Veneer': 300 },
    '40x30': { 'Aluminium Profile': 330, 'Aluminum Profile - Wood Veneer': 370 },
    '60x40': { 'Aluminium Profile': 370, 'Aluminum Profile - Wood Veneer': 430 },
    '70x50': { 'Aluminium Profile': 440, 'Aluminum Profile - Wood Veneer': 500 },
    '90x60': { 'Aluminium Profile': 520, 'Aluminum Profile - Wood Veneer': 620 },
    '100x70': { 'Aluminium Profile': 590, 'Aluminum Profile - Wood Veneer': 720 },
    '120x80': { 'Aluminium Profile': 680, 'Aluminum Profile - Wood Veneer': 850 },
    '130x90': { 'Aluminium Profile': 900, 'Aluminum Profile - Wood Veneer': 1100 },
    '150x100': { 'Aluminium Profile': 1280, 'Aluminum Profile - Wood Veneer': 1430 }
};

const addonPriceTable = {
    'Anti-Reflective Glass': { '30x20': 90, '40x30': 160, '60x40': 280, '70x50': 400, '90x60': 590, '100x70': 760, '120x80': 1040, '130x90': 1260, '120x100': 1260, '150x100': 1610 },
    'Passepartout': { '30x20': 50, '40x30': 70, '60x40': 120, '70x50': 160, '90x60': 250, '100x70': 330, '120x80': 400, '130x90': 480, '150x100': 620 },
    'Museum-Quality Mat': { '30x20': 0, '40x30': 0, '60x40': 0, '70x50': 0, '90x60': 50, '100x70': 80, '120x80': 160, '130x90': 220, '120x100': 220, '150x100': 330 }
};

const translations = {
    'Print Only': 'הדפסה בלבד',
    'Print + Mount': 'הדפסה + תלייה',
    'Print + Frame': 'הדפסה + מסגרת',
    'Fine Art Paper': 'נייר אמנות משובח',
    'Laminated Print': 'הדפסה למינציה',
    'Fine Art Cotton Paper': 'נייר כותנה אמנותי',
    'Box Frame': 'מסגרת קופסה',
    'Floating Frame': 'מסגרת צפה',
    'Aluminium Frame': 'מסגרת אלומיניום',
    'KAPA White (Line)': 'קאפה לבן (Line)',
    'KAPA Grey (Fix)': 'קאפה אפור (Fix)',
    'Dibond': 'דיבונד',
    'Diasec': 'דיאסק',
    'Glossy': 'מבריק',
    'Matt': 'מט',
    'TruLife': 'TruLife',
    'Natural Wood or Painted': 'עץ טבעי או צבוע',
    'Special Wood': 'עץ מיוחד',
    'Anti-Reflective Glass': 'זכוכית אנטי רפלקטיבית',
    'Museum-Quality Mat': 'שטיח באיכות מוזיאון',
    'Passepartout': 'פספרטו'
};

document.getElementById('resetButton').addEventListener('click', () => {
    location.reload();
});

document.getElementById('productType').addEventListener('change', () => {
    resetOptions('productType');
    showOptions();
    updateSummary();
});

document.getElementById('paperType').addEventListener('change', () => {
    resetOptions('paperType');
    document.getElementById('printSizeOptions').classList.remove('hidden');
    populatePrintSizes();
    updateSummary();
});

document.getElementById('printSize').addEventListener('change', () => {
    resetOptions('printSize');
    const productType = document.getElementById('productType').value;
    if (productType === 'Print Only') {
        document.getElementById('quantityOptions').classList.remove('hidden');
    } else if (productType === 'Print + Mount') {
        document.getElementById('mountOptions').classList.remove('hidden');
    } else if (productType === 'Print + Frame') {
        document.getElementById('frameOptions').classList.remove('hidden');
    }
    populateMountTypes();
    updateSummary();
});

document.getElementById('mountType').addEventListener('change', () => {
    resetOptions('mountType');
    const frameType = document.getElementById('frameType').value;
    const productType = document.getElementById('productType').value;
    if (productType === 'Print + Frame' && frameType !== 'Floating Frame') {
        document.getElementById('addonOptions').classList.remove('hidden');
        document.getElementById('quantityOptions').classList.remove('hidden');
    }
    showDiasecOptions();
    updateSummary();
});

document.getElementById('diasecType').addEventListener('change', updateSummary);

document.getElementById('frameType').addEventListener('change', () => {
    resetOptions('frameType');
    showFrameOptions();
    updateSummary();
});

document.getElementById('quantity').addEventListener('input', updateSummary);

document.getElementById('languageButton').addEventListener('click', toggleLanguage);
document.getElementById('submitOrder').addEventListener('click', submitOrder);

document.querySelectorAll('#frameDetails input[type="radio"]').forEach(option => {
    option.addEventListener('change', updateSummary);
});

document.querySelectorAll('#addonOptions input[type="checkbox"]').forEach(option => {
    option.addEventListener('change', updateSummary);
});






function resetOptions(changedElement) {
    const elementsToReset = {
        'productType': ['paperTypeOptions', 'printSizeOptions', 'mountOptions', 'frameOptions', 'quantityOptions', 'frameDetails', 'addonOptions', 'diasecTypeOptions'],
        'paperType': ['printSizeOptions', 'mountOptions', 'frameOptions', 'quantityOptions', 'frameDetails', 'addonOptions', 'diasecTypeOptions'],
        'printSize': ['mountOptions', 'frameOptions', 'quantityOptions', 'frameDetails', 'addonOptions', 'diasecTypeOptions'],
        'frameType': ['mountOptions', 'quantityOptions', 'frameDetails', 'addonOptions', 'diasecTypeOptions'],
        'mountType': ['quantityOptions', 'addonOptions', 'diasecTypeOptions'],
    };

    if (changedElement in elementsToReset) {
        elementsToReset[changedElement].forEach(element => {
            document.getElementById(element).classList.add('hidden');
            document.getElementById(element).querySelectorAll('input, select').forEach(input => {
                if (input.type === 'radio' || input.type === 'checkbox') {
                    input.checked = false;
                } else {
                    input.value = '';
                }
            });
        });
    }

    switch (changedElement) {
        case 'productType':
            showOptions();
            break;
        case 'paperType':
            document.getElementById('printSizeOptions').classList.remove('hidden');
            populatePrintSizes();
            break;
        case 'printSize':
            const productType = document.getElementById('productType').value;
            if (productType === 'Print Only') {
                document.getElementById('quantityOptions').classList.remove('hidden');
            } else if (productType === 'Print + Mount') {
                document.getElementById('mountOptions').classList.remove('hidden');
            } else if (productType === 'Print + Frame') {
                document.getElementById('frameOptions').classList.remove('hidden');
            }
            populateMountTypes();
            break;
        case 'frameType':
            showFrameOptions();
            break;
        case 'mountType':
            if (document.getElementById('mountType').value === 'Diasec') {
                document.getElementById('diasecTypeOptions').classList.remove('hidden');
            } else {
                document.getElementById('quantityOptions').classList.remove('hidden');
            }
            break;
    }
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'en') {
        localStorage.setItem('lang', 'he');
    } else {
        localStorage.setItem('lang', 'en');
    }
    location.reload(); // Reload the page to apply the language change
}

// Ensure the correct language is loaded on page load
document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'en';
    document.documentElement.lang = lang;
    if (lang === 'he') {
        document.body.classList.add('rtl');
        document.getElementById('languageButton').textContent = 'English';
        document.getElementById('menuButton').textContent = 'תפריט';
        document.getElementById('resetButton').innerHTML = 'איפוס <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 21C7.75 21 6.57917 20.7625 5.4875 20.2875C4.39583 19.8125 3.44583 19.1708 2.6375 18.3625C1.82917 17.5542 1.1875 16.6042 0.7125 15.5125C0.2375 14.4208 0 13.25 0 12H2C2 13.95 2.67917 15.6042 4.0375 16.9625C5.39583 18.3208 7.05 19 9 19C10.95 19 12.6042 18.3208 13.9625 16.9625C15.3208 15.6042 16 13.95 16 12C16 10.05 15.3208 8.39583 13.9625 7.0375C12.6042 5.67917 10.95 5 9 5H8.85L10.4 6.55L9 8L5 4L9 0L10.4 1.45L8.85 3H9C10.25 3 11.4208 3.2375 12.5125 3.7125C13.6042 4.1875 14.5542 4.82917 15.3625 5.6375C16.1708 6.44583 16.8125 7.39583 17.2875 8.4875C17.7625 9.57917 18 10.75 18 12C18 13.25 17.7625 14.4208 17.2875 15.5125C16.8125 16.6042 16.1708 17.5542 15.3625 18.3625C14.5542 19.1708 13.6042 19.8125 12.5125 20.2875C11.4208 20.7625 10.25 21 9 21Z" fill="#1C1B1F"/></svg>';
        document.querySelector('.total-cost-label').textContent = 'עלות כוללת:';
        document.getElementById('totalCost').textContent = '0 ₪';
        document.querySelector('.footnote p').innerHTML = 'המחירים המפורטים הם עבור גדלים סטנדרטיים. לקבלת הצעת מחיר עבור גדלים מותאמים אישית, אנא שלחו לנו דוא"ל. <a href="mailto:info@theprinthouse.co.il">info@theprinthouse.co.il</a>';
        translateToHebrew();
    } else {
        document.body.classList.remove('rtl');
        document.getElementById('languageButton').textContent = 'עברית';
        document.getElementById('menuButton').textContent = 'Menu';
        document.getElementById('resetButton').innerHTML = 'Reset <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 21C7.75 21 6.57917 20.7625 5.4875 20.2875C4.39583 19.8125 3.44583 19.1708 2.6375 18.3625C1.82917 17.5542 1.1875 16.6042 0.7125 15.5125C0.2375 14.4208 0 13.25 0 12H2C2 13.95 2.67917 15.6042 4.0375 16.9625C5.39583 18.3208 7.05 19 9 19C10.95 19 12.6042 18.3208 13.9625 16.9625C15.3208 15.6042 16 13.95 16 12C16 10.05 15.3208 8.39583 13.9625 7.0375C12.6042 5.67917 10.95 5 9 5H8.85L10.4 6.55L9 8L5 4L9 0L10.4 1.45L8.85 3H9C10.25 3 11.4208 3.2375 12.5125 3.7125C13.6042 4.1875 14.5542 4.82917 15.3625 5.6375C16.1708 6.44583 16.8125 7.39583 17.2875 8.4875C17.7625 9.57917 18 10.75 18 12C18 13.25 17.7625 14.4208 17.2875 15.5125C16.8125 16.6042 16.1708 17.5542 15.3625 18.3625C14.5542 19.1708 13.6042 19.8125 12.5125 20.2875C11.4208 20.7625 10.25 21 9 21Z" fill="#1C1B1F"/></svg>';
        document.querySelector('.total-cost-label').textContent = 'Total Cost:';
        document.getElementById('totalCost').textContent = '0 NIS';
        document.querySelector('.footnote p').innerHTML = 'Prices listed are for standard sizes. For custom sizes, please email us for a quote. <a href="mailto:info@theprinthouse.co.il">info@theprinthouse.co.il</a>';
        translateToEnglish();
    }
    updateInputImages(); // Ensure background images switch sides
    updateSummary(); // Ensure summary is updated after language change
});
function translateOptionsToHebrew() {
    document.querySelectorAll('#frameDetails label, #addonOptions label').forEach(label => {
        const originalText = label.textContent.split(' - ')[0].trim();
        label.innerHTML = label.innerHTML.replace(originalText, translations[originalText] || originalText);
    });
}

function translateOptionsToEnglish() {
    document.querySelectorAll('#frameDetails label, #addonOptions label').forEach(label => {
        const originalText = label.textContent.split(' - ')[0].trim();
        const translationKey = Object.keys(translations).find(key => translations[key] === originalText);
        if (translationKey) {
            label.innerHTML = label.innerHTML.replace(originalText, translationKey);
        }
    });
}

function updateInputImages() {
    const inputs = document.querySelectorAll('select, input[type="number"]');
    inputs.forEach(input => {
        if (document.documentElement.lang === 'he') {
            input.style.backgroundPosition = 'left 10px center';
        } else {
            input.style.backgroundPosition = 'right 10px center';
        }
    });
}

function translateToHebrew() {
    document.querySelector('h2').textContent = 'מחשבון מחירים';
    document.getElementById('labelProductType').textContent = 'מוצר';
    document.getElementById('labelPaperType').textContent = 'נייר:';
    document.getElementById('labelPrintSize').textContent = 'הדפסה';
    document.getElementById('labelFrameType').textContent = 'מסגרת';
    document.getElementById('labelMountType').textContent = 'תלייה';
    document.getElementById('labelDiasecType').textContent = 'דיאסק';
    document.getElementById('labelAddons').textContent = 'תוספות';
    document.getElementById('labelQuantity').textContent = 'כמות:';
    document.getElementById('summaryTitle').textContent = 'סיכום';
    document.getElementById('submitOrder').textContent = 'שלח הזמנה';
    document.querySelector('.footnote p').innerHTML = 'המחירים המפורטים הם עבור גדלים סטנדרטיים. לקבלת הצעת מחיר עבור גדלים מותאמים אישית, אנא שלחו לנו דוא"ל. <a href="mailto:info@theprinthouse.co.il">info@theprinthouse.co.il</a>';
    translateOptionsToHebrew();
    translateDynamicContentToHebrew(); // Ensure dynamic content is translated
    updateSummary(); // Ensure summary is updated after translation
}


function translateOptionsToHebrew() {
    const productType = document.getElementById('productType');
    const paperType = document.getElementById('paperType');
    const frameType = document.getElementById('frameType');
    const mountType = document.getElementById('mountType');
    
    productType.innerHTML = `
        <option value="" disabled selected>סוג מוצר</option>
        <option value="Print Only">הדפסה בלבד</option>
        <option value="Print + Mount">הדפסה + תלייה</option>
        <option value="Print + Frame">הדפסה + מסגרת</option>
    `;

    paperType.innerHTML = `
        <option value="" disabled selected>סוג נייר</option>
        <option value="Fine Art Paper">נייר אמנות משובח</option>
        <option value="Laminated Print">הדפסה למינציה</option>
        <option value="Fine Art Cotton Paper">נייר כותנה אמנותי</option>
    `;

    frameType.innerHTML = `
        <option value="" disabled selected>סוג מסגרת</option>
        <option value="Box Frame">מסגרת קופסה</option>
        <option value="Floating Frame">מסגרת צפה</option>
        <option value="Aluminium Frame">מסגרת אלומיניום</option>
    `;

    mountType.innerHTML = `
        <option value="" disabled selected>סוג תלייה</option>
    `;

    // Translate dynamically generated print sizes and mount types
    populatePrintSizes();
    populateMountTypes();
}

function translateToEnglish() {
    document.querySelector('h2').textContent = 'The Pricing Calculator';
    document.getElementById('labelProductType').textContent = 'Product';
    document.getElementById('labelPaperType').textContent = 'Paper';
    document.getElementById('labelPrintSize').textContent = 'Size';
    document.getElementById('labelFrameType').textContent = 'Frame';
    document.getElementById('labelMountType').textContent = ' Mount';
    document.getElementById('labelDiasecType').textContent = 'Diasec';
    document.getElementById('labelAddons').textContent = 'Add-ons:';
    document.getElementById('labelQuantity').textContent = 'Quantity';
    document.getElementById('summaryTitle').textContent = 'Summary';
    document.getElementById('submitOrder').textContent = 'Submit Order';
    document.querySelector('.footnote p').innerHTML = 'Prices listed are for standard sizes. For custom sizes, please email us for a quote. <a href="mailto:info@theprinthouse.co.il">info@theprinthouse.co.il</a>';
    translateOptionsToEnglish();
    translateDynamicContentToEnglish(); // Ensure dynamic content is translated
    updateSummary(); // Ensure summary is updated after translation
}



function translateOptionsToEnglish() {
    const productType = document.getElementById('productType');
    const paperType = document.getElementById('paperType');
    const frameType = document.getElementById('frameType');
    const mountType = document.getElementById('mountType');
    
    productType.innerHTML = `
        <option value="" disabled selected>Product Type</option>
        <option value="Print Only">Print Only</option>
        <option value="Print + Mount">Print + Mount</option>
        <option value="Print + Frame">Print + Frame</option>
    `;

    paperType.innerHTML = `
        <option value="" disabled selected>Paper Type</option>
        <option value="Fine Art Paper">Fine Art Paper</option>
        <option value="Laminated Print">Laminated Print</option>
        <option value="Fine Art Cotton Paper">Fine Art Cotton Paper</option>
    `;

    frameType.innerHTML = `
        <option value="" disabled selected>Frame Type</option>
        <option value="Box Frame">Box Frame</option>
        <option value="Floating Frame">Floating Frame</option>
        <option value="Aluminium Frame">Aluminium Frame</option>
    `;

    mountType.innerHTML = `
        <option value="" disabled selected>Mount Type</option>
    `;

    // Translate dynamically generated print sizes and mount types
    populatePrintSizes();
    populateMountTypes();
}

function translateDynamicContentToHebrew() {
    document.querySelectorAll('#frameDetails label, #addonOptions label').forEach(label => {
        const originalText = label.textContent.split(' - ')[0].trim();
        label.innerHTML = label.innerHTML.replace(originalText, translations[originalText] || originalText);
    });
}

function translateDynamicContentToEnglish() {
    document.querySelectorAll('#frameDetails label, #addonOptions label').forEach(label => {
        const originalText = label.textContent.split(' - ')[0].trim();
        const translationKey = Object.keys(translations).find(key => translations[key] === originalText);
        if (translationKey) {
            label.innerHTML = label.innerHTML.replace(originalText, translationKey);
        }
    });
}


function showOptions() {
    const productType = document.getElementById('productType').value;
    const paperTypeOptions = document.getElementById('paperTypeOptions');
    const printSizeOptions = document.getElementById('printSizeOptions');
    const mountOptions = document.getElementById('mountOptions');
    const frameOptions = document.getElementById('frameOptions');
    const quantityOptions = document.getElementById('quantityOptions');
    const frameDetails = document.getElementById('frameDetails');
    const addonOptions = document.getElementById('addonOptions');
    const diasecTypeOptions = document.getElementById('diasecTypeOptions');
    const paperTypeWrapper = document.getElementById('paperType').parentElement;

    paperTypeOptions.classList.add('hidden');
    printSizeOptions.classList.add('hidden');
    mountOptions.classList.add('hidden');
    frameOptions.classList.add('hidden');
    quantityOptions.classList.add('hidden');
    frameDetails.classList.add('hidden');
    addonOptions.classList.add('hidden');
    diasecTypeOptions.classList.add('hidden');
    paperTypeWrapper.classList.remove('hidden-no-space'); // Reset paper type visibility
    
    if (productType === 'Print Only') {
        paperTypeOptions.classList.remove('hidden');
    } else if (productType === 'Print + Mount') {
        paperTypeOptions.classList.remove('hidden');
    } else if (productType === 'Print + Frame') {
        paperTypeOptions.classList.remove('hidden');
    }

    updateSummary(); // Ensure summary is updated after product type selection
}






function populatePrintSizes() {
    const paperType = document.getElementById('paperType').value;
    const productType = document.getElementById('productType').value;
    const printSizeOptions = document.getElementById('printSizeOptions');
    const printSizeSelect = document.getElementById('printSize');
    const lang = document.documentElement.lang;

    printSizeSelect.innerHTML = `<option value="" disabled selected>${lang === 'he' ? 'בחר גודל הדפסה' : 'Select a print size'}</option>`;

    for (const [size, price] of Object.entries(priceTable[paperType])) {
        const option = document.createElement('option');
        option.value = size;
        if (lang === 'he') {
            option.textContent = `${price} ₪ - ${size}`;
        } else {
            option.textContent = `${size} - ${price} NIS`;
        }
        printSizeSelect.appendChild(option);
    }
    printSizeOptions.classList.remove('hidden');

    // Hide quantity options initially
    document.getElementById('quantityOptions').classList.add('hidden');

    // Add event listener to print size select to show quantity options for Print Only
    printSizeSelect.addEventListener('change', () => {
        if (productType === 'Print Only') {
            document.getElementById('quantityOptions').classList.remove('hidden');
        }
        updateSummary();
    });

    // Call updateSummary to ensure the total price is updated
    updateSummary();
}





function populateMountTypes() {
    const productType = document.getElementById('productType').value;
    const frameType = document.getElementById('frameType').value;
    const printSize = document.getElementById('printSize').value;
    const mountTypeSelect = document.getElementById('mountType');
    const diasecTypeOptions = document.getElementById('diasecTypeOptions');
    const addonOptions = document.getElementById('addonOptions');
    const quantityOptions = document.getElementById('quantityOptions');

    mountTypeSelect.innerHTML = `<option value="" disabled selected>${document.documentElement.lang === 'he' ? 'בחר סוג תלייה' : 'Select a mount type'}</option>`;

    if (productType === 'Print + Frame' && (frameType === 'Box Frame' || frameType === 'Floating Frame' || frameType === 'Aluminium Frame')) {
        const kapaPrices = kapaPriceTable[printSize];
        if (kapaPrices) {
            mountTypeSelect.innerHTML += `<option value="KAPA White (Line)">${document.documentElement.lang === 'he' ? translations['KAPA White (Line)'] : 'KAPA White (Line)'} - ${kapaPrices['KAPA White (Line)']} ${document.documentElement.lang === 'he' ? '₪' : 'NIS'}</option>`;
            mountTypeSelect.innerHTML += `<option value="KAPA Grey (Fix)">${document.documentElement.lang === 'he' ? translations['KAPA Grey (Fix)'] : 'KAPA Grey (Fix)'} - ${kapaPrices['KAPA Grey (Fix)']} ${document.documentElement.lang === 'he' ? '₪' : 'NIS'}</option>`;
        }
        const dibondPrice = dibondNoBackFramePriceTable[printSize];
        if (dibondPrice) {
            mountTypeSelect.innerHTML += `<option value="Dibond">${document.documentElement.lang === 'he' ? translations['Dibond'] : 'Dibond'} - ${dibondPrice} ${document.documentElement.lang === 'he' ? '₪' : 'NIS'}</option>`;
        }
        if (frameType === 'Floating Frame') {
            mountTypeSelect.innerHTML += `<option value="Diasec">${document.documentElement.lang === 'he' ? translations['Diasec'] : 'Diasec'}</option>`;
        }
    } else if (productType === 'Print + Mount') {
        const dibondPrice = dibondPriceTable[printSize];
        if (dibondPrice) {
            mountTypeSelect.innerHTML += `<option value="Dibond">${document.documentElement.lang === 'he' ? translations['Dibond'] : 'Dibond'} - ${dibondPrice} ${document.documentElement.lang === 'he' ? '₪' : 'NIS'}</option>`;
        }
        mountTypeSelect.innerHTML += `<option value="Diasec">${document.documentElement.lang === 'he' ? translations['Diasec'] : 'Diasec'}</option>`;
    }

    mountTypeSelect.classList.remove('hidden');
    diasecTypeOptions.classList.add('hidden');
    addonOptions.classList.add('hidden'); // Ensure add-ons are hidden initially
    quantityOptions.classList.add('hidden'); // Ensure quantity options are hidden initially

    mountTypeSelect.addEventListener('change', () => {
        if (productType === 'Print + Frame' && frameType !== 'Floating Frame') {
            addonOptions.classList.remove('hidden');
        }
        quantityOptions.classList.remove('hidden');
        showDiasecOptions();
        updateSummary();
    });

    updateSummary();
}



function showDiasecOptions() {
    const mountType = document.getElementById('mountType').value;
    const diasecTypeOptions = document.getElementById('diasecTypeOptions');
    const printSize = document.getElementById('printSize').value;
    const diasecTypeSelect = document.getElementById('diasecType');
    const paperTypeWrapper = document.getElementById('paperTypeOptions'); // Target the parent div for paper type
    const addonOptions = document.getElementById('addonOptions');
    const frameType = document.getElementById('frameType').value;

    if (mountType === 'Diasec') {
        addonOptions.classList.add('hidden'); // Ensure add-ons are hidden for Diasec

        diasecTypeSelect.innerHTML = `<option value="" disabled selected>${document.documentElement.lang === 'he' ? 'בחר סוג דיאסק' : 'Select a Diasec type'}</option>`;
        for (const [type, price] of Object.entries(diasecPriceTable[printSize])) {
            diasecTypeSelect.innerHTML += `<option value="${type}">${document.documentElement.lang === 'he' ? translations[type] : type} - ${price} ${document.documentElement.lang === 'he' ? '₪' : 'NIS'}</option>`;
        }
        diasecTypeOptions.classList.remove('hidden');
        paperTypeWrapper.classList.add('hidden-no-space'); // Hide paper type with no spacing

        Array.from(document.getElementById('printSize').options).forEach(option => {
            if (option.value) {
                option.textContent = option.value;
            }
        });
    } else {
        diasecTypeOptions.classList.add('hidden');
        paperTypeWrapper.classList.remove('hidden-no-space'); // Show paper type with spacing

        const paperType = document.getElementById('paperType').value;
        if (paperType) {
            for (const [size, price] of Object.entries(priceTable[paperType])) {
                const option = Array.from(document.getElementById('printSize').options).find(opt => opt.value === size);
                if (option) {
                    option.textContent = document.documentElement.lang === 'he' ? `${size} - ₪${price}` : `${size} - ${price} NIS`;
                }
            }
        }
    }

    if (frameType === 'Floating Frame') {
        addonOptions.classList.add('hidden'); // Hide add-ons for Floating Frame
    }

    updateSummary();
}





function showFrameOptions() {
    const frameType = document.getElementById('frameType').value;
    const frameDetails = document.getElementById('frameDetails');
    const printSize = document.getElementById('printSize').value;
    const mountOptions = document.getElementById('mountOptions');
    const addonOptions = document.getElementById('addonOptions');
    const quantityOptions = document.getElementById('quantityOptions');
    const lang = document.documentElement.lang;

    frameDetails.classList.remove('hidden');
    mountOptions.classList.add('hidden');
    addonOptions.classList.add('hidden');
    quantityOptions.classList.add('hidden');

    // Clear previous options
    frameDetails.innerHTML = '';
    addonOptions.innerHTML = '';

    let options;
    if (frameType === 'Box Frame') {
        options = boxFramePriceTable[printSize];
    } else if (frameType === 'Floating Frame') {
        options = floatingFramePriceTable[printSize];
    } else if (frameType === 'Aluminium Frame') {
        options = aluminiumFramePriceTable[printSize];
    }

    if (options) {
        for (const [option, price] of Object.entries(options)) {
            frameDetails.innerHTML += `
                <div class="radio-group">
                    <input type="radio" id="frame${option.replace(/\s+/g, '')}" name="frameOption" value="${option}" data-price="${price}">
                    <label for="frame${option.replace(/\s+/g, '')}">${lang === 'he' ? translations[option] : option} <span style="color: grey;">- ${price} ${lang === 'he' ? '₪' : 'NIS'}</span></label>
                </div>
            `;
        }
    }

    // Common add-on options for all frame types
    const antiReflectiveGlassPrice = addonPriceTable['Anti-Reflective Glass'][printSize];
    const passepartoutPrice = addonPriceTable['Passepartout'][printSize];
    addonOptions.innerHTML += `
        <div class="checkbox-group">
            <input type="checkbox" id="addonAntiReflectiveGlass" name="addonOption" value="Anti-Reflective Glass" data-price="${antiReflectiveGlassPrice}">
            <label for="addonAntiReflectiveGlass">${lang === 'he' ? translations['Anti-Reflective Glass'] : 'Anti-Reflective Glass'} <span style="color: grey;">- ${antiReflectiveGlassPrice} ${lang === 'he' ? '₪' : 'NIS'}</span></label>
        </div>
        <div class="checkbox-group">
            <input type="checkbox" id="addonPassepartout" name="addonOption" value="Passepartout" data-price="${passepartoutPrice}">
            <label for="addonPassepartout">${lang === 'he' ? translations['Passepartout'] : 'Passepartout'} <span style="color: grey;">- ${passepartoutPrice} ${lang === 'he' ? '₪' : 'NIS'}</span></label>
        </div>
    `;

    // Add event listeners to dynamically added radio buttons
    document.querySelectorAll('#frameDetails input[type="radio"]').forEach(option => {
        option.addEventListener('change', () => {
            mountOptions.classList.remove('hidden');
            updateSummary();
            populateMountTypes();  // Ensure mount types are populated based on selected frame type
        });
    });

    // Add event listeners to dynamically added checkboxes
    document.querySelectorAll('#addonOptions input[type="checkbox"]').forEach(option => {
        option.addEventListener('change', updateSummary);
    });

    updateSummary();
}



function updateSummary() {
    const elements = [
        { id: 'productType', label: { en: 'Product Type', he: 'סוג מוצר' } },
        { id: 'paperType', label: { en: 'Paper Type', he: 'סוג נייר' } },
        { id: 'printSize', label: { en: 'Print Size', he: 'גודל הדפסה' } },
        { id: 'mountType', label: { en: 'Mount Type', he: 'סוג תלייה' } },
        { id: 'diasecType', label: { en: 'Diasec Type', he: 'סוג דיאסק' } },
        { id: 'frameType', label: { en: 'Frame Type', he: 'סוג מסגרת' } },
    ];

    const summaryText = document.getElementById('summaryText');
    summaryText.innerHTML = ''; // Clear previous content

    let totalCost = 0;
    let lang = document.documentElement.lang;
    let productType = document.getElementById('productType').value;
    let paperType = document.getElementById('paperType').value;
    let printSize = document.getElementById('printSize').value;
    let mountType = document.getElementById('mountType').value;
    let diasecType = document.getElementById('diasecType').value;
    let frameType = document.getElementById('frameType').value;
    let quantity = parseInt(document.getElementById('quantity').value) || 1;

    function createSummaryLine(label, value, price) {
        const line = document.createElement('div');
        line.className = 'summary-line';

        const labelSpan = document.createElement('span');
        labelSpan.className = 'summary-label';
        labelSpan.textContent = label;

        const valueSpan = document.createElement('span');
        valueSpan.className = 'summary-value';
        valueSpan.textContent = value;

        const priceSpan = document.createElement('span');
        priceSpan.className = 'summary-price';
        priceSpan.textContent = price ? `${price * quantity} ${lang === 'he' ? '₪' : 'NIS'}` : '';

        line.appendChild(labelSpan);
        line.appendChild(valueSpan);
        if (price) {
            line.appendChild(priceSpan);
        }

        summaryText.appendChild(line);
    }

    elements.forEach(element => {
        const value = document.getElementById(element.id).value;
        if (value) {
            let price = '';
            if (element.id === 'printSize' && paperType && (!mountType || mountType !== 'Diasec')) {
                price = priceTable[paperType][printSize];
            } else if (element.id === 'mountType' && mountType === 'Dibond' && printSize) {
                price = dibondPriceTable[printSize];
            } else if (element.id === 'mountType' && mountType.startsWith('KAPA') && printSize) {
                price = kapaPriceTable[printSize][mountType];
            } else if (element.id === 'diasecType' && diasecType && printSize) {
                price = diasecPriceTable[printSize][diasecType];
            } else if (element.id === 'frameType') {
                document.querySelectorAll('#frameDetails input[type="radio"]:checked').forEach(option => {
                    price = parseInt(option.dataset.price);
                });
            }
            // Skip adding paperType to summary if Diasec is selected
            if (!(mountType === 'Diasec' && element.id === 'paperType')) {
                createSummaryLine(lang === 'he' ? element.label.he : element.label.en, lang === 'he' ? (translations[value] || value) : value, price);
            }
            totalCost += price * quantity;
        }
    });

    // Handle upgrades separately to add them with the same structure but without price in value text
    const upgrades = document.querySelectorAll('#addonOptions input[type="checkbox"]:checked');
    upgrades.forEach(upgrade => {
        const value = upgrade.nextElementSibling.textContent.split(' - ')[0]; // Get only the text part without price
        const price = parseInt(upgrade.dataset.price);
        createSummaryLine(lang === 'he' ? 'שדרוג' : 'Upgrade', value, price);
        totalCost += price * quantity;
    });

    // Calculate total cost dynamically
    if (productType === 'Print Only' && paperType && printSize) {
        totalCost = priceTable[paperType][printSize] * quantity;
    } else if (productType === 'Print + Mount') {
        if (mountType === 'Dibond' && printSize) {
            totalCost = (dibondPriceTable[printSize] + priceTable[paperType][printSize]) * quantity;
        } else if (mountType === 'Diasec' && diasecType && printSize) {
            totalCost = diasecPriceTable[printSize][diasecType] * quantity;
        } else if (mountType.startsWith('KAPA') && printSize) {
            totalCost = (kapaPriceTable[printSize][mountType] + priceTable[paperType][printSize]) * quantity;
        }
    } else if (productType === 'Print + Frame' && paperType && printSize) {
        let frameCost = 0;
        document.querySelectorAll('#frameDetails input[type="radio"]:checked').forEach(option => {
            frameCost += parseInt(option.dataset.price);
        });

        totalCost = priceTable[paperType][printSize] * quantity + frameCost * quantity;

        if (mountType === 'Diasec' && diasecType) {
            totalCost += diasecPriceTable[printSize][diasecType] * quantity;
        } else if (mountType === 'Dibond') {
            totalCost += dibondPriceTable[printSize] * quantity;
        } else if (mountType.startsWith('KAPA')) {
            totalCost += kapaPriceTable[printSize][mountType] * quantity;
        }
    }

    // Add quantity to summary only if quantityOptions is visible
    if (!document.getElementById('quantityOptions').classList.contains('hidden')) {
        createSummaryLine(lang === 'he' ? 'כמות' : 'Quantity', quantity, '');
    }

    // Update existing total cost element
    document.getElementById('totalCost').textContent = `${totalCost} ${lang === 'he' ? '₪' : 'NIS'}`;
}




// Call the function to update the summary initially
updateSummary();



// Initial setup
document.getElementById('productType').selectedIndex = -1;
document.getElementById('paperType').selectedIndex = -1;
document.getElementById('printSize').selectedIndex = -1;
document.getElementById('mountType').selectedIndex = -1;
document.getElementById('diasecType').selectedIndex = -1;
document.getElementById('frameType').selectedIndex = -1;
document.getElementById('quantity').value = 1;

// Call the function to update the summary initially
updateSummary();



document.getElementById('submitOrder').addEventListener('click', () => {
    const productType = document.getElementById('productType').value;
    const paperType = document.getElementById('paperType').value;
    const printSize = document.getElementById('printSize').value;
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const totalCost = document.getElementById('totalCost').textContent.trim();

    const personId = 45267780; // Replace with the correct person ID
    const status = 'New'; // Ensure this matches one of the predefined status labels
    const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

    // Constructing the column values
    const columnValues = {
        person: { personsAndTeams: [{ id: personId, kind: "person" }] },
        status: { label: status },
        date4: { date: date },
        text__1: productType, // Product
        text8__1: paperType, // Paper Type
        text3__1: printSize, // Size
        text4__1: quantity.toString(), // Quantity
        text45__1: totalCost // Total Price
    };

    const query = `
        mutation {
            create_item (board_id: 1555863012, item_name: "New Order", column_values: "${JSON.stringify(columnValues).replace(/"/g, '\\"')}") {
                id
            }
        }
    `;

    fetch('https://api.monday.com/v2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM4MTA5NjcwMywiYWFpIjoxMSwidWlkIjo0NTI2Nzc4MCwiaWFkIjoiMjAyNC0wNy0wNlQxOTo1NTowOS42MzFaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTc2NTU5MDQsInJnbiI6ImV1YzEifQ.x-5ct2zcnpyBF8whDCdCsngqLtnE7WdOmIlAdXoyQE4'
        },
        body: JSON.stringify({ query })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Order submitted:', data);
        // Optionally, display a confirmation message to the user
    })
    .catch(error => {
        console.error('Error submitting order:', error);
        // Optionally, display an error message to the user
    });
});







document.addEventListener('DOMContentLoaded', () => {
    const paperTypeWrapper = document.getElementById('paperTypeOptions');
    if (!paperTypeWrapper) {
        console.error('paperTypeWrapper element not found.');
    }
});


