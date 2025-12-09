"use client"

import { ArrowRight, Activity, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const StatItem = ({ number, label }: { number: string, label: string }) => (
    <div>
        <div className="text-3xl md:text-4xl font-display font-bold text-black mb-1">{number}</div>
        <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">{label}</div>
    </div>
)

const HeroNew = () => {
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
    )
}

export default HeroNew
