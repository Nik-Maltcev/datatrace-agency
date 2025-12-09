import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Shield, Activity, Eye, Layers, Users, Zap, Search, Menu, X, ChevronDown, CheckCircle, Globe, Lock, FileText, MessageCircle, BarChart, AlertCircle, Loader2, Send, XCircle, Check } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

// --- Background ---

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-[0.4] pointer-events-none" 
        style={{
            backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
            backgroundSize: '32px 32px'
        }} 
    />
  );
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
      { name: 'Решения', href: '#solutions' },
      { name: 'Кейсы', href: '#cases' },
      { name: 'Тарифы', href: '#footer' },
      { name: 'Контакты', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-display font-bold text-2xl tracking-tighter flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform text-brand-black">
          <div className="w-3 h-3 bg-black rounded-full" />
          datatrace.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide text-gray-600">
          {links.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-black transition-colors relative group">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
            </a>
          ))}
          <button className="ml-4 border border-gray-300 hover:border-black hover:bg-black hover:text-white text-black px-5 py-2 rounded-full transition-all text-xs font-bold tracking-widest">
            ЗАПРОСИТЬ АУДИТ
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu overlay */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden overflow-hidden shadow-xl"
            >
            <div className="p-6 flex flex-col gap-6">
                {links.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-lg font-display text-black hover:text-brand-accent">
                    {item.name}
                </a>
                ))}
            </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center pt-20 overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl">
          
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-500 mb-6 uppercase border border-gray-200 w-fit px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm"
          >
             <Activity className="w-4 h-4 text-black" />
             Команда по управлению репутацией
          </motion.div>

          {/* Draggable Physics Title */}
          <motion.h1 
            drag 
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-brand-black mb-8 leading-[1.1] cursor-grab active:cursor-grabbing relative z-20"
          >
            Защищаем вашу<br />
            <span className="text-gray-400">репутацию</span> в интернете
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8 bg-white/30 backdrop-blur-sm rounded-lg p-2 -ml-2"
          >
            DataTrace помогает контролировать поисковую выдачу, соцсети и другие площадки, 
            чтобы ваша репутация оставалась безупречной даже при атаках конкурентов.
          </motion.p>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
          >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm md:text-base flex items-center gap-2 group shadow-lg hover:shadow-xl transition-all z-20"
              >
                  ОБСУДИТЬ ПРОЕКТ
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 text-black bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-white transition-colors z-20"
              >
                  НАШИ КЕЙСЫ
              </motion.button>
          </motion.div>
            
          {/* What we do list */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200/50 pt-8"
          >
              {[
                  "Удаляем клевету и негатив из поисковой выдачи",
                  "Собираем доказательства и договариваемся с площадками",
                  "Создаём позитивные материалы, чтобы вытеснить негатив"
              ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-black shrink-0" />
                      <span>{item}</span>
                  </div>
              ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full border-y border-gray-100 bg-white/80 backdrop-blur-md mt-16 z-10 relative">
          <div className="container mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
             <StatItem number="780+" label="УПОМИНАНИЙ УДАЛЕНО" />
             <StatItem number="<4 ч" label="СКОРОСТЬ РЕАКЦИИ" />
             <StatItem number="93%" label="КЛИЕНТОВ ОСТАЮТСЯ С НАМИ" />
             <div className="hidden md:flex flex-col justify-center">
                 <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Нам доверяют:</div>
                 <div className="text-xs text-gray-800 font-display font-medium">BLOCKCHAIN FUND • LEGAL HUB • VENTURE CLUB • PRIVATE BANKING</div>
             </div>
          </div>
      </div>
    </section>
  );
};

const StatItem = ({ number, label }: { number: string, label: string }) => (
    <div>
        <div className="text-3xl md:text-4xl font-display font-bold text-black mb-1">{number}</div>
        <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">{label}</div>
    </div>
);

const TiltCard = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    return (
        <motion.div
            style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.1}
            className={`relative cursor-grab active:cursor-grabbing hover:z-50 ${className}`}
        >
            {children}
        </motion.div>
    )
}

