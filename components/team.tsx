"use client"

import { Shield, Layers, BarChart, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

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

export default Team
