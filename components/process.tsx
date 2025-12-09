"use client"

import { Activity } from 'lucide-react'

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

            {/* Black card for contrast */}
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
                            <li className="flex gap-2 items-center"><div className="w-1 h-1 bg-white rounded-full" /> Мониторинг поисковиков, соцсетей, сайтов-отзовиков и госреестров</li>
                            <li className="flex gap-2 items-center"><div className="w-1 h-1 bg-white rounded-full" /> Юридическая поддержка: претензии, переговоры, фиксация ущерба</li>
                            <li className="flex gap-2 items-center"><div className="w-1 h-1 bg-white rounded-full" /> Создание и размещение позитивных материалов в проверенных СМИ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
