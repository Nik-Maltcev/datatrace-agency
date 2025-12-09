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

export default Cases
