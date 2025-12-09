"use client"

import { Zap, Search, Activity } from 'lucide-react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'

const TiltCard = ({ children, className = "" }: { children?: ReactNode, className?: string }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-100, 100], [5, -5])
    const rotateY = useTransform(x, [-100, 100], [-5, 5])

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

const ServicesNew = () => {
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
    )
}

export default ServicesNew
