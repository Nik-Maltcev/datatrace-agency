"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQNew = () => {
    const [open, setOpen] = useState<number | null>(null)
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

export default FAQNew
