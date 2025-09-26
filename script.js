document.addEventListener('DOMContentLoaded', () => {

    // Tarjimalar ma'lumotlar bazasi
    const translations = {
        'uz': {
            'logo': 'PochtaX',
            'nav-home': 'Bosh sahifa',
            'nav-services': 'Xizmatlar',
            'nav-flights': 'Reyslar',
            'nav-pricing': 'Narxlar',
            'nav-contact': 'Aloqa',
            'hero-title': 'O\'zbekiston va Yaponiya o\'rtasida ishonchli pochta xizmati',
            'hero-subtitle': 'Hujjatlaringiz va posilkalaringizni tez, xavfsiz va ishonchli yetkazib beramiz.',
            'contact-phone': 'Telefon:',
            'contact-telegram': 'Telegram:',
            'services-title': 'Xizmatlarimiz',
            'service1-title': 'Tezkor yetkazish',
            'service1-desc': 'Shoshilinch hujjatlar va posilkalar uchun express yetkazib berish.',
            'flights-title': 'Bagajlar jo\'natilishi',
            'flight-date-title': 'Jo\'natilish sanasi',
            'flight-info-title': 'Ma\'lumot',
            'flight-info-desc': 'Keyingi reys Yaponiya-O\'zbekiston yo\'nalishida.',
            'pricing-title': 'Narxlar va Tariflar',
            'price-title': 'Bir kg uchun narx',
            'price-old': '2000 ¥',
            'price-new': '1500 ¥',
            'pricing-note': 'Chegirma tugashiga oz qoldi! Tezroq foydalanib qoling.',
            'contact-title': 'Biz bilan bog\'laning',
            'contact-subtitle': 'Savollaringiz bormi? Bizga murojaat qiling.',
            'form-name-ph': 'Ismingiz',
            'form-telegram-ph': 'Telegram raqamingiz',
            'form-message-ph': 'Xabaringiz',
            'form-send-btn': 'Yuborish',
            'footer-text': '© 2025 PochtaX. Barcha huquqlar himoyalangan.'
        },
        'ru': {
            'logo': 'PochtaX',
            'nav-home': 'Главная',
            'nav-services': 'Услуги',
            'nav-flights': 'Рейсы',
            'nav-pricing': 'Цены',
            'nav-contact': 'Контакты',
            'hero-title': 'Надежная почтовая служба между Узбекистаном и Японией',
            'hero-subtitle': 'Быстрая, безопасная и надежная доставка ваших документов и посылок.',
            'contact-phone': 'Телефон:',
            'contact-telegram': 'Телеграм:',
            'services-title': 'Наши услуги',
            'service1-title': 'Срочная доставка',
            'service1-desc': 'Экспресс-доставка для срочных документов и посылок.',
            'flights-title': 'Расписание рейсов',
            'flight-date-title': 'Дата отправления',
            'flight-info-title': 'Информация',
            'flight-info-desc': 'Следующий рейс по маршруту Япония-Узбекистан.',
            'pricing-title': 'Цены и тарифы',
            'price-title': 'Цена за 1 кг',
            'price-old': '2000 ¥',
            'price-new': '1500 ¥',
            'pricing-note': 'Скидка скоро закончится! Успейте воспользоваться.',
            'contact-title': 'Свяжитесь с нами',
            'contact-subtitle': 'Есть вопросы? Свяжитесь с нами.',
            'form-name-ph': 'Ваше имя',
            'form-telegram-ph': 'Номер Телеграм',
            'form-message-ph': 'Ваше сообщение',
            'form-send-btn': 'Отправить',
            'footer-text': '© 2025 PochtaX. Все права защищены.'
        },
        'en': {
            'logo': 'PochtaX',
            'nav-home': 'Home',
            'nav-services': 'Services',
            'nav-flights': 'Flights',
            'nav-pricing': 'Pricing',
            'nav-contact': 'Contact',
            'hero-title': 'Reliable Postal Service Between Uzbekistan and Japan',
            'hero-subtitle': 'Fast, secure, and reliable delivery of your documents and parcels.',
            'contact-phone': 'Phone:',
            'contact-telegram': 'Telegram:',
            'services-title': 'Our Services',
            'service1-title': 'Express Delivery',
            'service1-desc': 'Express delivery for urgent documents and parcels.',
            'flights-title': 'Flight Schedule',
            'flight-date-title': 'Departure Date',
            'flight-info-title': 'Information',
            'flight-info-desc': 'Next flight on the Japan-Uzbekistan route.',
            'pricing-title': 'Pricing and Tariffs',
            'price-title': 'Price per 1 kg',
            'price-old': '2000 ¥',
            'price-new': '1500 ¥',
            'pricing-note': 'The discount is about to expire! Take advantage now.',
            'contact-title': 'Contact Us',
            'contact-subtitle': 'Have questions? Contact us.',
            'form-name-ph': 'Your Name',
            'form-telegram-ph': 'Your Telegram Number',
            'form-message-ph': 'Your message',
            'form-send-btn': 'Send',
            'footer-text': '© 2025 PochtaX. All rights reserved.'
        },
        'jp': {
            'logo': 'ポチタエックス',
            'nav-home': 'ホームページ',
            'nav-services': 'サービス',
            'nav-flights': 'フライト',
            'nav-pricing': '料金',
            'nav-contact': 'お問い合わせ',
            'hero-title': 'ウズベキスタンと日本の信頼できる郵便サービス',
            'hero-subtitle': '文書や荷物を迅速、安全、確実に配達します。',
            'contact-phone': '電話:',
            'contact-telegram': 'テレグラム:',
            'services-title': '当社のサービス',
            'service1-title': 'エクスプレス配送',
            'service1-desc': 'お急ぎの書類や荷物のための速達便。',
            'flights-title': 'フライトスケジュール',
            'flight-date-title': '出発日',
            'flight-info-title': '情報',
            'flight-info-desc': '次のフライトは日本-ウズベキスタン路線です。',
            'pricing-title': '料金と関税',
            'price-title': '1kgあたりの価格',
            'price-old': '2000 ¥',
            'price-new': '1500 ¥',
            'pricing-note': '割引期間がまもなく終了します！今すぐご利用ください。',
            'contact-title': 'お問い合わせ',
            'contact-subtitle': 'ご質問がありますか？お問い合わせください。',
            'form-name-ph': 'お名前',
            'form-telegram-ph': 'テレグラム番号',
            'form-message-ph': 'メッセージ',
            'form-send-btn': '送信',
            'footer-text': '© 2025 ポチタエックス. 全著作権所有。'
        }
    };
    
    const elementsToTranslate = document.querySelectorAll('[data-lang-key]');
    const flightDateElement = document.getElementById('flight-date');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentFlag = document.getElementById('current-flag');
    const currentLangText = document.getElementById('current-lang-text');

    // Joriy sana vaqtini olish
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 14); // 14 kundan keyin
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = futureDate.toLocaleDateString('uz-UZ', options);
    flightDateElement.textContent = formattedDate;

    // Tilni o'zgartirish funksiyasi
    function setLanguage(lang) {
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else if (el.tagName === 'A' && el.getAttribute('href').includes('t.me')) {
                    el.textContent = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Joriy til va bayroqni o'zgartirish
        const selectedOption = document.querySelector(`.lang-option[data-lang="${lang}"]`);
        if (selectedOption) {
            currentFlag.src = selectedOption.querySelector('img').src;
            currentLangText.textContent = selectedOption.textContent.trim().split(' ')[0];
        }

        localStorage.setItem('lang', lang);
    }

    // Tugmalarga bosish hodisasini qo'shish
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Sahifa yuklanganda oxirgi tanlangan tilni tiklash
    const savedLang = localStorage.getItem('lang') || 'uz';
    setLanguage(savedLang);
});
