// ==================== Языковые настройки ====================
        
const translations = {
    ru: {
        "title": "Тригонометр",
        "header.title": "Тригонометр",
        "tabs.circle": "Тригонометрическая окружность",
        "tabs.triangle": "Калькулятор треугольника",
        "tabs.theory": "Теория",
        "circle.title": "Тригонометрическая окружность",
        "circle.description": "Нажмите на любую точку окружности или перемещайте курсор, чтобы увидеть соответствующие значения углов и тригонометрических функций.",
        "circle.showTangents": "Показать оси тангенсов и котангенсов",
        "circle.searchPlaceholder": "Введите угол (например, 30°, π/6 или 0.5π)",
        "circle.searchButton": "Найти",
        "circle.pointInfo": "Информация о точке",
        "circle.angleDeg": "Угол в градусах:",
        "circle.angleRad": "Угол в радианах:",
        "circle.coordinates": "Координаты:",
        "triangle.title": "Калькулятор прямоугольного треугольника",
        "triangle.sideA": "Катет a:",
        "triangle.sideB": "Катет b:",
        "triangle.hypotenuse": "Гипотенуза c:",
        "triangle.angleAlpha": "Угол α (°):",
        "triangle.angleBeta": "Угол β (°):",
        "triangle.height": "Высота h:",
        "triangle.area": "Площадь (S):",
        "triangle.perimeter": "Периметр (p):",
        "triangle.calculate": "Рассчитать",
        "triangle.reset": "Сбросить",
        "triangle.inradius": "Радиус вписанной окружности:",
        "triangle.circumradius": "Радиус описанной окружности:",
        "theory.title": "Теоретические основы тригонометрии",
        "theory.basics": "Основные понятия",
        "theory.basicsText": "Тригонометрия — раздел математики, изучающий соотношения между сторонами и углами треугольников и тригонометрические функции.",
        "theory.trigFunctions": "Тригонометрические функции",
        "theory.trigFunctionsText": "Для острого угла прямоугольного треугольника:",
        "theory.oppositeLeg": "противолежащий катет",
        "theory.adjacentLeg": "прилежащий катет",
        "theory.hypotenuse": "гипотенуза",
        "theory.unitCircle": "Тригонометрическая окружность",
        "theory.unitCircleText": "Единичная окружность с центром в начале координат позволяет определить тригонометрические функции для любых углов.",
        "theory.identities": "Основные тригонометрические тождества",
        "theory.additionFormulas": "Формулы сложения",
        "theory.doubleAngle": "Формулы двойного и половинного угла",
        "theory.sumToProduct": "Формулы преобразования суммы в произведение",
        "errors.twoParams": "Пожалуйста, введите ровно 2 параметра для расчета",
        "errors.positiveValues": "Длины должны быть положительными",
        "errors.legLessThanHypotenuse": "Катет должен быть меньше гипотенузы",
        "errors.angleRange": "Угол должен быть между 0 и 90 градусами",
        "errors.heightLimit": "Высота не может быть больше половины гипотенузы",
        "errors.invalidCombination": "Неподдерживаемая комбинация параметров"
    },
    en: {
        "title": "Trigonometer",
        "header.title": "Trigonometer",
        "tabs.circle": "Trigonometric Circle",
        "tabs.triangle": "Triangle Calculator",
        "tabs.theory": "Theory",
        "circle.title": "Trigonometric Circle",
        "circle.description": "Click on any point on the circle or move the cursor to see the corresponding angle values and trigonometric functions.",
        "circle.showTangents": "Show tangent and cotangent axes",
        "circle.searchPlaceholder": "Enter angle (e.g. 30°, π/6 or 0.5π)",
        "circle.searchButton": "Find",
        "circle.pointInfo": "Point information",
        "circle.angleDeg": "Angle in degrees:",
        "circle.angleRad": "Angle in radians:",
        "circle.coordinates": "Coordinates:",
        "triangle.title": "Right Triangle Calculator",
        "triangle.sideA": "Leg a:",
        "triangle.sideB": "Leg b:",
        "triangle.hypotenuse": "Hypotenuse c:",
        "triangle.angleAlpha": "Angle α (°):",
        "triangle.angleBeta": "Angle β (°):",
        "triangle.height": "Height h:",
        "triangle.area": "Area (S):",
        "triangle.perimeter": "Perimeter (p):",
        "triangle.calculate": "Calculate",
        "triangle.reset": "Reset",
        "triangle.inradius": "Inradius:",
        "triangle.circumradius": "Circumradius:",
        "theory.title": "Trigonometry Theory",
        "theory.basics": "Basic Concepts",
        "theory.basicsText": "Trigonometry is a branch of mathematics that studies the relationships between the sides and angles of triangles and trigonometric functions.",
        "theory.trigFunctions": "Trigonometric Functions",
        "theory.trigFunctionsText": "For an acute angle of a right triangle:",
        "theory.oppositeLeg": "opposite leg",
        "theory.adjacentLeg": "adjacent leg",
        "theory.hypotenuse": "hypotenuse",
        "theory.unitCircle": "Unit Circle",
        "theory.unitCircleText": "A unit circle centered at the origin allows defining trigonometric functions for any angle.",
        "theory.identities": "Basic Trigonometric Identities",
        "theory.additionFormulas": "Addition Formulas",
        "theory.doubleAngle": "Double and Half Angle Formulas",
        "theory.sumToProduct": "Sum-to-Product Formulas",
        "errors.twoParams": "Please enter exactly 2 parameters for calculation",
        "errors.positiveValues": "Lengths must be positive",
        "errors.legLessThanHypotenuse": "Leg must be less than hypotenuse",
        "errors.angleRange": "Angle must be between 0 and 90 degrees",
        "errors.heightLimit": "Height cannot be more than half of hypotenuse",
        "errors.invalidCombination": "Unsupported parameter combination"
    }
};

