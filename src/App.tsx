import { useState, useEffect, useRef } from 'react';

// ===== ICONS (SVG components) =====
const IconTopo = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="40" height="40" rx="4" />
    <path d="M4 28 L16 20 L28 26 L44 14" />
    <circle cx="16" cy="20" r="2" fill="currentColor" />
    <circle cx="28" cy="26" r="2" fill="currentColor" />
    <circle cx="44" cy="14" r="2" fill="currentColor" />
  </svg>
);

const IconMezhev = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 40 L8 16 L24 8 L40 16 L40 40" />
    <path d="M8 40 L40 40" />
    <path d="M24 8 L24 40" strokeDasharray="4 2" />
    <circle cx="8" cy="16" r="3" fill="currentColor" />
    <circle cx="24" cy="8" r="3" fill="currentColor" />
    <circle cx="40" cy="16" r="3" fill="currentColor" />
  </svg>
);

const IconBorders = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 8 L40 8 L40 40 L8 40 Z" />
    <circle cx="8" cy="8" r="3" fill="currentColor" />
    <circle cx="40" cy="8" r="3" fill="currentColor" />
    <circle cx="40" cy="40" r="3" fill="currentColor" />
    <circle cx="8" cy="40" r="3" fill="currentColor" />
    <path d="M4 4 L12 12 M44 4 L36 12 M4 44 L12 36 M44 44 L36 36" strokeWidth="1.5" />
  </svg>
);

const IconAxes = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M24 4 L24 44" strokeDasharray="4 2" />
    <path d="M4 24 L44 24" strokeDasharray="4 2" />
    <rect x="12" y="12" width="24" height="24" rx="2" />
    <circle cx="24" cy="24" r="4" fill="currentColor" />
  </svg>
);

const IconExecutive = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="8" y="4" width="32" height="40" rx="3" />
    <path d="M14 14 L34 14" />
    <path d="M14 22 L34 22" />
    <path d="M14 30 L26 30" />
    <path d="M30 28 L36 34 L30 34" fill="currentColor" stroke="none" />
  </svg>
);

const IconTechPlan = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="6" y="6" width="36" height="36" rx="3" />
    <path d="M6 18 L42 18" />
    <path d="M18 18 L18 42" />
    <rect x="22" y="22" width="12" height="8" />
    <path d="M10 24 L14 24 M10 30 L14 30 M10 36 L14 36" strokeWidth="1.5" />
  </svg>
);

const IconAct = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="10" y="4" width="28" height="40" rx="3" />
    <path d="M16 14 L32 14" />
    <path d="M16 20 L32 20" />
    <path d="M16 26 L28 26" />
    <path d="M20 34 L28 34" stroke="currentColor" strokeWidth="3" />
  </svg>
);

const IconConstruction = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 44 L8 20 L24 8 L40 20 L40 44" />
    <rect x="18" y="30" width="12" height="14" />
    <path d="M4 44 L44 44" />
    <circle cx="24" cy="18" r="3" />
  </svg>
);

const IconConsult = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="24" cy="24" r="18" />
    <path d="M18 20 C18 16, 30 16, 30 20 C30 24, 24 24, 24 28" />
    <circle cx="24" cy="34" r="1.5" fill="currentColor" />
  </svg>
);

