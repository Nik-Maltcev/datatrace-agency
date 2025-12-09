"use client"

import { useState } from 'react'
import { Send, MessageCircle } from 'lucide-react'
import RemovalRequestModal from './removal-request-modal'

const CTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

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

export default CTA