let currentLanguage = 'ru';

// Функция перевода
function translatePage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Обновляем все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Обновляем placeholder'ы
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    // Обновляем активную кнопку языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Обновляем сообщения об ошибках (если они есть)
    const errorElement = document.getElementById('triangleError');
    if (errorElement && errorElement.textContent) {
        const errorText = errorElement.textContent;
        for (const [key, value] of Object.entries(translations['ru'])) {
            if (value === errorText && translations[lang][key]) {
                errorElement.textContent = translations[lang][key];
                break;
            }
        }
    }
}

// Функция для получения CSS-переменных
function getCssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// ==================== Общие функции ====================

// Переключение между вкладками
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Переключение темы
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateTriangleImage();
    drawCircle();
});

// Обновление изображения треугольника в зависимости от темы
function updateTriangleImage() {
    const triangleImage = document.getElementById('triangleImage');
    triangleImage.src = document.body.classList.contains('dark-mode') 
        ? 'images/triangle_dark.png' 
        : 'images/triangle.png';
}

// ==================== Тригонометрическая окружность ====================

const canvas = document.getElementById('trigCircle');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = canvas.width / 2 - 40;
let currentAngle = 0;
let isDragging = false;
let showTangents = true;

// Основные углы для отображения
const mainAngles = [
    { deg: 0, rad: '0', name: '0' },
    { deg: 30, rad: 'π/6', name: 'π/6' },
    { deg: 45, rad: 'π/4', name: 'π/4' },
    { deg: 60, rad: 'π/3', name: 'π/3' },
    { deg: 90, rad: 'π/2', name: 'π/2' },
    { deg: 120, rad: '2π/3', name: '2π/3' },
    { deg: 135, rad: '3π/4', name: '3π/4' },
    { deg: 150, rad: '5π/6', name: '5π/6' },
    { deg: 180, rad: 'π', name: 'π' },
    { deg: 210, rad: '7π/6', name: '7π/6' },
    { deg: 225, rad: '5π/4', name: '5π/4' },
    { deg: 240, rad: '4π/3', name: '4π/3' },
    { deg: 270, rad: '3π/2', name: '3π/2' },
    { deg: 300, rad: '5π/3', name: '5π/3' },
    { deg: 315, rad: '7π/4', name: '7π/4' },
    { deg: 330, rad: '11π/6', name: '11π/6' }
];

function drawCircle() {
    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем окружность
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = getCssVar('--primary-color');
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Рисуем оси
    ctx.beginPath();
    ctx.moveTo(centerX - radius - 10, centerY);
    ctx.lineTo(centerX + radius + 10, centerY);
    ctx.moveTo(centerX, centerY - radius - 10);
    ctx.lineTo(centerX, centerY + radius + 10);
    ctx.strokeStyle = getCssVar('--text-color');
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // Рисуем основные углы
    mainAngles.forEach(angle => {
        const rad = angle.deg * Math.PI / 180;
        const x = centerX + radius * Math.cos(rad);
        const y = centerY - radius * Math.sin(rad);
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = getCssVar('--accent-color');
        ctx.fill();
        
        if (angle.deg % 30 === 0) {
            const labelX = centerX + (radius + 25) * Math.cos(rad);
            const labelY = centerY - (radius + 25) * Math.sin(rad);
            
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = getCssVar('--primary-color');
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(angle.name, labelX, labelY);
        }
    });
    
    // Оси тангенсов и котангенсов
    if (showTangents) {
        ctx.beginPath();
        ctx.moveTo(centerX + radius, centerY - radius);
        ctx.lineTo(centerX + radius, centerY + radius);
        ctx.strokeStyle = 'rgba(255, 126, 95, 0.7)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3]);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(centerX - radius, centerY - radius);
        ctx.lineTo(centerX + radius, centerY - radius);
        ctx.strokeStyle = 'rgba(40, 167, 69, 0.7)';
        ctx.stroke();
        ctx.setLineDash([]);
    }
    
    // Текущая точка и линии
    const pointX = centerX + radius * Math.cos(currentAngle);
    const pointY = centerY - radius * Math.sin(currentAngle);
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(pointX, pointY);
    ctx.strokeStyle = getCssVar('--accent-color');
    ctx.lineWidth = 1;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(pointX, pointY);
    ctx.lineTo(pointX, centerY);
    ctx.lineTo(centerX, centerY);
    ctx.strokeStyle = 'rgba(74, 111, 165, 0.5)';
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(pointX, pointY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = getCssVar('--accent-color');
    ctx.fill();
    
    // Угол
    const angleRadius = radius * 0.3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, angleRadius, 0, currentAngle, currentAngle < 0);
    ctx.strokeStyle = getCssVar('--success-color');
    ctx.lineWidth = 2;
    ctx.stroke();
    
    const angleLabelX = centerX + angleRadius * 0.7 * Math.cos(currentAngle / 2);
    const angleLabelY = centerY - angleRadius * 0.7 * Math.sin(currentAngle / 2);
    ctx.fillStyle = getCssVar('--success-color');
    ctx.font = 'bold 14px Arial';
    ctx.fillText(`${(currentAngle * 180 / Math.PI).toFixed(1)}°`, angleLabelX, angleLabelY);
    
    updatePointInfo(currentAngle);
}

function updatePointInfo(angle) {
    const deg = angle * 180 / Math.PI;
    const sinValue = Math.sin(angle);
    const cosValue = Math.cos(angle);
    const tanValue = Math.tan(angle);
    const cotValue = 1 / tanValue;
    
    let radText = formatRadians(angle);
    
    document.getElementById('angleDeg').textContent = `${deg.toFixed(2)}°`;
    document.getElementById('angleRad').textContent = radText;
    document.getElementById('coordX').textContent = cosValue.toFixed(4);
    document.getElementById('coordY').textContent = sinValue.toFixed(4);
    document.getElementById('sinValue').textContent = sinValue.toFixed(4);
    document.getElementById('cosValue').textContent = cosValue.toFixed(4);
    
    if (Math.abs(cosValue) < 0.0001) {
        document.getElementById('tanValue').textContent = "∞";
        document.getElementById('cotValue').textContent = "0";
    } else if (Math.abs(sinValue) < 0.0001) {
        document.getElementById('tanValue').textContent = "0";
        document.getElementById('cotValue').textContent = "∞";
    } else {
        document.getElementById('tanValue').textContent = tanValue.toFixed(4);
        document.getElementById('cotValue').textContent = cotValue.toFixed(4);
    }
}

