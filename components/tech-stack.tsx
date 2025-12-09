"use client"

import { Search, MessageCircle, Shield, FileText } from 'lucide-react'

const TechStack = () => {
    return (
        <section className="py-24 bg-gray-50 text-black z-10 relative">
            <div className="container mx-auto px-6 text-center">
                <div className="text-xs font-bold tracking-widest text-gray-400 mb-4 uppercase">КАК ЭТО РАБОТАЕТ</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 max-w-4xl mx-auto">
                    Технологический мониторинг + переговорная мощь + юридический рычаг.
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                    Мы комбинируем инструменты цифрового форензика, правовой практики и медиапродюсирования. Поэтому получаем прогнозируемые результаты даже на сложных площадках.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                    {[
                        { icon: Search, title: "Поисковая выдача", list: "GOOGLE, YANDEX, YAHOO, BING, DUCKDUCKGO" },
                        { icon: MessageCircle, title: "Соцмедиа и мессенджеры", list: "VK, TELEGRAM, X, INSTAGRAM, TIKTOK" },
                        { icon: Shield, title: "Рейтинги и каталоги", list: "AVITO, TRIPADVISOR, 2GIS, YELL, FLAMP" },
                        { icon: FileText, title: "Правовые и теневые базы", list: "ARBITR, KARTOTEKA, ДАРКНЕТ-ФОРУМЫ, PASTE-СЕРВИСЫ" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                            <item.icon className="w-6 h-6 text-black mb-4" />
                            <h4 className="font-bold mb-2 text-black">{item.title}</h4>
                            <p className="text-xs text-gray-500 uppercase leading-relaxed">{item.list}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack
