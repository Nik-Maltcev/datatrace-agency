"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav className="container mx-auto flex items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary"></div>
          <span className="font-bold text-xl text-foreground">datatrace.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            href="#"
            className="text-xs font-bold text-foreground hover:text-primary transition uppercase tracking-widest"
          >
            ГЛАВНАЯ
          </Link>
          <Link
            href="#solutions"
            className="text-xs font-bold text-foreground hover:text-primary transition uppercase tracking-widest"
          >
            РЕШЕНИЯ
          </Link>
          <Link
            href="#pricing"
            className="text-xs font-bold text-foreground hover:text-primary transition uppercase tracking-widest"
          >
            ТАРИФЫ
          </Link>
          <Link
            href="#cases"
            className="text-xs font-bold text-foreground hover:text-primary transition uppercase tracking-widest"
          >
            КЕЙСЫ
          </Link>
          <Link
            href="#"
            className="text-xs font-bold text-foreground hover:text-primary transition uppercase tracking-widest"
          >
            КОНТАКТЫ
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <button className="px-6 py-3 bg-foreground text-background font-bold text-xs uppercase tracking-widest hover:opacity-90 transition">
            КОНСУЛЬТАЦИЯ
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <Link href="#" className="block text-xs font-bold text-foreground uppercase">
              ГЛАВНАЯ
            </Link>
            <Link href="#solutions" className="block text-xs font-bold text-foreground uppercase">
              РЕШЕНИЯ
            </Link>
            <Link href="#pricing" className="block text-xs font-bold text-foreground uppercase">
              ТАРИФЫ
            </Link>
            <Link href="#cases" className="block text-xs font-bold text-foreground uppercase">
              КЕЙСЫ
            </Link>
            <Link href="#" className="block text-xs font-bold text-foreground uppercase">
              КОНТАКТЫ
            </Link>
            <button className="w-full mt-4 px-6 py-3 bg-foreground text-background font-bold text-xs uppercase">
              КОНСУЛЬТАЦИЯ
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
