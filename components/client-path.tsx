"use client"

import { Activity } from 'lucide-react'
import { motion } from 'framer-motion'

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

export default ClientPath