// ===== MAIN APP =====
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{name?: string; phone?: string}>({});
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#advantages', label: 'Преимущества' },
    { href: '#stages', label: 'Этапы работы' },
    { href: '#pricing', label: 'Цены' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#contacts', label: 'Контакты' },
  ];

  const services = [
    { icon: <IconTopo />, title: 'Топографическая съемка', desc: 'Подготовка топографических планов для проектирования, строительства, согласований и подключения коммуникаций.' },
    { icon: <IconMezhev />, title: 'Межевание земельных участков', desc: 'Уточнение границ, площади и координат земельного участка для регистрации и кадастрового учета.' },
    { icon: <IconBorders />, title: 'Вынос границ участка в натуру', desc: 'Определение и закрепление поворотных точек границ земельного участка на местности.' },
    { icon: <IconAxes />, title: 'Вынос осей зданий и сооружений', desc: 'Перенос проектных осей объекта строительства на местность с высокой точностью.' },
    { icon: <IconExecutive />, title: 'Исполнительная съемка', desc: 'Проверка соответствия построенных объектов проектной документации.' },
    { icon: <IconTechPlan />, title: 'Технические планы', desc: 'Подготовка технических планов зданий, сооружений и помещений для постановки на кадастровый учет.' },
    { icon: <IconAct />, title: 'Акты обследования', desc: 'Подготовка документов для снятия с кадастрового учета разрушенных или снесенных объектов.' },
    { icon: <IconConstruction />, title: 'Геодезическое сопровождение строительства', desc: 'Контроль точности строительно-монтажных работ на всех этапах строительства.' },
    { icon: <IconConsult />, title: 'Кадастровые консультации', desc: 'Помощь по вопросам границ земельных участков, кадастрового учета и оформления недвижимости.' },
  ];

  const advantages = [
    { icon: '🔬', title: 'Современное оборудование', desc: 'Используем электронные тахеометры, спутниковое оборудование и точные измерительные системы.' },
    { icon: '👷', title: 'Квалифицированные специалисты', desc: 'Работы выполняют геодезисты и кадастровые инженеры с практическим опытом.' },
    { icon: '⏱️', title: 'Соблюдение сроков', desc: 'Фиксируем сроки в договоре и предупреждаем о ходе выполнения работ.' },
    { icon: '📋', title: 'Официальные документы', desc: 'Готовим документы в соответствии с требованиями законодательства и кадастрового учета.' },
    { icon: '💰', title: 'Понятная стоимость', desc: 'Озвучиваем цену до начала работ и объясняем, что входит в стоимость.' },
    { icon: '🤝', title: 'Работа с частными и юрлицами', desc: 'Выполняем как разовые задачи для собственников, так и комплексное сопровождение проектов.' },
  ];

  const stages = [
    { num: '01', title: 'Заявка и консультация', desc: 'Клиент оставляет заявку, мы уточняем задачу, объект и цели работ.' },
    { num: '02', title: 'Анализ документов', desc: 'Изучаем имеющиеся документы, выписки, планы и исходные данные.' },
    { num: '03', title: 'Коммерческое предложение', desc: 'Формируем стоимость, сроки и перечень работ.' },
    { num: '04', title: 'Полевые работы', desc: 'Выезжаем на объект и выполняем измерения.' },
    { num: '05', title: 'Камеральная обработка', desc: 'Обрабатываем полученные данные, готовим схемы, планы и документы.' },
    { num: '06', title: 'Передача результата', desc: 'Передаем клиенту готовые документы и при необходимости консультируем.' },
  ];

  const clients = [
    { icon: '🏠', title: 'Частные домовладельцы', desc: 'Оформление границ, межевание, технические планы для домов и участков.' },
    { icon: '🌍', title: 'Владельцы земельных участков', desc: 'Уточнение границ, вынос в натуру, подготовка межевых планов.' },
    { icon: '🏗️', title: 'Застройщики', desc: 'Топосъемка, исполнительная съемка, геодезическое сопровождение.' },
    { icon: '🔧', title: 'Подрядные организации', desc: 'Контроль точности СМР, вынос осей, исполнительная документация.' },
    { icon: '📐', title: 'Архитекторы и проектировщики', desc: 'Топографические планы, инженерные изыскания для проектирования.' },
    { icon: '🏭', title: 'Промышленные предприятия', desc: 'Комплексные геодезические работы, мониторинг деформаций.' },
  ];

  const pricing = [
    { service: 'Топографическая съемка', price: 'от 8 000 ₽' },
    { service: 'Вынос границ участка', price: 'от 6 000 ₽' },
    { service: 'Межевание земельного участка', price: 'от 10 000 ₽' },
    { service: 'Технический план', price: 'от 12 000 ₽' },
    { service: 'Исполнительная съемка', price: 'по договоренности' },
    { service: 'Геодезическое сопровождение строительства', price: 'по запросу' },
  ];

  const reviews = [
    { name: 'Алексей Петров', type: 'Вынос границ', text: 'Заказывали вынос границ земельного участка. Специалисты приехали вовремя, быстро установили точки и объяснили все понятным языком. Очень довольны.' },
    { name: 'Мария Иванова', type: 'Топографическая съемка', text: 'Нужна была топографическая съемка для подключения газа. Работу выполнили аккуратно и в срок. Отдельное спасибо за консультацию по документам.' },
    { name: 'ООО «СтройПроект»', type: 'Геодезическое сопровождение', text: 'Сотрудничаем с компанией по геодезическому сопровождению объекта. Все измерения выполняются точно, документы передаются вовремя.' },
  ];

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const errors: {name?: string; phone?: string} = {};

    if (!name.trim()) errors.name = 'Пожалуйста, укажите ваше имя';
    if (!phone.trim()) errors.phone = 'Пожалуйста, укажите номер телефона';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ===== HEADER ===== */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                </svg>
              </div>
              <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-primary' : 'text-primary'}`}>
                Гео<span className="text-accent">Кадастр</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-text-gray hover:text-accent transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+79000000000" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
                +7 (900) 000-00-00
              </a>
              <a href="#form" className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg">
                Оставить заявку
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-primary"
              aria-label="Меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border animate-slide-down">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMobileMenu} className="block text-base font-medium text-text-gray hover:text-accent py-2">
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-border">
                <a href="tel:+79000000000" className="block text-base font-semibold text-primary mb-3">
                  +7 (900) 000-00-00
                </a>
                <a href="#form" onClick={closeMobileMenu} className="block text-center bg-accent text-white font-semibold px-5 py-3 rounded-lg">
                  Оставить заявку
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-bg-light via-white to-bg-section grid-pattern overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-border/50 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 border border-accent/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-accent rounded-full opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold text-primary leading-tight mb-6">
                Геодезические и кадастровые работы <span className="text-accent">под ключ</span>
              </h1>
              <p className="text-lg text-text-gray mb-8 max-w-xl leading-relaxed">
                Топографическая съемка, межевание, вынос границ, технические планы и сопровождение строительства. Работаем с частными лицами, застройщиками и организациями.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#form" className="bg-accent hover:bg-accent-hover text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:shadow-xl hover:shadow-accent/20 text-base">
                  Получить консультацию
                </a>
                <a href="#services" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all text-base">
                  Смотреть услуги
                </a>
              </div>
              {/* Quick advantages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Работаем по нормативам',
                  'Современное оборудование',
                  'Аттестованные инженеры',
                  'Соблюдаем сроки',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-text-gray font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero illustration */}
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="relative w-80 h-80 xl:w-96 xl:h-96">
                {/* Main circle */}
                <div className="absolute inset-0 border-2 border-primary/10 rounded-full"></div>
                <div className="absolute inset-4 border border-accent/20 rounded-full"></div>
                <div className="absolute inset-8 border border-primary/10 rounded-full"></div>
                {/* Crosshair */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/10"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/10"></div>
                {/* Center point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/30"></div>
                {/* Coordinate points */}
                <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-primary/40 rounded-full"></div>
                <div className="absolute top-[35%] right-[20%] w-3 h-3 bg-primary/40 rounded-full"></div>
                <div className="absolute bottom-[25%] left-[25%] w-3 h-3 bg-primary/40 rounded-full"></div>
                <div className="absolute bottom-[35%] right-[30%] w-3 h-3 bg-primary/40 rounded-full"></div>
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="80" x2="200" y2="200" stroke="rgba(26,39,68,0.1)" strokeWidth="1" />
                  <line x1="320" y1="140" x2="200" y2="200" stroke="rgba(26,39,68,0.1)" strokeWidth="1" />
                  <line x1="100" y1="300" x2="200" y2="200" stroke="rgba(26,39,68,0.1)" strokeWidth="1" />
                  <line x1="280" y1="260" x2="200" y2="200" stroke="rgba(26,39,68,0.1)" strokeWidth="1" />
                </svg>
                {/* Labels */}
                <div className="absolute top-[15%] left-[15%] text-xs text-text-gray/60 font-mono">N 55°45'</div>
                <div className="absolute bottom-[15%] right-[15%] text-xs text-text-gray/60 font-mono">E 37°37'</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Полный комплекс геодезических и кадастровых работ для любых задач
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="service-card scroll-animate bg-white border border-border rounded-xl p-6 hover:border-accent/30" style={{ transitionDelay: `${idx * 50}ms` }}>
                <div className="text-accent mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed mb-4">{service.desc}</p>
                <a href="#form" className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors">
                  Подробнее
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES SECTION ===== */}
      <section id="advantages" className="py-20 lg:py-28 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Почему выбирают нас</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Мы обеспечиваем качество, точность и надежность на каждом этапе
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <div key={idx} className="scroll-animate bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ transitionDelay: `${idx * 80}ms` }}>
                <div className="text-3xl mb-4">{adv.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{adv.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STAGES SECTION ===== */}
      <section id="stages" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Как мы работаем</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Прозрачный и понятный процесс от заявки до результата
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary-light -translate-x-1/2"></div>
            
            <div className="space-y-8 md:space-y-12">
              {stages.map((stage, idx) => (
                <div key={idx} className={`scroll-animate relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{ transitionDelay: `${idx * 100}ms` }}>
                  {/* Content */}
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-14 md:pl-0`}>
                    <div className="bg-white border border-border rounded-xl p-5 shadow-sm">
                      <span className="text-accent font-bold text-sm">{stage.num}</span>
                      <h3 className="text-lg font-bold text-primary mt-1 mb-2">{stage.title}</h3>
                      <p className="text-text-gray text-sm">{stage.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-accent/20 z-10">
                    {stage.num}
                  </div>
                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLIENTS SECTION ===== */}
      <section className="py-20 lg:py-28 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Кому мы помогаем</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Работаем с различными категориями клиентов и решаем задачи любой сложности
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, idx) => (
              <div key={idx} className="scroll-animate bg-white rounded-xl p-6 border border-border hover:border-accent/30 transition-all" style={{ transitionDelay: `${idx * 60}ms` }}>
                <div className="text-3xl mb-3">{client.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{client.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section id="pricing" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Стоимость работ</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Ориентировочные цены на основные виды работ
            </p>
          </div>
          <div className="max-w-3xl mx-auto scroll-animate">
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
              {pricing.map((item, idx) => (
                <div key={idx} className={`flex items-center justify-between p-5 ${idx !== pricing.length - 1 ? 'border-b border-border' : ''} hover:bg-bg-light/50 transition-colors`}>
                  <span className="text-primary font-medium">{item.service}</span>
                  <span className="text-accent font-bold whitespace-nowrap ml-4">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-text-gray text-sm mt-6 max-w-xl mx-auto">
              Точная стоимость зависит от площади участка, удаленности объекта, сложности работ и исходных документов.
            </p>
            <div className="text-center mt-8">
              <a href="#form" className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-all hover:shadow-xl hover:shadow-accent/20">
                Рассчитать стоимость
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section id="form" className="py-20 lg:py-28 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10 scroll-animate">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Оставить заявку</h2>
              <p className="text-text-gray text-lg">
                Заполните форму, и мы свяжемся с вами для уточнения деталей
              </p>
            </div>
            <div className="scroll-animate bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-border">
              {formSubmitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Спасибо!</h3>
                  <p className="text-text-gray">Ваша заявка принята. Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate>
                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">Ваше имя *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Иван Иванов"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition ${formErrors.name ? 'border-red-400' : 'border-border'}`}
                      />
                      {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">Телефон *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+7 (___) ___-__-__"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition ${formErrors.phone ? 'border-red-400' : 'border-border'}`}
                      />
                      {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                    </div>
                    {/* Service type */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">Тип услуги</label>
                      <select name="service" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition bg-white">
                        <option value="">Выберите услугу</option>
                        <option value="topo">Топографическая съемка</option>
                        <option value="mezhev">Межевание</option>
                        <option value="borders">Вынос границ</option>
                        <option value="techplan">Технический план</option>
                        <option value="executive">Исполнительная съемка</option>
                        <option value="construction">Геодезическое сопровождение</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                    {/* Comment */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">Комментарий</label>
                      <textarea
                        name="comment"
                        rows={3}
                        placeholder="Опишите вашу задачу..."
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-6 bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 rounded-lg transition-all hover:shadow-xl hover:shadow-accent/20"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-center text-xs text-text-gray mt-3">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section id="reviews" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Отзывы клиентов</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="scroll-animate bg-bg-light border border-border rounded-xl p-6" style={{ transitionDelay: `${idx * 100}ms` }}>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-gray text-sm leading-relaxed mb-4 italic">«{review.text}»</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary text-sm">{review.name}</p>
                  <p className="text-xs text-text-gray">{review.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACTS SECTION ===== */}
      <section id="contacts" className="py-20 lg:py-28 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Контакты</h2>
            <p className="text-text-gray text-lg">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="scroll-animate space-y-6">
              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Телефон</p>
                    <a href="tel:+79000000000" className="text-text-gray hover:text-accent transition-colors">+7 (900) 000-00-00</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Email</p>
                    <a href="mailto:info@geokadastr.ru" className="text-text-gray hover:text-accent transition-colors">info@geokadastr.ru</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Адрес</p>
                    <p className="text-text-gray">г. Москва, ул. Примерная, д. 10, офис 205</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Режим работы</p>
                    <p className="text-text-gray">Пн–Пт, 9:00–18:00</p>
                  </div>
                </div>
              </div>

              <a href="tel:+79000000000" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить
              </a>
            </div>

            {/* Map placeholder + выезд */}
            <div className="scroll-animate space-y-6">
              <div className="bg-white rounded-xl border border-border overflow-hidden">
                <div style={{position:'relative', overflow:'hidden'}}>
                  <a href="https://yandex.ru/maps/11067/pyatigorsk/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee', fontSize:'12px', position:'absolute', top:'0px'}}>Пятигорск</a>
                  <a href="https://yandex.ru/maps/11067/pyatigorsk/?ll=43.070339%2C44.038266&mode=routes&rtext=~44.038331%2C43.070140&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIzMDkyOTYzEnfQoNC-0YHRgdC40Y8sINCh0YLQsNCy0YDQvtC_0L7Qu9GM0YHQutC40Lkg0LrRgNCw0LksINCf0Y_RgtC40LPQvtGA0YHQuiwg0KPQvdC40LLQtdGA0YHQuNGC0LXRgtGB0LrQsNGPINGD0LvQuNGG0LAsIDTQkCIKDdJHLEIVQCcwQg%2C%2C&utm_medium=mapframe&utm_source=maps&z=20.8" style={{color:'#eee', fontSize:'12px', position:'absolute', top:'14px'}}>Яндекс Карты</a>
                  <iframe src="https://yandex.ru/map-widget/v1/?ll=43.070339%2C44.038266&mode=routes&rtext=~44.038331%2C43.070140&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIzMDkyOTYzEnfQoNC-0YHRgdC40Y8sINCh0YLQsNCy0YDQvtC_0L7Qu9GM0YHQutC40Lkg0LrRgNCw0LksINCf0Y_RgtC40LPQvtGA0YHQuiwg0KPQvdC40LLQtdGA0YHQuNGC0LXRgtGB0LrQsNGPINGD0LvQuNGG0LAsIDTQkCIKDdJHLEIVQCcwQg%2C%2C&z=20.8" width="560" height="400" frameBorder="1" allowFullScreen={true} style={{position:'relative', width:'100%', height:'400px'}}></iframe>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Выезд специалиста на объект</p>
                    <p className="text-text-gray text-sm leading-relaxed">Выезжаем на объекты в город и область. Возможен срочный выезд по согласованию.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-primary text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Logo & description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  </svg>
                </div>
                <span className="text-lg font-bold">Гео<span className="text-accent">Кадастр</span></span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Геодезические и кадастровые работы любой сложности. Работаем с частными лицами, застройщиками и организациями.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">Навигация</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/60 hover:text-accent text-sm transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">Услуги</h4>
              <ul className="space-y-2">
                <li><span className="text-white/60 text-sm">Топографическая съемка</span></li>
                <li><span className="text-white/60 text-sm">Межевание участков</span></li>
                <li><span className="text-white/60 text-sm">Вынос границ</span></li>
                <li><span className="text-white/60 text-sm">Технические планы</span></li>
                <li><span className="text-white/60 text-sm">Исполнительная съемка</span></li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">Контакты</h4>
              <ul className="space-y-2">
                <li><a href="tel:+79000000000" className="text-white/60 hover:text-accent text-sm transition-colors">+7 (900) 000-00-00</a></li>
                <li><a href="mailto:info@geokadastr.ru" className="text-white/60 hover:text-accent text-sm transition-colors">info@geokadastr.ru</a></li>
                <li><span className="text-white/60 text-sm">г. Москва, ул. Примерная, д. 10</span></li>
                <li><span className="text-white/60 text-sm">Пн–Пт, 9:00–18:00</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">© 2026 ГеоКадастр. Все права защищены.</p>
            <a href="#" className="text-white/40 hover:text-accent text-sm transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>

      {/* ===== SCROLL TO TOP BUTTON ===== */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-accent hover:bg-accent-hover text-white rounded-full shadow-lg shadow-accent/30 flex items-center justify-center transition-all hover:scale-110 z-50 animate-fade-in"
          aria-label="Наверх"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