const Services = () => {
  return (
    <section id="solutions" className="py-24 container mx-auto px-6 relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl my-12 border border-white/20 shadow-sm">
      <div className="text-xs font-bold tracking-widest text-gray-400 mb-4 uppercase">Мониторинг</div>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-brand-black">Следим за репутацией</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <TiltCard className="bg-brand-gray rounded-3xl p-8 md:p-12 border border-gray-200 group hover:border-black/10 transition-all hover:shadow-lg">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <div className="text-gray-500 text-sm uppercase tracking-wider mb-2">Срочное удаление</div>
                        <div className="text-5xl md:text-6xl font-display font-bold text-black">12 ч</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors shadow-sm">
                        <Zap className="w-6 h-6" />
                    </div>
                </div>
                <p className="text-gray-600 text-sm uppercase tracking-widest">Быстрое удаление в кризисных ситуациях</p>
          </TiltCard>

          {/* Card 2 */}
          <TiltCard className="bg-white text-black rounded-3xl p-8 md:p-12 border border-gray-200 group shadow-sm hover:shadow-lg">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <div className="text-gray-500 text-sm uppercase tracking-wider mb-2">Проверка репутации</div>
                        <div className="text-5xl md:text-6xl font-display font-bold">360°</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                        <Search className="w-6 h-6" />
                    </div>
                </div>
                <p className="text-gray-600 text-sm uppercase tracking-widest">Полный аудит перед продажей компании или выходом в публичное поле</p>
          </TiltCard>

          {/* Card 3 - Wide */}
          <div className="md:col-span-2">
            <TiltCard className="bg-black text-white rounded-3xl p-8 md:p-12 border border-black overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black z-0" />
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">СТАТУС</div>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Восстановление имиджа</h3>
                        <div className="flex items-center gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            Работаем со СМИ
                        </div>
                    </div>
                    <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                         <Activity className="w-8 h-8 text-white" />
                    </div>
                </div>
            </TiltCard>
          </div>
      </div>
    </section>
  );
};

const Team = () => {
    return (
        <section className="py-24 bg-white text-brand-black relative overflow-hidden z-10">
            <div className="container mx-auto px-6">
                <div className="text-xs font-bold tracking-widest text-gray-400 mb-4 uppercase">КАК МЫ РАБОТАЕМ</div>
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 max-w-4xl leading-tight">
                    Наша команда — редакция, юристы и аналитики — работает слаженно для защиты вашей репутации.
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mb-16">
                    Мы создаём для клиентов систему защиты: следим за упоминаниями, прогнозируем риски, формируем позитивный фон и отражаем атаки. Все результаты фиксируем в отчётах.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg uppercase tracking-wide">Наш подход</h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li className="flex gap-3">
                                <CheckCircle className="w-5 h-5 text-black shrink-0" />
                                Отслеживаем упоминания в реальном времени на всех площадках
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="w-5 h-5 text-black shrink-0" />
                                Команда юристов и аналитиков, которые знают специфику каждой площадки
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="w-5 h-5 text-black shrink-0" />
                                Сотрудничаем с проверенными СМИ и лидерами мнений
                            </li>
                        </ul>
                    </div>

                    {[
                        { icon: Shield, title: "Защита бренда", desc: "Работаем на опережение и блокируем негатив до его публикации.", sub: "ОСТАНОВИЛИ 18 НЕГАТИВНЫХ ПУБЛИКАЦИЙ ЗА КВАРТАЛ." },
                        { icon: Layers, title: "Управление выдачей", desc: "Продвигаем позитивные материалы в поисковой выдаче и на сайтах-отзовиках.", sub: "92% ТОП-10 ПОИСКОВОЙ ВЫДАЧИ ЗАНИМАЮТ НАШИ МАТЕРИАЛЫ." },
                        { icon: BarChart, title: "Аналитика", desc: "Анализируем риски и прогнозируем развитие ситуации на неделю вперёд.", sub: "ПРИ УГРОЗЕ РЕПУТАЦИИ АВТОМАТИЧЕСКИ ЗАПУСКАЕМ ОДИН ИЗ 13 СЦЕНАРИЕВ ЗАЩИТЫ." }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all"
                        >
                            <item.icon className="w-8 h-8 mb-4 text-black" />
                            <h4 className="font-bold text-lg mb-3 text-brand-black">{item.title}</h4>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                            <div className="text-[10px] text-gray-400 uppercase border-t border-gray-200 pt-4 leading-tight">
                                {item.sub}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Process = () => {
    return (
        <section className="py-24 container mx-auto px-6 relative z-10 bg-white/50 backdrop-blur-sm">
            <div className="text-xs font-bold tracking-widest text-gray-400 mb-4 uppercase">КАК МЫ РЕШАЕМ ЗАДАЧИ</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 max-w-3xl text-black">
                Для каждого случая — своя стратегия: убираем негатив и создаём позитивный фон.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    {
                        num: "01", title: "Анализ ситуации",
                        items: ["Составляем карту рисков и возможностей, оцениваем влиятельность площадок.", "Сканируем более 1200 площадок, включая форумы и закрытые каналы", "Определяем, что и в какие сроки нужно убрать"]
                    },
                    {
                        num: "02", title: "Устранение негатива",
                        items: ["Подбираем нужную комбинацию юридических, переговорных и контентных инструментов.", "Используем личные контакты с редакциями и блогерами", "Готовим позитивный контент для замещения негатива"]
                    },
                    {
                        num: "03", title: "Поддержка результата",
                        items: ["Контролируем поисковую выдачу, агрегаторы и соцсети, чтобы негатив не вернулся.", "Еженедельно проверяем позиции и тональность", "Моментально реагируем на повторные публикации"]
                    }
                ].map((step, i) => (
                    <div key={i} className="relative group">
                        <div className="text-6xl font-display font-bold text-gray-200 group-hover:text-black/10 transition-colors mb-4">{step.num}</div>
                        <h3 className="text-xl font-bold text-black mb-6 pl-2">{step.title}</h3>
                        <ul className="space-y-4 pl-2">
                            {step.items.map((text, idx) => (
                                <li key={idx} className="text-sm text-gray-600 leading-relaxed relative pl-4">
                                    <span className="absolute left-0 top-2 w-1 h-1 bg-black rounded-full" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Black card for contrast - as per screenshot hierarchy */}
            <div className="mt-24 bg-black text-white rounded-3xl p-8 md:p-12 border border-gray-800 relative overflow-hidden">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">ВАША КОМАНДА</div>
                        <h3 className="text-3xl font-display font-bold text-white mb-4">Личная команда</h3>
                        <p className="text-gray-400 mb-8">
                            Вы получаете личную команду: руководитель, юрист, переговорщик и редакция. Общаемся в закрытом чате, статус обновляем каждый день.
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <div>
                                <div className="text-2xl font-bold text-white">10–15 дн</div>
                                <div className="text-[10px] text-gray-500 uppercase">СРОК УДАЛЕНИЯ</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">30+</div>
                                <div className="text-[10px] text-gray-500 uppercase">КАНАЛОВ В РАБОТЕ</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">15 мин</div>
                                <div className="text-[10px] text-gray-500 uppercase">ОЖИДАНИЕ МОНИТОРИНГА</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                        <h4 className="text-white font-bold mb-4 text-sm uppercase">ЧТО ВХОДИТ В УСЛУГУ</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex gap-2 items-center"><div className="w-1 h-1 bg-white rounded-full"/> Мониторинг поисковиков, соцсетей, сайтов-отзовиков и госреестров</li>
                            <li className="flex gap-2 items-center"><div className="w-1 h-1 bg-white rounded-full"/> Юридическая поддержка: претензии, переговоры, фиксация ущерба</li>
                            <li className="flex gap-2 items-center"><div className="w-1 h-1 bg-white rounded-full"/> Создание и размещение позитивных материалов в проверенных СМИ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

const TechStack = () => {
    return (
        <section className="py-24 bg-gray-50 text-black z-10 relative">
            <div className="container mx-auto px-6 text-center">
                 <div className="text-xs font-bold tracking-widest text-gray-400 mb-4 uppercase">КАК ЭТО РАБОТАЕТ</div>
                 <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 max-w-4xl mx-auto">
                    Технологический мониторинг + переговорная мощь + юридический рычаг.
                 </h2>
                 <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                    Мы комбинируем инструменты цифрового форензика, правовой практики и медиапродюсирования. Поэтому получаем прогнозируемые результаты даже на сложных площадках.
                 </p>

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                     {[
                         { icon: Search, title: "Поисковая выдача", list: "GOOGLE, YANDEX, YAHOO, BING, DUCKDUCKGO" },
                         { icon: MessageCircle, title: "Соцмедиа и мессенджеры", list: "VK, TELEGRAM, X, INSTAGRAM, TIKTOK" },
                         { icon: Shield, title: "Рейтинги и каталоги", list: "AVITO, TRIPADVISOR, 2GIS, YELL, FLAMP" },
                         { icon: FileText, title: "Правовые и теневые базы", list: "ARBITR, KARTOTEKA, ДАРКНЕТ-ФОРУМЫ, PASTE-СЕРВИСЫ" }
                     ].map((item, i) => (
                         <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                             <item.icon className="w-6 h-6 text-black mb-4" />
                             <h4 className="font-bold mb-2 text-black">{item.title}</h4>
                             <p className="text-xs text-gray-500 uppercase leading-relaxed">{item.list}</p>
                         </div>
                     ))}
                 </div>
            </div>
        </section>
    )
}

const ClientPath = () => {
    return (
        <section className="py-24 container mx-auto px-6 relative z-10 bg-white/50 backdrop-blur-sm">
            <div className="text-xs font-bold tracking-widest text-gray-400 mb-4 uppercase">ПУТЬ КЛИЕНТА</div>
            
            <div className="space-y-4">
                {[
                    { num: "01", title: "Сбор и форензика", desc: "Сканируем тональность, посещаемость, трафиковый потенциал, фиксируем юридические доказательства и финансовый ущерб." },
                    { num: "02", title: "Стратегия давления", desc: "Выбираем инструменты: юридическое воздействие, переговоры, медиабаинг, SEO и продакшн новых материалов." },
                    { num: "03", title: "Исполнение и эскалация", desc: "Запускаем кампанию, подключаем личные контакты, держим ежедневный статус-контроль и повышаем давление, если нужно." },
                    { num: "04", title: "Контроль и отчёты", desc: "Фиксируем результаты, закрепляем позитив, обеспечиваем мониторинг и создаём отчёты для руководства и юристов." }
                ].map((step, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col md:flex-row gap-6 md:items-center p-8 border border-gray-200 hover:border-black/20 hover:bg-gray-50/80 bg-white/60 rounded-2xl transition-all cursor-default backdrop-blur-md"
                    >
                        <div className="text-3xl font-display font-bold text-gray-300 group-hover:text-black transition-colors">{step.num}</div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.desc}</p>
                        </div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest border border-gray-200 px-3 py-1 rounded bg-white">SLA КОНТРОЛИРУЕМ</div>
                    </motion.div>
                ))}
            </div>
             
             {/* Reporting Box */}
            <div className="mt-4 bg-gray-900 text-white rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-4 shadow-lg">
                <div>
                    <div className="text-xs text-gray-400 uppercase mb-1">ОТЧЁТНОСТЬ</div>
                    <div className="text-white font-medium">Дашборд с KPI по позициям, удалённым материалам и новым угрозам</div>
                </div>
                <Activity className="text-white w-6 h-6" />
            </div>
        </section>
    )
}

const Cases = () => {
    const cases = [
        {
            tag: "ФИНАНСЫ", time: "7 НЕДЕЛЬ",
            title: "CEO Fintech-холдинга под санкционным давлением",
            desc: "В выдаче — расследования пятилетней давности, утечки персональных данных и обсуждения на зарубежных форумах. Нужно быстро зачистить поле перед сделкой по привлечению капитала.",
            keys: "10 деловых СМИ, 3 англоязычных форума, LinkedIn / Telegram",
            result: "Удалено 14 материалов + замещено 9 публикациями уровня Forbes, VC.ru, Inc."
        },
        {
            tag: "НЕДВИЖИМОСТЬ", time: "5 НЕДЕЛЬ",
            title: "Premium-девелопер, против которого работал black PR от конкурентов",
            desc: "Появились отзывы о «замороженных» объектах, слухи о судах и один крупный материал на региональном телеканале. Задача — снять тревожность клиентов и стабилизировать продажи.",
            keys: "Yandex, Google, Telegram / VK обзоры, YouTube репортаж",
            result: "Полностью обновлена SERP по бренду, создан пул материалов с отзывами клиентов и партнёров."
        },
        {
            tag: "PUBLIC SECTOR", time: "6 НЕДЕЛЬ",
            title: "Публичный политик — рестарт карьеры после старого скандала",
            desc: "Перед новым назначением в выдаче остались архивные публикации и токсичные обсуждения в даркнете. Нужно вернуть нейтральный фон и показать актуальную повестку.",
            keys: "Архивы СМИ, Форумы, paste-сервисы, Поисковая выдача",
            result: "Удалены или вытеснены 90% негативных ссылок, собрана база позитивных тезисов и Q&A."
        }
    ]

    return (
        <section id="cases" className="py-24 bg-gray-50 text-black z-10 relative">
            <div className="container mx-auto px-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight max-w-4xl">
                    Работаем в режимах кризиса, слияния, личного ребрендинга.
                </h2>
                <p className="text-gray-600 mb-12">Детали кейсов под NDA, но паттерны остаются: сложные исходные условия, прозрачные KPI, ощутимый бизнес-результат.</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {cases.map((c, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all">
                            <div>
                                <div className="flex justify-between text-[10px] font-bold uppercase text-gray-400 mb-6">
                                    <span>{c.tag}</span>
                                    <span>{c.time}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 leading-snug">{c.title}</h3>
                                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{c.desc}</p>
                                
                                <div className="mb-6">
                                    <div className="text-[10px] text-gray-400 uppercase mb-2">КЛЮЧЕВЫЕ ПЛОЩАДКИ</div>
                                    <div className="text-xs font-medium">{c.keys}</div>
                                </div>
                            </div>
                            
                            <div className="bg-gray-50 border border-gray-100 text-black p-4 rounded-xl">
                                <div className="text-[10px] text-gray-500 uppercase mb-1">РЕЗУЛЬТАТ</div>
                                <div className="text-xs font-medium leading-relaxed">{c.result}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const FAQ = () => {
    const [open, setOpen] = useState<number | null>(null);
    const items = [
        { q: "Сколько времени занимает удаление негатива?", a: "Сроки зависят от площадки. Блоги и каталоги — 3–10 дней, СМИ и видеохостинги — 3–6 недель. Мы всегда работаем до полного удаления или замещения материала." },
        { q: "Какие у вас гарантии?", a: "Мы фиксируем KPI в договоре. Если не удаляем контент в оговоренный срок, возвращаем деньги за этот этап или продолжаем работу бесплатно до результата." },
        { q: "Можно ли работать с вами анонимно?", a: "Да, полная конфиденциальность и NDA — наш стандарт. Мы используем защищенные каналы связи и не раскрываем наших клиентов в публичных кейсах без их согласия." }
    ]

    return (
        <section className="py-24 container mx-auto px-6 relative z-10 bg-white/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <div className="text-xs font-bold tracking-widest text-gray-400 mb-4 uppercase">ЧАСТЫЕ ВОПРОСЫ</div>
                    <h2 className="font-display text-3xl font-bold text-black mb-6">Работаем как ваша личная команда по управлению репутацией.</h2>
                    <p className="text-gray-600 mb-8">
                        В начале работы вы получите чёткий план: как мы общаемся, как отчитываемся, какие цели и роли в команде. Всё фиксируем в договоре, включая соглашение о неразглашении.
                    </p>
                    <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                        <div className="text-xs text-gray-500 uppercase mb-2">ПЕРВЫЙ ШАГ</div>
                        <div className="text-lg text-black font-medium">Проведём аудит за 48 часов и расскажем, что можно удалить.</div>
                    </div>
                </div>

                <div className="space-y-4">
                    {items.map((item, i) => (
                        <div key={i} className="border-b border-gray-200 pb-4">
                            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center py-4 text-left hover:text-gray-600 transition-colors">
                                <span className="text-lg font-medium text-black">{item.q}</span>
                                <ChevronDown className={`text-black transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-600 pb-4 text-sm leading-relaxed">{item.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const RemovalRequestModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        links: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Construct message for Telegram personal profile
            const message = `🚀 Новая заявка на удаление:\n\n👤 ФИО: ${formData.name}\n📱 Телефон: ${formData.phone}\n🔗 Ссылки:\n${formData.links}`;
            const telegramUrl = `https://t.me/nikmaltcev?text=${encodeURIComponent(message)}`;

            // Open Telegram with pre-filled message
            window.open(telegramUrl, '_blank');

            // Show success UI locally to confirm action
            await new Promise(resolve => setTimeout(resolve, 500)); 
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setFormData({ name: '', phone: '', links: '' });
                onClose();
            }, 3000);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl p-8 z-[70] shadow-2xl border border-gray-100 overflow-hidden"
                    >
                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                        >
                            <XCircle className="w-6 h-6" />
                        </button>

                        {success ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <Check className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2">Открываем Telegram...</h3>
                                <p className="text-gray-600">Нажмите кнопку отправки сообщения в Telegram, чтобы передать заявку менеджеру.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-display font-bold text-black mb-1">Запрос на удаление</h3>
                                <p className="text-sm text-gray-500 mb-6">Оставьте контакты и список ссылок, которые нарушают вашу репутацию.</p>
                                
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">ФИО</label>
                                        <input 
                                            required
                                            type="text" 
                                            placeholder="Иванов Иван Иванович"
                                            value={formData.name}
                                            onChange={e => setFormData({...formData, name: e.target.value})}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Телефон для связи</label>
                                        <input 
                                            required
                                            type="tel" 
                                            placeholder="+7 (999) 000-00-00"
                                            value={formData.phone}
                                            onChange={e => setFormData({...formData, phone: e.target.value})}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Ссылки на удаление</label>
                                        <textarea 
                                            placeholder="https://example.com/bad-article&#10;https://forum.com/thread/123"
                                            rows={4}
                                            value={formData.links}
                                            onChange={e => setFormData({...formData, links: e.target.value})}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
                                        />
                                        <p className="text-[10px] text-gray-400 mt-1">Каждая ссылка с новой строки</p>
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={loading}
                                        className="w-full bg-black text-white font-bold py-4 rounded-xl mt-4 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "ОТПРАВИТЬ В TELEGRAM"}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

const CTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="contact" className="py-12 container mx-auto px-6 relative z-10 bg-white/50 backdrop-blur-sm">
                <div className="bg-black text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    
                    <div className="text-xs font-bold tracking-widest text-gray-500 mb-4 uppercase">ГОТОВЫ ВКЛЮЧИТЬСЯ</div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Получите аудит за 48 часов и план зачистки.</h2>
                    <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                        Мы свяжемся через защищённый канал, подписываем NDA до передачи данных.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            <Send className="w-4 h-4" />
                            ОТПРАВИТЬ ЗАПРОС НА УДАЛЕНИЕ
                        </button>
                        <button 
                            onClick={() => window.open('https://t.me/nikmaltcev', '_blank')}
                            className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            TELEGRAM СВЯЗЬ
                        </button>
                    </div>
                </div>
            </section>
            <RemovalRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

const Footer = () => {
    return (
        <footer id="footer" className="bg-white border-t border-gray-200 pt-16 pb-8 px-6 text-sm relative z-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-1">
                    <div className="font-display font-bold text-xl tracking-tighter flex items-center gap-2 mb-6 text-black">
                        <div className="w-2 h-2 bg-black rounded-full" />
                        datatrace.
                    </div>
                    <p className="text-gray-500 leading-relaxed mb-4">
                        Агентство управления цифровой репутацией. Работаем глобально, штаб в Москве и Лимассоле.
                    </p>
                </div>
                
                <div>
                    <h4 className="text-black font-bold mb-6 uppercase text-xs tracking-widest">Навигация</h4>
                    <ul className="space-y-3 text-gray-500">
                        <li><a href="#solutions" className="hover:text-black transition-colors">Решения</a></li>
                        <li><a href="#cases" className="hover:text-black transition-colors">Кейсы</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Тарифы</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-black font-bold mb-6 uppercase text-xs tracking-widest">Сервисы</h4>
                    <ul className="space-y-3 text-gray-500">
                        <li><a href="#" className="hover:text-black transition-colors">Удаление и замещение в SERP</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Правовой суппорт</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Контентные кампании</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-black font-bold mb-6 uppercase text-xs tracking-widest">Контакты</h4>
                    <ul className="space-y-3 text-gray-500">
                        <li className="hover:text-black cursor-pointer">hello@datatrace.agency</li>
                        <li>
                            <a href="https://t.me/nikmaltcev" target="_blank" rel="noopener noreferrer" className="hover:text-black cursor-pointer">Telegram</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="container mx-auto border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <div>© 2025 DataTrace Agency. Все права защищены.</div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-black">Политика конфиденциальности</a>
                    <a href="#" className="hover:text-black">Условия оказания услуг</a>
                </div>
            </div>
        </footer>
    )
}

const App = () => {
  return (
    <div className="bg-white min-h-screen text-brand-black selection:bg-black selection:text-white">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <Process />
        <TechStack />
        <ClientPath />
        <Cases />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}