function formatRadians(angle) {
    if (angle === 0) return '0';
    
    const fraction = angle / Math.PI;
    if (Number.isInteger(fraction)) {
        return fraction === 1 ? 'π' : `${fraction}π`;
    }
    
    const numerator = Math.round(fraction * 100);
    const denominator = 100;
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const divisor = gcd(numerator, denominator);
    const simplifiedNum = numerator / divisor;
    const simplifiedDen = denominator / divisor;
    
    return simplifiedDen === 1 
        ? `${simplifiedNum}π` 
        : `${simplifiedNum}π/${simplifiedDen}`;
}

// Обработка взаимодействия с окружностью
function handleInteraction(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - centerX;
    const y = centerY - (e.clientY - rect.top);
    
    currentAngle = Math.atan2(y, x);
    if (currentAngle < 0) currentAngle += 2 * Math.PI;
    
    drawCircle();
}

canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    handleInteraction(e);
});

canvas.addEventListener('mousemove', (e) => {
    if (isDragging) handleInteraction(e);
});

['mouseup', 'mouseleave'].forEach(event => {
    canvas.addEventListener(event, () => isDragging = false);
});

// Переключение осей тангенсов
document.getElementById('showTangents').addEventListener('change', function() {
    showTangents = this.checked;
    drawCircle();
});

// Поиск точки по углу
document.getElementById('searchBtn').addEventListener('click', () => {
    const input = document.getElementById('pointSearch').value.trim();
    
    if (input.includes('π')) {
        const parts = input.split('π');
        let coefficient = parts[0] || '1';
        if (coefficient === '-') coefficient = '-1';
        if (coefficient === '+') coefficient = '1';
        
        if (coefficient.includes('/')) {
            const [numerator, denominator] = coefficient.split('/');
            currentAngle = parseFloat(numerator) / parseFloat(denominator) * Math.PI;
        } else {
            currentAngle = parseFloat(coefficient) * Math.PI;
        }
    } else if (input.includes('°')) {
        currentAngle = parseFloat(input.replace('°', '')) * Math.PI / 180;
    } else {
        currentAngle = parseFloat(input);
    }
    
    currentAngle = currentAngle % (2 * Math.PI);
    if (currentAngle < 0) currentAngle += 2 * Math.PI;
    
    drawCircle();
});

// ==================== Калькулятор треугольника ====================

const triangleData = { 
    a: 0, b: 0, c: 0, 
    alpha: 0, beta: 0, 
    area: 0, perimeter: 0, 
    height: 0 
};

document.getElementById('calculateTriangle').addEventListener('click', calculateTriangle);
document.getElementById('resetTriangle').addEventListener('click', resetTriangle);

function calculateTriangle() {
    const inputs = {
        a: parseFloat(document.getElementById('sideA').value),
        b: parseFloat(document.getElementById('sideB').value),
        c: parseFloat(document.getElementById('hypotenuse').value),
        alpha: parseFloat(document.getElementById('angleAlpha').value),
        beta: parseFloat(document.getElementById('angleBeta').value),
        height: parseFloat(document.getElementById('height').value),
        area: parseFloat(document.getElementById('area').value),
        perimeter: parseFloat(document.getElementById('perimeter').value)
    };
    
    const enteredParams = Object.values(inputs).filter(x => !isNaN(x)).length;
    
    if (enteredParams !== 2) {
        showError(translations[currentLanguage]['errors.twoParams']);
        return;
    }
    
    try {
        if (!isNaN(inputs.a) && !isNaN(inputs.b)) {
            calculateFromLegs(inputs.a, inputs.b);
        } 
        else if (!isNaN(inputs.a) && !isNaN(inputs.c)) {
            calculateFromLegAndHypotenuse(inputs.a, inputs.c);
        }
        else if (!isNaN(inputs.b) && !isNaN(inputs.c)) {
            calculateFromLegAndHypotenuse(inputs.b, inputs.c, false);
        }
        else if (!isNaN(inputs.a) && !isNaN(inputs.alpha)) {
            calculateFromLegAndAngle(inputs.a, inputs.alpha);
        }
        else if (!isNaN(inputs.b) && !isNaN(inputs.alpha)) {
            calculateFromLegAndAngle(inputs.b, inputs.alpha, false);
        }
        else if (!isNaN(inputs.c) && !isNaN(inputs.alpha)) {
            calculateFromHypotenuseAndAngle(inputs.c, inputs.alpha);
        }
        else if (!isNaN(inputs.area) && !isNaN(inputs.perimeter)) {
            calculateFromAreaAndPerimeter(inputs.area, inputs.perimeter);
        }
        else if (!isNaN(inputs.height) && !isNaN(inputs.c)) {
            calculateFromHeightAndHypotenuse(inputs.height, inputs.c);
        }
        else {
            throw new Error(translations[currentLanguage]['errors.invalidCombination']);
        }
        
        updateResults();
    } catch (error) {
        showError(error.message);
    }
}

