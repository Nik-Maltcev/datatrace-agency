"use client"

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
        <section id="cases" className="py-20 lg:py-28 bg-brand-gray text-brand-black z-10 relative">
            <div className="container mx-auto px-6">
                <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-brand-text/50 mb-3">Кейсы</p>
                <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4 leading-tight max-w-3xl tracking-tight">
                    Кризис, слияние, ребрендинг
                </h2>
                <p className="text-brand-text/60 mb-10 text-sm">Детали под NDA. Паттерны остаются: сложные условия, прозрачные KPI, результат.</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {cases.map((c, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-border flex flex-col justify-between hover:shadow-lg transition-all">
                            <div>
                                <div className="flex justify-between font-mono text-[9px] font-medium uppercase tracking-wider text-brand-muted mb-5">
                                    <span>{c.tag}</span>
                                    <span>{c.time}</span>
                                </div>
                                <h3 className="font-mono text-base font-semibold mb-3 leading-snug tracking-tight">{c.title}</h3>
                                <p className="text-sm text-brand-text/60 mb-5 leading-relaxed">{c.desc}</p>

                                <div className="mb-5">
                                    <div className="font-mono text-[9px] text-brand-muted uppercase tracking-wider mb-1.5">Площадки</div>
                                    <div className="text-xs text-brand-text/70">{c.keys}</div>
                                </div>
                            </div>

                            <div className="bg-brand-gray border border-border text-brand-black p-4 rounded-lg">
                                <div className="font-mono text-[9px] text-brand-muted uppercase tracking-wider mb-1">Результат</div>
                                <div className="text-xs text-brand-text/80 leading-relaxed">{c.result}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cases
