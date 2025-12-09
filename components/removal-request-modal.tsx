"use client"

import { useState } from 'react'
import { Loader2, XCircle, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface RemovalRequestModalProps {
    isOpen: boolean
    onClose: () => void
}

const RemovalRequestModal = ({ isOpen, onClose }: RemovalRequestModalProps) => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        links: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Construct message for Telegram personal profile
            const message = `🚀 Новая заявка на удаление:\n\n👤 ФИО: ${formData.name}\n📱 Телефон: ${formData.phone}\n🔗 Ссылки:\n${formData.links}`
            const telegramUrl = `https://t.me/nikmaltcev?text=${encodeURIComponent(message)}`

            // Open Telegram with pre-filled message
            window.open(telegramUrl, '_blank')

            // Show success UI locally to confirm action
            await new Promise(resolve => setTimeout(resolve, 500))
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
                setFormData({ name: '', phone: '', links: '' })
                onClose()
            }, 3000)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

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
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
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
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Ссылки на удаление</label>
                                        <textarea
                                            placeholder="https://example.com/bad-article&#10;https://forum.com/thread/123"
                                            rows={4}
                                            value={formData.links}
                                            onChange={e => setFormData({ ...formData, links: e.target.value })}
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

export default RemovalRequestModal
