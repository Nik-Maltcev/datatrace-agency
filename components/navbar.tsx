"use client"

import { useState, useEffect } from 'react'
import { Activity, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { name: 'Решения', href: '#solutions' },
        { name: 'Кейсы', href: '#cases' },
        { name: 'Тарифы', href: '#footer' },
        { name: 'Контакты', href: '#contact' }
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="font-display font-bold text-2xl tracking-tighter flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform text-brand-black">
                    <div className="w-3 h-3 bg-black rounded-full" />
                    datatrace.
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide text-gray-600">
                    {links.map((item) => (
                        <a key={item.name} href={item.href} className="hover:text-black transition-colors relative group">
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
                        </a>
                    ))}
                    <button className="ml-4 border border-gray-300 hover:border-black hover:bg-black hover:text-white text-black px-5 py-2 rounded-full transition-all text-xs font-bold tracking-widest">
                        ЗАПРОСИТЬ АУДИТ
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden overflow-hidden shadow-xl"
                    >
                        <div className="p-6 flex flex-col gap-6">
                            {links.map((item) => (
                                <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-lg font-display text-black hover:text-brand-accent">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
