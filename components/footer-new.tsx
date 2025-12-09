const FooterNew = () => {
    return (
        <footer id="footer" className="bg-white border-t border-gray-200 pt-16 pb-8 px-6 text-sm relative z-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-1">
                    <div className="font-display font-bold text-xl tracking-tighter flex items-center gap-2 mb-6 text-black">
                        <div className="w-2 h-2 bg-black rounded-full" />
                        datatrace.
                    </div>
                    <p className="text-gray-500 leading-relaxed mb-4">
                        Агентство управления цифровой репутацией. Работаем глобально, штаб в Москве и Лимассоле.
                    </p>
                </div>

                <div>
                    <h4 className="text-black font-bold mb-6 uppercase text-xs tracking-widest">Навигация</h4>
                    <ul className="space-y-3 text-gray-500">
                        <li><a href="#solutions" className="hover:text-black transition-colors">Решения</a></li>
                        <li><a href="#cases" className="hover:text-black transition-colors">Кейсы</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Тарифы</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-black font-bold mb-6 uppercase text-xs tracking-widest">Сервисы</h4>
                    <ul className="space-y-3 text-gray-500">
                        <li><a href="#" className="hover:text-black transition-colors">Удаление и замещение в SERP</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Правовой суппорт</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Контентные кампании</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-black font-bold mb-6 uppercase text-xs tracking-widest">Контакты</h4>
                    <ul className="space-y-3 text-gray-500">
                        <li className="hover:text-black cursor-pointer">hello@datatrace.agency</li>
                        <li>
                            <a href="https://t.me/nikmaltcev" target="_blank" rel="noopener noreferrer" className="hover:text-black cursor-pointer">Telegram</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <div>© 2025 DataTrace Agency. Все права защищены.</div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-black">Политика конфиденциальности</a>
                    <a href="#" className="hover:text-black">Условия оказания услуг</a>
                </div>
            </div>
        </footer>
    )
}

export default FooterNew