function calculateFromLegs(a, b) {
    if (a <= 0 || b <= 0) throw new Error(translations[currentLanguage]['errors.positiveValues']);
    
    triangleData.a = a;
    triangleData.b = b;
    triangleData.c = Math.sqrt(a*a + b*b);
    triangleData.alpha = Math.atan(a/b) * (180 / Math.PI);
    triangleData.beta = 90 - triangleData.alpha;
    calculateDerivedValues();
}

function calculateFromLegAndHypotenuse(leg, hypotenuse, isFirstLeg = true) {
    if (leg <= 0 || hypotenuse <= 0) throw new Error(translations[currentLanguage]['errors.positiveValues']);
    if (leg >= hypotenuse) throw new Error(translations[currentLanguage]['errors.legLessThanHypotenuse']);
    
    if (isFirstLeg) {
        triangleData.a = leg;
        triangleData.c = hypotenuse;
        triangleData.b = Math.sqrt(hypotenuse*hypotenuse - leg*leg);
        triangleData.alpha = Math.asin(leg/hypotenuse) * (180 / Math.PI);
    } else {
        triangleData.b = leg;
        triangleData.c = hypotenuse;
        triangleData.a = Math.sqrt(hypotenuse*hypotenuse - leg*leg);
        triangleData.beta = Math.asin(leg/hypotenuse) * (180 / Math.PI);
    }
    triangleData.beta = 90 - triangleData.alpha;
    calculateDerivedValues();
}

function calculateFromLegAndAngle(leg, angle, isFirstLeg = true) {
    if (leg <= 0) throw new Error(translations[currentLanguage]['errors.positiveValues']);
    if (angle <= 0 || angle >= 90) throw new Error(translations[currentLanguage]['errors.angleRange']);
    
    const angleRad = angle * Math.PI / 180;
    
    if (isFirstLeg) {
        triangleData.a = leg;
        triangleData.alpha = angle;
        triangleData.b = leg / Math.tan(angleRad);
        triangleData.c = leg / Math.sin(angleRad);
    } else {
        triangleData.b = leg;
        triangleData.alpha = angle;
        triangleData.a = leg * Math.tan(angleRad);
        triangleData.c = leg / Math.cos(angleRad);
    }
    triangleData.beta = 90 - angle;
    calculateDerivedValues();
}

function calculateFromHypotenuseAndAngle(hypotenuse, angle) {
    if (hypotenuse <= 0) throw new Error(translations[currentLanguage]['errors.positiveValues']);
    if (angle <= 0 || angle >= 90) throw new Error(translations[currentLanguage]['errors.angleRange']);
    
    const angleRad = angle * Math.PI / 180;
    
    triangleData.c = hypotenuse;
    triangleData.alpha = angle;
    triangleData.beta = 90 - angle;
    triangleData.a = hypotenuse * Math.sin(angleRad);
    triangleData.b = hypotenuse * Math.cos(angleRad);
    calculateDerivedValues();
}

function calculateFromAreaAndPerimeter(area, perimeter) {
    if (area <= 0 || perimeter <= 0) throw new Error(translations[currentLanguage]['errors.positiveValues']);
    
    const discriminant = perimeter*perimeter - 8*area;
    if (discriminant < 0) throw new Error(translations[currentLanguage]['errors.invalidCombination']);
    
    triangleData.a = (perimeter - Math.sqrt(discriminant)) / 2;
    triangleData.b = (perimeter + Math.sqrt(discriminant)) / 2 - Math.sqrt(perimeter*perimeter/2 - perimeter*Math.sqrt(discriminant) + discriminant/2);
    triangleData.c = Math.sqrt(triangleData.a*triangleData.a + triangleData.b*triangleData.b);
    triangleData.alpha = Math.atan(triangleData.a/triangleData.b) * (180 / Math.PI);
    triangleData.beta = 90 - triangleData.alpha;
    calculateDerivedValues();
}

function calculateFromHeightAndHypotenuse(height, hypotenuse) {
    if (height <= 0 || hypotenuse <= 0) throw new Error(translations[currentLanguage]['errors.positiveValues']);
    if (height > hypotenuse/2) throw new Error(translations[currentLanguage]['errors.heightLimit']);
    
    const ab = height * hypotenuse;
    const a_plus_b = Math.sqrt(hypotenuse*hypotenuse + 2*ab);
    
    triangleData.a = (a_plus_b - Math.sqrt(a_plus_b*a_plus_b - 4*ab)) / 2;
    triangleData.b = ab / triangleData.a;
    triangleData.c = hypotenuse;
    triangleData.alpha = Math.atan(triangleData.a/triangleData.b) * (180 / Math.PI);
    triangleData.beta = 90 - triangleData.alpha;
    calculateDerivedValues();
}

function calculateDerivedValues() {
    triangleData.area = (triangleData.a * triangleData.b) / 2;
    triangleData.perimeter = triangleData.a + triangleData.b + triangleData.c;
    triangleData.height = (triangleData.a * triangleData.b) / triangleData.c;
}

function updateResults() {
    document.getElementById('sideA').value = triangleData.a.toFixed(4);
    document.getElementById('sideB').value = triangleData.b.toFixed(4);
    document.getElementById('hypotenuse').value = triangleData.c.toFixed(4);
    document.getElementById('angleAlpha').value = triangleData.alpha.toFixed(4);
    document.getElementById('angleBeta').value = triangleData.beta.toFixed(4);
    document.getElementById('height').value = triangleData.height.toFixed(4);
    document.getElementById('area').value = triangleData.area.toFixed(4);
    document.getElementById('perimeter').value = triangleData.perimeter.toFixed(4);
    
    document.getElementById('resultA').textContent = triangleData.a.toFixed(4);
    document.getElementById('resultB').textContent = triangleData.b.toFixed(4);
    document.getElementById('resultC').textContent = triangleData.c.toFixed(4);
    document.getElementById('resultAlpha').textContent = triangleData.alpha.toFixed(2) + '°';
    document.getElementById('resultBeta').textContent = triangleData.beta.toFixed(2) + '°';
    document.getElementById('resultArea').textContent = triangleData.area.toFixed(4);
    document.getElementById('resultPerimeter').textContent = triangleData.perimeter.toFixed(4);
    document.getElementById('resultHeight').textContent = triangleData.height.toFixed(4);
    
    const inradius = (triangleData.a + triangleData.b - triangleData.c) / 2;
    const circumradius = triangleData.c / 2;
    document.getElementById('resultInradius').textContent = inradius.toFixed(4);
    document.getElementById('resultCircumradius').textContent = circumradius.toFixed(4);
}

function resetTriangle() {
    document.querySelectorAll('.triangle-calculator input').forEach(input => {
        input.value = '';
    });
    document.getElementById('triangleError').textContent = '';
    document.querySelectorAll('#triangleResults span').forEach(span => {
        span.textContent = '-';
    });
}

function showError(message) {
    document.getElementById('triangleError').textContent = message;
}

// Инициализация при загрузке
window.addEventListener('load', () => {
    drawCircle();
    updateTriangleImage();
    
    // Добавляем обработчики для кнопок языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            translatePage(lang);
        });
    });
});